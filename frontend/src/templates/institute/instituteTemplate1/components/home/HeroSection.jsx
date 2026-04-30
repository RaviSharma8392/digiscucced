import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection({ business, hero }) {
  const heroImages = hero?.images || [];
  const seo = business?.seo || {};
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  if (!heroImages.length) return null;

  return (
    <section
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden bg-slate-900 group"
      aria-label="Promotional Carousel"
    >
      {/* SEO CONTENT */}
      <div className="sr-only">
        <h1>{seo.title || business?.name || "Institute Home"}</h1>
        <p>{seo.description || "Welcome to our institute website."}</p>
        {heroImages.map((img, idx) => (
          <article key={`seo-img-${idx}`}>
            <h2>{img.title}</h2>
            <img src={img.src} alt={img.alt || img.title || "Institute illustrative banner"} />
          </article>
        ))}
      </div>

      {/* IMAGE SLIDER */}
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden="true"
        >
          <img
            src={img.src}
            alt=""
            loading={idx === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* ARROW NAVIGATION */}
      {heroImages.length > 1 && (
        <>
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* DOT NAVIGATION */}
      {heroImages.length > 1 && (
        <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all focus:outline-none ${
                idx === current ? "bg-gray-500 scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Show banner slide ${idx + 1}`}
            />
          ))}
        </nav>
      )}
    </section>
  );
}