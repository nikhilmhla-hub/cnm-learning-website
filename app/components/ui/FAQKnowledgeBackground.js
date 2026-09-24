"use client";

import { useEffect, useRef } from "react";

export default function FAQKnowledgeBackground() {
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

    // Knowledge Query Field: Soft Horizontal Query Lines & Scan Beam
    const queryNodes = Array.from({ length: 10 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0.2 + Math.random() * 0.3,
      alpha: Math.random() * 0.3 + 0.1,
    }));

    let beamX = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Technical Faint Grid
      ctx.strokeStyle = "rgba(212, 175, 55, 0.02)";
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        // 2. Slow Horizontal Query Signal Lines
        queryNodes.forEach((node) => {
          node.x += node.vx;
          if (node.x > width) node.x = 0;

          ctx.beginPath();
          ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240, 201, 75, ${node.alpha})`;
          ctx.fill();

          ctx.beginPath();
          ctx.strokeStyle = `rgba(240, 201, 75, ${node.alpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.moveTo(node.x - 40, node.y);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        });

        // 3. Slowly Moving Horizontal Scan Beam
        beamX = (beamX + 0.4) % (width + 120);
        const grad = ctx.createLinearGradient(beamX - 60, 0, beamX, 0);
        grad.addColorStop(0, "rgba(56, 189, 248, 0)");
        grad.addColorStop(1, "rgba(56, 189, 248, 0.035)");
        ctx.fillStyle = grad;
        ctx.fillRect(Math.max(0, beamX - 60), 0, 60, height);
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
