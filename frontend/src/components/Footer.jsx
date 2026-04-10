import React from "react";
import {
  GlobeAltIcon,
  BoltIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import siteConfig from "../siteConfig";

const Footer = () => {
  const { brand, contact, social } = siteConfig;

  // Custom SVG Components to match Heroicon's clean aesthetic
  const InstagramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );

  const YoutubeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 69.44 69.44 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 69.44 69.44 0 0 1-15 0 2 2 0 0 1-2-2Z" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );

  const XIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 4l11.733 16H20L8.267 4z" />
      <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  return (
    <footer className="bg-black text-gray-300 font-[Inter]">
      <div className=" mx-auto px-6 lg:px-12 py-16">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-800 pb-12">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">{brand}</h2>
            <p className="text-gray-400 mb-6">
              We build websites, manage Google presence, and grow your business
              online
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <GlobeAltIcon className="w-5 h-5 text-orange-500" /> Serving
                Worldwide
              </span>
              <span className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-orange-500" /> Fast Delivery
              </span>
              <span className="flex items-center gap-2">
                <BriefcaseIcon className="w-5 h-5 text-orange-500" /> Business
                Growth
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <p className="text-sm">{contact.email}</p>
              <p className="text-sm mt-2">{contact.phone}</p>
              <p className="text-sm mt-2 text-gray-400">
                {contact.availability}
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Quick Action</h4>
              <p className="text-sm text-gray-400">
                Start your project today and grow your business online.
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition">
                Start Project
              </button>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex items-center justify-between flex-wrap gap-4 py-6 border-b border-gray-800">
          <h4 className="text-white font-medium">Follow Us</h4>
          <div className="flex gap-5 items-center">
            <a
              href={social.youtube}
              className="hover:text-orange-500 transition-colors">
              <YoutubeIcon />
            </a>
            <a
              href={social.twitter}
              className="hover:text-orange-500 transition-colors">
              <XIcon />
            </a>
            <a
              href={social.linkedin}
              className="hover:text-orange-500 transition-colors">
              <LinkedinIcon />
            </a>
            <a
              href={social.instagram}
              className="hover:text-orange-500 transition-colors">
              <InstagramIcon />
            </a>
            <a
              href={social.facebook}
              className="hover:text-orange-500 transition-colors">
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 py-12">
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">
                Website Development
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Google Business Setup
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Social Media Marketing
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Paid Ads Management
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Growth</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">
                Local SEO
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Lead Generation
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Brand Building
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Contact
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Portfolio
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">
                Blog
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Case Studies
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Free Tools
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} {brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
