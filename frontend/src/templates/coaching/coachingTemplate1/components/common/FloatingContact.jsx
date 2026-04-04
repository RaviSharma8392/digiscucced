import React from "react";
import { Phone } from "lucide-react";

export default function FloatingContact({
  phone = "+9118001022727",
  whatsapp = "9118001022727",
}) {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] flex flex-col gap-3 pr-1">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
        group flex items-center
        w-14 md:hover:w-[150px]
        h-14
        bg-white/95 backdrop-blur-md
        rounded-l-full
        shadow-lg
        border border-white
        overflow-hidden
        transition-all duration-300
        cursor-pointer
        ">
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 relative shrink-0">
          <span className="absolute w-8 h-8 rounded-full bg-[#25D366]/40 animate-ping hidden md:block" />

          <div className="relative w-[38px] h-[38px] rounded-full flex items-center justify-center bg-white shadow-sm">
            <svg viewBox="0 0 32 32" className="w-[28px] h-[28px]">
              <path
                d="M16.002 0C7.165 0 0 7.163 0 16.003c0 2.805.733 5.538 2.128 7.942L.036 32l8.243-2.164C10.638 31.066 13.298 32 16.002 32 24.838 32 32 24.837 32 16.003 32 7.163 24.838 0 16.002 0z"
                fill="#25D366"
              />
              <path
                d="M23.518 19.33c-.378-.188-2.234-1.103-2.58-1.228-.346-.126-.598-.188-.85.188-.25.378-.974 1.228-1.194 1.48-.22.25-.44.283-.818.095-.378-.188-1.594-.588-3.037-1.875-1.122-.998-1.878-2.23-2.1-2.607-.22-.378-.024-.582.166-.77.17-.168.378-.44.567-.66.19-.22.25-.378.378-.63.125-.25.063-.472-.03-.66-.095-.188-.85-2.046-1.164-2.8-.304-.737-.61-.637-.85-.648-.22-.01-.472-.01-.724-.01-.252 0-.66.095-1.006.472-.346.378-1.32 1.29-1.32 3.146 0 1.855 1.352 3.647 1.54 3.898.19.25 2.657 4.053 6.435 5.59 4.384 1.782 4.384 1.194 5.14 1.13.755-.062 2.234-.913 2.548-1.794.314-.88.314-1.636.22-1.794-.094-.157-.346-.25-.724-.44z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <span
          className="
          hidden md:block
          text-[#25D366]
          font-semibold
          text-sm
          whitespace-nowrap
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          pr-5
          ">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phone}`}
        aria-label="Call Us"
        className="
        group flex items-center
        w-14 md:hover:w-[130px]
        h-14
        bg-white/95 backdrop-blur-md
        rounded-l-full
        shadow-lg
        border border-white
        overflow-hidden
        transition-all duration-300
        cursor-pointer
        ">
        <div className="flex items-center justify-center w-14 h-14 shrink-0">
          <div className="w-[38px] h-[38px] rounded-full bg-[#e0f7ff] flex items-center justify-center group-hover:bg-[#00bbf0] transition-colors duration-300">
            <Phone className="w-[18px] h-[18px] text-[#00bbf0] fill-[#00bbf0] group-hover:text-white group-hover:fill-white transition-colors duration-300" />
          </div>
        </div>

        <span
          className="
          hidden md:block
          text-[#00bbf0]
          font-semibold
          text-sm
          whitespace-nowrap
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          pr-5
          ">
          Call Us
        </span>
      </a>
    </div>
  );
}
