import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ business }) {
  const slug = business?.slug || "";

  // Theme (kept same as your original)
  const bgGradient = "#242631";
  const bottomBarBg = "#1d1f28";
  const iconColor = "#eab308";

  // Map brand → metaData
  const metaData = {
    name: business?.brand?.name,
    logoUrl: business?.brand?.logo,
    description: business?.footer?.tagline || business?.brand?.tagline
  };

  // Map links
  const usefulLinks = business?.nav?.topLinks || [];
  const studentLinks = business?.nav?.links || [];

  // Map contact
  const contact = {
    address: business?.contact?.address,
    phones: [business?.contact?.phone].filter(Boolean),
    email: business?.contact?.email
  };

  // Map socials
  const socials = business?.socials || {};

  // Map legal links
  const legalLinks = business?.footer?.links || [];

  // Social icon mapping
  const socialMap = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
    twitter: Twitter,
    linkedin: Linkedin
  };

  // FIXED renderSocial function
  const renderSocial = (key, url) => {
    if (!url) return null;
    const Icon = socialMap[key];
    if (!Icon) return null;

    return (
      <a
        key={key}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full border border-gray-500 text-gray-300 flex items-center justify-center hover:bg-gray-700 transition-colors"
      >
        <Icon size={14} />
      </a>
    );
  };

  return (
    <footer className="text-white font-sans" style={{ backgroundColor: bgGradient }}>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              {metaData.logoUrl ? (
                <img
                  src={metaData.logoUrl}
                  alt={metaData.name}
                  className="h-14 bg-white p-2"
                />
              ) : (
                <h2 className="text-2xl font-extrabold uppercase">
                  {metaData.name || "Institute"}
                </h2>
              )}
            </div>

            <p className="text-gray-200 text-[14px]">
              {metaData.description || "No description provided."}
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-2xl mb-6">Useful Links</h3>
            <ul>
              {usefulLinks.map((item, i) => (
                <li key={i} className="border-b border-dashed border-gray-600">
                  <Link
                    to={item.path}   // ✅ FIXED
                    className="block py-3 text-gray-200 hover:text-white text-[14px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Area */}
          <div>
            <h3 className="text-2xl mb-6">Student Area</h3>
            <ul>
              {studentLinks.map((item, i) => (
                <li key={i} className="border-b border-dashed border-gray-600">
                  <Link
                    to={item.path}   // ✅ FIXED
                    className="block py-3 text-gray-200 hover:text-white text-[14px]"
                  >
                    {item.label}
                  </Link>

                  {/* Sub-links support */}
                  {item.subLinks?.map((sub, j) => (
                    <Link
                      key={j}
                      to={sub.path}
                      className="block pl-4 py-2 text-gray-400 hover:text-white text-[13px]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl mb-6">Address</h3>

            <ul className="space-y-3 mb-6 text-[14px] text-gray-200">

              {contact.address && (
                <li className="flex gap-3">
                  <MapPin style={{ color: iconColor }} size={16} />
                  <span>{contact.address}</span>
                </li>
              )}

              {contact.phones.map((phone, i) => (
                <li key={i} className="flex gap-3">
                  <Phone style={{ color: iconColor }} size={16} />
                  <span>{phone}</span>
                </li>
              ))}

              {contact.email && (
                <li className="flex gap-3">
                  <Mail style={{ color: iconColor }} size={16} />
                  <span>{contact.email}</span>
                </li>
              )}
            </ul>

            <div className="flex gap-2">
              {Object.entries(socials).map(([key, url]) =>
                renderSocial(key, url)
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: bottomBarBg }} className="py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px]">

          <p>
            © {new Date().getFullYear()} {metaData.name || "Company"}.
            All Rights Reserved.
          </p>

          <div className="flex gap-3 text-gray-300">
            {legalLinks.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <Link to={item.path} className="hover:text-white">
                  {item.label}
                </Link>
                {i !== legalLinks.length - 1 && <span>|</span>}
              </span>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}