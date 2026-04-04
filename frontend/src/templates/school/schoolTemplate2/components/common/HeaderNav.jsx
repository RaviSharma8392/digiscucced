import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { iconMap } from "../../../../../app/iconMap";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function HeaderNav({ navigation = [] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (label) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="w-full z-50"
      style={{
        background: "rgba(11,31,58,0.97)",
        borderTop: "3px solid #C9A84C",
        boxShadow: "0 4px 24px rgba(11,31,58,0.18)",
        fontFamily: "'DM Sans', sans-serif",
      }}>
      {/* DESKTOP NAV */}
      <div className="hidden lg:flex justify-center">
        <ul className="flex items-center gap-1 py-1">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-sm relative group"
              style={{
                color: isActive("/") ? "#E8C97A" : "rgba(250,250,248,0.78)",
              }}>
              <span className="text-base">🏠</span>
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-200"
                style={{
                  width: isActive("/") ? "60%" : "0%",
                  background: "#C9A84C",
                }}
              />
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] group-hover:w-[60%] w-0 transition-all duration-200"
                style={{ background: "rgba(201,168,76,0.5)" }}
              />
            </Link>
          </li>

          {navigation.map((link) => {
            const Icon = iconMap[link.icon];
            const active = isActive(link.path);
            const hasChildren = link.children?.length > 0;

            return (
              <li key={link.path || link.label} className="relative group">
                <Link
                  to={link.path || "#"}
                  className="flex items-center gap-1.5 px-4 py-3 text-sm font-medium transition-all duration-200 relative"
                  style={{
                    color: active ? "#E8C97A" : "rgba(250,250,248,0.78)",
                    letterSpacing: "0.3px",
                  }}>
                  {Icon && <Icon className="w-4 h-4 opacity-80" />}
                  {link.label}
                  {hasChildren && (
                    <ChevronDownIcon className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                  )}

                  {/* Active underline */}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-200"
                    style={{
                      width: active ? "60%" : "0%",
                      background: "#C9A84C",
                    }}
                  />
                  {/* Hover underline */}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-[60%] transition-all duration-200"
                    style={{ background: "rgba(201,168,76,0.45)" }}
                  />
                </Link>

                {/* Dropdown */}
                {hasChildren && (
                  <ul
                    className="absolute left-0 top-full mt-0 hidden group-hover:block rounded-sm min-w-[210px] z-50 overflow-hidden"
                    style={{
                      background: "rgba(11,31,58,0.98)",
                      border: "1px solid rgba(201,168,76,0.18)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
                    }}>
                    {/* Gold top accent */}
                    <div
                      className="h-[2px] w-full"
                      style={{
                        background:
                          "linear-gradient(to right, #C9A84C, #E8C97A, #C9A84C)",
                      }}
                    />
                    {link.children.map((child, idx) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm transition-all duration-150"
                          style={{
                            color: isActive(child.path)
                              ? "#E8C97A"
                              : "rgba(250,250,248,0.72)",
                            borderBottom:
                              idx < link.children.length - 1
                                ? "1px solid rgba(255,255,255,0.05)"
                                : "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(201,168,76,0.1)";
                            e.currentTarget.style.color = "#E8C97A";
                            e.currentTarget.style.paddingLeft = "20px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = isActive(child.path)
                              ? "#E8C97A"
                              : "rgba(250,250,248,0.72)";
                            e.currentTarget.style.paddingLeft = "16px";
                          }}>
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "#C9A84C", opacity: 0.6 }}
                          />
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* MOBILE BAR */}
      <div className="flex lg:hidden justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-[2px]" style={{ background: "#C9A84C" }} />
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: "rgba(250,250,248,0.75)", fontSize: 11 }}>
            Menu
          </span>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="p-1 rounded-sm transition-colors duration-200"
          style={{ color: "#E8C97A" }}>
          {mobileOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MOBILE PANEL */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            borderTop: "1px solid rgba(201,168,76,0.2)",
            background: "rgba(11,31,58,0.99)",
          }}>
          <Link
            to="/"
            className="flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all duration-150"
            style={{
              color: isActive("/") ? "#E8C97A" : "rgba(250,250,248,0.75)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
            onClick={() => setMobileOpen(false)}>
            <span>🏠</span> Home
          </Link>

          {navigation.map((link) => (
            <MobileNavItem
              key={link.path || link.label}
              link={link}
              openDropdown={openDropdown}
              toggle={toggleDropdown}
              close={() => setMobileOpen(false)}
              isActive={isActive}
            />
          ))}
        </div>
      )}
    </nav>
  );
}

function MobileNavItem({ link, openDropdown, toggle, close, isActive }) {
  const Icon = iconMap[link.icon];
  const hasChildren = link.children?.length > 0;
  const isOpen = openDropdown === link.label;
  const active = isActive(link.path);

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="flex justify-between items-center px-5 py-3">
        <Link
          to={hasChildren ? "#" : link.path || "/"}
          className="flex items-center gap-2.5 text-sm font-medium transition-colors duration-150"
          style={{ color: active ? "#E8C97A" : "rgba(250,250,248,0.75)" }}
          onClick={
            hasChildren
              ? (e) => {
                  e.preventDefault();
                  toggle(link.label);
                }
              : close
          }>
          {Icon && <Icon className="w-4 h-4 opacity-75" />}
          {link.label}
        </Link>

        {hasChildren && (
          <button
            onClick={() => toggle(link.label)}
            className="w-6 h-6 flex items-center justify-center rounded-sm transition-all duration-200"
            style={{ color: "#C9A84C" }}>
            <ChevronDownIcon
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <div style={{ background: "rgba(255,255,255,0.03)" }}>
          {link.children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className="flex items-center gap-2.5 pl-10 pr-5 py-2.5 text-sm transition-colors duration-150"
              style={{
                color: isActive(child.path)
                  ? "#E8C97A"
                  : "rgba(250,250,248,0.58)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
              onClick={close}>
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "#C9A84C", opacity: 0.55 }}
              />
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
