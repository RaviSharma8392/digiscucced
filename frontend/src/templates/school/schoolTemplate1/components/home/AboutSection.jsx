import { Link } from "react-router-dom";
import { schoolConfig } from "../../config/schoolConfig";
import SectionHeader from "../ui/SectionHeader";

export default function AboutSection() {
  const { about, established } = schoolConfig;

  return (
    <section className="px-8 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="relative pb-3">
          <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-200 flex items-center justify-center">
            {about.image ? (
              <img
                src={about.image}
                alt="School building"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-7xl opacity-15">🏫</span>
            )}
          </div>
          {/* Badge */}
          <div
            className="absolute -bottom-3 right-6 text-white px-5 py-3 rounded-lg font-heading text-center leading-tight"
            style={{ background: schoolConfig.colors.primary }}
          >
            <div className="text-[22px] font-bold">30+</div>
            <div className="text-[11px] font-body font-normal text-slate-400 mt-0.5">
              Years of Trust
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionHeader tag="Who We Are" title={about.heading} align="left" />
          <p className="text-slate-500 leading-relaxed text-[13.5px] mb-4">
            {about.description}
          </p>
          <ul className="flex flex-col gap-2 mb-6 list-none">
            {about.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-700">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: schoolConfig.colors.accent }}
                />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="inline-block text-[13px] font-medium px-6 py-2.5 rounded-md no-underline transition-colors"
            style={{ background: schoolConfig.colors.primary, color: "white" }}
          >
            Learn More About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
