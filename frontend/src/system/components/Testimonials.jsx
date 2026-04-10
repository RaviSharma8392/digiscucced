import { useState, useRef, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: "01",
    name: "Rajesh Sharma",
    role: "Owner",
    company: "Sharma Electronics",
    location: "Delhi, India",
    service: "GMB",
    text: "Etrynix completely transformed our Google presence...",
    rating: 5,
    initials: "RS",
    metric: "+40% Footfall",
  },
  // keep rest same...
];

function StarIcon() {
  return (
    <svg width="11" height="11" fill="#e24e33">
      <path d="M6 1l1.35 2.73 3.01.44-2.18 2.12.51 3-2.69-1.41L3.31 9.3l.51-3L1.64 4.17l3.01-.44z" />
    </svg>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [cardW, setCardW] = useState(400);

  const dragStartX = useRef(null);
  const dragDeltaX = useRef(0);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 480) setCardW(w - 40);
      else if (w < 768) setCardW(w - 60);
      else setCardW(400);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const visibleCount = () => {
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const maxIndex = Math.max(0, testimonials.length - visibleCount());
  const goTo = (i) => setCurrent(Math.max(0, Math.min(i, maxIndex)));

  const offset = current * (cardW + 20);

  return (
    <section className="tmx-wrap bg-[#080806] text-white px-6 md:px-12 py-16">
      {/* Heading */}
      <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
            Client Stories
          </p>
          <h2 className="tmx-heading text-3xl md:text-5xl font-bold">
            What Our Clients <br />
            <span className="text-[#e24e33] italic">Say About Us</span>
          </h2>
        </div>

        <div className="flex gap-2">
          <button onClick={() => goTo(current - 1)}>←</button>
          <button onClick={() => goTo(current + 1)}>→</button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden cursor-grab">
        <div
          className="flex gap-5 transition-transform duration-500"
          style={{ transform: `translateX(-${offset}px)` }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="tmx-card relative rounded-xl p-6 bg-white/5 flex-shrink-0"
              style={{ width: cardW }}>
              {/* Metric */}
              <span className="tmx-metric absolute top-4 right-4 text-xs px-2 py-1 rounded-full">
                {t.metric}
              </span>

              {/* Avatar */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e24e33]/20 text-[#e24e33] text-sm">
                  {t.initials}
                </div>
                <span className="text-xs uppercase text-gray-400">
                  {t.service === "GMB" ? "Google Business" : "Web Dev"}
                </span>
              </div>

              {/* Text */}
              <p className="text-sm text-gray-300 mb-6">{t.text}</p>

              {/* Footer */}
              <div className="border-t border-white/10 pt-4 flex justify-between">
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.role}, {t.company}
                  </p>
                  <div className="flex mt-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>

                <span className="text-3xl text-[#e24e33]/20 font-serif">
                  {t.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-6">
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded ${
                current === i ? "w-6 bg-[#e24e33]" : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>

        <div className="flex-1 bg-gray-700 h-[2px] max-w-[120px]">
          <div
            className="tmx-progress"
            style={{
              width: `${((current + 1) / (maxIndex + 1)) * 100}%`,
            }}
          />
        </div>

        <span className="text-xs text-gray-500">
          {current + 1} / {testimonials.length}
        </span>
      </div>
    </section>
  );
}
