"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const node = footerRef.current;
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
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        backgroundColor: "#050505",
        color: "var(--color-text)",
        padding: "4rem 0 2.5rem 0",
        borderTop: "1px solid var(--color-border-gold)",
        overflow: "hidden",
      }}
    >
      <div
        className={`container footer-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3rem",
          overflow: "hidden",
        }}
      >
        <div className="footer-col" style={{ transitionDelay: isMounted && isVisible ? "100ms" : "0ms" }}>
          <h4 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "1.25rem" }}>
            CNM <span style={{ color: "var(--color-gold-bright)" }}>Learning</span>
          </h4>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "0.92rem", lineHeight: "1.6" }}>
            Premier visual learning platform for IIT-JEE aspirants across India. Combining 3D concept visualization with elite mentorship.
          </p>
        </div>
        <div className="footer-col" style={{ transitionDelay: isMounted && isVisible ? "200ms" : "0ms" }}>
          <h5 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Quick Links
          </h5>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem" }}>
            <li><a href="#home" style={{ color: "var(--color-text-secondary)" }}>Home</a></li>
            <li><a href="#videos" style={{ color: "var(--color-text-secondary)" }}>Sample Videos</a></li>
            <li><a href="#pricing" style={{ color: "var(--color-text-secondary)" }}>Explore Courses</a></li>
            <li><a href="#faq" style={{ color: "var(--color-text-secondary)" }}>FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col" style={{ transitionDelay: isMounted && isVisible ? "300ms" : "0ms" }}>
          <h5 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Contact & Support
          </h5>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
             Balaji Tower-1, F 45, Sector 5, Vidyadhar Nagar, Jaipur, Rajasthan 302039<br />
            Email: info@cnmlearning.com<br />
            Phone: +91 6377525604
          </p>
        </div>
      </div>
      <div
        className="container"
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "1.75rem",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "var(--color-text-muted)",
        }}
      >
        © {new Date().getFullYear()} CNM Learning. All rights reserved. IIT-JEE Visual Preparation Platform.
      </div>

      <style jsx>{`
        .footer-col {
          will-change: transform, opacity;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .footer-container.js-active:not(.is-visible) .footer-col {
          opacity: 0;
          transform: translateY(15px);
        }

        .footer-container.js-active.is-visible .footer-col {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-col {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
