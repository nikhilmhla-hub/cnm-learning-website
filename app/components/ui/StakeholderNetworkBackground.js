"use client";

import { useEffect, useRef } from "react";

export default function StakeholderNetworkBackground() {
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

    // Stakeholder Network Orbital & Data Flow
    const nodes = [
      { x: width * 0.5, y: height * 0.45, r: 40, isCore: true },
      { x: width * 0.2, y: height * 0.3, r: 18, label: "STUDENT" },
      { x: width * 0.8, y: height * 0.3, r: 18, label: "PARENT" },
      { x: width * 0.3, y: height * 0.75, r: 18, label: "SCHOOL" },
      { x: width * 0.7, y: height * 0.75, r: 18, label: "COACHING" },
    ];

    const packets = [
      { from: 1, to: 0, progress: 0, speed: 0.004 },
      { from: 2, to: 0, progress: 0.33, speed: 0.005 },
      { from: 3, to: 0, progress: 0.66, speed: 0.0045 },
      { from: 4, to: 0, progress: 0.2, speed: 0.0038 },
    ];

    let rotAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        rotAngle += 0.003;
        const cx = width * 0.5;
        const cy = height * 0.45;

        // 1. Orbital Connection Rings around System Core
        ctx.strokeStyle = "rgba(212, 175, 55, 0.04)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, 180, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(56, 189, 248, 0.03)";
        ctx.beginPath();
        ctx.arc(cx, cy, 280, 0, Math.PI * 2);
        ctx.stroke();

        // 2. Network Connection Lines
        nodes.slice(1).forEach((node) => {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = "rgba(212, 175, 55, 0.08)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });

        // 3. Signal Packets Traveling along connections
        packets.forEach((p) => {
          p.progress = (p.progress + p.speed) % 1;
          const source = nodes[p.from];
          const target = nodes[p.to];
          const px = source.x + (target.x - source.x) * p.progress;
          const py = source.y + (target.y - source.y) * p.progress;

          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#f0c94b";
          ctx.shadowColor = "#f0c94b";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        // 4. Subtle Ambient Core Field Glow
        const coreGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 140);
        coreGrad.addColorStop(0, "rgba(240, 201, 75, 0.06)");
        coreGrad.addColorStop(1, "rgba(240, 201, 75, 0)");
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, 140, 0, Math.PI * 2);
        ctx.fill();
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
