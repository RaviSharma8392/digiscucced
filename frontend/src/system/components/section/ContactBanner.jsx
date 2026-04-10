import React from "react";

const ContactCTA = () => {
  return (
    <section className="bg-[#f28123] min-h-[400px] flex items-center relative overflow-hidden px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content Area */}
        <div className="flex-1 text-white z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
            Let's Build Your Next Project With Us
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl leading-relaxed">
            Need a new website or want to upgrade your existing one? Share your
            idea with us. We are here to guide you thoroughly. Let's connect &
            get started.
          </p>

          {/* Action Button */}
          <button className="bg-white text-[#f28123] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 mb-10 shadow-lg">
            Contact Now
          </button>

          {/* Contact Details Footer */}
          <div className="flex flex-wrap gap-y-4 gap-x-8 text-sm md:text-base border-t border-white/20 pt-6">
            <div className="flex items-center gap-2">
              <span className="text-lg">🇮🇳</span>
              <a href="tel:+917292050505" className="hover:underline">
                +91 7292 050505
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🇺🇸</span>
              <a href="tel:+12054650505" className="hover:underline">
                +1 205 465 0505
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:hello@invoidea.com" className="hover:underline">
                hello@invoidea.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="flex-1 relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-md transform md:translate-y-8">
            <img
              src="/contact-illustration.png"
              alt="Project collaboration"
              className=" w-full"
            />
            {/* Optional "Contact Us" floating badge to match your screenshot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/90 py-2 px-8 rounded shadow-xl rotate-[-5deg] border-2 border-white hidden md:block">
              <span className="text-gray-900 font-black tracking-widest text-xl">
                CONTACT US
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Circles (Optional) */}
      <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ContactCTA;
