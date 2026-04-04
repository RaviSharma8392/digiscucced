import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/section/Hero";

// --- REFINED DATA ---
const capabilities = [
  {
    id: "01",
    title: "Website Engineering",
    tagline: "High-Performance Digital Presence",
    description:
      "We build modern, mobile-responsive ecosystems specifically for emerging businesses. Our approach prioritizes speed, trust, and conversion, ensuring your local shop or startup is accessible across all devices.",
    deliverables: [
      "Custom React Architecture",
      "Mobile-First Responsive UI",
      "Lead Capture & WhatsApp Sync",
      "SEO Infrastructure Setup",
    ],
  },
  {
    id: "02",
    title: "Social Ecosystems",
    tagline: "Brand Identity Optimization",
    description:
      "A professional brand presence requires a unified social strategy. We optimize your digital touchpoints across Instagram and Facebook to ensure your customers experience a cohesive, trustworthy brand.",
    deliverables: [
      "Cross-Platform Brand Sync",
      "Engagement-Driven UI Design",
      "Content Strategy Framework",
      "Meta Business Optimization",
    ],
  },
  {
    id: "03",
    title: "Digital Acquisition",
    tagline: "Strategic Growth Frameworks",
    description:
      "We bypass vanity metrics to focus on ROI. By leveraging local SEO and lead generation frameworks, we ensure your marketing spend translates directly into customer acquisition and business growth.",
    deliverables: [
      "Local Search Dominance",
      "GMB Optimization (Map SEO)",
      "Conversion Funnel Strategy",
      "Targeted Acquisition Channels",
    ],
  },
  {
    id: "04",
    title: "Visual Architecture",
    tagline: "Trust-Building Design",
    description:
      "Perception is reality in the digital space. We craft high-impact promotional graphics and brand identities that elevate your local business to look like an established industry leader.",
    deliverables: [
      "High-Impact Ad Creatives",
      "Corporate Identity Design",
      "Marketing Asset Production",
      "Visual Narrative Strategy",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Page Header: Architectural Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto border-b border-white/10 overflow-hidden">
        {/* Subtle Background Watermark */}
        <div className="absolute top-20 right-[-5%] text-[20rem] font-black text-white/[0.02] select-none pointer-events-none leading-none uppercase">
          Build
        </div>

        <HeroSection
          title="Turning uncertainty into opportunity"
          subtitle="Perpetually Adaptive Enterprise."
          image="https://s7ap1.scene7.com/is/image/TCSCOMprod/pae-cover-logo-banner-july25:Small?wid=892&hei=1055&dpr=off"
        />

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-blue-600 text-3xl font-light tracking-widest">
              &gt;
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">
              Capability Portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter leading-[0.95] mb-12">
            Scalable digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              architectures.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-blue-600 pl-8">
            We provide the digital infrastructure required to grow local
            businesses into market leaders. High-end design, engineered for
            results.
          </p>
        </div>
      </section>

      {/* 2. The Matrix: Interactive Capability Rows */}
      <section className="w-full">
        {capabilities.map((service) => (
          <div
            key={service.id}
            className="group relative border-b border-white/10 transition-all duration-700 ease-in-out hover:bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                {/* ID & Branding */}
                <div className="md:col-span-1">
                  <span className="text-6xl md:text-8xl font-black text-white/5 group-hover:text-black/5 transition-colors duration-700 leading-none">
                    {service.id}
                  </span>
                </div>

                {/* Service Title Area */}
                <div className="md:col-span-4">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">
                    {service.tagline}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white group-hover:text-black transition-colors duration-700">
                    {service.title}
                  </h2>
                </div>

                {/* Content & Deliverables */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <p className="text-lg md:text-xl text-gray-400 group-hover:text-gray-800 font-normal leading-relaxed mb-12 transition-colors duration-700">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="w-2 h-2 bg-blue-600 group-hover:bg-black transition-colors"></span>
                        <span className="text-xs font-bold uppercase tracking-[0.1em] text-gray-200 group-hover:text-black transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Desktop-Only Reveal Link */}
                  <div className="mt-16 overflow-hidden hidden md:block">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.3em] text-black opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span className="border-b-2 border-black pb-1">
                        Initiate Engagement
                      </span>
                      <span className="text-xl">&gt;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Methodology: Dark-Themed Grid */}
      <section className="bg-[#080808] py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Operational <br /> Framework.
            </h2>
            <p className="text-gray-500 max-w-sm text-sm uppercase tracking-widest leading-loose">
              We follow a strict architectural protocol to ensure every
              deployment is scalable and high-yield.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/5">
            {[
              {
                phase: "Phase 1",
                title: "Discovery & Audit",
                desc: "We analyze your current presence and identify high-impact growth channels.",
              },
              {
                phase: "Phase 2",
                title: "Engineering & Build",
                desc: "Rapid deployment of your digital assets using modern development standards.",
              },
              {
                phase: "Phase 3",
                title: "Strategic Scaling",
                desc: "Ongoing optimization to maximize customer acquisition and business ROI.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-12 md:p-16 border-r border-b border-white/5 hover:bg-white group transition-all duration-500">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 block mb-8 group-hover:text-blue-600">
                  {step.phase}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-black mb-6 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed font-light transition-colors">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Footer CTA */}
      <section className="py-40 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Let's build <br />
            <span className="text-blue-600">together.</span>
          </h2>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-black font-bold uppercase tracking-[0.3em] text-xs overflow-hidden transition-all duration-300 shadow-2xl">
            <span className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center gap-4 group-hover:text-white">
              Start Your Project <span className="text-xl">&gt;</span>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
