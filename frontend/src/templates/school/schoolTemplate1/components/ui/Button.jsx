import { Link } from "react-router-dom";
import { schoolConfig } from "../../config/schoolConfig";

export default function Button({ children, to, href, variant = "primary", className = "", onClick }) {
  const base = "inline-block text-[13px] font-medium px-6 py-2.5 rounded-md no-underline transition-all cursor-pointer";

  const styles =
    variant === "primary"
      ? { background: schoolConfig.colors.primary, color: "white" }
      : variant === "accent"
      ? { background: schoolConfig.colors.accent, color: "#1a0a00" }
      : { border: `1.5px solid ${schoolConfig.colors.primary}`, color: schoolConfig.colors.primary, background: "transparent" };

  if (to) {
    return (
      <Link to={to} className={`${base} ${className}`} style={styles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`} style={styles}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${className}`} style={styles} onClick={onClick}>
      {children}
    </button>
  );
}
