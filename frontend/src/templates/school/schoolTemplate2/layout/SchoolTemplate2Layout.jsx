import { Outlet } from "react-router-dom";
import { useBusinessLayout } from "../../../../layouts/useBusinessLayout";
import BusinessPageHead from "../../../../layouts/BusinessPageHead";

import Footer from "../components/common/Footer";
import TopInfoBar from "../components/common/TopInfoBar";
import FloatingWhatsApp from "../components/common/FloatingWhatsApp";

import { footerData } from "../data/footerData.js"; // ← move static data out of layout
import ScrollToTop from "../components/floting/ScrollToTop.jsx";

// ─────────────────────────────────────────────
// Public export — receives `business` from the
// router loader / parent context.
// ─────────────────────────────────────────────
export default function SchoolTemplate2Layout({ business }) {
  // Guard: slug is the minimum required identifier.
  // Show a non-jarring skeleton while the parent is still hydrating.
  if (!business?.slug) {
    return <LayoutSkeleton />;
  }

  return <TemplateLayout slug={business.slug} />;
}

// ─────────────────────────────────────────────
// Inner layout — only rendered once slug exists.
// Kept separate so hooks never run conditionally.
// ─────────────────────────────────────────────
function TemplateLayout({ slug }) {
  const layoutData = useBusinessLayout(slug) ?? {};

  const {
    business,
    metaData = {},
    topBar = {}, // reserved — pass to TopInfoBar when it needs config
    navLinks = [], // reserved — pass to Navbar when added
    theme = {},
    faviconUrl,
  } = layoutData;

  return (
    <div className="flex flex-col min-h-screen text-slate-900 bg-[#f8fafc] overflow-x-hidden">
      {/* ── <head> meta, theme colour, favicon ── */}
      <BusinessPageHead
        metaData={metaData}
        theme={theme}
        faviconUrl={faviconUrl}
        slug={slug}
      />

      {/* ── Top utility bar (phone / email / social) ── */}
      <TopInfoBar config={topBar} />

      {/* ── Page body: individual route components render here ── */}
      <main className="flex-grow">
        <Outlet context={{ business, theme, navLinks }} />
      </main>

      {/* ── Sticky WhatsApp CTA ── */}
      <FloatingWhatsApp />
      <ScrollToTop />

      {/* ── Site footer ── */}
      <Footer data={footerData} />
    </div>
  );
}

function LayoutSkeleton() {
  return (
    <div
      className="min-h-screen bg-[#f8fafc] animate-pulse"
      aria-hidden="true"
      aria-label="Loading"
    />
  );
}
