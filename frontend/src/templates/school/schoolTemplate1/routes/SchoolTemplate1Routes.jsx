import React from "react";
import { Routes, Route } from "react-router-dom";
import SchoolTemplate1Layout from "../layout/SchoolTemplate1Layout.jsx";

import SchoolTemplate1Home from "../pages/SchoolTemplate1Home.jsx";
import AdmissionsPage from "../pages/AdmissionsPage.jsx";
// import FeeStructurePage from "../pages/FeeStructurePage.jsx";
import SchoolTemplate1AboutPage from "../pages/SchoolTemplate1AboutPage.jsx";
import ContactPage from "../pages/SchoolTemplate1ContactPage.jsx";

export default function SchoolTemplate1Routes({ business }) {
  if (!business?.slug) return <div className="min-h-screen animate-pulse" />;

  return (
    <Routes>
      <Route element={<SchoolTemplate1Layout business={business} />}>
        <Route index element={<SchoolTemplate1Home business={business} />} />
        <Route
          path="admissions"
          element={<AdmissionsPage business={business} />}
        />
        <Route path="contact" element={<ContactPage business={business} />} />
        {/* <Route
          path="fee-structure"
          element={<FeeStructurePage business={business} />}
        /> */}
        <Route
          path="about"
          element={<SchoolTemplate1AboutPage business={business} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function NotFound() {
  return (
    <div className="text-center py-32">
      <h1 className="text-4xl font-extrabold text-slate-800">404</h1>
      <p className="mt-3 text-slate-500">Page not found</p>
    </div>
  );
}
