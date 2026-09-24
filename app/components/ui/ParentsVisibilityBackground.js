"use client";

import { useEffect, useRef } from "react";

export default function ParentsVisibilityBackground() {
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

    // Visibility Radar Arcs & Telemetry Lines
    let radarAngle = 0;
    const telemetryDots = Array.from({ length: 12 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      pulse: Math.random() * Math.PI * 2,
      speed: 0.02 + Math.random() * 0.02,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Telemetry Grid Lines (Faint Cyan/Gold)
      ctx.strokeStyle = "rgba(56, 189, 248, 0.03)";
      ctx.lineWidth = 1;
      const hStep = 80;
      for (let y = 0; y < height; y += hStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        // 2. Translucent Scanning Radar Circles (Center Right & Top Left)
        const centerX = width * 0.85;
        const centerY = height * 0.5;
        radarAngle += 0.006;

        ctx.strokeStyle = "rgba(212, 175, 55, 0.05)";
        ctx.lineWidth = 1.5;
        [100, 200, 300].forEach((r) => {
          ctx.beginPath();
          ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
          ctx.stroke();
        });

        // Sweeping Radar Beam Arc
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, 320, radarAngle, radarAngle + 0.45);
        ctx.closePath();
        const grad = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, 320);
        grad.addColorStop(0, "rgba(212, 175, 55, 0.08)");
        grad.addColorStop(1, "rgba(212, 175, 55, 0)");
        ctx.fillStyle = grad;
        ctx.fill();

        // 3. Telemetry Pulse Points
        telemetryDots.forEach((dot) => {
          dot.pulse += dot.speed;
          const alpha = (Math.sin(dot.pulse) + 1) * 0.2 + 0.05;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
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
