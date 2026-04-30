import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import InstituteTemplate1Layout from "../layout/InstituteTemplate1Layout.jsx";
import GalleryPage from "../pages/Gallery.jsx";

// Lazy loading pages for better performance
const Home = lazy(() => import("../pages/InstituteTemplate1Home.jsx"));
const About = lazy(() => import("../pages/AboutPage.jsx"));
const Courses = lazy(() => import("../pages/CoursesPage.jsx"));
const Contact = lazy(() => import("../pages/ContactPage.jsx"));
const Library = lazy(() => import("../pages/LibraryPage.jsx"));

// Safe loader
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="text-center py-32 min-h-screen flex flex-col justify-center bg-slate-50">
      <h1 className="text-5xl font-bold text-slate-800">404</h1>
      <p className="mt-4 text-slate-500 text-lg">Page not found</p>
    </div>
  );
}

export default function InstituteTemplate1Routes({ business }) {
  if (!business || !business.slug) {
    return <PageLoader />;
  }

  return (
    <Routes>
      <Route element={<InstituteTemplate1Layout business={business} />}>
        {/* Home */}
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home business={business} />
            </Suspense>
          }
        />

        {/* About */}
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About business={business} />
            </Suspense>
          }
        />

        {/* Courses */}
        <Route
          path="courses"
          element={
            <Suspense fallback={<PageLoader />}>
              <Courses business={business} />
            </Suspense>
          }
        />

        {/* Contact */}
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact business={business} />
            </Suspense>
          }
        />

        {/* Library */}
        <Route
          path="library"
          element={
            <Suspense fallback={<PageLoader />}>
              <Library business={business} />
            </Suspense>
          }
        />

        {/* Library */}
        <Route
          path="gallery"
          element={
            <Suspense fallback={<PageLoader />}>
              <GalleryPage business={business} />
            </Suspense>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
