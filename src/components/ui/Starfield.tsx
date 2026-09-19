import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  base: number;
  speed: number;
  phase: number;
  warm: boolean;
};

type Meteor = {
  born: number;
  duration: number;
  x0: number;
  y0: number;
  dx: number;
  dy: number;
};

function nextGap(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let t = 0;
    let meteor: Meteor | null = null;
    let nextMeteorAt = performance.now() + nextGap(6000, 10000);

    const stars: Star[] = Array.from({ length: 120 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.15,
      base: Math.random() * 0.32 + 0.1,
      speed: Math.random() * 0.7 + 0.15,
      phase: Math.random() * Math.PI * 2,
      warm: Math.random() > 0.82,
    }));

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const spawnMeteor = (now: number) => {
      const goingRight = Math.random() > 0.5;
      const x0 = width * (goingRight ? 0.08 + Math.random() * 0.45 : 0.47 + Math.random() * 0.45);
      const y0 = height * (0.04 + Math.random() * 0.22);
      const travel = Math.min(width, height) * (0.28 + Math.random() * 0.16);
      const angle = goingRight ? 0.42 + Math.random() * 0.18 : Math.PI - 0.42 - Math.random() * 0.18;

      meteor = {
        born: now,
        duration: 720 + Math.random() * 280,
        x0,
        y0,
        dx: Math.cos(angle) * travel,
        dy: Math.sin(angle) * travel,
      };
    };

    const drawMeteor = (now: number) => {
      if (!meteor) return;

      const progress = (now - meteor.born) / meteor.duration;
      if (progress >= 1) {
        meteor = null;
        nextMeteorAt = now + nextGap(12000, 20000);
        return;
      }

      const x = meteor.x0 + meteor.dx * progress;
      const y = meteor.y0 + meteor.dy * progress;
      const trail = 0.11;
      const tx = x - meteor.dx * trail;
      const ty = y - meteor.dy * trail;
      const alpha = Math.sin(progress * Math.PI) * 0.5;

      const gradient = ctx.createLinearGradient(tx, ty, x, y);
      gradient.addColorStop(0, "rgba(196, 180, 154, 0)");
      gradient.addColorStop(0.65, `rgba(196, 180, 154, ${alpha * 0.4})`);
      gradient.addColorStop(1, `rgba(243, 244, 246, ${alpha * 0.8})`);

      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(x, y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.stroke();

      ctx.fillStyle = `rgba(243, 244, 246, ${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, 0.85, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        const alpha = reduced
          ? star.base
          : star.base * (0.5 + 0.5 * Math.sin(t * star.speed + star.phase));
        ctx.fillStyle = star.warm
          ? `rgba(196, 180, 154, ${alpha})`
          : `rgba(243, 244, 246, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x * width, star.y * height, star.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) {
        if (!meteor && now >= nextMeteorAt && !document.hidden) {
          spawnMeteor(now);
        }
        drawMeteor(now);
        t += 0.018;
        frame = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    const observer = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-32 left-1/2 h-112 w-2xl -translate-x-1/2 rounded-full bg-signal/[0.07] blur-3xl" />
      <div className="absolute top-[48%] -right-24 h-72 w-72 rounded-full bg-pass/4.5 blur-3xl" />
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
