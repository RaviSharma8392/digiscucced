import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full border-t border-white/10 font-sans pt-24 pb-8 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          {/* Brand */}
          <div className="max-w-md">
            <Link to="/" className="inline-block mb-8">
              <span className="text-5xl font-light tracking-tighter">
                ds<span className="font-bold">&gt;</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              DigiSucceed helps local businesses grow using modern digital
              tools. From website development to online promotion, we help
              shops, startups, and small businesses attract more customers and
              increase sales.
            </p>

            <div className="flex gap-6">
              {["Instagram", "LinkedIn", "WhatsApp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:max-w-md w-full">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              Get Business Tips
            </h4>

            <p className="text-gray-400 text-sm mb-6">
              Subscribe to receive digital marketing tips and website ideas to
              help your business grow online.
            </p>

            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-transparent border border-white/20 px-6 py-4 text-sm text-white focus:outline-none focus:border-white placeholder-gray-500"
              />

              <button
                type="submit"
                className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-24">
          {/* Services */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Services
            </h5>

            {[
              "Website Development",
              "Banner Design",
              "Social Media Setup",
              "Digital Marketing",
            ].map((item) => (
              <Link
                key={item}
                to="/services"
                className="text-sm text-gray-300 hover:text-white transition">
                {item}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Company
            </h5>

            {["About Us", "Our Work", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm text-gray-300 hover:text-white transition">
                {item}
              </Link>
            ))}
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Resources
            </h5>

            {[
              "Marketing Tips",
              "Website Guides",
              "Business Growth",
              "Case Studies",
            ].map((item) => (
              <Link
                key={item}
                to="/blog"
                className="text-sm text-gray-300 hover:text-white transition">
                {item}
              </Link>
            ))}
          </div>

          {/* Location */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Location
            </h5>

            <div className="text-sm text-gray-400 leading-relaxed">
              <p className="text-white font-medium mb-1">
                DigiSucceed Services
              </p>

              <p>
                Nainital, Uttarakhand
                <br />
                India
              </p>
            </div>

            <Link
              to="/contact"
              className="text-xs uppercase tracking-wider text-white hover:text-gray-300 transition mt-2">
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} DigiSucceed Services. All rights
            reserved.
          </div>

          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
