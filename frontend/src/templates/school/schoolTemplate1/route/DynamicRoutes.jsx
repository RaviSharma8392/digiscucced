import React from "react";
import { Routes, Route } from "react-router-dom";
import SchoolTemplate1Layout from "../layout/SchoolTemplate1Layout";

const pages = import.meta.glob("../pages/*.jsx", {
  eager: true,
});

export default function DynamicRoutes({ business }) {
  if (!business) return null;

  const routes = Object.entries(pages).map(([file, module]) => {
    const name = file.split("/").pop().replace(".jsx", "");

    // Automatically resolve any 'Home' named component to the index route
    const path = name.toLowerCase().includes("home") ? "" : name.toLowerCase();

    const Component = module.default;
    if (!Component) return null;

    return (
      <Route
        key={name}
        path={path}
        element={<Component business={business} />}
      />
    );
  });

  return (
    <Routes>
      <Route element={<SchoolTemplate1Layout business={business} />}>
        {routes}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function NotFound() {
  return (
    <div className="text-center py-32">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-500 mt-2">Page not found</p>
    </div>
  );
}
