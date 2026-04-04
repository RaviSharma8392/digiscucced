import { Routes, Route } from "react-router-dom";
import BusinessHome from "./pages/BusinessHome";
import Services from "./pages/Services";

export default function BusinessRouter() {
  return (
    <Routes>
      <Route path="/" element={<BusinessHome />} />
      <Route path="services" element={<Services />} />
    </Routes>
  );
}
