import React from "react";
import { FiMail, FiPhoneCall, FiCreditCard, FiUserCheck } from "react-icons/fi";

const TopBar = ({
  topBar = {
    phone: "1800-102-2727",
    email: "care@aakash.ac.in",
    payFeeUrl: "#",
    loginUrl: "#",
  },
}) => {
  return (
    // Hidden on smaller screens to save space, visible on large screens
    <div className="hidden lg:block w-full bg-[#002e5b] text-gray-200 font-sans border-b border-[#001f3e]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest">
        {/* --- LEFT: CONTACT INFO --- */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${topBar.phone}`}
            className="flex items-center gap-2 hover:text-[#a3d674] transition-colors duration-300 group">
            <FiPhoneCall
              className="text-[#007cc2] group-hover:text-[#a3d674] transition-colors"
              size={14}
            />
            <span>{topBar.phone}</span>
          </a>

          {/* Subtle Divider */}
          <div className="w-px h-3.5 bg-gray-600/50" />

          <a
            href={`mailto:${topBar.email}`}
            className="flex items-center gap-2 hover:text-[#a3d674] transition-colors duration-300 group">
            <FiMail
              className="text-[#007cc2] group-hover:text-[#a3d674] transition-colors"
              size={14}
            />
            {/* Keeping email lowercase/normal for readability */}
            <span className="normal-case tracking-normal">{topBar.email}</span>
          </a>
        </div>

        {/* --- RIGHT: ACTIONS --- */}
        <div className="flex items-center gap-5">
          <a
            href={topBar.payFeeUrl}
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-300 group">
            <FiCreditCard
              size={14}
              className="text-gray-500 group-hover:text-[#007cc2] transition-colors"
            />
            Pay Fee
          </a>

          {/* Subtle Divider */}
          <div className="w-px h-3.5 bg-gray-600/50" />

          <a
            href={topBar.loginUrl}
            className="flex items-center gap-1.5 text-[#a3d674] hover:text-white transition-colors duration-300 bg-[#001f3e]/50 px-3 py-1 rounded-full shadow-inner">
            <FiUserCheck size={14} />
            Student Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
