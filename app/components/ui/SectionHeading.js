export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}) {
  return (
    <div
      className={`section-header ${
        centered ? "section-header-centered" : ""
      } ${className}`.trim()}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
