export default function ProgramsGrid({ programs = [], colors = {} }) {
  const primary = colors.primary || "#0f3460";
  const accent = colors.accent || "#e8a020";

  return (
    <section className="px-8 py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <div
            className="text-[11px] font-medium uppercase tracking-[1.5px] mb-2"
            style={{ color: accent }}>
            What We Offer
          </div>
          <h2
            className="font-heading text-[26px] font-semibold"
            style={{ color: primary }}>
            Academic Programmes
          </h2>
          <p className="text-slate-500 text-[14px] mt-2 max-w-lg mx-auto leading-relaxed">
            From early childhood to senior secondary, every stage is designed
            for growth and discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-white border border-black/8 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3.5 ${prog.iconBg}`}>
                {prog.icon}
              </div>
              <h3
                className="font-heading text-[16px] mb-1.5"
                style={{ color: primary }}>
                {prog.title}
              </h3>
              <p className="text-[12.5px] text-slate-500 leading-relaxed">
                {prog.description}
              </p>
              <div
                className="mt-3 text-[11.5px] font-medium"
                style={{ color: accent }}>
                {prog.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
