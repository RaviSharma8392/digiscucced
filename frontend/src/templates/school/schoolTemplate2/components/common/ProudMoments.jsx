import React from "react";
import { Link } from "react-router-dom";

export default function ProudMoments({
  headerText = "Some of our",
  title = "Proud Moments",
  description = "What we want for our students is what makes them confident individuals in the future. Celebrate our latest achievements and milestones.",
  buttonText = "Archive - Proud Moments",
  buttonLink = "/archive",
  moments = [],
}) {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-amber-400"></span>
            <span className="text-amber-500 font-semibold uppercase tracking-widest text-xs">
              {headerText}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            {description}
          </p>

          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition-all duration-300">
            {buttonText}

            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* MOMENTS GRID */}
        <div className="lg:col-span-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {moments.map((moment) => (
              <MomentCard key={moment.id} moment={moment} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */

function MomentCard({ moment }) {
  const CardWrapper = moment.link ? Link : "div";

  return (
    <CardWrapper
      to={moment.link}
      className="group block bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={moment.image}
          alt={moment.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-6 group-hover:text-amber-500 transition-colors">
          {moment.title}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-100 transition">
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>

        {/* bottom highlight */}
        <div className="absolute bottom-0 left-0 h-[3px] bg-amber-400 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </CardWrapper>
  );
}
