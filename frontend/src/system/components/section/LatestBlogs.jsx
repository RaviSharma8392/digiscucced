import React from "react";
import { Link } from "react-router-dom";

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
    <section className="bg-[#f5f5f5] w-full py-20 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Label */}
        <p className="text-sm tracking-widest uppercase text-blue-600 mb-4">
          Web Design & App Development Blogs
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight">
          Insights, Trends & Digital Strategies
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mb-12">
          Read our blogs on web, app, and tech strategy — written by experts to
          help global brands innovate, grow, and lead in a digital-first world.
        </p>

        {/* Top Right Link */}
        <div className="flex justify-end mb-8">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm font-semibold text-black hover:text-blue-600 transition">
            View all articles →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={blog.link}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-200">
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Meta */}
                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <span className="uppercase tracking-wider text-blue-600 font-semibold">
                    {blog.category}
                  </span>
                  <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-black mb-4 group-hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                <div className="flex-grow" />

                {/* Read */}
                <span className="text-sm font-medium text-black group-hover:text-blue-600 transition">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
