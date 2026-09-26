"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";
import TermsLiveBackground from "../components/ui/TermsLiveBackground";

const termsSections = [
  {
    id: "terms-1",
    num: "01",
    title: "Platform Usage & Scope",
    content:
      "CNM System Labs provides diagnostic tools, daily mission planning, test error autopsies, and rank trajectory analytics designed to optimize competitive exam preparation habits.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="32" height="28" rx="4" stroke="#A855F7" strokeWidth="2.5" fill="rgba(168, 85, 247, 0.05)" />
        <path d="M14 20H22M14 26H30M14 32H26" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="18" r="3" fill="#F0C94B" />
      </svg>
    ),
  },
  {
    id: "terms-2",
    num: "02",
    title: "Academic Performance Disclaimer",
    content:
      "Our telemetry systems and 90-Day Rank Blueprints are designed to identify performance bottlenecks and guide execution discipline. Specific test ranks or exam admissions are not guaranteed, as outcomes depend on individual student execution and baseline preparation.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6L38 14V34L24 42L10 34V14L24 6Z" stroke="#F0C94B" strokeWidth="2.5" fill="rgba(240, 201, 75, 0.05)" />
        <path d="M24 16V26M24 32H24.02" stroke="#F0C94B" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "terms-3",
    num: "03",
    title: "Intellectual Property",
    content:
      "All software control rooms, diagnostic algorithms, proprietary telemetry tools (Rewire, Refocus, Rise), visual interfaces, and rank blueprint templates are the intellectual property of CNM System Labs.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 12L8 24L16 36M32 12L40 24L32 36" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 10L21 38" stroke="#F0C94B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "terms-4",
    num: "04",
    title: "Modifications to Service",
    content:
      "CNM System Labs reserves the right to update features, telemetry parameters, and diagnostic tools to continuously enhance performance measurement precision.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="14" stroke="#A855F7" strokeWidth="2.5" fill="rgba(168, 85, 247, 0.05)" />
        <path d="M24 14V24L30 28" stroke="#F0C94B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function TermsCard({ section, index }) {
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "rgba(14, 16, 22, 0.88)",
        border: isHovered ? "1px solid var(--color-gold-bright)" : "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "var(--radius-xl)",
        padding: "2.2rem",
        boxShadow: isHovered
          ? "0 20px 45px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.18)"
          : "0 10px 30px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(12px)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? isHovered
            ? "translateY(-4px) scale(1.02)"
            : "translateY(0) scale(1)"
          : "translateY(30px) scale(0.97)",
        transition:
          "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease",
        transitionDelay: inView && !isHovered ? `${index * 120}ms` : "0ms",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
        <div
          style={{
            transform: isHovered ? "scale(1.1) rotate(3deg)" : "scale(1)",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {section.icon}
        </div>
        <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--color-gold-bright)", letterSpacing: "0.15em" }}>
          SECTION {section.num}
        </span>
      </div>

      <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.75rem" }}>
        {section.title}
      </h3>
      <p style={{ fontSize: "0.93rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
        {section.content}
      </p>
    </div>
  );
}

export default function TermsOfServicePage() {
  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh", position: "relative" }}>
      <Navbar />
      
      {/* Full Page Live Background */}
      <TermsLiveBackground />

      <main style={{ paddingTop: "120px", paddingBottom: "7rem", position: "relative", zIndex: 2 }}>
        <div className="container">
          <SectionHeading
            eyebrow="TERMS & CONDITIONS"
            title="Terms of Service"
            description="Terms and conditions governing the use of CNM System Labs diagnostic tools and telemetry platform."
            center={true}
          />

          <div
            style={{
              maxWidth: "860px",
              margin: "4rem auto 0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            {termsSections.map((section, index) => (
              <TermsCard key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
