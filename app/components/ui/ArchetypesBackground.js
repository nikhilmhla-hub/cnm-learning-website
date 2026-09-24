"use client";

import { useEffect, useRef } from "react";

export default function ArchetypesBackground() {
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

    // Diagnostic Profile Field elements
    const profileNodes = Array.from({ length: 14 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 3 + 2,
      color: Math.random() > 0.4 ? "rgba(240, 201, 75, " : "rgba(56, 189, 248, ",
      alpha: Math.random() * 0.35 + 0.15,
    }));

    const classificationFields = [
      { x: width * 0.25, y: height * 0.3, r: 140, pulse: 0, speed: 0.006 },
      { x: width * 0.75, y: height * 0.7, r: 180, pulse: Math.PI, speed: 0.005 },
    ];

    let scanY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle Diagnostic Grid
      ctx.strokeStyle = "rgba(212, 175, 55, 0.025)";
      ctx.lineWidth = 1;
      const step = 75;
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
        // 2. Large Circular Classification Fields
        classificationFields.forEach((field) => {
          field.pulse += field.speed;
          const currentRadius = field.r + Math.sin(field.pulse) * 12;
          ctx.beginPath();
          ctx.arc(field.x, field.y, currentRadius, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(212, 175, 55, 0.04)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(field.x, field.y, currentRadius * 0.6, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(56, 189, 248, 0.03)";
          ctx.setLineDash([4, 8]);
          ctx.stroke();
          ctx.setLineDash([]);
        });

        // 3. Connecting Diagnostic Lines
        ctx.lineWidth = 1;
        for (let i = 0; i < profileNodes.length; i++) {
          for (let j = i + 1; j < profileNodes.length; j++) {
            const dx = profileNodes[i].x - profileNodes[j].x;
            const dy = profileNodes[i].y - profileNodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
              const lineAlpha = (1 - dist / 180) * 0.12;
              ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(profileNodes[i].x, profileNodes[i].y);
              ctx.lineTo(profileNodes[j].x, profileNodes[j].y);
              ctx.stroke();
            }
          }
        }

        // 4. Moving Profile Nodes
        profileNodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${node.color}${node.alpha})`;
          ctx.fill();
        });

        // 5. Vertical Scanning Path
        scanY = (scanY + 0.5) % (height + 100);
        const grad = ctx.createLinearGradient(0, scanY - 30, 0, scanY);
        grad.addColorStop(0, "rgba(240, 201, 75, 0)");
        grad.addColorStop(1, "rgba(240, 201, 75, 0.04)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, Math.max(0, scanY - 30), width, 30);
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
