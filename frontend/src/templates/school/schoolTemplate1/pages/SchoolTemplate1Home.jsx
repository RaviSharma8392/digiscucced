import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import SchoolTemplate1HeroSection from "../components/home/SchoolTemplate1HeroSection";
import NoticeTicker from "../components/home/NoticeTicker.jsx";
import StatsBar from "../components/home/StatsBar.jsx";
import AboutSection from "../components/section/AboutSection.jsx";
import AdmissionCTA from "../components/section/AdmissionCTA.jsx";
import EventsList from "../components/section/EventsList.jsx";
import PrincipalMessage from "../components/home/PrincipalMessage.jsx";
import ProgramsGrid from "../components/section/ProgramsGrid.jsx";
import GalleryStrip from "../components/home/GalleryStrip.jsx";
import Testimonials from "../components/home/Testimonials.jsx";

import { getSchoolHomeData } from "../services/schoolHomeService.js";
import { logger } from "../../../../logger.js";
import QuickActionCards from "../components/ui/QuickActionCards.jsx";
import CampusShowcase from "../components/home/CampusShowcase.jsx";
import ProgramsGrids from "../components/ui/ProgramsGrid.jsx";

export default function SchoolTemplate1Home({ business }) {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchedSlug = useRef(null);
  // logger.log("Home data state", homeData);
  // logger.info("Loading status", loading);
  // logger.warn("Slug already fetched", fetchedSlug.current);
  // logger.error("Failed to fetch home data");

  useEffect(() => {
    const slug = business?.slug;
    if (!slug) return;
    if (fetchedSlug.current === slug) return;

    let active = true;
    setLoading(true);

    async function load() {
      try {
        const data = await getSchoolHomeData(slug);

        logger.log("getSchoolHomeData", data);

        if (!active) return;
        setHomeData(data);
        fetchedSlug.current = slug;
      } catch (err) {
        console.error(err);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [business?.slug]);

  // ── SEO values from manifest ──────────────────────────────────────
  const metaData = business?.metaData ?? {};
  const topBar = business?.topBar ?? {};
  const slug = business?.slug ?? "";
  const siteUrl = `https://${slug}.yourplatform.com`;
  const pageTitle = `${metaData.name || "School"} | ${metaData.tagline || "Official Website"}`;
  const desc = `${metaData.name} — ${metaData.tagline}. Admissions open. Explore academics, events, and facilities.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "School",
    name: metaData.name,
    url: siteUrl,
    logo: metaData.logoUrl,
    telephone: topBar.phone,
    email: topBar.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  if (loading) {
    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#fcfdfd]">
          <div className="w-12 h-12 border-4 border-slate-100 border-t-[#0d47a1] rounded-full animate-spin mb-4" />
          <p className="text-slate-500 font-medium animate-pulse">Loading...</p>
        </div>
      </>
    );
  }

  if (!homeData) return null;

  const {
    theme,
    notices,
    hero,
    stats,
    programs,
    events,
    principal,
    gallery,
    admissionCTA,
    about,
    testimonials,
  } = homeData;

  return (
    <>
      <Helmet key={slug}>
        <title>{pageTitle}</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content={`${metaData.name}, school admissions, ${metaData.tagline}`}
        />
        <meta name="author" content={metaData.name} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0d47a1" />
        <link rel="canonical" href={siteUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={metaData.logoUrl} />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={metaData.logoUrl} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <NoticeTicker notices={notices} accentColor={theme?.accent} variant={2} />
      <SchoolTemplate1HeroSection
        hero={hero}
        school={metaData}
        theme={theme}
        variant={2}
      />
      <StatsBar stats={stats} colors={theme} variant={1} />
      <AboutSection about={about} colors={theme} variant={1} />
      <ProgramsGrid programs={programs} theme={theme} />

      <section className="px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <EventsList events={events} theme={theme} />
          <PrincipalMessage principal={principal} theme={theme} />
        </div>
      </section>
      {/* ADD THE CARDS HERE - Right below the Hero section */}
      <ProgramsGrids />
      <CampusShowcase />
      <QuickActionCards theme={theme} />
      <GalleryStrip config={gallery} theme={theme} />
      <Testimonials testimonials={testimonials} />
      <AdmissionCTA cta={admissionCTA} theme={theme} />
    </>
  );
}
