"use client";

import { useEffect, useRef } from "react";

export default function PrivacyLiveBackground() {
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

    // Secure Data Lock Nodes
    const securityNodes = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      alpha: Math.random() * 0.2 + 0.1,
    }));

    let t = 0;

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      // Deep Secure Vault Radial Base
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        40,
        width * 0.5,
        height * 0.5,
        width * 0.85
      );
      bgGrad.addColorStop(0, "rgba(7, 12, 20, 0.65)");
      bgGrad.addColorStop(1, "#030406");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Fine Document Intelligence Grid
      ctx.strokeStyle = "rgba(212, 175, 55, 0.02)";
      ctx.lineWidth = 1;
      const step = 70;
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
        t += 0.01;

        // Draw faint encryption horizontal telemetry scanlines
        const scanY = (t * 25) % height;
        ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(width, scanY);
        ctx.stroke();

        // Connect secure nodes
        for (let i = 0; i < securityNodes.length; i++) {
          for (let j = i + 1; j < securityNodes.length; j++) {
            const dx = securityNodes[i].x - securityNodes[j].x;
            const dy = securityNodes[i].y - securityNodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              const lineAlpha = (1 - dist / 140) * 0.06;
              ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(securityNodes[i].x, securityNodes[i].y);
              ctx.lineTo(securityNodes[j].x, securityNodes[j].y);
              ctx.stroke();
            }
          }
        }

        // Render secure nodes
        securityNodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;

          ctx.fillStyle = `rgba(240, 201, 75, ${node.alpha})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
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
