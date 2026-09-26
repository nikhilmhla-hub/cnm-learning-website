"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";
import PrivacyLiveBackground from "../components/ui/PrivacyLiveBackground";

const privacySections = [
  {
    id: "privacy-1",
    num: "01",
    title: "Information We Collect",
    content:
      "CNM System Labs processes performance execution data submitted during student telemetry audits, including study block durations, test score error classifications, active recall rates, calculation accuracy ratios, and daily mission completion status.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L40 12V24C40 33.5 33 41 24 44C15 41 8 33.5 8 24V12L24 4Z" stroke="#F0C94B" strokeWidth="2.5" fill="rgba(240, 201, 75, 0.05)" />
        <rect x="18" y="18" width="12" height="12" rx="2" stroke="#38BDF8" strokeWidth="2" />
        <path d="M24 21V27M21 24H27" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "privacy-2",
    num: "02",
    title: "How We Use Telemetry Data",
    content:
      "Collected telemetry data is used strictly to generate personalized 90-Day Rank Blueprints, daily mission schedules, mock test autopsy reports, and parental visibility dashboards. We do not sell or share student data with third-party advertisers.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="#38BDF8" strokeWidth="2.5" fill="rgba(56, 189, 248, 0.05)" />
        <path d="M16 28L22 22L28 26L34 18" stroke="#F0C94B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="18" r="3" fill="#F0C94B" />
      </svg>
    ),
  },
  {
    id: "privacy-3",
    num: "03",
    title: "Data Security & Integrity",
    content:
      "We employ standard technical measures to safeguard user inputs and performance logs. Data access is restricted to authorized diagnostic protocols and mentor reporting features requested by users or affiliated institutions.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="20" width="24" height="20" rx="4" stroke="#A855F7" strokeWidth="2.5" fill="rgba(168, 85, 247, 0.05)" />
        <path d="M17 20V14C17 10.134 20.134 7 24 7C27.866 7 31 10.134 31 14V20" stroke="#F0C94B" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="30" r="3" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    id: "privacy-4",
    num: "04",
    title: "Contact Regarding Privacy",
    content:
      "For privacy-related questions or data management requests, please contact our support team through the official performance audit portal or reaching our support team directly.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 14C8 11.7909 9.79086 10 12 10H36C38.2091 10 40 11.7909 40 14V34C40 36.2091 38.2091 38 36 38H12C9.79086 38 8 36.2091 8 34V14Z" stroke="#F0C94B" strokeWidth="2.5" fill="rgba(240, 201, 75, 0.05)" />
        <path d="M10 14L24 25L38 14" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function PrivacyCard({ section, index }) {
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
            transform: isHovered ? "scale(1.1) rotate(-3deg)" : "scale(1)",
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

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh", position: "relative" }}>
      <Navbar />
      
      {/* Full Page Live Background */}
      <PrivacyLiveBackground />

      <main style={{ paddingTop: "120px", paddingBottom: "7rem", position: "relative", zIndex: 2 }}>
        <div className="container">
          <SectionHeading
            eyebrow="LEGAL & TELEMETRY PROTOCOL"
            title="Privacy Policy"
            description="How CNM System Labs manages and protects student performance telemetry and diagnostic data."
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
            {privacySections.map((section, index) => (
              <PrivacyCard key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
