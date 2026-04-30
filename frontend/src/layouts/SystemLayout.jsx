import { Outlet } from "react-router-dom";
import Navbar from "../features/home/components/bars/Navbar";
import Footer from "../features/Footer";
import Topbar from "../features/home/components/bars/Topbar";

export default function SystemLayout() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
