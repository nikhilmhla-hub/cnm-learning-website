"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section"
      style={{
        backgroundColor: "var(--color-background)",
        padding: "5rem 0",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        className={`container contact-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "0 1rem",
          overflow: "hidden",
        }}
      >
        <div
          className="contact-card"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "1.25rem",
            padding: "2.5rem 2rem",
            width: "100%",
            maxWidth: "560px",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.08)",
            boxSizing: "border-box",
            transitionDelay: isMounted && isVisible ? "200ms" : "0ms",
          }}
        >
          {/* Heading */}
          <div style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.3rem)",
                fontWeight: "800",
                letterSpacing: "0.03em",
                lineHeight: "1.15",
                textTransform: "uppercase",
                color: "#ffffff",
                margin: 0,
              }}
            >
              CONTACT<br />
              <span style={{ color: "var(--color-gold)", display: "inline-block" }}>INFORMATION</span>
            </h2>
          </div>

          {/* Contact Items Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Item 1: Email */}
            <div
              className="contact-item"
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                paddingBottom: "1.25rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                transitionDelay: isMounted && isVisible ? "350ms" : "0ms",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--color-gold)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", minWidth: 0 }}>
                <span
                  style={{
                    color: "var(--color-gold)",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    letterSpacing: "0.02em",
                  }}
                >
                  E-mail
                </span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@cnmlearning.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-text)",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textDecoration: "none",
                    wordBreak: "break-word",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-bright)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                >
                  info@cnmlearning.com
                </a>
              </div>
            </div>

            {/* Item 2: Phone No. */}
            <div
              className="contact-item"
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                paddingBottom: "1.25rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                transitionDelay: isMounted && isVisible ? "450ms" : "0ms",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--color-gold)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", minWidth: 0 }}>
                <span
                  style={{
                    color: "var(--color-gold)",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    letterSpacing: "0.02em",
                  }}
                >
                  Phone No.
                </span>
                <a
                  href="tel:+916377525604"
                  style={{
                    color: "var(--color-text)",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textDecoration: "none",
                    wordBreak: "break-word",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-bright)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                >
                  +91 6377525604
                </a>
              </div>
            </div>

            {/* Item 3: Address */}
            <div
              className="contact-item"
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                transitionDelay: isMounted && isVisible ? "550ms" : "0ms",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--color-gold)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", minWidth: 0 }}>
                <span
                  style={{
                    color: "var(--color-gold)",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    letterSpacing: "0.02em",
                  }}
                >
                  Address
                </span>
                <address
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "0.95rem",
                    lineHeight: "1.55",
                    fontStyle: "normal",
                    whiteSpace: "pre-line",
                  }}
                >
                  {"Balaji Tower-1, F 45, Sector 5,\nVidyadhar Nagar, Jaipur,\nRajasthan. PIN: 302039"}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Contact card & items reveal */
        .contact-card,
        .contact-item {
          will-change: transform, opacity;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-container.js-active:not(.is-visible) .contact-card {
          opacity: 0;
          transform: translateY(20px) scale(0.97);
        }

        .contact-container.js-active:not(.is-visible) .contact-item {
          opacity: 0;
          transform: translateY(10px);
        }

        .contact-container.js-active.is-visible .contact-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .contact-container.js-active.is-visible .contact-item {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-card,
          .contact-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
