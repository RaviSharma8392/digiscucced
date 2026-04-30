import React from "react";
import {
    MapPinIcon,
    ArrowTrendingUpIcon,
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
    ClockIcon,
    BriefcaseIcon
} from "@heroicons/react/24/solid";

/*
  SEO NOTES — FEATURES DATA
  ─────────────────────────
  Each "desc" now weaves in a natural keyword phrase that real users search:
    - "near me" searches       → Local Discovery
    - "local business website" → Stay Competitive
    - "WhatsApp for business"  → Instant Inquiries
    - "trusted local business" → Build Trust
    - "24/7 online presence"   → 24/7 Availability
    - "professional website"   → Professional Image

  Titles are kept short (H3 level) — Google uses H3s for featured snippets
  when the page has a matching FAQ or list structure.
*/
const FEATURES_DATA = [
    {
        title: "Local Google Discovery",
        desc: "Customers search 'salon near me' or 'clinic near me' dozens of times a day. A website with local SEO puts your business on Google Maps and search results — right where they're looking.",
        icon: MapPinIcon,
        // aria-label gives screen readers and Google full context for the icon
        iconLabel: "Map pin icon representing local discovery"
    },
    {
        title: "Stay Ahead of Competitors",
        desc: "Your competitors already have websites capturing local digital customers. A professional local business website ensures you never lose sales to a shop down the street that simply showed up online first.",
        icon: ArrowTrendingUpIcon,
        iconLabel: "Trending up icon representing business growth"
    },
    {
        title: "Instant WhatsApp Inquiries",
        desc: "Direct WhatsApp integration makes it effortless for customers to message you in one tap. More inquiries, faster response — the simplest way to convert a website visitor into a paying customer.",
        icon: ChatBubbleLeftRightIcon,
        iconLabel: "Chat bubble icon representing WhatsApp inquiries"
    },
    {
        title: "Build Customer Trust Online",
        desc: "A clean, mobile-friendly website gives new customers the confidence to choose your business. Reviews, photos, and a professional design turn first-time visitors into loyal customers.",
        icon: ShieldCheckIcon,
        iconLabel: "Shield icon representing trust and credibility"
    },
    {
        title: "24/7 Online Presence",
        desc: "Your shop closes at night — your website never does. Collect bookings, answer FAQs, and receive WhatsApp leads around the clock, even while you sleep.",
        icon: ClockIcon,
        iconLabel: "Clock icon representing 24/7 availability"
    },
    {
        title: "Professional Business Image",
        desc: "Transform from just another local store into a trusted brand your community respects. A professional website signals quality and seriousness — especially to customers comparing you to competitors.",
        icon: BriefcaseIcon,
        iconLabel: "Briefcase icon representing professional image"
    }
];

export default function FeaturesSection() {
    return (
        /*
          - id="benefits" kept for anchor linking from nav / CTA buttons
          - aria-labelledby points to the H2 inside — more precise than aria-label
            because it reuses actual visible text (no duplication)
        */
        <section
            id="benefits"
            aria-labelledby="features-heading"
            className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* ── HEADER ── */}
                {/*
                  <header> wrapping an H2 is valid and helps crawlers
                  understand this block is a self-contained section header.
                  H2 text includes the primary keyword phrase naturally.
                */}
                <header className="max-w-3xl mx-auto mb-16 lg:mb-20">
                    <h2
                        id="features-heading"
                        className="text-2xl md:text-3xl lg:text-4xl  text-slate-900 tracking-tight mb-5 leading-tight"
                    >
                        Why Every Local Business in India Needs a Website
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                        Over 85% of customers search Google before visiting any shop, clinic,
                        or salon. If your business isn't online, those customers never find you —
                        they find your competitors instead.
                    </p>
                </header>

                {/* ── FEATURE CARDS ── */}
                {/*
                  Semantic choice: this is a list of features → <ul>/<li> is correct.
                  Previously used <div> grid which has no semantic meaning for crawlers.
                  Google reads list structure to understand grouped related content.
                  aria-label on <ul> tells screen readers what the list represents.
                */}
                <ul
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none p-0 m-0"
                    aria-label="Key benefits of having a website for your local business"
                >
                    {FEATURES_DATA.map((item, i) => (
                        /*
                          Each card is a <li> wrapping an <article>.
                          <article> = self-contained content block (correct here).
                          Google gives slightly more weight to content inside <article>
                          because it signals independently meaningful content.
                        */
                        <li key={i}>
                            <article className="group relative h-full bg-white rounded-2xl border border-slate-200/70 px-6 py-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                                {/* Icon — decorative, hidden from screen readers via aria-hidden */}
                                <div
                                    className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-orange-400"
                                    aria-hidden="true"
                                >
                                    <item.icon className="w-7 h-7 text-orange-400 group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/*
                                  H3 — keyword-enriched titles.
                                  H3s inside <article> inside <section> with an H2
                                  form a proper heading hierarchy: H1 > H2 > H3.
                                  Never skip levels — broken hierarchy hurts SEO.
                                */}
                                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                                    {item.title}
                                </h3>

                                {/* Description — keyword-rich, conversational, scannable */}
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>

                            </article>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
}