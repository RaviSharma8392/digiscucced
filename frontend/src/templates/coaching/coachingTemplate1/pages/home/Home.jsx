import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "../../components/section/HeroSection";
import { getHomeData } from "../../services/homeService";
import CourseGrid from "../../components/section/CourseGrid";
import TestimonialSection from "../../components/section/TestimonialSection";
import FacultySection from "../../components/section/FacultySection";
import BrochureBanner from "../../components/section/BrochureBanner";
import CallbackForm from "../../components/form/CallbackForm";
import StudentJourney from "../../components/section/StudentJourney";

export default function Home({ business }) {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchedSlug = useRef(null);

  const slug = business?.slug || "";

  useEffect(() => {
    if (!slug) return;
    if (fetchedSlug.current === slug) return;

    let active = true;
    setLoading(true);

    async function load() {
      try {
        const data = await getHomeData(slug);

        if (!active) return;

        setHomeData(data);
        fetchedSlug.current = slug;
      } catch (err) {
        console.error("Home data fetch error:", err);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();

    return () => {
      active = false;
    };
  }, [slug]);

  /* ──────────────────────────────────────────────
     SEO values from business manifest
  ────────────────────────────────────────────── */

  const siteName = business?.metaData?.name || "Top Coaching Institute";

  const tagline = business?.metaData?.tagline || "JEE & NEET Coaching";

  const logoUrl =
    business?.metaData?.logoUrl || "https://yourplatform.com/default-logo.png";

  const phone = business?.topBar?.phone || "";
  const email = business?.topBar?.email || "";

  const siteUrl =
    typeof window !== "undefined" ? `${window.location.origin}/${slug}` : "";

  const pageTitle = `${siteName} — ${tagline}`;

  const description = `${siteName} is a leading institute for ${tagline}. Learn from expert faculty and achieve top results in competitive exams.`;

  /* ──────────────────────────────────────────────
     Structured Data
  ────────────────────────────────────────────── */

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteName,
    description,
    url: siteUrl,
    logo: logoUrl,
    telephone: phone,
    email: email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  /* ──────────────────────────────────────────────
     Loading Screen
  ────────────────────────────────────────────── */

  if (loading) {
    return (
      <>
        <Helmet key={slug}>
          <title>{pageTitle}</title>
          <meta name="description" content={description} />
        </Helmet>

        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#fcfdfd]">
          <div className="w-12 h-12 border-4 border-[#e0f3fc] border-t-[#00bbf0] rounded-full animate-spin mb-4" />

          <p className="text-slate-500 font-medium animate-pulse">
            Loading your experience...
          </p>
        </div>
      </>
    );
  }

  if (!homeData) return null;

  const { heroConfig, courses, faculty, testimonials } = homeData;

  /* ──────────────────────────────────────────────
     Page
  ────────────────────────────────────────────── */

  return (
    <>
      <Helmet key={slug}>
        {/* Primary SEO */}
        <title>{pageTitle}</title>
        <meta name="description" content={description} />

        <meta
          name="keywords"
          content={`${siteName}, JEE coaching, NEET coaching, ${tagline}, best coaching institute`}
        />

        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logoUrl} />

        {/* Misc */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content={siteName} />
        <meta name="theme-color" content="#0d47a1" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Helmet>

      <main className="relative min-h-screen bg-[#fcfdfd] text-slate-800 font-[Inter,sans-serif] selection:bg-[#00bbf0] selection:text-white overflow-hidden">
        <div className="relative z-10">
          <HeroSection config={heroConfig} />
        </div>

        <div className="relative z-10 border-b border-slate-100">
          <BrochureBanner />
        </div>

        <div className="relative z-10">
          <CourseGrid courses={courses} />
        </div>

        <div className="relative z-10 bg-gradient-to-b from-white to-slate-50 border-y border-slate-100">
          <CallbackForm />
        </div>

        <StudentJourney />

        <div className="relative z-10">
          <FacultySection faculty={faculty} />
        </div>

        <div className="relative z-10 bg-[#f8fafc] border-t border-slate-100">
          <TestimonialSection testimonials={testimonials} />
        </div>
      </main>
    </>
  );
}
