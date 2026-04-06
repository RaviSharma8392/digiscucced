import { Outlet } from "react-router-dom";
import { useMemo } from "react";

import { useBusinessLayout } from "../../../../layouts/useBusinessLayout";
import BusinessPageHead from "../../../../layouts/BusinessPageHead";

import SchoolNavbar from "../../../src/components/layout/SchoolNavbar";
import SchoolFooter from "../components/ui/SchoolFooter";

export default function SchoolTemplate1Layout({ business }) {
  if (!business?.slug) {
    return <div className="min-h-screen bg-[#f8fafc] animate-pulse" />;
  }

  return <SchoolTemplate1Inner business={business} />;
}

function SchoolTemplate1Inner({ business }) {
  const layoutData = useBusinessLayout(business) || {};

  const {
    metaData = {},
    nav = [],
    navLinks = [],
    theme = {},
    faviconUrl,
  } = layoutData;

  /* ───── Choose nav source ───── */
  const navigation = nav.length ? nav : navLinks;

  /* ───── Normalize navigation for navbar ───── */
  const normalizedNavLinks = useMemo(() => {
    return navigation.map((link) => ({
      label: link.label,
      path: link.path || "/",
      subLinks: (link.subLinks || link.children || []).map((s) => ({
        label: s.label,
        path: s.path,
        isExternal: s.isExternal || false,
      })),
      isExternal: link.isExternal || false,
    }));
  }, [navigation]);

  /* ───── CTA button ───── */
  const cta = useMemo(() => {
    return {
      label: "Apply Now",
      link: `/${business.slug}/admissions`,
    };
  }, [business.slug]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 overflow-x-hidden">
      <BusinessPageHead
        metaData={metaData}
        theme={theme}
        faviconUrl={faviconUrl}
        slug={business.slug}
      />

      <SchoolNavbar
        navLinks={normalizedNavLinks}
        theme={theme}
        logoUrlDesk={metaData?.logoUrlDesk}
        logoUrlMobile={metaData?.logoUrlMobile}
        cta={cta}
      />

      <main className="flex-grow">
        <Outlet />
      </main>

      <SchoolFooter business={business} theme={theme} />
    </div>
  );
}
