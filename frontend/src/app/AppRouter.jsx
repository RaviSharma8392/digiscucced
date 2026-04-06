import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import SystemLayout from "../layouts/SystemLayout";

// --- Lazy-loaded pages ---
const HomePage = lazy(() => import("../system/pages/HomePages"));
const ServicesPage = lazy(() => import("../system/pages/ServicesPage"));
const BusinessRouterResolver = lazy(() => import("./BusinessRouterResolver"));
const HomeStayHomePage = lazy(
  () =>
    import("../templates/homestay/homestayTemplate1/pages/HomeStayHomePage"),
);
const Rooms = lazy(
  () => import("../templates/homestay/homestayTemplate1/pages/Rooms"),
);

// --- Fallback component for loading ---
const Loader = () => (
  <div className="flex items-center justify-center h-screen text-lg font-medium">
    Loading...
  </div>
);

export default function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Business websites */}
        <Route path="/:businessSlug/*" element={<BusinessRouterResolver />} />

        {/* Platform website */}
        <Route path="/" element={<SystemLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
        </Route>

        {/* Homestay template */}
        <Route path="homestay" element={<HomeStayHomePage />} />
        <Route path="rooms" element={<Rooms />} />
      </Routes>
    </Suspense>
  );
}
