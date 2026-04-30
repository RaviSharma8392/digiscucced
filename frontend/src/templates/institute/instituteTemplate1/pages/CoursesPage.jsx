import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import CoursesSection from "../components/home/CoursesSection.jsx";
import { CheckCircle } from "lucide-react";
import { getInstituteHomeData } from "../services/instituteHomeService.js";

export default function CoursesPage({ business }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchedSlug = useRef(null);

  const slug = business?.slug;

  useEffect(() => {
    if (!slug) return;
    if (fetchedSlug.current === slug) return;

    let active = true;
    setLoading(true);

    async function load() {
      try {
        const res = await getInstituteHomeData(slug);
        if (!active) return;
        setData(res);
        fetchedSlug.current = slug;
      } catch (err) {
        console.error("Courses load error:", err);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [slug]);

  if (!business) return null;

  const theme = business?.theme || data?.theme || {};
  const metaData = business?.metaData || {};

  const primaryColor = theme.primary || "#1E3A8A";
  const accentColor = theme.accent || "#DC2626";

  const benefits = [
    "Industry Recognized Certificates",
    "100% Practical Training",
    "Live Project Experience",
    "Lifetime Access to Resources",
    "Dedicated Placement Assistance",
    "Flexible Learning Hours"
  ];

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Helmet>
        <title>Courses | {metaData.name || "Institute"}</title>
      </Helmet>

      {/* HEADER */}
      <div
        className="py-20 text-center text-white"
        style={{ backgroundColor: primaryColor }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Master Your Skills
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Explore our courses designed for real-world success.
        </p>
      </div>

      {/* COURSES */}
      <CoursesSection
        theme={theme}
        slug={slug}
        courses={data?.courses}
      />

      {/* BENEFITS */}
      <div className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col md:flex-row gap-12 border border-slate-100">

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Why Choose Us?
              </h2>

              <p className="text-slate-600 mb-8">
                Join {metaData.name || "our institute"} and build real skills that matter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} style={{ color: accentColor }} />
                    <span className="text-slate-700">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="text-center p-8 bg-slate-50 rounded-2xl w-full border">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to start?
                </h3>
                <p className="mb-6 text-slate-600">
                  Talk to our experts today.
                </p>

                <a
                  href={`/${slug}/contact`}
                  className="inline-block px-8 py-4 rounded-xl text-white font-bold"
                  style={{ backgroundColor: primaryColor }}
                >
                  Request Callback
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}