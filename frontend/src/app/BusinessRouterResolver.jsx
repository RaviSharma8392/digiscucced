/**
 * BusinessRouterResolver.jsx
 *
 * Resolves:  /:businessSlug/*
 * Loads tenant config → resolves template → renders template router
 */

import { useParams } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";

import { getBusinessBySlug } from "../services/businessService";
import { templateRegistry } from "../templates/templateRegistry";

export default function BusinessRouterResolver() {
  const { businessSlug } = useParams();

  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!businessSlug) {
      setError("Missing business slug.");
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function loadBusiness() {
      try {
        setLoading(true);
        setError(null);
        setBusiness(null);

        const data = await getBusinessBySlug(businessSlug, {
          signal: controller.signal,
        });

        if (!data) {
          throw new Error(`No business found for "${businessSlug}"`);
        }

        setBusiness(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("[BusinessRouterResolver]", err);
          setError(err.message || "Unable to load business.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadBusiness();

    return () => controller.abort();
  }, [businessSlug]);

  // ─── Loading state ─────────────────────────────
  if (loading) return <FullPageSpinner />;

  // ─── Error state ───────────────────────────────
  if (error) return <FullPageError message={error} />;

  // ─── Template resolution ───────────────────────
  const templateKey = business?.template;
  const TemplateRouter = templateRegistry[templateKey];

  if (!TemplateRouter) {
    return (
      <FullPageError message={`Template "${templateKey}" is not registered.`} />
    );
  }

  // ─── Render tenant template ────────────────────
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <TemplateRouter business={business} />
    </Suspense>
  );
}

/* ─────────────────────────────────────────────
   Internal UI Components
   Replace with your design system later
───────────────────────────────────────────── */

function FullPageSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
}

function FullPageError({ message }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-gray-700 gap-2 px-6 text-center">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-sm text-gray-500">{message}</p>
    </div>
  );
}
