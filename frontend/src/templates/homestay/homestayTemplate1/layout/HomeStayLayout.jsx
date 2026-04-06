import React from "react";
import Header from "../componenst/Header";
import { Outlet } from "react-router-dom";

const HomeStayLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeStayLayout;
