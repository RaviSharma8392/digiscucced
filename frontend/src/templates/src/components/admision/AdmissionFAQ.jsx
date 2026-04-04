/**
 * AdmissionFAQ.jsx
 * Accordion FAQ — config-driven.
 */
import { useState } from "react";

export default function AdmissionFAQ({ faqs, theme }) {
  const { primary, accent, surface, text, muted, fontDisplay, fontBody } = theme;
  const [open, setOpen] = useState(null);

  return (
    <section style={{ background: `${primary}06`, fontFamily: fontBody }} className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight" style={{ fontFamily: fontDisplay, color: text }}>
            Frequently <span style={{ color: accent }}>Asked</span>
          </h2>
          <div className="w-10 h-[3px] rounded-full mx-auto mt-3" style={{ background: accent }} />
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border overflow-hidden shadow-sm"
              style={{ borderColor: open === i ? accent : `${accent}20` }}>
              <button
                className="w-full text-left flex items-center justify-between px-6 py-5 font-semibold text-sm transition-colors"
                style={{
                  background: open === i ? `${accent}0d` : "white",
                  color: text,
                }}
                onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ml-4 transition-transform"
                  style={{
                    background: open === i ? accent : `${accent}15`,
                    color: open === i ? primary : accent,
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: muted }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
