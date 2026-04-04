/**
 * BusinessRouterResolver.jsx
 *
 * Resolves a URL slug → manifest → template component.
 * This is the single entry point for all tenant routes.
 *
 * Route shape expected:  /:businessSlug/*
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
    // Guard: nothing to load if slug is missing
    if (!businessSlug) {
      setError("No business slug in URL.");
      setLoading(false);
      return;
    }

    let active = true;

    async function loadBusiness() {
      setLoading(true);
      setError(null);

      try {
        const data = await getBusinessBySlug(businessSlug);
        if (!active) return;

        if (!data) {
          setError(`No business found for "${businessSlug}".`);
        } else {
          setBusiness(data);
        }
      } catch (err) {
        if (active) setError("Failed to load business. Please try again.");
        console.error("[BusinessRouterResolver]", err);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadBusiness();

    return () => {
      active = false;
    };
  }, [businessSlug]); // re-runs if slug changes (browser back/forward)

  // ── States ───────────────────────────────────────────────────
  if (loading) return <FullPageSpinner />;
  if (error) return <FullPageError message={error} />;

  // ── Template resolution ──────────────────────────────────────
  const TemplateRouter = templateRegistry[business.template];

  if (!TemplateRouter) {
    return (
      <FullPageError
        message={`Template "${business.template}" is not registered. Contact support.`}
      />
    );
  }

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <TemplateRouter business={business} />
    </Suspense>
  );
}

// ─── Internal UI primitives ───────────────────────────────────
// Keep these co-located — they're only used by this component.
// Replace with your design system equivalents when ready.

function FullPageSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
}

function FullPageError({ message }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] text-gray-600 gap-2">
      <p className="text-lg font-medium">Something went wrong</p>
      <p className="text-sm text-gray-400">{message}</p>
    </div>
  );
}
