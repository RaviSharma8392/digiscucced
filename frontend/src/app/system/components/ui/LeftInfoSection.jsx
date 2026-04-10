import React from "react";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const LeftInfoSection = () => {
  return (
    <div className="w-full lg:w-1/2 bg-slate-50 flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-12 border-r border-gray-100">
      {/* TOP CONTENT */}
      <div>
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-slate-900 leading-[1.1] mb-6">
          We Build Modern Websites That{" "}
          <span className="text-sky-600">Grow Your Business.</span>
        </h2>

        {/* Sub Text */}
        <p className="text-slate-600 text-base sm:text-lg mb-10 max-w-md leading-relaxed">
          We work completely online with clients worldwide. Fast communication,
          reliable delivery, and results-focused solutions.
        </p>

        {/* Highlight Points */}
        <div className="space-y-5 mb-10">
          {[
            { icon: GlobeAltIcon, text: "Working with clients globally 🌍" },
            { icon: ClockIcon, text: "Quick response within 24 hours" },
            {
              icon: ChatBubbleBottomCenterTextIcon,
              text: "Easy communication via WhatsApp & Email",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:border-sky-200 transition-colors">
                <item.icon className="w-5 h-5 text-sky-600" />
              </div>
              <p className="text-sm font-medium text-slate-700 leading-none">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* QR Section - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {/* WhatsApp QR */}
          <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-4 transition-all hover:shadow-md">
            <div className="bg-slate-50 p-1 rounded-lg">
              <img
                src="https://invoidea.com/service08/assets/images/background/whatsapp_qr_code.webp"
                alt="WhatsApp QR"
                className="w-14 h-14 object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">WhatsApp</p>
              <p className="text-xs text-slate-500">Scan for quick chat</p>
            </div>
          </div>

          {/* Email QR */}
          <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-4 transition-all hover:shadow-md">
            <div className="bg-slate-50 p-1 rounded-lg">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=mailto:hello@etrynix.com"
                alt="Email QR"
                className="w-14 h-14 object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Email</p>
              <p className="text-xs text-slate-500">Send an inquiry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftInfoSection;
