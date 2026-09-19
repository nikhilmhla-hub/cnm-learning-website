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
        padding: "4.5rem 0 2.5rem 0",
        borderTop: "1px solid var(--color-border-gold)",
        overflow: "hidden",
      }}
    >
      <div
        className={`container footer-container ${isMounted ? "js-active" : ""} ${isVisible ? "is-visible" : ""}`}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3.5rem",
        }}
      >
        {/* Brand & Tagline Col */}
        <div className="footer-col" style={{ gridColumn: "span 1", transitionDelay: isMounted && isVisible ? "100ms" : "0ms" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem" }}>
            <span
              style={{
                background: "linear-gradient(135deg, #f0c94b 0%, #d4af37 100%)",
                color: "#050505",
                padding: "0.2rem 0.55rem",
                borderRadius: "6px",
                fontWeight: 800,
                fontSize: "0.8rem",
              }}
            >
              CNM
            </span>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff" }}>
              SYSTEM <span style={{ color: "var(--color-gold-bright)" }}>LABS</span>
            </span>
          </div>
          <p style={{ color: "var(--color-gold-bright)", fontSize: "0.88rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Student Performance Intelligence.
          </p>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem", lineHeight: "1.6", maxWidth: "280px" }}>
            Diagnose the problem. Fix the system. Improve the performance.
          </p>
        </div>

        {/* Platform Links */}
        <div className="footer-col" style={{ transitionDelay: isMounted && isVisible ? "200ms" : "0ms" }}>
          <h5 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            PLATFORM
          </h5>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.88rem" }}>
            <li><a href="#audit" style={{ color: "var(--color-text-secondary)" }}>Performance Audit</a></li>
            <li><a href="#control-room" style={{ color: "var(--color-text-secondary)" }}>Student System</a></li>
            <li><a href="#results" style={{ color: "var(--color-text-secondary)" }}>Performance Tracking</a></li>
            <li><a href="#how-it-works" style={{ color: "var(--color-text-secondary)" }}>Methodology</a></li>
          </ul>
        </div>

        {/* Audience Links */}
        <div className="footer-col" style={{ transitionDelay: isMounted && isVisible ? "300ms" : "0ms" }}>
          <h5 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            FOR
          </h5>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.88rem" }}>
            <li><a href="#for-students" style={{ color: "var(--color-text-secondary)" }}>Students</a></li>
            <li><a href="#for-parents" style={{ color: "var(--color-text-secondary)" }}>Parents</a></li>
            <li><a href="#for-institutions" style={{ color: "var(--color-text-secondary)" }}>Schools</a></li>
            <li><a href="#for-institutions" style={{ color: "var(--color-text-secondary)" }}>Coaching Institutes</a></li>
          </ul>
        </div>

        {/* CNM Info */}
        <div className="footer-col" style={{ transitionDelay: isMounted && isVisible ? "400ms" : "0ms" }}>
          <h5 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            CNM
          </h5>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.88rem" }}>
            <li><a href="#about" style={{ color: "var(--color-text-secondary)" }}>About</a></li>
            <li><a href="#audit" style={{ color: "var(--color-text-secondary)" }}>Contact</a></li>
            <li><a href="#about" style={{ color: "var(--color-text-secondary)" }}>Support</a></li>
            <li><a href="#about" style={{ color: "var(--color-text-secondary)" }}>Privacy Policy</a></li>
            <li><a href="#about" style={{ color: "var(--color-text-secondary)" }}>Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div
        className="container"
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "1.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          fontSize: "0.82rem",
          color: "var(--color-text-muted)",
        }}
      >
        <div>© 2026 CNM System Labs. All rights reserved.</div>
        <div style={{ color: "var(--color-gold-bright)", fontWeight: 600 }}>
          DIAGNOSE • PLAN • EXECUTE • MEASURE • IMPROVE
        </div>
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
