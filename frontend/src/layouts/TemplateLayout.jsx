/**
 * TemplateLayout.jsx
 *
 * Wrapper layout for template components
 * Handles theme and styling across templates
 */

export function TemplateLayout({ children, theme = {} }) {
  const backgroundColor = theme.background || "#ffffff";
  const textColor = theme.text || "#1e293b";

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
      }}>
      {children}
    </div>
  );
}

export default TemplateLayout;
