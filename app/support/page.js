"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";
import SupportLiveBackground from "../components/ui/SupportLiveBackground";

const supportTopics = [
  {
    id: "topic-1",
    title: "Performance Audit Guidance",
    desc: "Learn how the 8-domain telemetry scanner evaluates focus endurance, calculation accuracy, formula retention, and mock test autopsies.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L42 12V24C42 34 34 41.5 24 44C14 41.5 6 34 6 24V12L24 4Z" stroke="url(#goldCyanGrad1)" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(212, 175, 55, 0.06)" />
        <circle cx="24" cy="24" r="8" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M24 18V24L28 26" stroke="#F0C94B" strokeWidth="2.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="goldCyanGrad1" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F0C94B" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "topic-2",
    title: "Daily Mission & Focus Block Setup",
    desc: "Configure your Daily Mission Panel, focus block launcher, distraction shielding parameters, and active recall schedule.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="8" stroke="url(#goldCyanGrad2)" strokeWidth="2.5" fill="rgba(56, 189, 248, 0.06)" />
        <path d="M18 24L22 28L30 18" stroke="#F0C94B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="10" r="3" fill="#38BDF8" />
        <defs>
          <linearGradient id="goldCyanGrad2" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#F0C94B" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "topic-3",
    title: "90-Day Rank Blueprint Execution",
    desc: "How to interpret your 3-phase roadmap, sync active revision intervals with your weekly power planner, and correct mark stagnation.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 38L18 26L28 32L38 14" stroke="url(#goldCyanGrad3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="14" r="5" fill="#F0C94B" fillOpacity="0.2" stroke="#F0C94B" strokeWidth="2" />
        <line x1="8" y1="42" x2="40" y2="42" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="goldCyanGrad3" x1="10" y1="38" x2="38" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F0C94B" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "topic-4",
    title: "Parental Visibility Dashboard",
    desc: "Guidance for parents on interpreting focus endurance metrics, study consistency signals, and active mentor interventions.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24C8 24 14 12 24 12C34 12 40 24 40 24C40 24 34 36 24 36C14 36 8 24 8 24Z" stroke="url(#goldCyanGrad4)" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(168, 85, 247, 0.06)" />
        <circle cx="24" cy="24" r="6" stroke="#F0C94B" strokeWidth="2" />
        <circle cx="24" cy="24" r="2" fill="#38BDF8" />
        <defs>
          <linearGradient id="goldCyanGrad4" x1="8" y1="12" x2="40" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7" />
            <stop offset="0.5" stopColor="#38BDF8" />
            <stop offset="1" stopColor="#F0C94B" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

function SupportCard({ topic, index }) {
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
        padding: "2rem",
        boxShadow: isHovered
          ? "0 20px 45px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.2)"
          : "0 10px 30px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(12px)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? isHovered
            ? "translateY(-4px) scale(1.03)"
            : "translateY(0) scale(1)"
          : "translateY(30px) scale(0.96)",
        transition:
          "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease",
        transitionDelay: inView && !isHovered ? `${index * 120}ms` : "0ms",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          marginBottom: "1.25rem",
          transform: isHovered ? "scale(1.1) rotate(2deg)" : "scale(1)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "inline-block",
        }}
      >
        {topic.icon}
      </div>
      <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.6rem" }}>
        {topic.title}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
        {topic.desc}
      </p>
    </div>
  );
}

export default function SupportPage() {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh", position: "relative" }}>
      <Navbar />
      
      {/* Full Page Live Background */}
      <SupportLiveBackground />

      <main style={{ paddingTop: "120px", paddingBottom: "7rem", position: "relative", zIndex: 2 }}>
        <div className="container">
          <SectionHeading
            eyebrow="SUPPORT & HELP CONTROL CENTER"
            title="How Can We Assist Your System Execution?"
            description="Access guidance for your performance audit, daily mission schedule, or diagnostic tool control room."
            center={true}
          />

          <div
            style={{
              maxWidth: "960px",
              margin: "4rem auto 0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {supportTopics.map((topic, index) => (
                <SupportCard key={topic.id} topic={topic} index={index} />
              ))}
            </div>

            {/* Direct Contact Support Box */}
            <div
              style={{
                backgroundColor: "rgba(16, 16, 24, 0.92)",
                border: "2px solid var(--color-border-gold)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
                textAlign: "center",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.6rem" }}>
                Need Direct Audit Support?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", marginBottom: "1.75rem", maxWidth: "600px", margin: "0 auto 1.75rem auto" }}>
                Our performance telemetry team is available to assist with diagnostic inquiries, parental dashboards, and system integration.
              </p>
              
              <Link
                href="/#contact"
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                className="btn btn-primary"
                style={{
                  display: "inline-block",
                  padding: "0.9rem 2.2rem",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transform: ctaHovered ? "scale(1.03) translateY(-2px)" : "scale(1) translateY(0)",
                  boxShadow: ctaHovered
                    ? "0 10px 25px rgba(212, 175, 55, 0.4)"
                    : "0 4px 15px rgba(212, 175, 55, 0.2)",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
                }}
              >
                CONTACT SUPPORT TEAM →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
