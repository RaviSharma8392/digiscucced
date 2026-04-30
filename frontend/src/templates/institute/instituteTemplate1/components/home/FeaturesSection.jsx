import { Smile, Users, GraduationCap, Building, Map } from "lucide-react";

export default function FeaturesSection() {
  const stats = [
    { icon: Smile, value: "600,000+", label: "LEARNERS ANNUALLY" },
    { icon: Users, value: "50,000+", label: "EMPLOYEES" },
    { icon: GraduationCap, value: "900+", label: "EDUCATIONAL INSTITUTIONS" },
    { icon: Building, value: "23", label: "STATES" },
    { icon: Map, value: "250+", label: "CITIES" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header styling to match the screenshot precisely */}
        <div className="mb-12">
          <p className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-2 font-sans">
            EVER GROWING NARAYANA'S 47+ YEARS YOUNG LEGACY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#333333] mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
            OUR FRATERNITY
          </h2>
          <p className="max-w-4xl mx-auto text-gray-700 font-sans text-sm md:text-base">
            With a humble beginning in 1979, THE NARAYANA GROUP today is one of Asia's largest educational conglomerates. A glimpse of our academic brilliance:
          </p>
        </div>
        
        {/* Exact stat grid to match image (borderless, thin icons) */}
        <div className="flex flex-wrap justify-center items-end gap-x-12 gap-y-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center min-w-[120px]">
                <div className="mb-4 text-gray-800">
                  <Icon size={42} strokeWidth={1} />
                </div>
                <div className="text-4xl md:text-[42px] font-medium text-black mb-1 leading-none font-sans flex items-baseline">
                  {stat.value.replace('+', '')}
                  {stat.value.includes('+') && <span className="text-2xl font-light ml-0.5">+</span>}
                </div>
                <h3 className="text-[11px] font-medium text-gray-500 uppercase tracking-widest font-sans mt-1">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
