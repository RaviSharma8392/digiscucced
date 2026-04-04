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
        <Route index element={<SchoolTemplate2Home />} />

        {/* Uncomment as pages are built */}
        {/* <Route path="about"        element={<SchoolTemplate2AboutPage />} /> */}
        {/* <Route path="admissions"   element={<AdmissionsPage />} /> */}
        {/* <Route path="contact"      element={<ContactPage />} /> */}
        {/* <Route path="fee-structure" element={<FeeStructurePage />} /> */}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

// ─── Shared fallback UI ───────────────────────────────────────

function NotFound() {
  return (
    <div className="text-center py-32">
      <h1 className="text-4xl font-extrabold text-slate-800">404</h1>
      <p className="mt-3 text-slate-500">Page not found</p>
    </div>
  );
}
