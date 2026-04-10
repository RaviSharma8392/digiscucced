import React from "react";
import { Link } from "react-router-dom";

import ServicesSection from "../components/section/ServicesSection";
import ReviewsSection from "../components/section/ReviewsSection";
import ClientsSection from "../components/section/ClientsSection";
import LatestBlogs from "../components/section/LatestBlogs";
import Pricing from "../components/section/Pricing";
import HeroSection from "../components/section/Hero";
import ContactBanner from "../components/section/ContactBanner";
import ProcessSection from "../components/section/ProcessSection";
import FAQSection from "../components/section/FAQSection";

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
      <ProcessSection />
      <ContactBanner />

      {/* Clients */}
      {/* <ClientsSection /> */}

      {/* Reviews */}
      {/* <ReviewsSection /> */}

      {/* Blogs */}
      <LatestBlogs />

      <WhatIsNewSection />
      <FAQSection />
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
