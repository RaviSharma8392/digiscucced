import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ FIXED
import SchoolTemplate1Layout from "../layout/SchoolTemplate1Layout.jsx";

/* Lazy Pages */
const SchoolTemplate1Home = lazy(() =>
  import("../pages/SchoolTemplate1Home.jsx")
);

const AdmissionsPage = lazy(() =>
  import("../pages/AdmissionsPage.jsx")
);

const SchoolTemplate1AboutPage = lazy(() =>
  import("../pages/About.jsx")
);

const ContactPage = lazy(() =>
  import("../pages/SchoolTemplate1ContactPage.jsx")
);

export default function SchoolTemplate1Routes({ business }) {
  // ─────────────────────────────
  // SAFE BUSINESS CHECK
  // ─────────────────────────────
  if (!business || typeof business !== "object" || !business.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 animate-pulse">
        Loading business...
      </div>
    );
  }

  return (
    <Routes>
      <Route element={<SchoolTemplate1Layout business={business} />}>

        {/* Home */}
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <SchoolTemplate1Home business={business} />
            </Suspense>
          }
        />

        {/* Admissions */}
        <Route
          path="admissions"
          element={
            <Suspense fallback={<PageLoader />}>
              <AdmissionsPage business={business} />
            </Suspense>
          }
        />

        {/* Contact */}
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactPage business={business} />
            </Suspense>
          }
        />

        {/* About */}
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <SchoolTemplate1AboutPage business={business} />
            </Suspense>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

/* Loader */
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-gray-500">Loading...</div>
    </div>
  );
}

/* 404 */
function NotFound() {
  return (
    <div className="text-center py-32">
      <h1 className="text-4xl font-extrabold text-slate-800">404</h1>
      <p className="mt-3 text-slate-500">Page not found</p>
    </div>
  );
}