"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../lib/utils";

export interface AnimatedBackgroundProps extends React.ComponentProps<"div"> {
  variant?: "gradient" | "aurora" | "dots" | "grid";
  colors?: string[];
  speed?: "slow" | "medium" | "fast";
  interactive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const speedMap = { slow: 20, medium: 12, fast: 6 };

function AnimatedBackground({
  variant = "gradient",
  colors,
  speed = "medium",
  interactive = false,
  className,
  children,
  ...props
}: AnimatedBackgroundProps) {
  const dur = speedMap[speed];
  const c = colors ?? ["hsl(var(--primary))", "hsl(var(--secondary, var(--primary)))"];
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouse = interactive
    ? (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
      }
    : undefined;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouse}
      {...props}
    >
      {variant === "gradient" && <GradientBg colors={c} dur={dur} />}
      {variant === "aurora" && <AuroraBg colors={c} dur={dur} />}
      {variant === "dots" && <DotsBg dur={dur} />}
      {variant === "grid" && <GridBg dur={dur} />}
      {interactive && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at calc(var(--mx) * 100%) calc(var(--my) * 100%), ${c[0]}08, transparent 60%)`,
            // @ts-expect-error CSS custom properties
            "--mx": springX,
            "--my": springY,
          }}
        />
      )}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

function GradientBg({ colors, dur }: { colors: string[]; dur: number }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sapira-gradient-morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg) scale(1); }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(90deg) scale(1.05); }
          50% { border-radius: 50% 60% 30% 60% / 30% 50% 70% 60%; transform: rotate(180deg) scale(0.95); }
          75% { border-radius: 60% 30% 60% 40% / 70% 40% 50% 60%; transform: rotate(270deg) scale(1.02); }
        }
      ` }} />
      <div className="absolute inset-0">
        {colors.map((c, i) => (
          <div
            key={i}
            className="absolute w-[60%] h-[60%] opacity-[0.07] blur-3xl"
            style={{
              background: c,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 25}%`,
              animation: `sapira-gradient-morph ${dur + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * -dur / colors.length}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

function AuroraBg({ colors, dur }: { colors: string[]; dur: number }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sapira-aurora {
          0%, 100% { transform: translateX(-10%) skewX(-5deg); opacity: 0.04; }
          33% { transform: translateX(5%) skewX(2deg); opacity: 0.07; }
          66% { transform: translateX(-5%) skewX(-2deg); opacity: 0.05; }
        }
      ` }} />
      <div className="absolute inset-0">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-x-0 h-[50%] blur-3xl"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors[i % colors.length]}, transparent)`,
              top: `${10 + i * 20}%`,
              animation: `sapira-aurora ${dur + i * 4}s ease-in-out infinite`,
              animationDelay: `${i * -4}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

function DotsBg({ dur }: { dur: number }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sapira-dots-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }
      ` }} />
      <div
        className="pointer-events-none absolute inset-0 text-foreground"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.015,
          animation: `sapira-dots-drift ${dur * 2}s ease-in-out infinite`,
        }}
      />
    </>
  );
}

function GridBg({ dur }: { dur: number }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sapira-grid-shift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
      ` }} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground) / 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(var(--foreground) / 0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          animation: `sapira-grid-shift ${dur * 2}s ease-in-out infinite`,
        }}
      />
    </>
  );
}

export { AnimatedBackground };
