import React, { useState, useEffect } from "react";

export default function FullBannerHero({ banners = [], business }) {

    // ✅ Normalize banners (handles string OR object)
    const normalizeBanners = (data) => {
        if (!data?.length) return [];

        return data.map((item) => {
            if (typeof item === "string") {
                return {
                    image: item,
                    title: business?.metaData?.name || "Institute Banner",
                    description: business?.metaData?.tagline || ""
                };
            }
            return item;
        });
    };

    const defaultBanners = [
        {
            image: "https://dspl.org.in/admin/uploads/slider/1749627287_window_slide-three.webp",
            title: "Best Self Study Library",
            description: "Silent environment for focused preparation"
        },
        {
            image: "https://dspl.org.in/admin/uploads/slider/1749623916_window_slide-one.webp",
            title: "Affordable Study Space",
            description: "Only ₹500/month"
        }
    ];

    const slides = normalizeBanners(banners).length
        ? normalizeBanners(banners)
        : defaultBanners;

    const [currentIndex, setCurrentIndex] = useState(0);

    // ✅ Stable autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => setCurrentIndex(index);

    const currentSlide = slides[currentIndex];

    const title = business?.metaData?.name || "Self Study Library";
    const description =
        business?.metaData?.tagline ||
        "Silent study environment for competitive exams";

    return (
        <section
            className="relative w-full max-w-[1920px] mx-auto bg-slate-100"
            aria-label="Institute Banner"
        >

            {/* ✅ Preload first image for performance */}
            {slides[0]?.image && (
                <link rel="preload" as="image" href={slides[0].image} />
            )}

            {/* IMAGE */}
            <div className="w-full relative overflow-hidden flex items-center justify-center bg-[#cadbe4]">
                <img
                    src={currentSlide.image}
                    alt={currentSlide.title || `${title} banner ${currentIndex + 1}`}
                    className="w-full h-auto object-contain transition-opacity duration-500"
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                    fetchpriority={currentIndex === 0 ? "high" : "auto"}
                />
            </div>

            {/* ✅ Hidden SEO content (helps indexing keywords) */}
            <div className="sr-only">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{currentSlide?.title}</p>
                <p>{currentSlide?.description}</p>
            </div>

            {/* DOTS */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`transition-all duration-300 rounded-full ${currentIndex === i
                                ? "w-8 h-2.5 bg-blue-600"
                                : "w-2.5 h-2.5 bg-white/70"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}