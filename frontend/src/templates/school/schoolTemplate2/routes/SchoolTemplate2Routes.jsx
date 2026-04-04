import React from "react";
import { Routes, Route } from "react-router-dom";

import SchoolTemplate2Layout from "../layout/SchoolTemplate2Layout";
import SchoolTemplate2Home from "../pages/SchoolTemplate2Home";

export default function SchoolTemplate2Routes({ business }) {
  if (!business?.slug) {
    return <div className="min-h-screen animate-pulse" />;
  }

  return (
    <Routes>
      <Route element={<SchoolTemplate2Layout business={business} />}>
        {/* Temporary Home Page */}
        <Route index element={<SchoolTemplate2Home />} />

        {/* Future Pages */}
        {/* <Route path="admissions" element={<AdmissionsPage business={business} />} /> */}
        {/* <Route path="contact" element={<ContactPage business={business} />} /> */}
        {/* <Route path="fee-structure" element={<FeeStructurePage business={business} />} /> */}
        {/* <Route path="about" element={<SchoolTemplate2AboutPage business={business} />} /> */}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] text-center">
      <div>
        <h2 className="text-3xl font-bold text-slate-800">Template 2</h2>
        <p className="mt-2 text-slate-500">Pages coming soon</p>
      </div>
    </div>
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
