import { Routes, Route } from "react-router-dom";
import CoachingTemplate1Layout from "../layout/CoachingTemplate1Layout";

import Home from "../pages/home/Home";
import ContactPage from "../pages/ContactPage";
import GalleryPage from "../pages/Gallerypage";

function CoachingTemplate1Routes({ business }) {
  console.log("data in CoachingTemplate1Routes:", business);

  return (
    <Routes>
      <Route
        element={
          <CoachingTemplate1Layout key={business?.slug} business={business} />
        }>
        {/* Home */}
        <Route index element={<Home business={business} />} />

        {/* Pages */}
        <Route path="contact" element={<ContactPage business={business} />} />

        <Route path="gallery" element={<GalleryPage business={business} />} />

        {/* 404 */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default CoachingTemplate1Routes;
