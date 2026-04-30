/**
 * LibraryPage.jsx (FINAL PRODUCTION VERSION)
 */

import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { fetchPageData } from "../../../../core/manifest/manifestLoader";

import {
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  AlertTriangle,
  Library,
  MessageCircle,
  RefreshCw,
} from "lucide-react";

import LibraryHero from "../components/library/LibraryHero";
import AboutSection from "../components/library/AboutSection";
import FacilitiesSection from "../components/library/FacilitiesSection";
import RulesSection from "../components/library/RulesSection";
import SocialMediaSection from "../components/library/SocialMediaSection";
import ContactFormSection from "../components/home/ContactFormSection";

/* =========================================================
   HELPERS
========================================================= */

function convertTo24h(timeStr = "") {
  const [time, modifier] = timeStr.trim().split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${String(
    minutes || 0
  ).padStart(2, "0")}`;
}

/* =========================================================
   JSON-LD SEO
========================================================= */

function buildJsonLd(data, business) {
  return {
    "@context": "https://schema.org",
    "@type": data.seo?.structuredDataType || "Library",

    name: data.title,
    description: data.description,
    url: `https://${business?.slug}.yourplatform.com/library`,
    image: data.images?.[0] || "",

    telephone: data.contact?.phone,

    address: {
      "@type": "PostalAddress",
      streetAddress: data.contact?.address,
      addressLocality: "Haldwani",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },

    areaServed: "Haldwani, Uttarakhand",

    priceRange: data.fee ? `₹${data.fee}/month` : "Affordable",

    openingHoursSpecification: data.timings
      ? {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: convertTo24h(data.timings.open),
        closes: convertTo24h(data.timings.close),
      }
      : undefined,

    amenityFeature: data.facilities?.map((f) => ({
      "@type": "LocationFeatureSpecification",
      name: f,
      value: true,
    })),

    sameAs: data.socialMedia
      ? Object.values(data.socialMedia).filter(Boolean)
      : [],
  };
}

/* =========================================================
   SEO HEAD
========================================================= */

function LibrarySeoHead({ data, jsonLd, business }) {
  const seo = data.seo || {};
  const meta = business?.metaData || {};

  const title =
    seo.metaTitle ||
    `${data.title} | ${meta.name || "Library"}`;

  const description =
    seo.metaDescription ||
    data.description ||
    "Best self study library";

  const canonical =
    seo.canonicalUrl ||
    `https://${business?.slug}.yourplatform.com/library`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {seo.keywords && (
        <meta name="keywords" content={seo.keywords} />
      )}
      <link rel="canonical" href={canonical} />

      <meta name="robots" content="index, follow" />

      {/* GEO */}
      <meta name="geo.region" content="IN-UK" />
      <meta name="geo.placename" content="Haldwani" />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}

/* =========================================================
   STATE SCREENS
========================================================= */

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
}

function ErrorScreen({ onRetry }) {
  return (
    <div className="text-center py-20">
      <AlertTriangle className="mx-auto mb-4 text-red-400" />
      <p>Failed to load page</p>
      <button onClick={onRetry} className="mt-4 px-4 py-2 bg-blue-600 text-white">
        Retry
      </button>
    </div>
  );
}

function NotConfiguredScreen() {
  return (
    <div className="text-center py-20">
      <Library className="mx-auto mb-4 text-gray-400" />
      <p>Library page not configured</p>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function LibraryPage({ business }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const slug = business?.slug;

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchPageData(slug, "library");
      setData(res || null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    loadData();
  }, [slug, loadData]);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen onRetry={loadData} />;
  if (!data) return <NotConfiguredScreen />;

  const jsonLd = buildJsonLd(data, business);

  return (
    <>
      <LibrarySeoHead
        data={data}
        jsonLd={jsonLd}
        business={business}
      />

      <main className="bg-slate-50">

        {/* SEO TEXT */}
        <div className="sr-only">
          <h1>{data.title} - Best Self Study Library in Haldwani</h1>
          <p>{data.description}</p>
          <p>Affordable library for SSC, Banking, UPSC preparation</p>
        </div>

        {/* HERO */}
        <LibraryHero data={data} />

        {/* ABOUT */}
        <AboutSection data={data} />

        {/* FACILITIES */}
        <FacilitiesSection facilities={data.facilities} />

        {/* RULES */}
        <RulesSection rules={data.rules} />

        {/* GALLERY */}
        {data.images?.length > 0 && (
          <section className="py-20 bg-slate-900 text-white text-center">
            <h2 className="text-3xl font-bold mb-10">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {data.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Library"
                  className="rounded-lg"
                />
              ))}
            </div>
          </section>
        )}

        {/* SOCIAL */}
        <SocialMediaSection socialMedia={data.socialMedia} />

        {/* CONTACT */}
        <ContactFormSection source="library" />

        {/* CONTACT INFO */}
        {data.contact?.phone && (
          <div className="text-center py-10">
            <a
              href={`https://wa.me/${data.contact.phone}`}
              className="bg-green-500 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
          </div>
        )}

      </main>
    </>
  );
}