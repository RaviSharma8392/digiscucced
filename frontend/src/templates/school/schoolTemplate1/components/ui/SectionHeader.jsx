import { schoolConfig } from "../../config/schoolConfig";

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 ${isCenter ? "text-center" : "text-left"}`}>
      {tag && (
        <div
          className="text-[11px] font-medium uppercase tracking-[1.5px] mb-2"
          style={{ color: schoolConfig.theme.accent }}>
          {tag}
        </div>
      )}
      <h2
        className="font-heading text-[26px] font-semibold"
        style={{ color: schoolConfig.theme.primary }}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-slate-500 text-[14px] mt-2 leading-relaxed ${
            isCenter ? "max-w-lg mx-auto" : ""
          }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
