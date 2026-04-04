import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react"; // optional for social

export default function Footer({ data }) {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-3">
            {data.usefulLinks.map((item, i) => (
              <li key={i} className="hover:text-red-500 cursor-pointer">
                <p>{item.label}</p>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {data.quickLinks.map((item, i) => (
              <li key={i} className="hover:text-red-500 cursor-pointer">
                <p>{item.label}</p>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Downloads */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Downloads</h3>
          <ul className="space-y-3">
            {data.downloads.map((item, i) => (
              <li key={i} className="hover:text-red-500 cursor-pointer">
                <p>{item.label}</p>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

          <p className="font-semibold mb-2">{data.contact.school}</p>

          <div className="text-sm text-gray-600 space-y-1 mb-4">
            {data.contact.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-gray-500" />
              <span>{data.contact.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-4 w-4 text-gray-500" />
              <span>{data.contact.email}</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <FacebookIcon className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <InstagramIcon className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            <TwitterIcon className="w-5 h-5 cursor-pointer hover:text-blue-400" />
            <YoutubeIcon className="w-5 h-5 cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>

      <div className=" mt-10 pt-4 text-center text-sm text-gray-600">
        <p>
          © 2024 - 2026{" "}
          <span className="text-blue-700 font-semibold">
            Government Inter College (GIC), Nakuchiyatal
          </span>
          . All Rights Reserved.
        </p>

        <p className="mt-1 text-gray-500">
          Official Website of Government Inter College, Nakuchiyatal, Nainital
          (Uttarakhand)
        </p>
      </div>
    </footer>
  );
}
