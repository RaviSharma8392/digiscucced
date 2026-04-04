import React from "react";
import { Routes, Route } from "react-router-dom";

/* ─────────────────────────────────────────────
   Layout for Template 2
   This controls header, footer, navigation
───────────────────────────────────────────── */
import SchoolTemplate2Layout from "../layout/SchoolTemplate2Layout";

/* ─────────────────────────────────────────────
   Template 2 Pages
───────────────────────────────────────────── */
// import SchoolTemplate2Home from "../pages/SchoolTemplate2Home.jsx";
// import AdmissionsPage from "../pages/AdmissionsPage.jsx";
// import FeeStructurePage from "../pages/FeeStructurePage.jsx";
// import SchoolTemplate2AboutPage from "../pages/SchoolTemplate2AboutPage.jsx";
// import ContactPage from "../pages/SchoolTemplate2ContactPage.jsx";

/* ─────────────────────────────────────────────
   Template 2 Routing System
   Each school website will use these routes
───────────────────────────────────────────── */
export default function SchoolTemplate2Routes({ business }) {
  /* Prevent render before slug is ready */
  if (!business?.slug) {
    return <div className="min-h-screen animate-pulse" />;
  }

  console.log("SchoolTemplate2Routes", SchoolTemplate2Routes);

  return (
    <Routes>
      {/* Layout Wrapper (Header + Footer) */}
      <Route element={<SchoolTemplate2Layout business={business} />}>
        {/* Home Page */}
        {/* <Route index element={<SchoolTemplate2Home business={business} />} /> */}

        {/* Admissions Page */}
        {/* <Route
          path="admissions"
          element={<AdmissionsPage business={business} />}
        /> */}

        {/* Contact Page */}
        {/* <Route path="contact" element={<ContactPage business={business} />} /> */}

        {/* Fee Structure Page */}
        {/* <Route
          path="fee-structure"
          element={<FeeStructurePage business={business} />}
        /> */}

        {/* About School Page */}
        {/* <Route
          path="about"
          element={<SchoolTemplate2AboutPage business={business} />}
        /> */}

        {/* Catch Unknown Routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

/* ─────────────────────────────────────────────
   404 Page
───────────────────────────────────────────── */
function NotFound() {
  return (
    <div className="text-center py-32">
      <h1 className="text-4xl font-extrabold text-slate-800">404</h1>
      <p className="mt-3 text-slate-500">Page not found</p>
    </div>
  );
}
