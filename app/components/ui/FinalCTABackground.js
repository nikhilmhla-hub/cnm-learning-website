"use client";

import { useEffect, useRef } from "react";

export default function FinalCTABackground() {
  const canvasRef = useRef(null);

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

    // Performance Intelligence Core: Technical Grid, Rings & Telemetry Particles
    let ringAngle1 = 0;
    let ringAngle2 = Math.PI * 0.5;
    let pulseR = 0;

    const dataParticles = Array.from({ length: 14 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "rgba(240, 201, 75, " : "rgba(56, 189, 248, ",
      alpha: Math.random() * 0.3 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle Technical Grid (Deep Black/Graphite Foundation)
      ctx.strokeStyle = "rgba(212, 175, 55, 0.02)";
      ctx.lineWidth = 1;
      const step = 80;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const cx = width * 0.5;
      const cy = height * 0.5;

      if (!prefersReducedMotion) {
        ringAngle1 += 0.003;
        ringAngle2 -= 0.0025;
        pulseR = (pulseR + 0.35) % 280;

        // 2. Large Central Radial Core Soft Light Field
        const coreGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, 380);
        coreGrad.addColorStop(0, "rgba(240, 201, 75, 0.08)");
        coreGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.025)");
        coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, 380, 0, Math.PI * 2);
        ctx.fill();

        // 3. Slow Rotating Intelligence Orbital Rings
        ctx.lineWidth = 1.5;
        
        // Ring 1 (Gold Dashed)
        ctx.beginPath();
        ctx.arc(cx, cy, 160, ringAngle1, ringAngle1 + Math.PI * 1.4);
        ctx.strokeStyle = "rgba(240, 201, 75, 0.15)";
        ctx.stroke();

        // Ring 2 (Cyan Arc)
        ctx.beginPath();
        ctx.arc(cx, cy, 260, ringAngle2, ringAngle2 + Math.PI * 1.2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.1)";
        ctx.stroke();

        // Ring 3 (Outer Gold Faint Circle)
        ctx.beginPath();
        ctx.arc(cx, cy, 380, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(212, 175, 55, 0.04)";
        ctx.stroke();

        // 4. Slow Telemetry Particles
        dataParticles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.fill();
        });

        // 5. Expanding Diagnostic Pulse Wave
        ctx.beginPath();
        ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(240, 201, 75, ${(1 - pulseR / 280) * 0.12})`;
        ctx.lineWidth = 1;
        ctx.stroke();
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
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
