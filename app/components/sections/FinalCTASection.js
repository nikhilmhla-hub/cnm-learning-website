"use client";

import Button from "../ui/Button";

export default function FinalCTASection() {
  return (
    <section
      id="audit"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--color-background)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "var(--color-surface)",
            border: "2px solid var(--color-border-gold)",
            borderRadius: "var(--radius-xl)",
            padding: "3.5rem 2.5rem",
            textAlign: "center",
            boxShadow: "0 25px 60px rgba(0,0,0,0.95), 0 0 40px rgba(212, 175, 55, 0.15)",
          }}
        >
          <div
            style={{
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              color: "var(--color-gold-bright)",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            STUDENT PERFORMANCE INTELLIGENCE PROTOCOL
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Stop Guessing. <br />
            <span className="text-gold">Start Diagnosing.</span>
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 2.25rem auto",
              lineHeight: 1.6,
            }}
          >
            Find exactly where your preparation is leaking marks - focus, accuracy, revision, time, or exam pressure - and convert those findings into a measurable 90-day plan.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1.25rem",
            }}
          >
            <a
              href="https://cnm-online-audit.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                backgroundColor: "var(--color-gold-bright)",
                color: "#050505",
                fontWeight: 800,
                fontSize: "1rem",
                padding: "0.95rem 2.25rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(212, 175, 55, 0.35)",
                transition: "all 0.2s ease",
              }}
            >
              RUN YOUR CNM PERFORMANCE AUDIT →
            </a>
            <Button href="#how-it-works" variant="secondary" style={{ padding: "0.95rem 1.75rem", fontSize: "1rem" }}>
              EXPLORE CNM SYSTEM LABS
            </Button>
          </div>

          <div
            style={{
              marginTop: "2rem",
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            DIAGNOSE • PLAN • EXECUTE • MEASURE • IMPROVE
          </div>
        </div>
      </div>
    </section>
  );
}
