"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      r: 1 + Math.random() * 2,
    }));

    const resize = () => {
      canvas.width = canvas.clientWidth * DPR;
      canvas.height = canvas.clientHeight * DPR;
    };
    resize();
    window.addEventListener("resize", resize);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const cssVarToHsla = (varName: string, alpha: number) => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      const [h, s, l] = raw.split(/\s+/);
      return `hsla(${h}, ${s}, ${l}, ${alpha})`;
    };

    const colorStart = cssVarToHsla("--brand", 0.65);
    const colorEnd = cssVarToHsla("--brand-2", 0);

    const loop = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.7;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        const x = p.x * canvas.width;
        const y = p.y * canvas.height;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 24 * DPR);
        grad.addColorStop(0, colorStart);
        grad.addColorStop(1, colorEnd);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, p.r * DPR * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!prefersReduced) raf = requestAnimationFrame(loop);
    };

    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 -z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
