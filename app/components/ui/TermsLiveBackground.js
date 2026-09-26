"use client";

import { useEffect, useRef } from "react";

export default function TermsLiveBackground() {
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

    // System Protocol Vector Nodes
    const protocolNodes = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      color: Math.random() > 0.5 ? "rgba(240, 201, 75, " : "rgba(168, 85, 247, ",
      alpha: Math.random() * 0.25 + 0.1,
    }));

    let t = 0;

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      // Deep Protocol System Base
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        60,
        width * 0.5,
        height * 0.5,
        width * 0.9
      );
      bgGrad.addColorStop(0, "rgba(12, 10, 20, 0.65)");
      bgGrad.addColorStop(1, "#040307");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Protocol Architecture Grid
      ctx.strokeStyle = "rgba(168, 85, 247, 0.02)";
      ctx.lineWidth = 1;
      const step = 85;
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
        t += 0.012;

        // Protocol connection vectors
        for (let i = 0; i < protocolNodes.length; i++) {
          for (let j = i + 1; j < protocolNodes.length; j++) {
            const dx = protocolNodes[i].x - protocolNodes[j].x;
            const dy = protocolNodes[i].y - protocolNodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 155) {
              const alpha = (1 - dist / 155) * 0.07;
              ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(protocolNodes[i].x, protocolNodes[i].y);
              ctx.lineTo(protocolNodes[j].x, protocolNodes[j].y);
              ctx.stroke();
            }
          }
        }

        // Render nodes
        protocolNodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `${node.color}${node.alpha})`;
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
