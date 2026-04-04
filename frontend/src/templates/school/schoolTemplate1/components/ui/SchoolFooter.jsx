import {
  Phone,
  Mail,
  ChevronDown,
  Youtube,
  Facebook,
  Instagram,
  Linkedin,
  Play,
  Apple,
  MapPin,
} from "lucide-react";

export default function SchoolFooter({ business = {}, theme = {} }) {
  const currentYear = new Date().getFullYear();

  // 🔹 Updated defaults to match the premium image colors
  const defaultTheme = {
    footerBg: "#002855", // Deep Navy Blue
    footerText: "#ffffff",
    footerMuted: "#9ca3af", // Soft Gray for copyright
    primary: "#EF4444", // Bright Red (Subscribe button)
    primaryHover: "#DC2626", // Darker Red for hover
    border: "#e5e7eb",
    whatsapp: "#25D366", // Official WhatsApp Green
  };

  const activeTheme = { ...defaultTheme, ...theme };

  const meta = business?.metaData ?? {};
  const topBar = business?.topBar ?? {};

  // 🔹 YOUR COMPANY BRANDING
  const companyBrand = {
    name: "Fast Ranking",
    url: "https://fastranking.in",
    badge: "Powered by",
  };

  const importantLinks = [
    { name: "Our Curriculum", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Facilities", href: "#" },
    { name: "Media & Events", href: "#", hasDropdown: true },
    { name: "Information", href: "#", hasDropdown: true },
    { name: "MPD", href: "#", hasDropdown: true },
  ];

  const quickLinks = [
    { name: "Alumni Portal", href: "#" },
    { name: "ERP Login", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "CBSE Information", href: "#" },
    { name: "Apply Now", href: "#" },
  ];

  return (
    <footer className="relative font-sans mt-16 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      {/* MAIN FOOTER */}
      <div
        className="pt-16 pb-16 px-6 lg:px-12 transition-colors duration-300"
        style={{
          backgroundColor: activeTheme.footerBg,
          color: activeTheme.footerText,
        }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* 1. SCHOOL INFO */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-1.5 shadow-lg">
                <img
                  src={meta?.logoUrl || "/placeholder-logo.png"}
                  alt={meta?.name || "School Logo"}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold uppercase leading-tight tracking-wide">
                  {meta?.name || "Public School"}
                </h2>
                <p className="text-[10px] tracking-widest text-blue-200 uppercase mt-1">
                  {meta?.tagline || "Excellence in Education"}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-200 mt-8">
              <div className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-blue-300"
                />
                <p className="leading-relaxed">
                  {topBar.address ||
                    "Sector 2A, Vasundhara, Ghaziabad Uttar Pradesh 201012"}
                </p>
              </div>

              <div className="flex items-start gap-3 hover:text-white transition-colors">
                <Phone
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-blue-300"
                />
                <p>{topBar.phone || "+91 6390907005"}</p>
              </div>

              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="flex-shrink-0 text-blue-300" />
                <a href={`mailto:${topBar.email}`} className="hover:underline">
                  {topBar.email || "contact@school.com"}
                </a>
              </div>
            </div>
          </div>

          {/* 2. IMPORTANT LINKS */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold mb-6 tracking-wide relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-blue-400">
              Important Links
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-200">
              {importantLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 hover:text-white hover:translate-x-1.5 transition-all duration-300">
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown size={14} className="opacity-60" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-blue-400">
              Quick links
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-200">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="flex items-center hover:text-white hover:translate-x-1.5 transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. SOCIAL, APPS + NEWSLETTER */}
          <div className="space-y-8">
            {/* SOCIAL */}
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">
                Social Media
              </h3>
              <div className="flex items-center gap-3">
                {[Youtube, Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-white p-2 rounded-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                    style={{ color: activeTheme.footerBg }}>
                    <Icon
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT + BRANDING BAR */}
      <div
        className="py-5 px-6 flex flex-col sm:flex-row justify-between items-center text-sm font-medium"
        style={{
          backgroundColor: "#ffffff",
          borderTop: `1px solid ${activeTheme.border}`,
          color: activeTheme.footerMuted,
        }}>
        <p className="mb-2 sm:mb-0">
          © {currentYear} {meta?.name || "Public School"}. All rights reserved.
        </p>

        {/* HIGH-END BRANDING */}
        <p className="flex items-center gap-1.5 text-xs sm:text-sm">
          {companyBrand.badge}{" "}
          <a
            href={companyBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold tracking-wide transition-opacity hover:opacity-80"
            style={{ color: activeTheme.footerBg }}>
            {companyBrand.name}
          </a>
        </p>
      </div>

      {/* FLOATING WHATSAPP (Using Official SVG Path) */}
      <a
        href={`https://wa.me/${topBar.phone?.replace(/\D/g, "") || "916390907005"}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
        style={{ backgroundColor: activeTheme.whatsapp }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.062 3.963L0 16l4.223-1.107a7.863 7.863 0 0 0 3.77.954h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.005-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </footer>
  );
}
