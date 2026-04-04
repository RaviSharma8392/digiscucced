import { Link } from "react-router-dom";
import { schoolConfig } from "../../config/schoolConfig";

export default function Footer() {
  const { name, established, affiliation, contact, footer } = schoolConfig;

  return (
    <footer style={{ background: "#0d1b2a" }} className="text-slate-400">
      <div className="px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-9">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-[18px] text-white mb-3">{name}</h3>
            <p className="text-[12.5px] leading-relaxed">
              {affiliation} Affiliated · Est. {established}
              <br />
              {contact.address}
              <br />
              <br />
              📞 {contact.phone}
              <br />
              ✉ {contact.email}
            </p>
          </div>

          {/* Quick Links */}
          <FooterCol title="Quick Links" links={footer.quickLinks} />

          {/* Academics */}
          <FooterCol title="Academics" links={footer.academics} />

          {/* Information */}
          <FooterCol title="Information" links={footer.information} />
        </div>

        <div
          className="border-t pt-5 flex flex-col md:flex-row justify-between items-center gap-2 text-[12px]"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <span>© {new Date().getFullYear()} {name}. All rights reserved.</span>
          <span className="text-slate-600">Designed for academic excellence</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-[12px] font-medium text-white uppercase tracking-wider mb-3.5">
        {title}
      </h4>
      <ul className="flex flex-col gap-2 list-none">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="text-[12.5px] text-slate-500 no-underline hover:text-amber-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
