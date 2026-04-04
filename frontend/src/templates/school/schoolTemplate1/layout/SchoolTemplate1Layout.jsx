import { Outlet } from "react-router-dom";
import { useBusinessLayout } from "../../../../layouts/useBusinessLayout";
import BusinessPageHead from "../../../../layouts/BusinessPageHead";
import SchoolNavbar from "../../../src/components/layout/SchoolNavbar";
import FloatingContact from "../../../coaching/coachingTemplate1/components/common/FloatingContact";
import SchoolFooter from "../components/ui/SchoolFooter";
// import SchoolFooter from "../components/layout/SchoolFooter";

export default function SchoolTemplate1Layout({ business }) {
  if (!business?.slug)
    return <div className="min-h-screen bg-[#f8fafc] animate-pulse" />;

  return <SchoolTemplate1Inner business={business} />;
}

// ── Inner keeps hooks safe (never called before early return) ──
function SchoolTemplate1Inner({ business }) {
  const { metaData, topBar, navLinks, theme, faviconUrl } =
    useBusinessLayout(business);

  return (
    <div className="relative min-h-screen text-slate-900 bg-[#f8fafc] overflow-x-hidden flex flex-col">
      <BusinessPageHead
        metaData={metaData}
        theme={theme}
        faviconUrl={faviconUrl}
        slug={business.slug}
      />

      <SchoolNavbar
        navLinks={navLinks}
        theme={theme}
        logoUrlDesk={metaData.logoUrlDesk}
        logoUrlMobile={metaData.logoUrlMobile}
        cta={{ label: "Apply Now", link: `/${business.slug}/admissions` }}
      />

      <main className="flex-grow flex-1">
        <Outlet />
      </main>

      {/* <SchoolFooter footerMeta={business.footer} theme={theme} /> */}

      {/* <FloatingContact
        phone={topBar.phone || "+910000000000"}
        whatsapp={topBar.whatsapp}
      /> */}

      <SchoolFooter business={business} theme={theme} />
    </div>
  );
}
