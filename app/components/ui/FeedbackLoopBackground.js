"use client";

import { useEffect, useRef } from "react";

export default function FeedbackLoopBackground() {
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

    // Opposing Signal Paths & System Comparison Streams
    let streamOffset = 0;
    const streams = Array.from({ length: 5 }, (_, i) => ({
      y: (height / 6) * (i + 1),
      speed: 0.3 + Math.random() * 0.4,
      dir: i % 2 === 0 ? 1 : -1,
      color: i >= 3 ? "rgba(240, 201, 75, " : "rgba(56, 189, 248, ",
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Center System Convergence Axis Line
      ctx.strokeStyle = "rgba(212, 175, 55, 0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      if (!prefersReducedMotion) {
        streamOffset += 0.02;

        // 2. Opposing Horizontal Data Streams
        streams.forEach((stream) => {
          ctx.beginPath();
          ctx.strokeStyle = `${stream.color}0.06)`;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([8, 12]);
          const lineY = stream.y + Math.sin(streamOffset * stream.speed) * 8;
          ctx.moveTo(0, lineY);
          ctx.lineTo(width, lineY);
          ctx.stroke();
          ctx.setLineDash([]);

          // Moving signal pulse along stream
          const pulseX = ((streamOffset * stream.speed * 120 * stream.dir) % width + width) % width;
          ctx.beginPath();
          ctx.arc(pulseX, lineY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${stream.color}0.6)`;
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
