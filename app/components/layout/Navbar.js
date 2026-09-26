"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Courses", href: "/#control-room" },
    { label: "For Students", href: "/#for-students" },
    { label: "For Parents", href: "/#for-parents" },
    { label: "For Institutions", href: "/#for-institutions" },
    { label: "About CNM", href: "/about" },
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
        <Link
          href="/"
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
        </Link>

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
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: "var(--color-text-secondary)",
                fontWeight: 500,
                fontSize: "0.86rem",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--color-gold-bright)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--color-text-secondary)")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Header CTA */}
        <div className="desktop-cta" style={{ flexShrink: 0 }}>
          <a
            href="https://cnm-online-audit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              fontWeight: 700,
              fontSize: "0.82rem",
              padding: "0.55rem 1.15rem",
              textDecoration: "none",
            }}
          >
            Run Performance Audit →
          </a>
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
            gap: "1.1rem",
            zIndex: 99,
            boxShadow: "0 20px 40px rgba(0,0,0,0.9)",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "var(--color-text)",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                padding: "0.4rem 0",
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://cnm-online-audit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{
              padding: "0.85rem 1.5rem",
              fontWeight: 800,
              fontSize: "0.95rem",
              textAlign: "center",
              justifyContent: "center",
              marginTop: "0.5rem",
              textDecoration: "none",
            }}
          >
            RUN PERFORMANCE AUDIT →
          </a>
        </div>
      )}
    </header>
  );
}
