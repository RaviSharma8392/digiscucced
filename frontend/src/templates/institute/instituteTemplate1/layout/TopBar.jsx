import { Phone, Mail, ChevronDown } from "lucide-react";

export default function TopBar({ phone, email }) {
  // Using exact Narayana TopBar color from reference
  const topBarColor = "#319be5"; 
  const orangeButtonColor = "#f26522";

  return (
    <div 
      className="hidden lg:flex w-full justify-between items-center px-4 lg:px-8 h-10 text-[13px] text-white font-sans"
      style={{ backgroundColor: topBarColor }}
    >
      {/* Left items */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span>Admission Support :</span>
          <a href={`tel:${phone?.replace(/[^\d+]/g, "")}`} className="flex items-center gap-1 hover:opacity-80">
            <Phone size={12} className="fill-current" />
            <span>9667225657</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span>Toll Free :</span>
          <a href="tel:18001023344" className="flex items-center gap-1 hover:opacity-80">
            <Phone size={12} className="fill-current" />
            <span>1800-102-3344</span>
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Mail size={12} className="mt-px" />
          <a href={`mailto:${email}`} className="hover:opacity-80">{email}</a>
        </div>
      </div>

      {/* Right items */}
      <div className="flex items-center h-full">
        <div className="flex items-center gap-3 mr-4">
          <button className="px-3 py-0.5 border border-white rounded-full text-xs font-semibold hover:bg-white hover:text-[#319be5] transition-colors">NSAT</button>
          <button className="px-3 py-0.5 border border-white rounded-full text-xs font-semibold hover:bg-white hover:text-[#319be5] transition-colors">NACST</button>
          <button className="px-3 py-0.5 border border-white rounded-full text-xs font-semibold hover:bg-white hover:text-[#319be5] transition-colors">NAITS</button>
          <button className="flex items-center gap-1 px-1 py-0.5 text-xs font-semibold hover:opacity-80">
            Repeater <ChevronDown size={14} />
          </button>
        </div>
        
        <button 
          className="h-full px-6 font-bold text-xs flex items-center transition-opacity hover:opacity-90"
          style={{ backgroundColor: orangeButtonColor }}
        >
          SELECT CITY
        </button>
      </div>
    </div>
  );
}
