"use client";

import { useEffect, useRef } from "react";

export default function SupportLiveBackground() {
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

    // Support Telemetry & Radar Signal Nodes
    const telemetryNodes = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02,
      color: Math.random() > 0.4 ? "rgba(56, 189, 248, " : "rgba(240, 201, 75, ",
    }));

    let time = 0;

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      // Deep Support Diagnostic Base
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        50,
        width * 0.5,
        height * 0.5,
        width * 0.9
      );
      bgGrad.addColorStop(0, "rgba(8, 14, 24, 0.65)");
      bgGrad.addColorStop(1, "#040508");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Faint Diagnostic Radar Grid
      ctx.strokeStyle = "rgba(56, 189, 248, 0.025)";
      ctx.lineWidth = 1;
      const step = 90;
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

      if (!prefersReducedMotion) {
        time += 0.015;

        // Concentric Diagnostic Radar Waves from Center Top
        const centerX = width * 0.5;
        const centerY = height * 0.2;
        for (let r = 1; r <= 3; r++) {
          const waveRadius = ((time * 30 + r * 160) % 600);
          const alpha = Math.max(0, (1 - waveRadius / 600) * 0.05);
          ctx.beginPath();
          ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.stroke();
        }

        // Connect close telemetry nodes
        for (let i = 0; i < telemetryNodes.length; i++) {
          for (let j = i + 1; j < telemetryNodes.length; j++) {
            const dx = telemetryNodes[i].x - telemetryNodes[j].x;
            const dy = telemetryNodes[i].y - telemetryNodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              const alpha = (1 - dist / 150) * 0.07;
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(telemetryNodes[i].x, telemetryNodes[i].y);
              ctx.lineTo(telemetryNodes[j].x, telemetryNodes[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw telemetry nodes
        telemetryNodes.forEach((node) => {
          node.x += node.speedX;
          node.y += node.speedY;
          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;

          node.pulse += node.pulseSpeed;
          const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;
          const alpha = 0.25 + Math.sin(node.pulse) * 0.15;

          ctx.beginPath();
          ctx.arc(node.x, node.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
          ctx.fillStyle = `${node.color}${alpha})`;
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
