"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  const [inView, setInView] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeading
          eyebrow="CONTACT INFORMATION"
          title="Connect with CNM System Labs."
          description="Direct access to our student performance intelligence and audit support team."
          center={true}
        />

        <div
          ref={domRef}
          style={{
            maxWidth: "780px",
            margin: "3.5rem auto 0 auto",
            backgroundColor: "rgba(16, 16, 22, 0.9)",
            border: "2px solid var(--color-border-gold)",
            borderRadius: "var(--radius-xl)",
            padding: "2.8rem",
            boxShadow: "0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(212, 175, 55, 0.12)",
            backdropFilter: "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
            transition: "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {/* Interactive Gmail Compose Card */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@cnmlearning.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setEmailHovered(true)}
              onMouseLeave={() => setEmailHovered(false)}
              style={{
                textDecoration: "none",
                display: "block",
                backgroundColor: emailHovered ? "rgba(18, 18, 26, 0.95)" : "rgba(10, 10, 14, 0.8)",
                border: emailHovered ? "1px solid var(--color-gold-bright)" : "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                cursor: "pointer",
                transform: emailHovered ? "scale(1.03) translateY(-2px)" : "scale(1) translateY(0)",
                boxShadow: emailHovered
                  ? "0 16px 36px rgba(0,0,0,0.85), 0 0 25px rgba(212, 175, 55, 0.22)"
                  : "0 4px 15px rgba(0,0,0,0.4)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, boxShadow 0.3s ease, background-color 0.3s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--color-gold-bright)", letterSpacing: "0.12em" }}>
                  E-MAIL INQUIRIES
                </span>
                <div
                  style={{
                    transform: emailHovered ? "scale(1.15) rotate(-4deg)" : "scale(1)",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#F0C94B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.4rem" }}>
                info@cnmlearning.com
              </div>
              <div style={{ fontSize: "0.82rem", color: emailHovered ? "var(--color-gold-bright)" : "var(--color-text-secondary)", transition: "color 0.3s ease" }}>
                Click to open Gmail compose →
              </div>
            </a>

            {/* Interactive Phone Card */}
            <a
              href="tel:+916377525604"
              onMouseEnter={() => setPhoneHovered(true)}
              onMouseLeave={() => setPhoneHovered(false)}
              style={{
                textDecoration: "none",
                display: "block",
                backgroundColor: phoneHovered ? "rgba(18, 18, 26, 0.95)" : "rgba(10, 10, 14, 0.8)",
                border: phoneHovered ? "1px solid var(--color-gold-bright)" : "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                cursor: "pointer",
                transform: phoneHovered ? "scale(1.03) translateY(-2px)" : "scale(1) translateY(0)",
                boxShadow: phoneHovered
                  ? "0 16px 36px rgba(0,0,0,0.85), 0 0 25px rgba(212, 175, 55, 0.22)"
                  : "0 4px 15px rgba(0,0,0,0.4)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, boxShadow 0.3s ease, background-color 0.3s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--color-gold-bright)", letterSpacing: "0.12em" }}>
                  PHONE NUMBER
                </span>
                <div
                  style={{
                    transform: phoneHovered ? "scale(1.15) rotate(4deg)" : "scale(1)",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.5C3 14.06 9.94 21 18.5 21C19.33 21 20 20.33 20 19.5V16.63C20 16.14 19.65 15.73 19.17 15.65L15.63 15.06C15.24 14.99 14.84 15.14 14.59 15.44L13.21 17.12C10.15 15.54 7.64 13.04 6.06 9.97L7.74 8.59C8.04 8.34 8.19 7.94 8.12 7.55L7.53 4.01C7.45 3.53 7.04 3.18 6.55 3.18H3.68C2.85 3.18 2.18 3.85 2.18 4.68C2.18 5.14 2.55 5.5 3 5.5Z" stroke="#F0C94B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.4rem" }}>
                +91 6377525604
              </div>
              <div style={{ fontSize: "0.82rem", color: phoneHovered ? "var(--color-gold-bright)" : "var(--color-text-secondary)", transition: "color 0.3s ease" }}>
                Mon - Sat: 9:00 AM - 8:00 PM
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
