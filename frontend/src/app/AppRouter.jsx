/**
 * AppRouter.jsx
 *
 * Platform-level router.
 * - / → CMS homepage
 * - /services → platform services
 * - /who-we-are → about page
 * - /:businessSlug/* → tenant system
 */

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import SystemLayout from "../layouts/SystemLayout";
import LandingPage from "./system/pages/LandingPage";

// ── Platform pages (lazy loaded) ─────────────────────────────
const HomePage = lazy(() => import("../system/pages/HomePages"));
const ServicesPage = lazy(() => import("../system/pages/ServicesPage"));
const AboutPage = lazy(() => import("../system/pages/Home")); // rename if possible

// ── Tenant resolver ──────────────────────────────────────────
const BusinessRouterResolver = lazy(() =>
  import("./BusinessRouterResolver")
);

// ── Loading fallback ─────────────────────────────────────────
function PlatformLoader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "1rem",
        color: "#6b7280",
      }}
    >
      Loading…
    </div>
  );
}

export default function AppRouter() {
  return (
    <Suspense fallback={<PlatformLoader />}>
      <Routes>
        {/* ── PLATFORM ROUTES ───────────────────────────── */}
        <Route path="/" element={<SystemLayout />}>
          <Route index element={<HomePage />} />
          <Route path="solutions" element={<LandingPage />} />

          <Route path="services" element={<ServicesPage />} />
        </Route>

        <Route path="/who-we-are" element={<AboutPage />} />

        {/* ── TENANT ROUTES (CMS SITES) ─────────────────── */}
        <Route
          path="/:businessSlug/*"
          element={<BusinessRouterResolver />}
        />
      </Routes>
    </Suspense>
  );
}