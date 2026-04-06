import React, { useState, useEffect } from "react";
import "../styles/hero.css";

const HeroSection = ({
  logoText = "Ami Homestay",
  introText = "INTRODUCING",
  headingLines = ["AN ELEGANT", "HOMESTAY & LODGE", "WORDPRESS THEME"],
  buttonText = "VIEW DEMO",
  backgroundImages = [
    "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542314831-c6a4d14d8c53?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518733057094-95b5ee1404c3?q=80&w=2070&auto=format&fit=crop",
  ],
  intervalTime = 5000,
  onButtonClick,
}) => {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentImageIndex);
      setCurrentIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1,
      );
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentImageIndex, backgroundImages.length, intervalTime]);

  const headingClasses = ["hero-line-1", "hero-line-2", "hero-line-3"];

  return (
    <section
      className="relative flex flex-col items-center overflow-hidden bg-gray-900"
      style={{ fontFamily: "'Jost', sans-serif", minHeight: "100vh" }}>
      {/* Background Images */}
      {backgroundImages.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex
              ? "opacity-100 hero-bg-active"
              : index === prevIndex
                ? "opacity-0"
                : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ))}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-between w-full min-h-screen py-10 px-4 z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mt-6 gap-2">
          <div className="hero-logo-icon hero-float">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#c8a96e"
              strokeWidth="1.2">
              <path d="M6 24L24 8l18 16" />
              <path d="M10 20v20h28V20" />
              <path d="M18 40V28h12v12" />
            </svg>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#c8a96e] text-xs">✦</span>

            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#fff",
                fontSize: "22px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}>
              {logoText}
            </span>

            <span className="text-[#c8a96e] text-xs">✦</span>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center mt-auto mb-auto">
          {/* Intro */}
          <div className="hero-intro flex items-center gap-3 mb-8 text-[#c8a96e] text-xs tracking-[0.35em]">
            <span className="w-7 h-[1px] bg-[#c8a96e]" />
            {introText}
            <span className="w-7 h-[1px] bg-[#c8a96e]" />
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.8rem,7vw,5.5rem)",
              lineHeight: 1.1,
              color: "#fff",
              letterSpacing: "0.06em",
            }}>
            {headingLines.map((line, index) => (
              <span
                key={index}
                className={headingClasses[index]}
                style={{ display: "block" }}>
                {index === 1 ? (
                  <em style={{ color: "#e8d5a3" }}>{line}</em>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          {/* Button */}
          <div className="hero-btn hero-float mt-8">
            <button
              onClick={onButtonClick}
              className="bg-[#c8a96e] hover:bg-[#b8985e] text-black px-10 py-3 tracking-[0.3em] text-xs uppercase shadow-lg transition">
              {buttonText}
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mb-6">
          {backgroundImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPrevIndex(currentImageIndex);
                setCurrentIndex(i);
              }}
              className={`h-[6px] ${
                i === currentImageIndex
                  ? "w-6 bg-[#c8a96e]"
                  : "w-[6px] bg-white/40"
              } rounded-full transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
