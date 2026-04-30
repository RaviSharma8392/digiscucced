import { Outlet } from "react-router-dom";
import { useMemo } from "react";

import { useBusinessLayout } from "../../../../layouts/useBusinessLayout";
import BusinessPageHead from "../../../../layouts/BusinessPageHead";
import SchoolFooter from "../components/ui/SchoolFooter";

export default function SchoolTemplate1Layout({ business }) {
  // ─────────────────────────────
  // HARD SAFETY CHECK
  // ─────────────────────────────
  if (!business || !business.slug) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="animate-pulse text-slate-400">
          Loading business...
        </div>
      </div>
    );
  }

  return <SchoolTemplate1Inner business={business} />;
}

function SchoolTemplate1Inner({ business }) {
  const layoutData = useBusinessLayout(business) || {};

  const {
    metaData = {},
    nav,
    navLinks,
    theme = {},
    faviconUrl,
  } = layoutData;

  // ─────────────────────────────
  // SAFE NAVIGATION RESOLUTION (FIXED)
  // ─────────────────────────────
  const navigation = useMemo(() => {
    if (Array.isArray(nav) && nav.length > 0) return nav;
    if (Array.isArray(navLinks) && navLinks.length > 0) return navLinks;
    return [];
  }, [nav, navLinks]);

  // ─────────────────────────────
  // SAFE NAV NORMALIZATION
  // ─────────────────────────────
  const normalizedNavLinks = useMemo(() => {
    return navigation.map((link) => ({
      label: link?.label || "",
      path: link?.path || "/",
      subLinks: Array.isArray(link?.subLinks || link?.children)
        ? (link.subLinks || link.children).map((s) => ({
          label: s?.label || "",
          path: s?.path || "#",
          isExternal: !!s?.isExternal,
        }))
        : [],
      isExternal: !!link?.isExternal,
    }));
  }, [navigation]);

  // ─────────────────────────────
  // CTA SAFE
  // ─────────────────────────────
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

      {/* Navbar intentionally disabled */}
      {/* You can enable later */}
      {/* <SchoolNavbar
        navLinks={normalizedNavLinks}
        theme={theme}
        logoUrlDesk={metaData?.logoUrlDesk}
        logoUrlMobile={metaData?.logoUrlMobile}
        cta={cta}
      /> */}

      <main className="flex-grow">
        <Outlet />
      </main>

      <SchoolFooter business={business} theme={theme} />
    </div>
  );
}