"use client";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  ...props
}) {
  const variantClass =
    variant === "secondary"
      ? "btn-secondary"
      : variant === "accent"
      ? "btn-accent"
      : "btn-primary";

  const combinedClasses = `btn ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
