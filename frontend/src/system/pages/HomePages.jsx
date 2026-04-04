import React from "react";
import { Link } from "react-router-dom";

import ServicesSection from "../components/section/ServicesSection";
import ReviewsSection from "../components/section/ReviewsSection";
import ClientsSection from "../components/section/ClientsSection";
import LatestBlogs from "../components/section/LatestBlogs";
import Pricing from "../components/section/Pricing";
import HeroSection from "../components/section/Hero";

const steps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description:
      "We analyze your business ecosystem, competitors, and target audience to architect a data-driven growth strategy.",
  },
  {
    id: 2,
    title: "Design & Engineering",
    description:
      "Our team builds scalable websites, robust web applications, and digital assets tailored perfectly to your enterprise goals.",
  },
  {
    id: 3,
    title: "Growth & Optimization",
    description:
      "We deploy targeted campaigns, monitor analytics, and continuously iterate to maximize your digital ROI.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Hero */}
      <HeroSection
        title="Build a professional website for your business"
        subtitle="Launch your website in minutes using ready-made templates, simple editing tools, and built-in marketing features."
        image="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2000&auto=format&fit=crop"
        primaryText="Create Your Website"
        primaryLink="/builder"
        secondaryText="View Templates"
        secondaryLink="/templates"
      />

      {/* Services */}
      <ServicesSection />

      {/* Process Section - AGENCY STYLE LIGHT THEME */}
      <section className="py-32 px-6 lg:px-12 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="flex items-center gap-4 text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4">
                <span className="w-8 h-[2px] bg-blue-600"></span>
                Our Methodology
              </span>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                A proven framework for digital success.
              </h3>
            </div>
            <p className="text-slate-500 text-lg max-w-md pb-2">
              We eliminate guesswork. Our systematic approach ensures every
              project is delivered on time, on budget, and primed for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="group relative bg-white p-10 border border-slate-200 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full">
                {/* Thin, elegant background number */}
                <span className="absolute top-6 right-8 text-7xl font-extralight text-slate-100 transition-colors duration-500 group-hover:text-blue-50">
                  0{index + 1}
                </span>

                <div className="relative z-10 mt-auto pt-24">
                  <h4 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>

                {/* Animated bottom line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* Clients */}
      <ClientsSection />

      {/* Reviews */}
      <ReviewsSection />

      {/* Blogs */}
      <LatestBlogs />

      {/* Mission Section - CORPORATE SPLIT LAYOUT */}
      <section className="px-6 py-32 lg:px-12 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Left side: Typography & Stats */}
            <div className="pr-4 xl:pr-8">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 block">
                Our Mission
              </span>

              <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mt-4 leading-[1.1] tracking-tight text-slate-900">
                Building digital foundations for tomorrow.
              </h2>

              {/* Added: Professional Data Grid */}
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-100">
                <div>
                  <span className="block text-4xl font-light text-blue-600 mb-2">
                    98%
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Client Retention
                  </span>
                </div>
                <div>
                  <span className="block text-4xl font-light text-blue-600 mb-2">
                    250+
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Projects Shipped
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: Copy & CTA */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-tr-[4rem] rounded-bl-[4rem]">
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 font-light">
                DigiSucceed helps businesses transcend their limitations. From
                high-performance web architecture to data-driven marketing
                campaigns, we provide the enterprise-grade tools required to
                attract, engage, and scale.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-all duration-300 min-w-[180px]">
                  Start a Project
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="square"
                      strokeWidth="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 font-semibold hover:border-slate-900 hover:text-slate-900 transition-all duration-300 min-w-[180px]">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatIsNewSection />

      {/* Final CTA - PREMIUM DARK */}
      <section className="py-32 px-6 text-center bg-slate-950 border-t border-slate-800 relative overflow-hidden">
        {/* Subtle background glow matrix */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Ready to scale?
          </h3>

          <p className="text-slate-400 text-xl mb-12 font-light max-w-2xl mx-auto">
            Let’s build something powerful together. Engage our team to launch,
            optimize, and dominate your digital market.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
            Contact Us Today
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

// --- REUSABLE CARD COMPONENT ---
// You can extract this into a separate file later if you want to use it elsewhere
const NewsCard = ({ title, description, image, link }) => {
  return (
    <Link to={link} className="group flex flex-col cursor-pointer">
      {/* Image Container with subtle hover zoom */}
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-sm bg-slate-100 mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Typography matches the clean, light enterprise look */}
      <h3 className="text-2xl md:text-[1.65rem] font-medium text-slate-900 leading-tight mb-3 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
        {description}
      </p>
    </Link>
  );
};

// --- DYNAMIC DATA ---
const newsData = [
  {
    id: 1,
    title: "5 local businesses launched their first websites",
    description:
      "Our team successfully helped five small businesses build their online presence with fast and responsive websites.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", // Tech/AR placeholder
    link: "/news/gemini-center",
  },
  {
    id: 2,
    title: "New digital marketing service launched",
    description:
      "We introduced affordable marketing solutions designed specifically for local businesses and startups.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", // Team collaboration placeholder
    link: "/news/cloud-security",
  },
  {
    id: 3,
    title: "Helping businesses grow with modern design",

    description:
      "Professional banner designs and branding services are now helping businesses stand out online.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Women in office placeholder
    link: "/news/ai-services",
  },
];

// --- MAIN SECTION COMPONENT ---
const WhatIsNewSection = () => {
  return (
    <section className="bg-white w-full py-24 px-6 lg:px-12 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-center mb-12">
          {/* Using font-normal to replicate the very clean, thin look from the image */}
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-slate-900 tracking-tight">
            Good Morning. Here's what's new
          </h2>

          {/* Minimalist Arrow Button */}
          <Link
            to="/news"
            className="hidden md:flex items-center justify-center w-10 h-10 text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="View all news">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              description={news.description}
              image={news.image}
              link={news.link}
            />
          ))}
        </div>

        {/* Mobile View All Button (shows only on small screens) */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link to="/news" className=" font-semibold flex items-center gap-2">
            View all updates
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
