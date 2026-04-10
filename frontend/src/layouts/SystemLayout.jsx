import { Outlet } from "react-router-dom";
import FloatingContactBtn from "../components/btn/FloatingContactBtn";
import Navbar from "../features/home/components/bars/Navbar";
import Footer from "../components/Footer";
import Topbar from "../features/home/components/bars/Topbar";

export default function SystemLayout() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Outlet />

      <FloatingContactBtn />
      <Footer />
    </>
  );
}
