import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import PoweredByStripe from "../../../../layouts/PoweredByStripe.jsx";

export default function InstituteTemplate1Layout({ business }) {
  const navigate = useNavigate();
  const [toast, setToast] = useState("");

  if (!business) return null;

  const theme = business.theme || {};
  const brand = business.brand || {};
  const topBar = business.topBar || {};
  const socialConfig = business.socials || {};
  const slug = business.slug || "institute";
  const contact = business.contact || {};

  const primaryColor = theme.primary || "#1E3A8A";
  const accentColor = theme.accent || "#007bff";

  const nav = business.nav || {};
  const topLinks = nav.topLinks || [];
  const mainLinks = nav.mainLinks || [];
  const actionButton = nav.primaryAction || {
    label: "Apply Now",
    path: `/${slug}/admission`,
  };

  // =========================
  // HELPERS
  // =========================
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleEnquiry = () => {
    navigate(`/${slug}/contact`);
  };

  const handleCall = () => {
    if (!contact?.phone) {
      showToast("Phone not available");
      return;
    }
    const clean = contact.phone.replace(/[^0-9]/g, "");
    window.location.href = `tel:${clean}`;
  };

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: brand.name || "Institute",
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        showToast("Link copied!");
      }
    } catch {
      showToast("Sharing failed");
    }
  };

  return (
    <div className="relative font-sans text-slate-800">

      {/* TOP BAR */}
      <TopBar
        phone={topBar.phone || "+91 90000 00000"}
        email={topBar.email || "info@institute.com"}
        address={topBar.address || "Haldwani, Uttarakhand"}
        primaryColor={primaryColor}
      />

      {/* NAVBAR */}
      <Navbar
        logo={brand.logo || ""}
        name={brand.name || "Computer Institute"}
        topLinks={topLinks}
        mainLinks={mainLinks}
        actionButton={actionButton}
        primaryColor={primaryColor}
        accentColor={accentColor}
        ribbonText={brand.ribbonText}
        tagline={brand.tagline}
        socials={socialConfig}
        contact={contact}
      />

      {/* PAGE CONTENT */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer
        business={business}
        primaryColor={primaryColor}
        socials={socialConfig}
      />

      {/* FLOATING ACTION SIDEBAR (DESIGN SAME) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-end shadow-2xl">

        {/* ENQUIRY */}
        <button
          onClick={handleEnquiry}
          className="bg-[#f26522] hover:bg-[#d9561a] transition-colors text-white py-4 px-2 w-[38px] rounded-l shadow-2xl"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          aria-label="Enquiry"
        >
          <span className="font-bold tracking-widest text-[13px] uppercase">
            Enquiry
          </span>
        </button>

        {/* CALL */}
        <button
          onClick={handleCall}
          className="bg-[#0A3370] hover:bg-[#072450] transition-colors text-white mt-[1px] p-2 w-[38px] flex justify-center shadow-lg rounded-tl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        </button>

        {/* SHARE */}
        <button
          onClick={handleShare}
          className="bg-[#0A3370] hover:bg-[#072450] transition-colors text-white mt-[1px] p-2 w-[38px] flex justify-center shadow-lg rounded-bl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
        </button>
      </div>

      {/* CUSTOM TOAST (NO DESIGN CHANGE TO MAIN UI) */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-2 rounded-lg text-sm shadow-lg z-[200]">
          {toast}
        </div>
      )}

      <PoweredByStripe />
    </div>
  );
}