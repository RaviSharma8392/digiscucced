import React from "react";
import { Helmet } from "react-helmet-async";

// Import UI components
import HeroSection from "../components/ui/HeroSection";
import FeaturesSection from "../components/ui/FeaturesSection";
import PerfectForSection from "../components/ui/PerfectForSection";
import BuildSection from "../components/ui/BuildSection";
import FinalCTA from "../components/ui/FinalCTA";
import PricingSection from "../components/ui/PricingSection";
import FAQSection from "../components/ui/landingPgae/FAQSection";

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://etrynix.com/#business",

    name: "Etrynix",
    url: "https://etrynix.com",

    logo: {
        "@type": "ImageObject",
        url: "https://etrynix.com/logo.png",
    },

    image: {
        "@type": "ImageObject",
        url: "https://etrynix.com/og-image.jpg",
    },

    description:
        "Etrynix provides modern website solutions for small businesses in India, helping shops, salons, clinics, and service providers increase visibility on Google, generate customer inquiries, and grow their online presence.",

    telephone: "+91-XXXXXXXXXX", // replace
    email: "hello@etrynix.com",  // replace

    address: {
        "@type": "PostalAddress",
        streetAddress: "Your Office Address", // optional but recommended
        addressLocality: "Meerut",
        addressRegion: "Uttar Pradesh",
        postalCode: "250001", // add real PIN
        addressCountry: "IN",
    },

    geo: {
        "@type": "GeoCoordinates",
        latitude: 28.9845,
        longitude: 77.7064,
    },

    areaServed: [
        {
            "@type": "Country",
            name: "India",
        },
    ],

    serviceArea: {
        "@type": "Country",
        name: "India",
    },

    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website Solutions",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Business Website Development",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Website Design for Salons & Clinics",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "SEO-ready Local Business Websites",
                },
            },
        ],
    },

    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "UPI, Bank Transfer",

    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
        },
    ],

    sameAs: [
        "https://www.instagram.com/etrynix",
        "https://www.linkedin.com/company/etrynix",
    ],
};
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://etrynix.com/solutions#service",
    url: "https://etrynix.com/solutions",

    name: "Website Design & Development for Local Businesses in India",
    serviceType: "Local Business Website Solutions",

    provider: {
        "@type": "ProfessionalService",
        "@id": "https://etrynix.com/#business",
        name: "Etrynix",
        url: "https://etrynix.com",
    },

    description:
        "Etrynix provides modern, mobile-first websites for small businesses, shops, salons, clinics, and service providers in India. Our websites are designed to increase visibility on Google, drive WhatsApp inquiries, and convert visitors into customers.",

    areaServed: {
        "@type": "Country",
        name: "India",
    },

    audience: {
        "@type": "Audience",
        audienceType: "Small business owners, shop owners, service providers in India",
    },

    offers: {
        "@type": "Offer",
        url: "https://etrynix.com/#pricing",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        eligibleRegion: {
            "@type": "Country",
            name: "India",
        },
        category: "Website Development Service",
    },

    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Etrynix Website Plans",
        itemListElement: [
            {
                "@type": "Offer",
                name: "Starter Website",
                description:
                    "Single-page website with mobile optimization, WhatsApp integration, and essential business information.",
            },
            {
                "@type": "Offer",
                name: "Business Website",
                description:
                    "Multi-page website with service pages, Google Maps integration, contact forms, and basic SEO setup.",
            },
            {
                "@type": "Offer",
                name: "Growth Website",
                description:
                    "Advanced website with SEO optimization, lead capture features, and performance-focused design for higher conversions.",
            },
        ],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much does a website cost for a local business in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Etrynix provides modern, conversion-focused websites for local businesses in India with flexible plans designed for different business needs. Each website includes mobile optimization, WhatsApp integration, and essential SEO setup to help attract local customers online.",
            },
        },
        {
            "@type": "Question",
            name: "How long does it take to build a website for my shop or clinic?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most websites are designed, developed, and ready to launch within 5–7 business days, depending on content and customization requirements.",
            },
        },
        {
            "@type": "Question",
            name: "Will my website work on mobile phones?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Every website is built with a mobile-first approach, ensuring a smooth, fast, and responsive experience across smartphones, tablets, and desktops.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need technical knowledge to manage my website?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No technical skills are required. The website is designed to be simple to manage, with a clean structure and optional support for updates whenever needed.",
            },
        },
        {
            "@type": "Question",
            name: "Can my business appear on Google with Etrynix websites?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Websites are built with SEO best practices including structured content, search engine indexing support, and Google Business integration guidance to improve local visibility.",
            },
        },
        {
            "@type": "Question",
            name: "Which types of businesses can benefit from Etrynix websites?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Etrynix builds websites for a wide range of local businesses including salons, clinics, gyms, retail shops, restaurants, coaching centers, and service-based businesses looking to grow their online presence.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://etrynix.com/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: "https://etrynix.com/solutions",
        },
    ],
};
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://etrynix.com/#website",

    url: "https://etrynix.com",
    name: "Etrynix",

    description:
        "Etrynix provides modern website solutions for small businesses, shops, salons, clinics, and service providers in India to help them increase visibility, generate leads, and grow online.",

    inLanguage: "en-IN",

    publisher: {
        "@type": "ProfessionalService",
        "@id": "https://etrynix.com/#business",
    }
};
const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://etrynix.com/solutions#webpage",
    url: "https://etrynix.com/solutions",

    name: "Website Solutions for Local Businesses in India | Etrynix",

    description:
        "Explore website solutions for small businesses, shops, salons, and clinics in India. Build a professional online presence and get more customers with Etrynix.",

    isPartOf: {
        "@id": "https://etrynix.com/#website",
    },

    about: {
        "@id": "https://etrynix.com/solutions#service",
    },
};


// ─── Component ────────────────────────────────────────────────────────────────

export default function LandingPage() {
    const siteUrl = "https://etrynix.com";
    const pageUrl = `${siteUrl}/solutions`;

    const ogImage = `${siteUrl}/og-image.jpg`;

    const ogImageAlt =
        "Etrynix — Build a professional website for your local business and get more customers from Google & WhatsApp";
    return (
        <main className="font-[Poppins] bg-slate-50 text-slate-900 selection:bg-rose-200">
            <Helmet>
                {/* ── Primary SEO ── */}
                <title>Website Solutions for Local Businesses in India | Etrynix</title>

                <meta
                    name="description"
                    content="Build a professional, fast, and mobile-friendly website for your local business in India. Perfect for salons, clinics, gyms, and retail shops. Get more calls, WhatsApp leads, and bookings with Etrynix."
                />

                <link rel="canonical" href={pageUrl} />

                {/* ── Robots ── */}
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />

                {/* ── Geo Targeting ── */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />
                <meta name="language" content="en-IN" />

                {/* ── Open Graph ── */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Etrynix" />
                <meta property="og:title" content="Website Solutions for Local Businesses in India | Etrynix" />

                <meta
                    property="og:description"
                    content="Create a high-performance, mobile-first website for your business and attract more customers from Google and WhatsApp."
                />

                <meta property="og:url" content={pageUrl} />

                <meta property="og:image" content={ogImage} />
                <meta property="og:image:secure_url" content={ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:alt" content={ogImageAlt} />

                <meta property="og:locale" content="en_IN" />

                {/* ── Twitter / X Card ── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@etrynix" />
                <meta name="twitter:creator" content="@etrynix" />

                <meta
                    name="twitter:title"
                    content="Website Solutions for Local Businesses in India | Etrynix"
                />

                <meta
                    name="twitter:description"
                    content="Build a mobile-first website for your business and get more customers from Google and WhatsApp."
                />

                <meta name="twitter:image" content={ogImage} />
                <meta name="twitter:image:alt" content={ogImageAlt} />

                {/* ── JSON-LD Schemas ── */}
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(websiteSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(webPageSchema)}
                </script>
            </Helmet>

            {/* HERO — must render an <h1> containing target keywords */}
            <HeroSection />

            {/* VALUE PROPOSITION */}
            <section
                className="max-w-5xl mx-auto px-6 py-20 text-center"
                aria-labelledby="value-prop-heading"
            >
                <h2
                    id="value-prop-heading"
                    className="text-3xl md:text-5xl tracking-tight text-slate-900 mb-8"
                >
                    Why your business needs a digital identity today.
                </h2>

                <div className="space-y-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    <p>
                        In today's market, customers check online before stepping out.
                        If your shop, clinic, or gym isn't visible on Google, you are losing
                        valuable leads to competitors who are.
                    </p>
                    <p className="font-medium text-slate-800">
                        We build high-performance, mobile-first websites designed to drive
                        calls, WhatsApp inquiries, and bookings — starting at just{" "}
                        <strong>₹500/month</strong>.
                    </p>
                </div>
            </section>

            {/* Perfect For */}
            <section className="bg-white " aria-label="Who we build websites for">
                <PerfectForSection />
            </section>

            {/* Features */}
            <section aria-label="Website features">
                <FeaturesSection />
            </section>

            {/* How it Works */}
            <section aria-label="How we build your website">
                <BuildSection />
            </section>

            {/* Pricing */}
            <section id="pricing" aria-label="Pricing plans">
                <PricingSection />
            </section>

            {/* FAQ — renders the questions from faqSchema visually */}
            <FAQSection faqSchema={faqSchema} />

            {/* Final CTA */}
            <FinalCTA />
        </main>
    );
}