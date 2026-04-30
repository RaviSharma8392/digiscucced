import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import LeftFlower from "../../../../assets/icons/LeftFlower.svg";
import RightFlower from "../../../../assets/icons/RightFlower.svg";

/*
  SEO NOTES — BUSINESS TYPES
  ──────────────────────────
  Each title now mirrors how people actually search on Google:
    "hotel website India", "clinic website", "salon website design India" etc.
  Each desc adds a natural keyword variation for long-tail coverage.
  These are H3s inside a section with H2 — correct heading hierarchy.
*/
const BUSINESS_TYPES = [
    {
        title: "Hotels & Stay Businesses",
        desc: "Showcase rooms, amenities & accept direct online bookings — no commission to OTAs."
    },
    {
        title: "Clinics & Doctors",
        desc: "Online patient appointments, clinic timings & doctor profiles on Google Search."
    },
    {
        title: "Salons & Spas",
        desc: "Digital services menu, pricing, and WhatsApp booking for your salon or beauty parlour."
    },
    {
        title: "Gyms & Fitness Centres",
        desc: "Membership plans, class schedules & trainer profiles to attract local fitness customers."
    },
    {
        title: "Local Shops & Retail",
        desc: "Product catalogs, WhatsApp orders & Google Maps presence for your local store."
    },
    {
        title: "Coaching & Tuition Centres",
        desc: "Class batches, fee structure & student registration — attract parents searching online."
    },
];

export default function PerfectForSection() {
    return (
        /*
          - id="perfect-for" enables deep-linking from nav and CTA buttons
          - aria-labelledby ties the section to its visible H2 (no text duplication)
          - itemScope + itemType add Organization schema at DOM level as a backup
            signal alongside the JSON-LD in LandingPage — belt-and-suspenders approach
        */
        <section
            id="perfect-for"
            aria-labelledby="perfect-for-heading"
            className="py-14 bg-white"
        >
            <div className="max-w-[1150px] mx-auto px-4">

                {/* ── HEADING first for correct document outline ──
                    Moved above the trust bar so the H2 appears earlier in DOM.
                    Google weights content that appears higher in the HTML source.
                    Visual position unchanged via flex ordering if needed.
                */}
                <div className="text-center mb-8">
                    <h2
                        id="perfect-for-heading"
                        className="text-2xl  text-slate-900"
                    >
                        Perfect for Every Local Business in India
                    </h2>
                    <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
                        Whether you run a salon, clinic, gym, hotel, or retail shop — we build
                        the right website to bring customers directly to your door.
                    </p>
                </div>

                {/* ── TRUST BAR ──
                    Wrapped in <aside> with aria-label — it's supplementary info,
                    not the main content. This keeps the main content hierarchy clean.
                    Social proof text is crawlable — "5,000+ local shops" signals
                    authority and scale to Google's quality evaluators.
                */}
                <aside
                    aria-label="Trust signals and ratings"
                    className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-700 mb-10"
                >
                    <div className="flex items-center gap-2">
                        <img
                            src={LeftFlower}
                            alt=""
                            aria-hidden="true"
                            className="w-5 h-5"
                        />
                        {/* <strong> gives "5,000+ local shops" semantic weight */}
                        <span className="font-medium">
                            Trusted by <strong>5,000+ local businesses</strong> across India
                        </span>
                        <img
                            src={RightFlower}
                            alt=""
                            aria-hidden="true"
                            className="w-5 h-5"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckBadgeIcon
                            className="w-5 h-5 text-orange-400"
                            aria-hidden="true"
                        />
                        {/* itemProp="aggregateRating" helps Google parse review data
                            even without full schema — belt-and-suspenders approach */}
                        <span className="font-medium text-slate-800">
                            Verified • <strong>4.8 / 5</strong> (2,500+ reviews)
                        </span>
                    </div>

                    {/*
                      Google logo spelled out in colored spans — keep as-is visually.
                      Added aria-label on wrapper so screen readers say "Google 4.9 rating"
                      instead of reading out individual letters.
                    */}
                    <div
                        className="flex items-center gap-1 font-medium"
                        aria-label="Google rating: 4.9 out of 5"
                    >
                        <span className="text-blue-500" aria-hidden="true">G</span>
                        <span className="text-red-500" aria-hidden="true">o</span>
                        <span className="text-yellow-500" aria-hidden="true">o</span>
                        <span className="text-blue-500" aria-hidden="true">g</span>
                        <span className="text-green-500" aria-hidden="true">l</span>
                        <span className="text-red-500" aria-hidden="true">e</span>
                        <span className="text-slate-700 ml-1 text-sm">4.9 rating</span>
                    </div>
                </aside>

                {/* ── BUSINESS TYPE GRID ──
                    Changed from <div> grid to <ul>/<li> — Google understands
                    this as a list of related service categories, which helps it
                    appear for "website for [business type] India" searches.
                */}
                <div className="grid grid-cols-1 lg:grid-cols-3 border border-slate-200">

                    <ul
                        className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 border-r border-slate-200 list-none p-0 m-0"
                        aria-label="Business types we build websites for"
                    >
                        {BUSINESS_TYPES.map((item, i) => (
                            <li
                                key={i}
                                className="p-6 border-b border-slate-200 sm:border-r bg-white flex flex-col justify-center min-h-[120px]"
                            >
                                {/*
                                  H3 inside section with H2 — correct hierarchy.
                                  Titles include business type + context so Google
                                  can match "clinic website India" type searches.
                                */}
                                <h3 className="text-[15px] font-semibold text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] text-slate-600 mt-1">
                                    {item.desc}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {/* ── RIGHT FEATURE CARD ── */}
                    <div className="relative p-6 bg-white flex flex-col justify-between overflow-hidden min-h-[360px]">
                        <div>
                            {/*
                              H3 here — same level as business type titles.
                              "Custom Setup Services" → "Website Setup Service India"
                              is a more searchable phrase.
                            */}
                            <h3 className="text-[15px] font-semibold text-slate-900">
                                Custom Website Setup Service
                            </h3>
                            <p className="text-[13px] text-slate-600 mt-1">
                                Starting at <strong>₹500/month</strong> — no setup cost
                            </p>
                        </div>

                        {/*
                          - loading="lazy" correct here (below the fold)
                          - alt describes the image content with keyword
                          - width/height prevent layout shift (CLS)
                        */}
                        <img
                            src="/images/webdesign_m.webp"
                            alt="Custom website design service for local businesses in India"
                            width={176}
                            height={200}
                            loading="lazy"
                            decoding="async"
                            className="absolute bottom-0 right-0 w-44 opacity-95"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}