"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar-foundation">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.65rem",
            fontWeight: 800,
            fontSize: "1.25rem",
            color: "#ffffff",
            letterSpacing: "-0.02em",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #f0c94b 0%, #d4af37 100%)",
              color: "#050505",
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "0.85rem",
              boxShadow: "0 2px 10px rgba(212, 175, 55, 0.3)",
            }}
          >
            CNM
          </span>
          <span>
            CNM <span style={{ color: "var(--color-gold-bright)" }}>Learning</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <a
            href="#home"
            style={{
              color: "var(--color-text-secondary)",
              fontWeight: 500,
              fontSize: "0.92rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--color-gold-bright)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--color-text-secondary)")}
          >
            Home
          </a>
          <a
            href="#videos"
            style={{
              color: "var(--color-text-secondary)",
              fontWeight: 500,
              fontSize: "0.92rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--color-gold-bright)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--color-text-secondary)")}
          >
            Sample Videos
          </a>
          <a
            href="#contact"
            style={{
              color: "var(--color-text-secondary)",
              fontWeight: 500,
              fontSize: "0.92rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--color-gold-bright)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--color-text-secondary)")}
          >
            Contact Us
          </a>
          <Button
            href="#pricing"
            variant="primary"
            style={{ padding: "0.65rem 1.35rem", fontSize: "0.88rem" }}
          >
            Explore Courses
          </Button>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "rgba(212, 175, 55, 0.08)",
            border: "1px solid var(--color-border-gold)",
            color: "var(--color-gold-bright)",
            borderRadius: "8px",
            padding: "0.45rem 0.65rem",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Navigation Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "76px",
            left: 0,
            right: 0,
            backgroundColor: "rgba(8, 8, 10, 0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--color-border-gold)",
            padding: "1.5rem 1.5rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            boxShadow: "0 16px 36px rgba(0, 0, 0, 0.95)",
            zIndex: 99,
          }}
        >
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "var(--color-text)",
              fontSize: "1.05rem",
              fontWeight: 600,
              padding: "0.5rem 0",
              borderBottom: "1px solid var(--color-border-subtle)",
            }}
          >
            Home
          </a>
          <a
            href="#videos"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "var(--color-text)",
              fontSize: "1.05rem",
              fontWeight: 600,
              padding: "0.5rem 0",
              borderBottom: "1px solid var(--color-border-subtle)",
            }}
          >
            Sample Videos
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "var(--color-text)",
              fontSize: "1.05rem",
              fontWeight: 600,
              padding: "0.5rem 0",
              borderBottom: "1px solid var(--color-border-subtle)",
            }}
          >
            Contact Us
          </a>
          <Button
            href="#pricing"
            variant="primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ width: "100%", marginTop: "0.5rem", padding: "0.85rem 1rem" }}
          >
            Explore Courses
          </Button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 767px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-menu-btn) {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
