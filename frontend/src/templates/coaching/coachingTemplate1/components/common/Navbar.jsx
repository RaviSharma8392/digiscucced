import React, { useState, useCallback, memo } from "react";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronsDown,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const handleLogoError = (e) => (e.currentTarget.style.display = "none");

const NavItem = memo(({ link, slug }) => (
  <li className="relative group h-full flex items-center cursor-pointer">
    <Link
      to={`/${slug}/${link.url}`}
      className="flex items-center gap-1.5 text-gray-800 font-medium text-[15px] hover:text-[#007cc2] transition-colors relative py-2">
      <span className="relative">
        {link.label}
        {link.hasBadge && (
          <span className="absolute -top-3.5 -right-6 bg-[#eaf4ec] text-[#298d45] border border-[#a3d9af] text-[9px] px-1 py-[1px] rounded-[3px] font-bold z-10 leading-none shadow-sm">
            New
          </span>
        )}
      </span>

      {link.hasDropdown && (
        <FiChevronDown className="text-gray-500 text-sm mt-0.5 group-hover:text-[#007cc2] group-hover:rotate-180 transition-all duration-300" />
      )}

      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#007cc2] transition-all duration-300 group-hover:w-full rounded-full" />
    </Link>

    {link.hasDropdown && link.dropdownItems?.length > 0 && (
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 w-56 z-50">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-0.5">
          {link.dropdownItems.map((item) => (
            <Link
              key={item.url}
              to={`/${slug}/${link.url}`}
              className="px-4 py-2.5 hover:bg-blue-50 text-sm font-medium text-gray-700 hover:text-[#007cc2] rounded-lg transition-colors flex justify-between items-center group/item">
              {item.label}
              <FiArrowRight className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all text-sm" />
            </Link>
          ))}
        </div>
      </div>
    )}
  </li>
));

NavItem.displayName = "NavItem";

const MobileNavItem = memo(({ link, onClose, slug }) => (
  <div className="border-b border-gray-100 last:border-0">
    <Link
      to={`/${slug}/${link.url}`}
      onClick={onClose}
      className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-blue-50/60 transition-colors">
      <span className="text-[15px] font-semibold text-gray-800 flex items-center gap-2">
        {link.label}
        {link.hasBadge && (
          <span className="text-[9px] font-bold bg-[#eaf4ec] text-[#298d45] border border-[#a3d9af] px-1.5 py-0.5 rounded-[3px]">
            NEW
          </span>
        )}
      </span>

      {link.hasDropdown && <FiChevronsDown className="text-gray-400 text-sm" />}
    </Link>
  </div>
));

MobileNavItem.displayName = "MobileNavItem";

const Navbar = ({
  slug,
  logoUrl,
  brandName = "Institute",
  navLinks = [],
  phone = "1800-102-2727",
}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to={`/${slug}`}
          className="flex items-center shrink-0 mr-8"
          aria-label={`${brandName} home`}>
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={`${brandName} logo`}
              className="h-10 sm:h-12 w-auto object-contain"
              onError={handleLogoError}
            />
          ) : (
            <span className="text-2xl font-black text-[#00bbf0]">
              {brandName}
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden xl:flex items-center gap-8 h-full list-none m-0 p-0 flex-1 justify-center">
          {navLinks.map((link) => (
            <NavItem key={link.url} link={link} slug={slug} />
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5 shrink-0 ml-auto">
          <a href={`tel:${phone}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#eef6fc] group-hover:bg-[#dbeffd] transition-colors rounded-full flex items-center justify-center">
              <FiPhone size={18} className="text-[#3b9ae1]" />
            </div>

            <div className="flex flex-col">
              <span className="text-[12px] text-gray-500 font-medium leading-none">
                Call now
              </span>

              <span className="text-[15px] font-bold text-gray-900 leading-tight mt-1">
                {phone}
              </span>
            </div>
          </a>

          <button className="bg-[#f37021] text-white px-6 py-2.5 rounded-md text-sm font-bold tracking-wide hover:bg-[#de6015] hover:shadow-md transition-all active:scale-95 ml-2">
            Apply Now
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2.5 rounded-lg hover:bg-gray-50 transition-colors ml-auto"
          onClick={toggleMenu}>
          {open ? (
            <FiX size={24} className="text-gray-800" />
          ) : (
            <FiMenu size={24} className="text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          open
            ? "max-h-[600px] border-b border-gray-200 shadow-lg opacity-100"
            : "max-h-0 opacity-0"
        }`}>
        <div className="px-4 pt-2 pb-6 space-y-0.5">
          {navLinks.map((link) => (
            <MobileNavItem
              key={link.url}
              link={link}
              onClose={closeMenu}
              slug={slug}
            />
          ))}

          <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
            <button className="w-full bg-[#f37021] text-white font-bold py-3 rounded-xl hover:bg-[#de6015] transition-colors">
              Apply Now
            </button>

            <a
              href={`tel:${phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#eef6fc] text-[#3b9ae1] font-bold rounded-xl transition-colors">
              <FiPhone size={18} />
              Call {phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
