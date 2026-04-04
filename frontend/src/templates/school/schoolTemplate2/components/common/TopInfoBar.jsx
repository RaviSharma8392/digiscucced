import React, { useEffect, useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

// --- Custom Social Icons (Heroicons doesn't include brands) ---
const Facebook = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);
const Instagram = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
);
const TwitterX = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 4.126H5.078z" />
  </svg>
);
const Youtube = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// --- Data ---
const links = [
  { title: "Pay Fee Online", hindi: "ऑनलाइन शुल्क का भुगतान करें", url: "#" },
  { title: "AISSEE", hindi: "एआईएसएसईई", url: "#" },
  { title: "Recruitment", hindi: "भर्ती", url: "#" },
  { title: "Results", hindi: "परिणाम", url: "#" },
  {
    title: "Mandatory Public Disclosure",
    hindi: "अनिवार्य सार्वजनिक प्रकटीकरण",
    url: "#",
  },
  { title: "ERP Login", hindi: "", url: "#" },
  { title: "NCC", hindi: "एनसीसी", url: "#" },
];

const socialLinks = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: TwitterX, href: "#", label: "Twitter" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

const FontAndMarqueeStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap');

    .font-rajdhani { font-family: 'Rajdhani', sans-serif; }

    /* Marquee scroll */
    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 35s linear infinite;
    }
    .marquee-track:hover { animation-play-state: paused; }
  `}</style>
);

export default function TopInfoBar() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ date: "", clock: "" });

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = new Date();
      setTime({
        date: now.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        clock: now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const doubled = [...links, ...links];

  return (
    <>
      <FontAndMarqueeStyles />

      {/* Main Bar */}
      <div className="font-rajdhani w-full text-white text-[13px] bg-[linear-gradient(135deg,#7a0000_0%,#9b0000_50%,#7a0000_100%)] shadow-md relative z-10">
        <div className="max-w-[1600px] mx-auto flex items-stretch min-h-[44px]">
          {/* ── "QUICK LINKS" label ── */}
          <div className="flex-shrink-0 flex items-center px-4 md:px-5 border-r border-red-900/50 gap-2.5 bg-black/20">
            <span className="w-2 h-2 rounded-full bg-yellow-300 flex-shrink-0 animate-pulse shadow-[0_0_8px_rgba(253,224,71,0.8)]" />
            <span className="font-bold text-[11px] tracking-widest uppercase text-yellow-200 whitespace-nowrap hidden sm:block">
              Quick Links
            </span>
            <span className="font-bold text-[11px] tracking-widest uppercase text-yellow-200 whitespace-nowrap sm:hidden">
              Links
            </span>
          </div>

          {/* ── Marquee links ── */}
          <div className="overflow-hidden flex-1 min-w-0 flex items-center relative">
            {/* Soft gradient fade for red background */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#8a0000] to-transparent z-10 pointer-events-none" />

            <div className="marquee-track">
              {doubled.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="flex flex-col justify-center px-6 h-full border-r border-red-900/40 py-1.5 hover:bg-black/20 transition-colors whitespace-nowrap group">
                  <span className="font-semibold leading-tight text-white group-hover:text-yellow-200 transition-colors">
                    {link.title}
                  </span>
                  {link.hindi && (
                    <span className="text-[10px] text-red-200 leading-tight group-hover:text-yellow-100 transition-colors">
                      {link.hindi}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#8a0000] to-transparent z-10 pointer-events-none" />
          </div>

          {/* ── Right: Contact + Clock + Social ── */}
          <div className="flex items-center gap-4 md:gap-6 px-4 md:px-5 flex-shrink-0 border-l border-red-900/50 bg-black/15">
            {/* Phone */}
            <a
              href="tel:+919439114922"
              className="hidden lg:flex items-center gap-1.5 hover:text-yellow-300 transition-colors whitespace-nowrap group">
              <PhoneIcon className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
              <span className="font-semibold tracking-wide">
                +91 94391 14922
              </span>
            </a>

            <span className="hidden lg:block h-3.5 w-px bg-red-300/30" />

            {/* Email */}
            <a
              href="mailto:sainikschoolsambalpur@gmail.com"
              className="hidden xl:flex items-center gap-1.5 hover:text-yellow-300 transition-colors whitespace-nowrap group">
              <EnvelopeIcon className="w-4 h-4 opacity-80 group-hover:opacity-100" />
              <span className="font-semibold">
                sainikschoolsambalpur@gmail.com
              </span>
            </a>

            <span className="hidden xl:block h-3.5 w-px bg-red-300/30" />

            {/* Live Clock */}
            <div className="hidden md:flex items-center gap-2 whitespace-nowrap min-w-[70px]">
              <ClockIcon className="w-4 h-4 opacity-80" />
              <div className="flex flex-col leading-none">
                {mounted ? (
                  <>
                    <span className="text-yellow-200 text-[10px] font-semibold tracking-wide">
                      {time.date}
                    </span>
                    <span className="font-bold tabular-nums text-white text-[12px] mt-0.5">
                      {time.clock}
                    </span>
                  </>
                ) : (
                  <span className="text-[10px] text-red-200">Loading...</span>
                )}
              </div>
            </div>

            <span className="hidden md:block h-3.5 w-px bg-red-300/30" />

            {/* Social Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="opacity-90 hover:opacity-100 hover:text-yellow-300 hover:-translate-y-[2px] transition-all duration-200">
                  <Icon className="w-[15px] h-[15px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
