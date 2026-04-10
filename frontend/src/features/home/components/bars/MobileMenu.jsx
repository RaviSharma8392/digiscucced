import React from "react";
import { Link } from "react-router-dom";
import { menuConfig } from "./menuConfig";

const MobileMenu = ({ open, setOpen }) => {
  const { navItems, contact } = menuConfig;

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* DRAWER */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transition-all duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">Menu</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 text-2xl">
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-5 py-6 flex flex-col h-full">
          {/* NAV ITEMS */}
          <ul className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                style={{ transitionDelay: open ? `${index * 70}ms` : "0ms" }}
                className={`transition-all duration-400 ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                }`}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-gray-800 hover:text-orange-500 transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-6">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-orange-500 text-white py-2.5 rounded-lg font-semibold shadow hover:bg-orange-600 transition">
              Free Consultation
            </Link>
          </div>

          {/* FOOTER */}
          <div className="mt-auto pt-6">
            <div className="h-[1px] bg-gray-100 mb-4" />

            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2">
              {contact.label}
            </p>

            <div className="flex flex-col gap-1">
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-gray-800 break-all hover:text-orange-500">
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="text-sm text-gray-800 hover:text-orange-500">
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
