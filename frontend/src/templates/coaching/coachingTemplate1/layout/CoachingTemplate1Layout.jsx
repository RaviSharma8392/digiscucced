import { Outlet } from "react-router-dom";
import { useBusinessLayout } from "../../../../layouts/useBusinessLayout";
import BusinessPageHead from "../../../../layouts/BusinessPageHead";

import TopBar from "../components/common/TopBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingContact from "../components/common/FloatingContact";

export default function CoachingTemplate1Layout({ business }) {
  if (!business?.slug)
    return <div className="min-h-screen bg-[#f8fafc] animate-pulse" />;

  return <CoachingTemplate1Inner business={business} />;
}

// ── Inner keeps hooks safe ──
function CoachingTemplate1Inner({ business }) {
  const { metaData, topBar, navLinks, theme, faviconUrl } =
    useBusinessLayout(business);

  const footer = business?.footer ?? [];

  return (
    <div className="relative min-h-screen font-[Inter,sans-serif] text-slate-900 bg-[#f8fafc] overflow-x-hidden flex flex-col">
      {/* ✅ Added (same as school) */}
      <BusinessPageHead
        metaData={metaData}
        theme={theme}
        faviconUrl={faviconUrl}
        slug={business.slug}
      />

      {/* ❌ NO CHANGE */}
      <TopBar topBar={topBar} />

      {/* ❌ NO CHANGE */}
      <Navbar
        slug={business?.slug}
        logoUrl={metaData.logoUrl}
        brandName={metaData.name}
        tagline={[metaData.tagline]}
        navLinks={navLinks}
        phone={topBar.phone}
      />

      {/* ✅ wrapped like school */}
      <main className="flex-grow flex-1">
        <Outlet />
      </main>

      {/* ❌ NO CHANGE */}
      {/* <FloatingContact phone={topBar.phone} email={topBar.email} /> */}

      {/* ❌ NO CHANGE */}
      <Footer footerMeta={footer} />
    </div>
  );
}
