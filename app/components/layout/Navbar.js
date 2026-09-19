"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Performance Audit", href: "#audit" },
    { label: "The System", href: "#control-room" },
    { label: "For Students", href: "#for-students" },
    { label: "For Parents", href: "#for-parents" },
    { label: "For Institutions", href: "#for-institutions" },
    { label: "Results", href: "#results" },
    { label: "About CNM", href: "#about" },
  ];

  return (
    <header className="navbar-foundation">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "1rem",
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
            fontSize: "1.15rem",
            color: "#ffffff",
            letterSpacing: "-0.02em",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #f0c94b 0%, #d4af37 100%)",
              color: "#050505",
              padding: "0.25rem 0.6rem",
              borderRadius: "6px",
              fontWeight: 800,
              fontSize: "0.8rem",
              letterSpacing: "0.05em",
              boxShadow: "0 2px 10px rgba(212, 175, 55, 0.3)",
            }}
          >
            CNM
          </span>
          <span>
            SYSTEM <span style={{ color: "var(--color-gold-bright)" }}>LABS</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: "var(--color-text-secondary)",
                fontWeight: 500,
                fontSize: "0.86rem",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--color-gold-bright)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--color-text-secondary)")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Header CTA */}
        <div className="desktop-cta" style={{ flexShrink: 0 }}>
          <Button
            href="#audit"
            variant="primary"
            style={{ padding: "0.55rem 1.15rem", fontSize: "0.82rem" }}
          >
            Run Performance Audit →
          </Button>
        </div>

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
            gap: "1rem",
            boxShadow: "0 16px 36px rgba(0, 0, 0, 0.95)",
            zIndex: 99,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "var(--color-text)",
                fontSize: "1rem",
                fontWeight: 600,
                padding: "0.5rem 0",
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              {item.label}
            </a>
          ))}
          <Button
            href="#audit"
            variant="primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ width: "100%", marginTop: "0.5rem", padding: "0.85rem 1rem" }}
          >
            Run Performance Audit →
          </Button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1023px) {
          :global(.desktop-nav),
          :global(.desktop-cta) {
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

