export default function SectionHeading({
  as: HeadingTag = "h2",
  eyebrow,
  title,
  description,
  centered = false,
  center = false,
  className = "",
}) {
  return (
    <div
      className={`section-header ${
        (centered || center) ? "section-header-centered" : ""
      } ${className}`.trim()}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <HeadingTag className="section-title">{title}</HeadingTag>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
