
// You can later move this to business.gallery from API
// const galleryImages = business?.gallery || [
//     {
//         url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHzyD_9ugw15WTP1Mmty9HF8yjqGS-zlDjyW6w9kvm9rPZRtyRcLFUdsSj9DumlRfHipHDtIMnM7JlPaxJqnpYO5FPOVUYitKHB6GP1MFnhc_lzmnH66fL2RnGZni5NfAr514g_gvzvjvxw=s1360-w1360-h1020-rw",
//         title: "Computer Lab Training"
//     },
//     {
//         url: "https://lh3.googleusercontent.com/p/AF1QipO864RuqUjO18Bn7yswSSKxCEfmWCjhPVBjlIqi=s1360-w1360-h1020-rw",
//         title: "Student Practical Session"
//     },
//     {
//         url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG9whKrDiQOpZlSN8yyNAjABOXRfE6Hf7_O839R6uFyXQ0FYxCHo3I0LVE4aDDV2_jdJ2r30UBW4um-ppsjEbGGTHksMiUN_c4tOO1dCiLaf2VIB6HYnOX8Dv3nvIJQYTlX1XlTFjv0tLc=s1360-w1360-h1020-rw",
//         title: "Classroom Learning"
//     },
//     {
//         url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEJfXYOMN2KfZeYmK1MgWRzIcHfNR-q4ixapSw6wbkB6g1J_UUTifWM7MrEUpSxHyM9ebpH__DIIOBYq55oeh246T-Hvs82EQ-3kExKCxpHAPJ9qFvYGaEcxFVEJ2crdKO9OMFX6AICj-L-=s1360-w1360-h1020-rw",
//         title: "Workshop Activity"
//     }
// ];

import React from "react";
import { Helmet } from "react-helmet-async";
import DynamicPageHeader from "../layout/DynamicPageHeader.jsx";

export default function GalleryPage({ business }) {
    const theme = business?.theme || {};
    const metaData = business?.brand || {};

    // Dynamic SEO Metadata
    const pageTitle = `Gallery | ${metaData.name || "Our Institute"}`;
    const pageDescription = metaData.description || "Explore our institute environment, classrooms, and student activities through our photo gallery.";

    // Prioritize business data, use fallback only if empty
    const fallbackImages = [
        { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800", title: "Computer Lab Training" },
        { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", title: "Student Practical Session" },
        { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800", title: "Classroom Learning" },
        { url: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=800", title: "Workshop Activity" }
    ];

    const galleryImages = business?.gallery?.length > 0 ? business.gallery : fallbackImages;

    // JSON-LD Structured Data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": pageTitle,
        "description": pageDescription,
        "publisher": {
            "@type": "Organization",
            "name": metaData.name || "Institute"
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Advanced SEO via Helmet */}
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={galleryImages[0]?.url} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={galleryImages[0]?.url} />

                {/* Schema.org Injection */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            {/* Page Header */}
            <DynamicPageHeader
                title="Our Gallery"
                description={pageDescription}
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600"
                theme={{ primary: theme.primary || "#2A5B75" }}
            />

            {/* Gallery Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <header className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Life at {metaData.name || "Our Institute"}
                    </h2>
                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full opacity-80"
                        style={{ backgroundColor: theme.accent || "#DC2626" }}
                    />
                </header>

                {galleryImages.length === 0 ? (
                    <div className="text-center text-slate-500 py-20">
                        <p>No images currently available in the gallery.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {galleryImages.map((img, index) => (
                            <figure
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white aspect-[4/3] cursor-pointer"
                            >
                                <img
                                    src={img.url}
                                    alt={img.title || `Gallery image ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                                />

                                {/* Gradient Overlay for better text readability */}
                                <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-5 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-medium text-lg leading-tight">
                                            {img.title}
                                        </p>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}