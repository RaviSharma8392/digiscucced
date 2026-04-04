import React, { useState } from "react";
import {
  Building2,
  MessageCircleQuestion,
  IndianRupee,
  FileSignature,
  ArrowRight,
} from "lucide-react";

export default function QuickActionCards({ config = {}, theme = {} }) {
  // ─── Theme tokens ────────────────────────────────────────────────
  const t = {
    primary: theme.primary || "#003366",
    background: theme.background || "#ffffff",
    text: theme.text || "#1f2937",
    textHover: theme.textHover || "#003366",
    fontFamily: theme.fontFamily || "'Inter', sans-serif",
    footerBg: theme.footerBg || "#002855",
    footerText: theme.footerText || "#ffffff",
    footerMuted: theme.footerMuted || "#9ca3af",
    primaryHover: theme.primaryHover || "#DC2626",
    border: theme.border || "#e5e7eb",
  };

  const defaultItems = [
    {
      id: 1,
      title: "Campus Tour",
      subtitle: "See it in person",
      icon: Building2,
      link: "/campus-tour",
    },
    {
      id: 2,
      title: "Admission Enquiry",
      subtitle: "We're happy to help",
      icon: MessageCircleQuestion,
      link: "/admission-enquiry",
    },
    {
      id: 3,
      title: "Online Payment",
      subtitle: "Quick & secure",
      icon: IndianRupee,
      link: "/payment",
    },
    {
      id: 4,
      title: "Registration",
      subtitle: "Start your journey",
      icon: FileSignature,
      link: "/registration",
    },
  ];

  const items = config?.items || defaultItems;

  // Alternate accent between primary & primaryHover for visual rhythm
  const accent = (idx) => (idx % 2 === 0 ? t.primary : t.primaryHover);

  // Per-card hover tracking
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-14"
      style={{ fontFamily: t.fontFamily }}>
      {/* Unified card row with shared shadow */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ boxShadow: "0 20px 60px -10px rgba(0,0,0,0.18)" }}>
        {items.map((item, idx) => {
          const Icon = item.icon;
          const ac = accent(idx);
          const isHov = hovered === idx;
          const isLast = idx === items.length - 1;

          // Dynamic styles based on hover
          const cardBg = isHov ? ac : t.background;
          const titleColor = isHov ? t.footerText : t.primary;
          const subColor = isHov ? `${t.footerText}bb` : t.footerMuted;
          const iconBg = isHov ? "rgba(255,255,255,0.18)" : `${ac}14`;
          const iconColor = isHov ? t.footerText : ac;
          const arrowOpacity = isHov ? 1 : 0;
          const arrowTx = isHov ? "0px" : "-6px";
          const barScale = isHov ? "scaleX(1)" : "scaleX(0)";

          return (
            <a
              key={item.id}
              href={item.link}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex flex-col justify-between overflow-hidden no-underline"
              style={{
                background: cardBg,
                borderRight: !isLast ? `1px solid ${t.border}` : "none",
                borderBottom: `1px solid ${t.border}`,
                padding: "2rem 1.75rem 1.75rem",
                minHeight: "170px",
                transition: "background 0.3s ease",
                textDecoration: "none",
              }}>
              {/* TOP ROW: icon + arrow */}
              <div className="flex items-start justify-between mb-6">
                {/* Icon pill */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    background: iconBg,
                    color: iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.3s, color 0.3s, transform 0.3s",
                    transform: isHov ? "scale(1.08)" : "scale(1)",
                  }}>
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* Arrow icon fades in on hover */}
                <ArrowRight
                  size={17}
                  strokeWidth={2.2}
                  style={{
                    color: t.footerText,
                    opacity: arrowOpacity,
                    transform: `translateX(${arrowTx})`,
                    transition: "opacity 0.3s, transform 0.3s",
                    marginTop: "6px",
                  }}
                />
              </div>

              {/* TEXT */}
              <div>
                <p
                  style={{
                    color: titleColor,
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    lineHeight: 1.3,
                    marginBottom: "5px",
                    transition: "color 0.3s",
                    fontFamily: t.fontFamily,
                  }}>
                  {item.title}
                </p>
                <p
                  style={{
                    color: subColor,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "color 0.3s",
                    fontFamily: t.fontFamily,
                  }}>
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom slide-in bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: t.footerText,
                  transform: barScale,
                  transformOrigin: "left",
                  transition: "transform 0.35s ease",
                }}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
