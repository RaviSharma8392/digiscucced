import { WEBSITE_THEME } from "../../../school/theme/theme";

export function AdmissionProcess({ process }) {
  const { colors, fonts } = WEBSITE_THEME;
  const { primary, accent, surface, text, muted } = colors;
  const { display, body } = fonts;

  return (
    <section
      style={{ background: surface, fontFamily: body }}
      className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Admission"
          highlight="Process"
          accent={accent}
          fontDisplay={display}
        />

        <div className="relative mt-14">
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-[2px] opacity-20"
            style={{ background: accent }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center group">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-5 border-4 transition-transform group-hover:scale-110 shadow-lg z-10"
                  style={{
                    background: primary,
                    color: accent,
                    borderColor: accent,
                    boxShadow: `0 4px 20px ${accent}30`,
                  }}>
                  {step.step}
                </div>

                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: text, fontFamily: display }}>
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: muted }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Classes Available ─────────────────────────────────────────────────────────
export function ClassesAvailable({ classes, theme }) {
  const { primary, accent, surface, text, muted, fontDisplay, fontBody } =
    theme;
  return (
    <section
      style={{ background: `${primary}08`, fontFamily: fontBody }}
      className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Classes"
          highlight="Available"
          accent={accent}
          fontDisplay={fontDisplay}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className="relative bg-white rounded-2xl p-5 border-l-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              style={{ borderColor: accent }}>
              <div className="flex justify-between items-start mb-3">
                <span
                  className="text-base font-bold"
                  style={{ color: text, fontFamily: fontDisplay }}>
                  {cls.label}
                </span>
                <span
                  className="text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider"
                  style={{ background: `${accent}18`, color: accent }}>
                  {cls.seats} seats
                </span>
              </div>
              <p className="text-xs mb-2" style={{ color: muted }}>
                Age: {cls.ageGroup}
              </p>
              {cls.note && (
                <p
                  className="text-[11px] font-medium mt-2 flex items-center gap-1"
                  style={{ color: accent }}>
                  <span>⚠</span> {cls.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Fee Structure ─────────────────────────────────────────────────────────────
export function FeeStructure({ fees, theme }) {
  const { primary, accent, surface, text, muted, fontDisplay, fontBody } =
    theme;
  return (
    <section
      style={{ background: surface, fontFamily: fontBody }}
      className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Fee"
          highlight="Structure"
          accent={accent}
          fontDisplay={fontDisplay}
        />
        <p className="text-center text-sm mt-2 mb-10" style={{ color: muted }}>
          {fees.note}
        </p>
        <div
          className="overflow-x-auto rounded-2xl border shadow-sm"
          style={{ borderColor: `${accent}20` }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: primary }}>
                {[
                  "Class Group",
                  "Admission Fee",
                  "Tuition Fee",
                  "Annual Charges",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-4 text-xs font-black uppercase tracking-widest"
                    style={{ color: accent }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fees.slabs.map((row, i) => (
                <tr
                  key={i}
                  className="border-t transition-colors hover:bg-amber-50/40"
                  style={{
                    borderColor: `${accent}10`,
                    background: i % 2 === 0 ? "white" : `${accent}04`,
                  }}>
                  <td
                    className="px-5 py-4 font-semibold"
                    style={{ color: text }}>
                    {row.group}
                  </td>
                  <td className="px-5 py-4" style={{ color: muted }}>
                    {fees.currency}
                    {row.admission}
                  </td>
                  <td className="px-5 py-4 font-bold" style={{ color: accent }}>
                    {fees.currency}
                    {row.tuition}
                  </td>
                  <td className="px-5 py-4" style={{ color: muted }}>
                    {fees.currency}
                    {row.annual}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ── Important Dates ───────────────────────────────────────────────────────────
export function ImportantDates({ importantDates, theme }) {
  const { primary, accent, text, muted, fontDisplay, fontBody } = theme;
  return (
    <section
      style={{ background: `${primary}`, fontFamily: fontBody }}
      className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Important"
          highlight="Dates"
          accent={accent}
          fontDisplay={fontDisplay}
          light
        />
        <div className="mt-12 space-y-3">
          {importantDates.map((d, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-4 rounded-xl border backdrop-blur-sm"
              style={{ borderColor: `${accent}25`, background: `${accent}08` }}>
              <div className="flex items-center gap-4">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{ background: accent, color: primary }}>
                  {i + 1}
                </span>
                <span className="font-semibold text-white text-sm">
                  {d.label}
                </span>
              </div>
              <span className="text-sm font-bold" style={{ color: accent }}>
                {d.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Required Documents ────────────────────────────────────────────────────────
export function RequiredDocuments({ documents, theme }) {
  const { primary, accent, surface, text, muted, fontDisplay, fontBody } =
    theme;
  return (
    <section
      style={{ background: surface, fontFamily: fontBody }}
      className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="Required"
          highlight="Documents"
          accent={accent}
          fontDisplay={fontDisplay}
        />
        <ul className="mt-10 space-y-3">
          {documents.map((doc, i) => (
            <li
              key={i}
              className="flex items-start gap-4 px-5 py-4 rounded-xl border bg-white shadow-sm"
              style={{ borderColor: `${accent}18` }}>
              <span
                className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black mt-0.5"
                style={{ background: accent, color: "white" }}>
                ✓
              </span>
              <span className="text-sm leading-relaxed" style={{ color: text }}>
                {doc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── Shared SectionHeader ──────────────────────────────────────────────────────
function SectionHeader({
  title,
  highlight,
  accent,
  fontDisplay,
  light = false,
}) {
  return (
    <div className="text-center">
      <h2
        className={`text-3xl sm:text-4xl font-black tracking-tight ${light ? "text-white" : "text-gray-900"}`}
        style={{ fontFamily: fontDisplay }}>
        {title} <span style={{ color: accent }}>{highlight}</span>
      </h2>
      <div
        className="w-10 h-[3px] rounded-full mx-auto mt-3"
        style={{ background: accent }}
      />
    </div>
  );
}
