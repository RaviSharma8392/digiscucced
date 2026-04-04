/**
 * Button.jsx
 *
 * Reusable button component
 */

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  ...props
}) {
  const baseClasses =
    "font-bold rounded-lg transition-opacity hover:opacity-90 focus:outline-none";

  const variantClasses = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-900",
    accent: "bg-orange-600 text-white",
    outline: "border-2 border-blue-600 text-blue-600",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
