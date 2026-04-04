import { Outlet } from "react-router-dom";
import FloatingContactBtn from "../components/btn/FloatingContactBtn";
import Navbar from "../features/home/components/bars/Navbar";
import Footer from "../templates/coaching/coachingTemplate1/components/common/Footer";

export default function SystemLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <FloatingContactBtn />
      <Footer />
    </>
  );
}
