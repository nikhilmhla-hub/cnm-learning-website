"use client";

import { useEffect, useRef } from "react";

export default function PerformanceDiagnosticsBackground() {
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

    // Canvas elements for Performance Data Field
    const signalLines = Array.from({ length: 6 }, (_, i) => ({
      y: (height / 7) * (i + 1),
      speed: 0.4 + Math.random() * 0.5,
      amplitude: 12 + Math.random() * 20,
      wavelength: 0.008 + Math.random() * 0.005,
      offset: Math.random() * Math.PI * 2,
    }));

    const dataPoints = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.2,
    }));

    const radarArcs = [
      { x: width * 0.2, y: height * 0.5, r: 80, speed: 0.008, angle: 0 },
      { x: width * 0.8, y: height * 0.5, r: 110, speed: -0.006, angle: Math.PI },
    ];

    let pulseProgress = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Grid Intersections & Horizontal Lines
      ctx.strokeStyle = "rgba(212, 175, 55, 0.035)";
      ctx.lineWidth = 1;
      const gridStep = 60;
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
        // 2. Waveform Signal Paths
        pulseProgress += 0.015;
        signalLines.forEach((line) => {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
          ctx.lineWidth = 1.5;
          for (let x = 0; x < width; x += 10) {
            const y = line.y + Math.sin(x * line.wavelength + line.offset + pulseProgress * line.speed) * line.amplitude;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        });

        // 3. Floating Data Points
        dataPoints.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240, 201, 75, ${p.alpha})`;
          ctx.fill();
        });

        // 4. Radar Arcs
        radarArcs.forEach((arc) => {
          arc.angle += arc.speed;
          ctx.beginPath();
          ctx.arc(arc.x, arc.y, arc.r, arc.angle, arc.angle + Math.PI * 0.6);
          ctx.strokeStyle = "rgba(212, 175, 55, 0.06)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
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
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
