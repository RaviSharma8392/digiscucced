import { schoolConfig } from "../../config/schoolConfig";

export default function ProgramCard({ program }) {
  return (
    <div className="bg-white border border-black/8 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3.5 ${program.iconBg}`}>
        {program.icon}
      </div>
      <h3
        className="font-heading text-[16px] mb-1.5"
        style={{ color: schoolConfig.colors.primary }}
      >
        {program.title}
      </h3>
      <p className="text-[12.5px] text-slate-500 leading-relaxed">{program.description}</p>
      <div
        className="mt-3 text-[11.5px] font-medium"
        style={{ color: schoolConfig.colors.accent }}
      >
        {program.meta}
      </div>
    </div>
  );
}
