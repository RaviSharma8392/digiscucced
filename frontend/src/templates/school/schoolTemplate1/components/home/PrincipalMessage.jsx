import { schoolConfig } from "../../config/schoolConfig";
import SectionHeader from "../ui/SectionHeader";

export default function PrincipalMessage() {
  const { principal, theme } = schoolConfig;

  if (!principal) return null;

  return (
    <div>
      <SectionHeader
        tag="A Word From"
        title="Principal's Message"
        align="left"
      />

      <div
        className="rounded-xl p-8 flex flex-col sm:flex-row gap-6 items-start text-white"
        style={{ background: theme.primary }}>
        {/* Photo or initials */}
        <div className="flex-shrink-0">
          {principal.photo ? (
            <img
              src={principal.photo}
              alt={principal.name}
              className="w-20 h-20 rounded-full object-cover"
              style={{ border: `3px solid ${theme.accent}` }}
            />
          ) : (
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-[26px]"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: `3px solid ${theme.accent}`,
              }}>
              {principal.initials || principal.name?.charAt(0)}
            </div>
          )}
        </div>

        {/* Quote */}
        <div>
          <p className="text-[16px] italic leading-[1.75] text-slate-200 mb-4">
            <span
              className="text-[28px] not-italic align-[-6px] mr-1"
              style={{ color: theme.accent }}>
              "
            </span>
            {principal.quote}
          </p>

          <div
            className="text-[14px] font-semibold"
            style={{ color: theme.accent }}>
            {principal.name}
          </div>

          {principal.title && (
            <div className="text-[12px] text-slate-300 mt-0.5">
              {principal.title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
