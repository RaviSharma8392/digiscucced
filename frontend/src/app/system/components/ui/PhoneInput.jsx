import React, { useState, useEffect, useRef } from "react";

const countries = [
  { name: "India", code: "+91", iso: "in" },
  { name: "United States", code: "+1", iso: "us" },
  { name: "United Kingdom", code: "+44", iso: "gb" },
  { name: "Australia", code: "+61", iso: "au" },
  { name: "Canada", code: "+1", iso: "ca" },
  { name: "Germany", code: "+49", iso: "de" },
  { name: "France", code: "+33", iso: "fr" },
  { name: "Japan", code: "+81", iso: "jp" },
  { name: "UAE", code: "+971", iso: "ae" },
  { name: "Singapore", code: "+65", iso: "sg" },
];

function FlagImg({ iso, size = 20 }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${iso}.png`}
      width={size}
      height={size * 0.67}
      alt={iso}
      className="rounded-sm object-cover"
      style={{ width: size, height: size * 0.67, minWidth: size }}
    />
  );
}

export default function PhoneInput() {
  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-3 relative w-full font-sans" ref={dropdownRef}>
      {/* Country Selector Button */}
      <div
        onClick={() => setOpen(!open)}
        className="w-1/3 bg-white rounded-md px-3 py-4 flex items-center justify-between cursor-pointer shadow-sm hover:bg-gray-50 active:scale-95 transition-all">
        <div className="flex items-center gap-2">
          <FlagImg iso={selected.iso} size={22} />
          <span className="text-gray-700 text-sm font-medium">
            {selected.code}
          </span>
        </div>
        <span
          className={`text-gray-400 text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full sm:w-64 bg-white shadow-xl rounded-xl z-50 py-2 border border-gray-100">
          <div className="max-h-60 overflow-y-auto">
            {countries.map((c, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelected(c);
                  setOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 cursor-pointer transition-colors border-b border-gray-50 last:border-none">
                <FlagImg iso={c.iso} size={24} />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    {c.name}
                  </span>
                  <span className="text-xs text-gray-400">{c.code}</span>
                </div>
                {selected.name === c.name && (
                  <span className="ml-auto text-blue-500 text-sm font-bold">
                    ✓
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Phone Input */}
      <input
        type="tel"
        placeholder="Phone number"
        className="w-2/3 px-5 py-4 rounded-md bg-white text-gray-800 placeholder-gray-400 outline-none text-sm focus:ring-2 focus:ring-blue-200 shadow-sm"
      />
    </div>
  );
}
