import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── JOURNEY DATA ────────────────────────────────────────────────────
// You can add Step 2, Step 3, etc., here.
const journeySteps = [
  {
    id: 1,
    stepLabel: "Step 1",
    title: "Orientation",
    // Replace this URL with your exact illustration PNG/AVIF link
    image:
      "https://www.aakash.ac.in/_next/image?url=%2Fimages%2FaakashJourney%2Forientation.png&w=640&q=90",
  },
  {
    id: 2,
    stepLabel: "Step 2",
    title: "Classroom Learning",
    image:
      "https://placehold.co/600x400/transparent/white?text=Classroom+Illustration",
  },
  {
    id: 3,
    stepLabel: "Step 3",
    title: "Doubt Resolution",
    image:
      "https://placehold.co/600x400/transparent/white?text=Doubt+Illustration",
  },
];

export default function StudentJourney() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % journeySteps.length);
  };

  const prevStep = () => {
    setCurrentStep(
      (prev) => (prev - 1 + journeySteps.length) % journeySteps.length,
    );
  };

  const stepData = journeySteps[currentStep];

  return (
    <section className="relative w-full overflow-hidden bg-[#5bb4ff] py-16 sm:py-24 font-[Inter,sans-serif] min-h-[600px] flex flex-col justify-center">
      {/* ── BACKGROUND: RADIATING SUNBURST PATTERN ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          // Creates the radiating light beams from the bottom center
          background:
            "repeating-conic-gradient(from -45deg at 50% 100%, transparent 0deg 4deg, #ffffff 4deg 8deg)",
          // Fades the beams out at the top and edges
          maskImage:
            "radial-gradient(circle at 50% 100%, black 10%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 100%, black 10%, transparent 80%)",
        }}
      />

      {/* ── CONTENT CONTAINER ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col items-center">
        {/* Main Section Header */}
        <h2
          className="text-[28px] sm:text-[36px] font-bold text-white mb-12 sm:mb-20 text-center drop-shadow-sm"
          style={{ fontFamily: "'Roboto Slab', serif" }}>
          Student journey at Aakash
        </h2>

        {/* Step Indicator */}
        <div className="mb-3">
          <span className="text-white/95 font-bold text-sm tracking-wide">
            {stepData.stepLabel}
          </span>
        </div>

        {/* Step Title (Animated transition) */}
        <h3
          key={stepData.title} // Forces re-render animation on step change
          className="text-4xl sm:text-[56px] font-bold text-white mb-12 sm:mb-16 drop-shadow-md animate-[fadeIn_0.5s_ease-out]"
          style={{ fontFamily: "'Roboto Slab', serif" }}>
          {stepData.title}
        </h3>

        {/* Interactive Carousel Area */}
        <div className="w-full flex items-center justify-between gap-4 sm:gap-8">
          {/* Previous Button */}
          <button
            onClick={prevStep}
            aria-label="Previous step"
            className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all active:scale-95 z-20">
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Illustration (Floating Animation) */}
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] aspect-[4/3] flex items-center justify-center">
            <img
              key={stepData.id} // Forces re-render animation
              src={stepData.image}
              alt={stepData.title}
              loading="lazy"
              className="w-full h-auto object-contain drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={nextStep}
            aria-label="Next step"
            className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all active:scale-95 z-20">
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-2.5 mt-8">
          {journeySteps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentStep
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Custom Keyframes for Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />
    </section>
  );
}
