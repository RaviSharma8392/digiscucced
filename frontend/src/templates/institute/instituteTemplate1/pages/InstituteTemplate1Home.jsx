import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import AboutSection from "../components/home/AboutSection.jsx";
import CoursesSection from "../components/home/CoursesSection.jsx";
import GallerySection from "../components/home/GallerySection.jsx";
import TestimonialsSection from "../components/home/TestimonialsSection.jsx";
import ContactFormSection from "../components/home/ContactFormSection.jsx";
import FullBannerHero from "../components/library/LibraryHero.jsx";

import { getInstituteHomeData } from "../services/instituteHomeService.js";

export default function InstituteTemplate1Home({ business }) {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchedSlug = useRef(null);

  useEffect(() => {
    const slug = business?.slug;
    if (!slug) return;
    if (fetchedSlug.current === slug) return;

    let active = true;
    setLoading(true);

    async function load() {
      try {
        const data = await getInstituteHomeData(slug);
        if (!active) return;

        setHomeData(data);
        fetchedSlug.current = slug;
      } catch (err) {
        console.error("Home Data Error:", err);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => (active = false);
  }, [business?.slug]);

  if (!business) return null;

  const { metaData = {}, slug } = business;

  const {
    seo = {},
    theme,
    hero,
    about,
    courses,
    gallery,
    testimonials
  } = homeData || {};

  const name = metaData?.name || "Institute";
  const tagline = metaData?.tagline || "Best Computer Institute";
  const siteUrl = `https://${slug}.yourplatform.com`;

  const mergedTheme = business.theme || theme;

  // ✅ PASS FULL HERO DATA (IMPORTANT FIX)
  const banners = hero?.banners || [];

  // ✅ FIXED STRUCTURED DATA
  const structuredData = {
    "@context": "https://schema.org",
    "@type": seo?.schema?.type || "EducationalOrganization",
    name: name,
    url: siteUrl,
    logo: metaData?.logoUrl || "",
    description: seo?.metaDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haldwani",
      addressRegion: "Uttarakhand",
      addressCountry: "India"
    }
  };

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin mb-4" />
        <p className="text-slate-500 font-medium">Loading...</p>
      </div>
    );
  }

  if (!homeData) return null;

  return (
    <div>

      {/* ================= SEO ================= */}
      <Helmet>
        <title>{seo?.metaTitle || `${name} | ${tagline}`}</title>

        <meta
          name="description"
          content={seo?.metaDescription || `${name} - ${tagline}`}
        />

        <meta
          name="keywords"
          content={seo?.keywords?.join(", ") || ""}
        />

        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={seo?.metaTitle || name} />
        <meta property="og:description" content={seo?.metaDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={seo?.ogImage || ""} />
        <meta property="og:type" content="website" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <FullBannerHero banners={banners} business={business} />

      {/* OPTIONAL STATIC BANNER */}
      <img
        src="https://f2.leadsquaredcdn.com/t/t20220304172950/content/common/images/Web%20site%20Banner%20fro%20Placement_.jpg"
        alt="Placement Banner"
        className="w-full"
        loading="lazy"
      />

      {/* ================= CONTENT ================= */}
      <AboutSection
        business={business}
        theme={mergedTheme}
        about={about}
      />

      <CoursesSection
        theme={mergedTheme}
        slug={slug}
        courses={courses}
      />

      <GallerySection
        theme={mergedTheme}
        gallery={gallery}
      />

      <TestimonialsSection
        theme={mergedTheme}
        testimonials={testimonials}
      />

      <ContactFormSection />
    </div>
  );
}