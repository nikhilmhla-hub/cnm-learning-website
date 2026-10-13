// Run decorative canvas work only while visible, at a capped frame rate.
// Return one cleanup function for the owning effect.
export function startCanvasAnimation(canvas, draw) {
  let frame = null;
  let visible = false;
  let disposed = false;
  let lastDraw = 0;
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const tick = (now) => {
    frame = null;
    if (disposed || !visible || document.hidden || motion.matches) return;
    if (now - lastDraw >= 1000 / 30) {
      draw();
      lastDraw = now;
    }
    frame = requestAnimationFrame(tick);
  };
  const sync = () => {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    if (!disposed && visible && !document.hidden) {
      draw();
      if (!motion.matches) frame = requestAnimationFrame(tick);
    }
  };
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  observer.observe(canvas);
  document.addEventListener("visibilitychange", sync);
  motion.addEventListener("change", sync);
  window.addEventListener("resize", sync);
  return () => {
    disposed = true;
    if (frame !== null) cancelAnimationFrame(frame);
    observer.disconnect();
    document.removeEventListener("visibilitychange", sync);
    motion.removeEventListener("change", sync);
    window.removeEventListener("resize", sync);
  };
}
