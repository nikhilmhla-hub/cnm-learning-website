"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function DailyMissionSection() {
  const [inView, setInView] = useState(false);
  const [visibleCardCount, setVisibleCardCount] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const missions = [
    {
      num: "01",
      topic: "Chemical Bonding",
      action: "24 targeted problem-solving questions",
      xp: "50 XP",
      status: "COMPLETED",
      time: "45 mins",
    },
    {
      num: "02",
      topic: "Thermodynamics",
      action: "15-minute active-recall revision session",
      xp: "40 XP",
      status: "COMPLETED",
      time: "15 mins",
    },
    {
      num: "03",
      topic: "Formula Recall",
      action: "10-minute spaced repetition formula drill",
      xp: "20 XP",
      status: "COMPLETED",
      time: "10 mins",
    },
  ];

  // Scroll Entrance Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sequential Stagger Card Reveal
  useEffect(() => {
    if (!inView) return;

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setVisibleCardCount(count);
      if (count >= missions.length) {
        clearInterval(interval);
      }
    }, 220);

    return () => clearInterval(interval);
  }, [inView, missions.length]);

  // Live Execution Canvas Visual System (Performance Diagnostic network language)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Execution signal tracks
    const signalTracks = Array.from({ length: 4 }, (_, i) => ({
      y: (height / 5) * (i + 1),
      speed: 0.5 + Math.random() * 0.4,
      amplitude: 10 + Math.random() * 15,
      wavelength: 0.006 + Math.random() * 0.004,
      offset: Math.random() * Math.PI * 2,
    }));

    // Floating telemetry data packets
    const packets = Array.from({ length: 14 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.35 + 0.15,
      isGold: Math.random() > 0.4,
    }));

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle Background Grid
      ctx.strokeStyle = "rgba(212, 175, 55, 0.025)";
      ctx.lineWidth = 1;
      const gridStep = 70;
      for (let x = 0; x < width; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        pulse += 0.012;

        // Render Waveform Signals
        signalTracks.forEach((track) => {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(56, 189, 248, 0.06)";
          ctx.lineWidth = 1.2;
          for (let x = 0; x < width; x += 12) {
            const y = track.y + Math.sin(x * track.wavelength + track.offset + pulse * track.speed) * track.amplitude;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        });

        // Render Telemetry Packets
        packets.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.fillStyle = p.isGold
            ? `rgba(212, 175, 55, ${p.opacity})`
            : `rgba(56, 189, 248, ${p.opacity})`;
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="daily-mission"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "5.5rem 0",
        backgroundColor: "var(--color-background-alt)",
        borderBottom: "1px solid var(--color-border-subtle)",
        overflow: "hidden",
      }}
    >
      {/* Live Execution Engine Canvas Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeading
          eyebrow="DAILY EXECUTION ENGINE"
          title="Stop Asking: 'What Should I Study Today?' Start Knowing."
          description="The CNM Daily Mission Panel converts your long-term rank strategy into today's exact, friction-free actions."
          center={true}
        />

        {/* Mission Panel UI Mockup Container (Fixed, non-scaling wrapper) */}
        <div
          style={{
            maxWidth: "850px",
            margin: "3rem auto 0 auto",
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "2rem",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9)",
            transform: "none", // Ensures parent container remains completely fixed
          }}
        >
          {/* Top Panel Strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "1.25rem",
              marginBottom: "1.5rem",
              borderBottom: "1px solid var(--color-border-subtle)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-status-green)",
                  boxShadow: "0 0 10px var(--color-status-green)",
                  animation: "pulseGlow 2s infinite ease-in-out",
                }}
              />
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
                  TODAY'S MISSION CONTROL
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff" }}>
                  Active Execution Protocol
                </div>
              </div>
            </div>

            {/* Completion Pill */}
            <div
              style={{
                backgroundColor: "rgba(34, 197, 94, 0.12)",
                border: "1px solid var(--color-status-green)",
                padding: "0.4rem 1rem",
                borderRadius: "var(--radius-full)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--color-status-green)" }}>
                3 / 3 MISSIONS COMPLETED
              </span>
              <span style={{ color: "var(--color-status-green)" }}>✓</span>
            </div>
          </div>

          {/* Mission Cards Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {missions.map((m, idx) => {
              const isVisible = idx < visibleCardCount;
              const isHovered = hoveredIdx === idx;
              const direction = idx % 2 === 0 ? "-16px" : "16px";

              return (
                <div
                  key={m.num}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    backgroundColor: isHovered
                      ? "rgba(18, 18, 24, 0.95)"
                      : "rgba(10, 10, 12, 0.8)",
                    border: isHovered
                      ? "1px solid var(--color-gold-bright)"
                      : "1px solid var(--color-border-gold)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    flexWrap: "wrap",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? isHovered
                        ? "scale(1.03) translateY(-2px)"
                        : "scale(1) translateY(0)"
                      : `translateX(${direction}) translateY(12px)`,
                    boxShadow: isHovered
                      ? "0 10px 30px rgba(212, 175, 55, 0.18)"
                      : "0 4px 12px rgba(0,0,0,0.4)",
                    transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                    transformOrigin: "center center",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        color: "var(--color-gold-bright)",
                        backgroundColor: isHovered
                          ? "rgba(212, 175, 55, 0.25)"
                          : "var(--color-gold-soft)",
                        width: "42px",
                        height: "42px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "background-color 0.3s ease, transform 0.3s ease",
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                      }}
                    >
                      {m.num}
                    </span>
                    <div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff" }}>
                        {m.topic}
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
                        {m.action} • <span style={{ color: "var(--color-text-muted)" }}>Est. {m.time}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color: "var(--color-gold-bright)",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        padding: "0.3rem 0.65rem",
                        borderRadius: "4px",
                        border: "1px solid var(--color-border-gold)",
                      }}
                    >
                      +{m.xp}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: "var(--color-status-green)",
                        backgroundColor: "rgba(34, 197, 94, 0.12)",
                        padding: "0.3rem 0.65rem",
                        borderRadius: "4px",
                        border: "1px solid var(--color-status-green)",
                        boxShadow: isHovered ? "0 0 10px rgba(34, 197, 94, 0.3)" : "none",
                        transition: "box-shadow 0.3s ease",
                      }}
                    >
                      ✓ {m.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Daily XP Summary Strip */}
          <div
            style={{
              marginTop: "1.5rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--color-border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "0.82rem",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <span style={{ color: "var(--color-text-secondary)" }}>Total Daily Execution Yield:</span>
            <span style={{ color: "var(--color-gold-bright)", fontWeight: 800 }}>
              110 XP • 100% Target Met
            </span>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Button href="#control-room" variant="primary" style={{ padding: "0.85rem 1.75rem" }}>
            SEE HOW DAILY MISSIONS ADAPT TO YOU →
          </Button>
        </div>
      </div>
    </section>
  );
}

