import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection({ business, theme, about = {} }) {

  const primaryColor = theme?.primary || "#295A73";

  const name = business?.metaData?.name || "Institute";

  // ✅ Dynamic Data Mapping
  const heading = about?.heading || `Welcome To ${name}`;
  const description =
    about?.description ||
    "We provide high-quality education and a disciplined learning environment to help students achieve their career goals.";

  const image = about?.image || about?.image1 || "/placeholder.jpg";

  const statsNumber = about?.statsNumber || "5000+";
  const statsLabel = about?.statsLabel || "Students Trained";

  const ctaLabel = about?.cta?.label || "Read More";
  const ctaPath = about?.cta?.path || `/${business?.slug}/about`;

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= LEFT IMAGE ================= */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-none mb-12 lg:mb-0">

            <div className="relative border border-gray-200 shadow-sm">
              <img
                src={image}
                alt={name}
                className="w-full h-auto object-cover max-h-[500px]"
                loading="lazy"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 lg:-right-16 -right-4 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-lg py-4 px-6 pr-10 flex items-center gap-4 z-10 border border-gray-50">

              <div className="bg-[#FFF5F5] p-3 rounded-full text-[#295A73]">
                <GraduationCap size={24} strokeWidth={1.5} />
              </div>

              <div>
                <h3
                  className="text-[22px] font-semibold leading-none"
                  style={{ color: primaryColor }}
                >
                  {statsNumber}
                </h3>

                <p className="text-gray-600 text-[13px] font-serif mt-1">
                  {statsLabel}
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="lg:pl-8 relative">

            <div className="hidden lg:flex absolute -left-6 top-1/2 w-6 h-6 border border-gray-200 rounded-full items-center justify-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>

            <span className="text-gray-500 font-serif text-[15px] mb-4 block">
              About Us
            </span>

            <h2
              className="text-[32px] md:text-[38px] leading-[1.2] font-serif mb-8 font-medium tracking-tight"
              style={{ color: primaryColor }}
            >
              {heading}
            </h2>

            <div className="text-[#333333] leading-[1.8] text-justify mb-10 font-serif text-[15px]">
              <p>{description}</p>
            </div>

            {/* CTA */}
            <Link
              to={ctaPath}
              className="inline-flex items-center gap-4 pl-6 pr-1.5 py-1.5 rounded-full text-white font-medium transition-transform hover:scale-105 active:scale-95 w-max font-serif"
              style={{ backgroundColor: primaryColor }}
            >
              <span className="text-[14px] tracking-wide">
                {ctaLabel}
              </span>

              <div
                className="bg-white rounded-full p-2 flex items-center justify-center"
                style={{ color: primaryColor }}
              >
                <ArrowRight size={16} strokeWidth={2} />
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}