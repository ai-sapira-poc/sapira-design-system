"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface GlowyWavesHeroStat {
  label: string;
  value: string;
}

export interface GlowyWavesHeroCTA {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export interface GlowyWavesHeroProps extends React.ComponentProps<"section"> {
  /** Hero headline */
  title: string;
  /** Hero subtitle / description */
  subtitle?: string;
  /** Call-to-action buttons */
  ctas?: GlowyWavesHeroCTA[];
  /** Stats counters shown below the CTA */
  stats?: GlowyWavesHeroStat[];
  /** Primary wave color */
  waveColor?: string;
  /** Secondary wave color */
  waveColorSecondary?: string;
  /** Whether waves react to mouse movement */
  interactive?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Canvas waves                                                       */
/* ------------------------------------------------------------------ */

function WaveCanvas({
  color1,
  color2,
  mouseX,
  mouseY,
}: {
  color1: string;
  color2: string;
  mouseX: { get: () => number };
  mouseY: { get: () => number };
}) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const frameRef = React.useRef<number>(0);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * (typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1);
      canvas.height = canvas.offsetHeight * (typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.008;
      const w = canvas.width;
      const h = canvas.height;
      const mx = mouseX.get();
      const my = mouseY.get();

      ctx.clearRect(0, 0, w, h);

      // Draw 3 wave layers
      for (let layer = 0; layer < 3; layer++) {
        const offset = layer * 0.4;
        const amplitude = h * (0.08 + layer * 0.03) * (1 + my * 0.3);
        const frequency = 0.003 + layer * 0.001;
        const speed = time * (1 + layer * 0.2) + mx * 0.5;
        const yBase = h * (0.55 + layer * 0.1);

        ctx.beginPath();
        ctx.moveTo(0, h);

        for (let x = 0; x <= w; x += 3) {
          const y =
            yBase +
            Math.sin(x * frequency + speed) * amplitude +
            Math.sin(x * frequency * 2.5 + speed * 0.7) * amplitude * 0.3;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, yBase - amplitude, 0, h);
        const alpha = 0.15 - layer * 0.03;
        gradient.addColorStop(0, layer % 2 === 0 ? color1 : color2);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.globalAlpha = alpha + 0.05;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      // Glow orbs
      for (let i = 0; i < 2; i++) {
        const ox = w * (0.3 + i * 0.4 + Math.sin(time + i) * 0.1 + mx * 0.1);
        const oy = h * (0.4 + Math.cos(time * 0.7 + i) * 0.1 + my * 0.1);
        const r = Math.min(w, h) * (0.15 + i * 0.05);
        const gradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, r);
        gradient.addColorStop(0, i === 0 ? color1 : color2);
        gradient.addColorStop(1, "transparent");
        ctx.globalAlpha = 0.12;
        ctx.fillStyle = gradient;
        ctx.fillRect(ox - r, oy - r, r * 2, r * 2);
      }

      ctx.globalAlpha = 1;
      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [color1, color2, mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: "none" }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */

function StatCounter({ stat }: { stat: GlowyWavesHeroStat }) {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold tracking-tight"
      >
        {stat.value}
      </motion.p>
      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

function GlowyWavesHero({
  title,
  subtitle,
  ctas,
  stats,
  waveColor = "rgba(99, 102, 241, 0.6)",
  waveColorSecondary = "rgba(139, 92, 246, 0.6)",
  interactive = true,
  className,
  children,
  ...props
}: GlowyWavesHeroProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const handleMouse = interactive
    ? (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
      }
    : undefined;

  return (
    <section
      onMouseMove={handleMouse}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-background min-h-[480px] flex items-center justify-center",
        className,
      )}
      {...props}
    >
      {/* Wave canvas background */}
      <WaveCanvas
        color1={waveColor}
        color2={waveColorSecondary}
        mouseX={springX}
        mouseY={springY}
      />

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 py-16 max-w-3xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTAs */}
        {ctas && ctas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            {ctas.map((cta, i) => {
              const isPrimary = cta.variant !== "secondary";
              const El = cta.href ? "a" : "button";
              return (
                <El
                  key={i}
                  href={cta.href as any}
                  onClick={cta.onClick}
                  className={cn(
                    "inline-flex items-center rounded-lg px-6 py-2.5 text-sm font-medium transition-colors",
                    isPrimary
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "border border-border bg-background/60 backdrop-blur-sm hover:bg-muted",
                  )}
                >
                  {cta.label}
                </El>
              );
            })}
          </motion.div>
        )}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="flex items-center justify-center gap-10 pt-6">
            {stats.map((stat, i) => (
              <StatCounter key={i} stat={stat} />
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

export { GlowyWavesHero };
