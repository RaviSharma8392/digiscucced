// BlogArticle.jsx
import React from "react";

export default function BlogArticle({
  eyebrow = "Insights · Digital Transformation",
  title = "Why a Professional Website Is a Growth Engine for Small Businesses",
  dek = "Practical, low-cost ways to build credibility, generate leads, and automate operations—without enterprise budgets.",
  author = {
    name: "A. Sharma",
    role: "Digital Advisory",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=crop",
  },
  updated = "Mar 19, 2026",
  readTime = "7 min read",
  toc = [
    { id: "why", label: "Why a website matters" },
    { id: "credibility", label: "Build credibility & trust" },
    { id: "leads", label: "Generate & capture leads" },
    { id: "operations", label: "Automate operations" },
    { id: "cost", label: "Keep costs lean" },
    { id: "checklist", label: "Launch checklist" },
  ],
  kpis = [
    {
      value: "3.2s",
      label: "Avg. load target",
      sub: "Faster pages rank and convert better.",
    },
    {
      value: "68%",
      label: "Local discovery",
      sub: "Buyers check websites before visiting.",
    },
    {
      value: "2.4×",
      label: "Lead uplift",
      sub: "Clear CTAs + forms double enquiries.",
    },
  ],
}) {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* Top bar */}
      <div className="w-full border-b border-black/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 bg-black" />
            <span className="text-[13px] font-semibold tracking-wide uppercase">
              Consulting & Services
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-[14px] md:flex">
            <a className="hover:underline underline-offset-4" href="#">
              Industries
            </a>
            <a className="hover:underline underline-offset-4" href="#">
              Services
            </a>
            <a className="hover:underline underline-offset-4" href="#">
              Insights
            </a>
            <a className="hover:underline underline-offset-4" href="#">
              Careers
            </a>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-black/10">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-black/60">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-[28px] font-semibold leading-tight sm:text-[34px] lg:text-[40px]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-black/80 sm:text-[17px]">
            {dek}
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-black/70">
            <img
              src={author.avatar}
              alt={author.name}
              className="h-8 w-8 rounded-full object-cover ring-1 ring-black/10"
            />
            <span className="font-medium text-black">{author.name}</span>
            <span className="text-black/40">·</span>
            <span>{author.role}</span>
            <span className="mx-1 hidden h-1 w-1 rounded-full bg-black/30 sm:inline-block" />
            <span>Updated {updated}</span>
            <span className="mx-1 hidden h-1 w-1 rounded-full bg-black/30 sm:inline-block" />
            <span>{readTime}</span>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-black/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-[13px] text-black/70 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2">
            <a className="hover:underline underline-offset-4" href="#">
              Home
            </a>
            <span>/</span>
            <a className="hover:underline underline-offset-4" href="#">
              Insights
            </a>
            <span>/</span>
            <span className="text-black">Small Business Growth</span>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <button className="rounded-md border border-black/15 px-3 py-1.5 hover:bg-black/[0.03]">
              Share
            </button>
            <button className="rounded-md border border-black/15 px-3 py-1.5 hover:bg-black/[0.03]">
              Print
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-14">
        {/* TOC */}
        <aside className="lg:col-span-3">
          <div className="sticky top-6 rounded-xl border border-black/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-black/60">
              On this page
            </p>
            <ul className="mt-3 space-y-2 text-[14px]">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-start gap-2 text-black/70 hover:text-black">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-black/20 group-hover:bg-black" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Article */}
        <article className="lg:col-span-9">
          <div className="prose prose-neutral max-w-none prose-headings:scroll-mt-24 prose-h2:text-[22px] prose-h2:font-semibold prose-p:text-[16px] prose-p:leading-7 prose-li:text-[16px] prose-li:leading-7 prose-a:text-black prose-a:underline prose-a:underline-offset-4 hover:prose-a:no-underline">
            <p className="lead text-[17px] text-black/80">
              For a small business, a website isn’t just a brochure—it’s your
              24/7 sales rep, support desk, and brand ambassador. Done right, it
              pays for itself by converting visitors into enquiries and
              automating repetitive work.
            </p>

            <h2 id="why">Why a website matters</h2>
            <p>
              Customers research before they buy. A fast, mobile-friendly site
              with clear offerings, pricing, and contact options removes
              friction and increases trust. It also creates an owned channel you
              control—unlike social platforms that can change rules overnight.
            </p>

            <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
              {kpis.map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="rounded-xl border border-black/10 p-5">
                  <div className="text-[28px] font-semibold tracking-tight">
                    {value}
                  </div>
                  <div className="mt-1 text-[14px] font-medium">{label}</div>
                  <p className="mt-1 text-[14px] text-black/70">{sub}</p>
                </div>
              ))}
            </div>

            <h2 id="credibility">Build credibility & trust</h2>
            <ul>
              <li>
                Clear value proposition on the hero (“What you do, for whom, and
                why it’s better”).
              </li>
              <li>
                Social proof: testimonials, client logos, case snippets, and
                real photos.
              </li>
              <li>
                Contact details, GST, address, and policies—transparency reduces
                drop-offs.
              </li>
            </ul>

            <h2 id="leads">Generate & capture leads</h2>
            <p>
              Treat every page as a landing page. Add a primary call-to-action
              (CTA) above the fold and repeat it. Keep forms short (name, phone,
              email, message). Route enquiries to WhatsApp or email instantly to
              reduce response time.
            </p>
            <blockquote>
              “If a visitor can’t contact you in under 10 seconds, you’re
              leaking revenue.”
            </blockquote>

            <h2 id="operations">Automate operations</h2>
            <p>
              Embed a booking widget, FAQs, pricing calculator, or a simple
              product catalogue with UPI/checkout. Use SEO-friendly content to
              answer repeated queries—this cuts support load and improves
              rankings.
            </p>

            <h2 id="cost">Keep costs lean</h2>
            <p>
              Start with a one-page site and expand. Use performance budgets
              (images &lt; 150KB, total &lt; 1.5MB), free analytics, and a
              lightweight CMS. Host on a CDN for speed. Measure what matters:
              traffic, top pages, conversion rate, and response time.
            </p>

            <h2 id="checklist">Launch checklist</h2>
            <ol>
              <li>Define 3 goals (e.g., enquiries, bookings, calls).</li>
              <li>Write a crisp hero line + 3 benefits.</li>
              <li>Add testimonials and real photos.</li>
              <li>Place a sticky CTA (“Call”, “WhatsApp”, “Get Quote”).</li>
              <li>Connect analytics + search console.</li>
              <li>Publish 3 FAQs and 1 case study.</li>
            </ol>

            <div className="not-prose mt-10 rounded-xl border border-black/10 p-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-[18px] font-semibold">
                    Need a small-business site blueprint?
                  </h3>
                  <p className="mt-1 text-[14px] text-black/70">
                    Get a free one-page wireframe + content outline tailored to
                    your industry.
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-[14px] font-medium text-white hover:opacity-90">
                  Request blueprint
                </a>
              </div>
            </div>

            <hr className="my-10 border-black/10" />

            <div className="not-prose flex items-start gap-4">
              <img
                src={author.avatar}
                alt={author.name}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-black/10"
              />
              <div>
                <p className="text-[14px] font-semibold">
                  {author.name} · {author.role}
                </p>
                <p className="mt-1 max-w-2xl text-[14px] text-black/70">
                  Helps SMBs adopt practical, low-cost digital tools—websites,
                  analytics, and automation—to grow revenue without enterprise
                  budgets.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-[13px] text-black/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Consulting & Services</p>
          <nav className="flex items-center gap-5">
            <a className="hover:underline underline-offset-4" href="#">
              Privacy
            </a>
            <a className="hover:underline underline-offset-4" href="#">
              Terms
            </a>
            <a className="hover:underline underline-offset-4" href="#">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
