"use client";

import { useEffect, useRef } from "react";

export default function AboutLiveBackground() {
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

    // Neural Intelligence Field Particles
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.8 + 1,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      color: Math.random() > 0.45 ? "rgba(240, 201, 75, " : "rgba(56, 189, 248, ",
      alpha: Math.random() * 0.3 + 0.15,
      pulse: Math.random() * Math.PI * 2,
    }));

    let t = 0;

    const render = () => {
      if (document.hidden) return;
      ctx.clearRect(0, 0, width, height);

      // Deep Neural Atmospheric Gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        80,
        width * 0.5,
        height * 0.5,
        width * 0.95
      );
      bgGrad.addColorStop(0, "rgba(14, 18, 28, 0.7)");
      bgGrad.addColorStop(0.6, "rgba(8, 10, 16, 0.9)");
      bgGrad.addColorStop(1, "#040508");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Faint Neural Atmospheric Grid
      ctx.strokeStyle = "rgba(212, 175, 55, 0.02)";
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
        t += 0.01;

        // Soft Orbital Paths
        ctx.save();
        ctx.strokeStyle = "rgba(56, 189, 248, 0.035)";
        ctx.lineWidth = 1;
        const centerX = width * 0.5;
        const centerY = height * 0.3;
        
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, 320, 180, t * 0.1, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(212, 175, 55, 0.03)";
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, 540, 290, -t * 0.08, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Connect Neural Nodes
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 165) {
              const alpha = (1 - dist / 165) * 0.08;
              ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Render Particles
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          p.pulse += 0.02;
          const currentRadius = p.r + Math.sin(p.pulse) * 0.6;

          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.6, currentRadius), 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
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
