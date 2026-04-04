/**
 * Card.jsx
 *
 * Reusable card component
 */

export function Card({
  title,
  description,
  image,
  icon,
  children,
  onClick,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}>
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      {/* Icon */}
      {icon && <div className="text-4xl mb-4">{icon}</div>}

      {/* Title */}
      {title && (
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      )}

      {/* Description */}
      {description && <p className="text-gray-700 mb-4">{description}</p>}

      {/* Children */}
      {children}
    </div>
  );
}

export default Card;
