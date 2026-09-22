"use client";

import { useState, useEffect, useRef } from "react";
import Button from "../ui/Button";

export default function HeroSection() {
  const canvasRef = useRef(null);

  // Console State Management
  const [consoleStatus, setConsoleStatus] = useState("ANALYZING"); // ANALYZING, COMPLETE, READY
  const [scoreVal, setScoreVal] = useState(0); // Animated counter for 72 / 100
  const [isScoreAnimating, setIsScoreAnimating] = useState(true);
  const [barsAnimated, setBarsAnimated] = useState(false);

  // Mouse Parallax Offset
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Independent Sensor Card State Arrays for Top 4 Cards
  const cardDataPool = [
    [
      { label: "FOCUS", val: "38%", target: "88%", status: "CRITICAL LEAK", color: "#f43f5e", sensorState: "LEAK DETECTED" },
      { label: "FOCUS", val: "78%", target: "88%", status: "OPTIMIZING", color: "#f0c94b", sensorState: "INTERVENTION ACTIVE" },
    ],
    [
      { label: "ACCURACY", val: "50%", target: "85%", status: "NEEDS ATTENTION", color: "#f59e0b", sensorState: "UNFORCED ERRORS" },
      { label: "ACCURACY", val: "71%", target: "85%", status: "STABLE", color: "#38bdf8", sensorState: "PRECISION RISING" },
    ],
    [
      { label: "REVISION", val: "78%", target: "90%", status: "RETENTION OK", color: "#38bdf8", sensorState: "SPACED RECALL" },
      { label: "REVISION", val: "82%", target: "90%", status: "OPTIMAL", color: "#22c55e", sensorState: "RECALL SECURE" },
    ],
    [
      { label: "CONFIDENCE", val: "68%", target: "80%", status: "EXAM PRESSURE", color: "#f59e0b", sensorState: "STRESS SIGNAL" },
      { label: "CONFIDENCE", val: "80%", target: "88%", status: "OPTIMAL", color: "#22c55e", sensorState: "CALM EXECUTION" },
    ],
  ];

  // Active indices for each of the 4 independent sensor cards
  const [cardIndices, setCardIndices] = useState([0, 0, 0, 0]);
  const [cardStages, setCardStages] = useState(["idle", "idle", "idle", "idle"]); // idle, scanning, analyzing, updated

  // Performance score counter on entrance with pulse synchronization
  useEffect(() => {
    let start = 0;
    const duration = 1600;
    const target = 72;
    const intervalTime = 30;
    const step = target / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setScoreVal(target);
        setIsScoreAnimating(false);
        clearInterval(timer);
        setBarsAnimated(true);
        setConsoleStatus("COMPLETE");
        setTimeout(() => setConsoleStatus("READY"), 2200);
      } else {
        setScoreVal(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Staggered Independent Card Sensor Refresh Sequence
  useEffect(() => {
    const cycleSensor = (cardIndex) => {
      // Stage 1: Compress & scanning beam
      setCardStages((prev) => {
        const next = [...prev];
        next[cardIndex] = "scanning";
        return next;
      });

      // Stage 2: Analyze
      setTimeout(() => {
        setCardStages((prev) => {
          const next = [...prev];
          next[cardIndex] = "analyzing";
          return next;
        });
      }, 500);

      // Stage 3: Update data content & resolve metric
      setTimeout(() => {
        setCardIndices((prev) => {
          const next = [...prev];
          next[cardIndex] = (next[cardIndex] + 1) % cardDataPool[cardIndex].length;
          return next;
        });
        setCardStages((prev) => {
          const next = [...prev];
          next[cardIndex] = "updated";
          return next;
        });
      }, 1100);

      // Stage 4: Settle to resting state
      setTimeout(() => {
        setCardStages((prev) => {
          const next = [...prev];
          next[cardIndex] = "idle";
          return next;
        });
      }, 1900);
    };

    const interval = setInterval(() => {
      const now = Date.now();
      const targetCard = Math.floor((now / 3500) % 4);
      cycleSensor(targetCard);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  // Desktop Mouse Parallax Listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 992) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Multi-Tier AI Computational Interface Canvas Engine
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
    const isMobile = window.innerWidth < 768;

    // LAYER 1: LARGE AI COMPUTATIONAL STRUCTURES & INFERENCE RINGS
    const largeStructures = [
      { cx: width * 0.22, cy: height * 0.38, r: 160, stroke: "rgba(240, 201, 75, 0.08)", dash: [10, 14] },
      { cx: width * 0.78, cy: height * 0.62, r: 210, stroke: "rgba(56, 189, 248, 0.07)", dash: [14, 18] },
      { cx: width * 0.5, cy: height * 0.5, r: 310, stroke: "rgba(240, 201, 75, 0.04)", dash: [18, 24] },
    ];

    const coordMarkers = [
      { x: width * 0.08, y: height * 0.12, label: "SYS_INFERENCE_ENGINE // 01" },
      { x: width * 0.8, y: height * 0.1, label: "TELEMETRY_ROUTING // 04" },
      { x: width * 0.06, y: height * 0.88, label: "DIAGNOSTIC_ORBIT // 08" },
      { x: width * 0.85, y: height * 0.9, label: "RANK_TRAJECTORY // 12" },
    ];

    const dataGlyphs = [
      { x: width * 0.28, y: height * 0.15, text: "INFERENCE_LATENCY = 0.02ms" },
      { x: width * 0.74, y: height * 0.38, text: "PATTERN_ACCURACY: 94.2%" },
      { x: width * 0.12, y: height * 0.7, text: "LEAK_IDENTIFIED: FOCUS_ENDURANCE" },
      { x: width * 0.82, y: height * 0.78, text: "SYSTEM_STATUS: ACTIVE" },
    ];

    // LAYER 2: MEDIUM DATA NETWORK (Sized 8-14px visual diameter)
    const clusterCenters = [
      { x: width * 0.18, y: height * 0.32, radius: 120 },
      { x: width * 0.36, y: height * 0.74, radius: 140 },
      { x: width * 0.72, y: height * 0.28, radius: 150 },
      { x: width * 0.84, y: height * 0.68, radius: 130 },
      { x: width * 0.52, y: height * 0.48, radius: 170 },
    ];

    const nodeCount = prefersReducedMotion ? 10 : isMobile ? 22 : 38;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      const cluster = clusterCenters[i % clusterCenters.length];
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * cluster.radius;

      // Hierarchy: primary node (large 5-7px radius), secondary node (3-4px radius)
      const isPrimary = i % 4 === 0;
      const radius = isPrimary ? (Math.random() * 2 + 5) : (Math.random() * 1.5 + 3);

      nodes.push({
        x: cluster.x + Math.cos(angle) * dist,
        y: cluster.y + Math.sin(angle) * dist,
        originX: cluster.x + Math.cos(angle) * dist,
        originY: cluster.y + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius,
        isPrimary,
        color: isPrimary
          ? "#f0c94b"
          : Math.random() > 0.4
          ? "#38bdf8"
          : Math.random() > 0.7
          ? "#22c55e"
          : "#f43f5e",
        alpha: isPrimary ? 0.7 : Math.random() * 0.4 + 0.2,
        pulseOffset: Math.random() * Math.PI * 2,
        activeGlow: 0, // Glow pulse upon receiving data packet
      });
    }

    // LAYER 3: FOREGROUND DIRECTIONAL DATA PACKETS (3-6px core with visible light trail)
    const packets = [];
    for (let p = 0; p < (isMobile ? 4 : 10); p++) {
      const fromIdx = Math.floor(Math.random() * nodes.length);
      const toIdx = (fromIdx + 1 + Math.floor(Math.random() * 5)) % nodes.length;

      packets.push({
        from: fromIdx,
        to: toIdx,
        progress: Math.random(),
        speed: Math.random() * 0.008 + 0.004,
        color: Math.random() > 0.35 ? "#f0c94b" : "#38bdf8",
      });
    }

    // Active AI Inference Cluster Events
    let inferenceEvents = [];
    let lastEventTime = 0;

    const render = (timestamp) => {
      if (document.hidden) return; // Pause when tab is hidden

      ctx.clearRect(0, 0, width, height);

      // Lerp Mouse Parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;
      const px = mouseRef.current.x;
      const py = mouseRef.current.y;

      // Dark Graphite Base Environment
      const bgGrad = ctx.createRadialGradient(
        width * 0.5 + px,
        height * 0.45 + py,
        30,
        width * 0.5,
        height * 0.45,
        width * 0.8
      );
      bgGrad.addColorStop(0, "rgba(18, 18, 22, 0.45)");
      bgGrad.addColorStop(0.7, "rgba(8, 8, 10, 0.85)");
      bgGrad.addColorStop(1, "#050505");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // LAYER 1: LARGE AI COMPUTATIONAL STRUCTURES
      ctx.lineWidth = 1;
      largeStructures.forEach((struct) => {
        ctx.strokeStyle = struct.stroke;
        ctx.setLineDash(struct.dash);
        ctx.beginPath();
        ctx.arc(struct.cx + px * 0.25, struct.cy + py * 0.25, struct.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Computational Grid Intersections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.018)";
      const gridSize = 55;
      for (let gx = 0; gx < width; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx + px * 0.15, 0);
        ctx.lineTo(gx + px * 0.15, height);
        ctx.stroke();
      }
      for (let gy = 0; gy < height; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy + py * 0.15);
        ctx.lineTo(width, gy + py * 0.15);
        ctx.stroke();
      }

      // Metadata Glyphs & Telemetry Headers
      ctx.fillStyle = "rgba(240, 201, 75, 0.32)";
      ctx.font = "9px monospace";
      coordMarkers.forEach((cm) => {
        ctx.fillText(cm.label, cm.x + px * 0.35, cm.y + py * 0.35);
      });
      ctx.fillStyle = "rgba(56, 189, 248, 0.26)";
      dataGlyphs.forEach((dg) => {
        ctx.fillText(dg.text, dg.x + px * 0.4, dg.y + py * 0.4);
      });

      // LAYER 2: MEDIUM NETWORK CONNECTIONS & NODES
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        if (!prefersReducedMotion) {
          n1.x += n1.vx;
          n1.y += n1.vy;
          if (Math.abs(n1.x - n1.originX) > 30) n1.vx *= -1;
          if (Math.abs(n1.y - n1.originY) > 30) n1.vy *= -1;
        }

        const nx1 = n1.x + px * 0.55;
        const ny1 = n1.y + py * 0.55;

        // Draw network connection lines to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const nx2 = n2.x + px * 0.55;
          const ny2 = n2.y + py * 0.55;
          const dx = nx1 - nx2;
          const dy = ny1 - ny2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const edgeAlpha = (1 - dist / 125) * (n1.isPrimary || n2.isPrimary ? 0.22 : 0.12);
            ctx.strokeStyle = `rgba(240, 201, 75, ${edgeAlpha})`;
            ctx.lineWidth = n1.isPrimary && n2.isPrimary ? 1.2 : 0.7;
            ctx.beginPath();
            ctx.moveTo(nx1, ny1);
            ctx.lineTo(nx2, ny2);
            ctx.stroke();
          }
        }

        // Render node dot with active glow pulse decay
        if (n1.activeGlow > 0) {
          n1.activeGlow -= 0.03;
          ctx.beginPath();
          ctx.arc(nx1, ny1, n1.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = n1.color;
          ctx.globalAlpha = n1.activeGlow * 0.5;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(nx1, ny1, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = n1.color;
        ctx.globalAlpha = n1.alpha + Math.sin(timestamp * 0.002 + n1.pulseOffset) * 0.12;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // LAYER 3: FOREGROUND DIRECTIONAL DATA PACKETS WITH LIGHT TRAILS
      if (!prefersReducedMotion) {
        packets.forEach((p) => {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0;
            // Activate destination node glow upon arrival
            if (nodes[p.to]) nodes[p.to].activeGlow = 1.0;

            p.from = p.to;
            p.to = (p.from + 1 + Math.floor(Math.random() * 5)) % nodes.length;
          }

          const nFrom = nodes[p.from];
          const nTo = nodes[p.to];
          if (nFrom && nTo) {
            const curX = nFrom.x + px * 0.55 + (nTo.x - nFrom.x) * p.progress;
            const curY = nFrom.y + py * 0.55 + (nTo.y - nFrom.y) * p.progress;
            const trailX = nFrom.x + px * 0.55 + (nTo.x - nFrom.x) * Math.max(0, p.progress - 0.12);
            const trailY = nFrom.y + py * 0.55 + (nTo.y - nFrom.y) * Math.max(0, p.progress - 0.12);

            // Light Trail
            ctx.beginPath();
            ctx.moveTo(trailX, trailY);
            ctx.lineTo(curX, curY);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 0.45;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.globalAlpha = 1.0;

            // Packet Core (3-5px core)
            ctx.beginPath();
            ctx.arc(curX, curY, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });

        // Trigger Periodic AI Inference Event (Node cluster activation & expanding ring)
        if (timestamp - lastEventTime > 4200) {
          lastEventTime = timestamp;
          const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
          if (randomNode) {
            inferenceEvents.push({
              x: randomNode.x + px * 0.55,
              y: randomNode.y + py * 0.55,
              r: 6,
              maxR: 45,
              alpha: 0.7,
              color: randomNode.color,
            });
          }
        }

        // Render AI Inference Ring Events
        for (let eIdx = inferenceEvents.length - 1; eIdx >= 0; eIdx--) {
          const ev = inferenceEvents[eIdx];
          ev.r += 1.2;
          ev.alpha -= 0.018;
          if (ev.alpha <= 0 || ev.r >= ev.maxR) {
            inferenceEvents.splice(eIdx, 1);
          } else {
            ctx.beginPath();
            ctx.arc(ev.x, ev.y, ev.r, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(240, 201, 75, ${ev.alpha})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      // Reactive Central Aura behind Console
      const auraGlowColor =
        consoleStatus === "ANALYZING"
          ? "rgba(56, 189, 248, 0.16)"
          : consoleStatus === "READY"
          ? "rgba(240, 201, 75, 0.22)"
          : "rgba(34, 197, 94, 0.18)";

      const centerGlow = ctx.createRadialGradient(
        width * 0.72 + px * 0.7,
        height * 0.48 + py * 0.7,
        20,
        width * 0.72,
        height * 0.48,
        230
      );
      centerGlow.addColorStop(0, auraGlowColor);
      centerGlow.addColorStop(0.65, "rgba(240, 201, 75, 0.02)");
      centerGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render(0);

    // Pause canvas when tab is hidden
    const handleVisibilityChange = () => {
      if (!document.hidden && !prefersReducedMotion) {
        render(performance.now());
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [consoleStatus]);

  const progressMetrics = [
    { label: "FOCUS ENDURANCE", val: "78%", pct: 78, color: "var(--color-status-amber)" },
    { label: "SOLVING ACCURACY", val: "71%", pct: 71, color: "var(--color-gold-bright)" },
    { label: "REVISION RECALL", val: "82%", pct: 82, color: "var(--color-status-green)" },
    { label: "EXAM CONFIDENCE", val: "68%", pct: 68, color: "var(--color-status-amber)" },
    { label: "TIME ALLOCATION", val: "76%", pct: 76, color: "var(--color-status-green)" },
  ];

  const AUDIT_URL = "https://cnm-online-audit.vercel.app/";

  return (
    <section
      id="home"
      style={{
        paddingTop: "calc(64px + 1rem)", // 20% tighter navbar top gap
        paddingBottom: "4.5rem",
        backgroundColor: "var(--color-background)",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      {/* Multi-Tier AI Computational Canvas Engine */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline & Positioning */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {/* Eyebrow Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(212, 175, 55, 0.08)",
                border: "1px solid var(--color-border-gold)",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-gold-bright)",
                  boxShadow: "0 0 8px var(--color-gold-bright)",
                }}
              />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "var(--color-gold-bright)",
                }}
              >
                STUDENT PERFORMANCE PROBLEM-SOLVING SYSTEM
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
              }}
            >
              You Know You Can Do Better.{" "}
              <span style={{ color: "var(--color-gold-bright)", textShadow: "0 0 25px rgba(212, 175, 55, 0.25)" }}>
                Let’s Find What’s Stopping You.
              </span>
            </h1>

            {/* Sub-headline / Narrative */}
            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.6,
                color: "var(--color-text-secondary)",
                maxWidth: "580px",
              }}
            >
              Your marks are telling you what happened. CNM System Labs helps uncover why - whether the problem is focus, accuracy, revision, time management, confidence, test strategy or execution - and turns that diagnosis into a measurable plan.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href={AUDIT_URL}
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
                  fontSize: "0.95rem",
                  padding: "0.9rem 1.85rem",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(212, 175, 55, 0.4)",
                  transition: "all 0.25s ease",
                }}
              >
                START ONLINE PERFORMANCE AUDIT →
              </a>

              <Button
                variant="secondary"
                size="large"
                onClick={() => {
                  const element = document.getElementById("illustrative-audit");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                EXPLORE SYSTEM METHODOLOGY
              </Button>
            </div>

            {/* Process Status Strip */}
            <div
              style={{
                marginTop: "1rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--color-border-subtle)",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-text-muted)" }}>
                SYSTEM PROCESS:
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
                {["DIAGNOSE", "PLAN", "EXECUTE", "MEASURE", "IMPROVE"].map((step, idx, arr) => (
                  <span key={step} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: idx === 0 ? "var(--color-gold-bright)" : "var(--color-text-secondary)",
                      }}
                    >
                      {step}
                    </span>
                    {idx < arr.length - 1 && (
                      <span style={{ color: "var(--color-border-gold)", fontSize: "0.65rem" }}>•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: COMPACT DENSE DIAGNOSTIC LAB CONSOLE v3.4 (Reduced Height & Hover Zoom) */}
          <div style={{ width: "100%", position: "relative" }}>
            {/* Reactive Glow Container behind Console */}
            <div
              className={`console-glow ${consoleStatus.toLowerCase()}`}
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "24px",
                pointerEvents: "none",
                zIndex: 0,
                transition: "all 0.8s ease",
              }}
            />

            <div
              style={{
                backgroundColor: "rgba(16, 16, 19, 0.96)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem",
                boxShadow: "0 18px 45px rgba(0, 0, 0, 0.9), 0 0 20px rgba(212, 175, 55, 0.12)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Header Bar with Live Pulsing Status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "0.75rem",
                  marginBottom: "0.9rem",
                  borderBottom: "1px solid var(--color-border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor:
                        consoleStatus === "ANALYZING"
                          ? "#38bdf8"
                          : consoleStatus === "READY"
                          ? "#22c55e"
                          : "#f59e0b",
                      boxShadow: `0 0 8px ${
                        consoleStatus === "ANALYZING"
                          ? "#38bdf8"
                          : consoleStatus === "READY"
                          ? "#22c55e"
                          : "#f59e0b"
                      }`,
                    }}
                  />
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-text)" }}>
                    DIAGNOSTIC LAB CONSOLE v3.4
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--color-border-gold)",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "4px",
                    color: consoleStatus === "READY" ? "#22c55e" : "var(--color-gold-bright)",
                  }}
                >
                  SYSTEM {consoleStatus}
                </span>
              </div>

              {/* TOP 4 INDEPENDENT SENSOR CARDS (HOVER ZOOM & SENSOR REFRESH SEQUENCE) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.7rem",
                  marginBottom: "0.9rem",
                }}
              >
                {[0, 1, 2, 3].map((cardIdx) => {
                  const dataIndex = cardIndices[cardIdx];
                  const data = cardDataPool[cardIdx][dataIndex];
                  const stage = cardStages[cardIdx];

                  return (
                    <div
                      key={cardIdx}
                      className={`sensor-card card-${cardIdx} stage-${stage}`}
                      style={{
                        backgroundColor: "rgba(6, 6, 9, 0.92)",
                        border:
                          stage === "scanning" || stage === "analyzing"
                            ? `1px solid ${data.color}`
                            : "1px solid var(--color-border)",
                        borderRadius: "var(--radius-md)",
                        padding: "0.75rem 0.85rem",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        cursor: "pointer",
                      }}
                    >
                      {/* Scan Beam Effect for Card */}
                      {stage === "scanning" && (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: `linear-gradient(90deg, transparent, ${data.color}35, transparent)`,
                            animation: "cardScanBeam 0.5s linear infinite",
                          }}
                        />
                      )}

                      {/* Header metadata */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                        <span style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.08em", color: "var(--color-text-muted)" }}>
                          0{cardIdx + 1} • {data.label}
                        </span>
                        <span
                          style={{
                            fontSize: "0.58rem",
                            fontWeight: 700,
                            color: data.color,
                            backgroundColor: `${data.color}15`,
                            padding: "0.1rem 0.3rem",
                            borderRadius: "3px",
                          }}
                        >
                          {stage === "analyzing" ? "RECALCULATING..." : data.status}
                        </span>
                      </div>

                      {/* Content Value Display */}
                      <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", marginTop: "1px", lineHeight: 1.15 }}>
                        {stage === "analyzing" ? (
                          <span style={{ fontSize: "0.9rem", color: "var(--color-gold-bright)" }}>ANALYZING...</span>
                        ) : (
                          <>
                            {data.val}{" "}
                            <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
                              (Target: {data.target})
                            </span>
                          </>
                        )}
                      </div>

                      <div style={{ fontSize: "0.64rem", fontWeight: 600, color: data.color, marginTop: "2px" }}>
                        ● {data.sensorState}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* HIGH-IMPACT VISUALLY REACTIVE PERFORMANCE INDEX SCORE */}
              <div
                style={{
                  backgroundColor: "rgba(6, 6, 9, 0.95)",
                  border: "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.9rem 1.1rem",
                  marginBottom: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: isScoreAnimating
                    ? "0 0 30px rgba(240, 201, 75, 0.35), inset 0 0 15px rgba(240, 201, 75, 0.15)"
                    : "0 0 20px rgba(212, 175, 55, 0.18)",
                  transition: "box-shadow 0.4s ease",
                }}
              >
                {/* Gold Signal Trail on Container Border */}
                <div className="score-border-pulse" />

                <div>
                  <div style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--color-gold-bright)" }}>
                    PERFORMANCE INDEX SCORE
                  </div>
                  <div
                    style={{
                      fontSize: "2.1rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      marginTop: "1px",
                      lineHeight: 1.1,
                      transform: isScoreAnimating ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.15s ease, color 0.3s ease",
                      textShadow: isScoreAnimating ? "0 0 15px #f0c94b" : "0 0 10px rgba(240, 201, 75, 0.5)",
                    }}
                  >
                    {scoreVal}{" "}
                    <span style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
                      / 100
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.08em", color: "var(--color-text-muted)" }}>
                    TARGET TRAJECTORY
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", marginTop: "2px" }}>
                    <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>142</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--color-gold-bright)" }}>➔</span>
                    <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-gold-bright)" }}>185</span>
                  </div>
                </div>
              </div>

              {/* 5 TELEMETRY METRIC BARS */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "0.85rem" }}>
                {progressMetrics.map((m) => (
                  <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.62rem" }}>
                      <span style={{ color: "var(--color-text-secondary)", fontWeight: 600 }}>{m.label}</span>
                      <span style={{ color: m.color, fontWeight: 700 }}>{m.val}</span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "4px",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        borderRadius: "2px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: barsAnimated ? `${m.pct}%` : "0%",
                          backgroundColor: m.color,
                          borderRadius: "2px",
                          transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* SYSTEM DIAGNOSTIC AUDIT ACTION BUTTON */}
              <a
                href={AUDIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  width: "100%",
                  padding: "0.65rem 1rem",
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid var(--color-border-gold)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--color-gold-bright)",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  textAlign: "center",
                }}
              >
                ⚡ RUN DIAGNOSTIC AUDIT NOW →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Reactive Glow Behind Console */
        .console-glow.analyzing {
          background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0.04) 50%, transparent 75%);
          filter: blur(22px);
        }
        .console-glow.complete {
          background: radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(245, 158, 11, 0.04) 50%, transparent 75%);
          filter: blur(22px);
        }
        .console-glow.ready {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.28) 0%, rgba(34, 197, 94, 0.06) 50%, transparent 75%);
          filter: blur(25px);
        }

        /* Card Sensor Hover Zoom & Micro-glow */
        :global(.sensor-card:hover) {
          transform: scale(1.04) translateY(-3px) !important;
          border-color: var(--color-border-gold-bright) !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.3) !important;
        }

        /* Card Scan Beam Animation */
        @keyframes cardScanBeam {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        :global(.hero-cta-btn:hover) {
          background-color: var(--color-accent-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(240, 201, 75, 0.5) !important;
        }

        :global(.hero-cta-btn:hover .btn-arrow) {
          transform: translateX(4px);
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
