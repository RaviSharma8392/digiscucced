import { Routes, Route } from "react-router-dom";
import HomePage from "../system/pages/HomePages";
import BusinessRouterResolver from "./BusinessRouterResolver";
import ServicesPage from "../system/pages/ServicesPage";
import SystemLayout from "../layouts/SystemLayout";

export default function AppRouter() {
  return (
    <Routes>
      {/* Platform website */}
      <Route path="/" element={<SystemLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
      </Route>

      {/* Business websites */}
      <Route path="/:businessSlug/*" element={<BusinessRouterResolver />} />
    </Routes>
  );
}
