import React from "react";
import { Mail, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-black text-white py-2 px-4 md:px-12 border-b border-white/10 sticky top-0 z-[100] w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Contact Info (Left Side) */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          {/* India Contact */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <img
              src="https://invoidea.com/service08/assets/images/background/india.svg"
              className="text-base"
            />
            <a
              href="tel:+917292050505"
              className="hover:text-orange-400 transition-colors">
              +91 7292 050505
            </a>
          </div>

          {/* USA Contact */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-base">🇺🇸</span>
            <a
              href="tel:+12054650505"
              className="hover:text-orange-400 transition-colors">
              +1 205 465 0505
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Mail
              size={14}
              className="text-white group-hover:text-orange-400 transition-colors"
            />
            <a
              href="mailto:hello@invoidea.com"
              className="hover:text-orange-400 transition-colors">
              hello@invoidea.com
            </a>
          </div>
        </div>

        {/* Social Icons (Right Side) */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="hover:text-orange-400 transition-all hover:scale-110">
            <Facebook size={16} fill="currentColor" />
          </a>
          <a
            href="#"
            className="hover:text-orange-400 transition-all hover:scale-110">
            <Youtube size={18} fill="currentColor" />
          </a>
          <a
            href="#"
            className="hover:text-orange-400 transition-all hover:scale-110">
            <Linkedin size={16} fill="currentColor" />
          </a>
          <a
            href="#"
            className="hover:text-orange-400 transition-all hover:scale-110">
            <Instagram size={16} />
          </a>
          {/* Custom SVG for the MS Teams/Additional icon */}
          <a
            href="#"
            className="hover:text-orange-400 transition-all hover:scale-110">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.008.069-.008 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
