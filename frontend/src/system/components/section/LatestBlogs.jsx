import React from "react";
import { Link } from "react-router-dom";

// --- DYNAMIC DATA ---
const latestBlogs = [
  {
    id: 1,
    category: "TECHNOLOGY",
    date: "March 18, 2026",
    title: "How Micro-SaaS is transforming local B2B operations.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    link: "/blog/micro-saas-transformation",
  },
  {
    id: 2,
    category: "DIGITAL MARKETING",
    date: "March 12, 2026",
    title: "The blueprint for self-funding digital ad campaigns.",
    image:
      "https://dynamicmedia.accenture.com/is/image/accenture/A1-A.com-Careers-Module-Image-1?qlt=85&ts=1773765674286&$1024-PNG$&qlt=25&dpr=off",
    link: "/blog/self-funding-ads",
  },
  {
    id: 3,
    category: "PERSPECTIVE",
    date: "March 05, 2026",
    title: "Navigating local tax compliance with automated systems.",
    image:
      "https://www.tcs.com/content/dam/global-tcs/en/images/home/industry.jpg",
    link: "/blog/automated-tax-compliance",
  },
];

const LatestBlogs = () => {
  return (
    <section className="bg-black w-full py-20 px-6 sm:px-8 lg:px-12 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-white tracking-tight">
              Latest insights.
            </h2>
            <div className="w-12 h-1 bg-white mt-6"></div>
          </div>

          <Link
            to="/blog"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-gray-400 transition-colors">
            View all articles
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {latestBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={blog.link}
              className="group flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors duration-300">
              {/* Image Container with Zoom Effect */}
              <div className="relative w-full h-56 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content Container */}
              <div className="flex flex-col flex-grow p-6 sm:p-8">
                {/* Meta Data (Category & Date) */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
                    {blog.category}
                  </span>
                  <span className="text-[10px] tracking-wider text-gray-500">
                    {blog.date}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white leading-[1.2] tracking-tight mb-6 group-hover:text-gray-300 transition-colors">
                  {blog.title}
                </h3>

                {/* Push link to bottom */}
                <div className="flex-grow" />

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  Read article
                  <span className="text-xl font-light leading-none transform group-hover:translate-x-1 transition-transform">
                    &gt;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
