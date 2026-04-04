import React from "react";
import Navbar from "../../features/home/components/bars/Navbar";
import Footer from "../../components/Footer";
import ServicesPage from "../../features/home/pages/ServicesPage";
import HomePage from "../../features/home/pages/HomePages";
import { Route, Routes } from "react-router-dom";
import FloatingContactBtn from "../../components/btn/FloatingContactBtn";

const HomeRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/blog" element={<BlogPost/>} /> */}
      </Routes>
      <FloatingContactBtn />

      <Footer />
    </>
  );
};

export default HomeRouter;
