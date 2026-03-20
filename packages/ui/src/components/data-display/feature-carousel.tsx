"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface FeatureCarouselItem {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  /** Optional accent color for the pill label */
  color?: string;
}

export interface FeatureCarouselProps extends React.ComponentProps<"div"> {
  items: FeatureCarouselItem[];
  /** Auto-advance interval in ms. 0 = disabled */
  autoPlay?: number;
  /** Show navigation arrows */
  showArrows?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function PillLabel({ label, color, active }: { label: string; color?: string; active: boolean }) {
  return (
    <motion.button
      layout
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium transition-colors whitespace-nowrap",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-muted text-muted-foreground hover:bg-muted/80",
      )}
      style={active && color ? { backgroundColor: color, color: "#fff" } : undefined}
    >
      {label}
    </motion.button>
  );
}

function StackedImageCards({ images, activeIndex }: { images: string[]; activeIndex: number }) {
  // Show active card on top with 2 stacked behind
  return (
    <div className="relative h-64 w-full sm:h-80">
      {images.map((img, i) => {
        const offset = i - activeIndex;
        const isActive = i === activeIndex;
        const behind1 = Math.abs(offset) === 1;
        const behind2 = Math.abs(offset) === 2;
        const visible = isActive || behind1 || behind2;

        if (!visible) return null;

        const scale = isActive ? 1 : behind1 ? 0.92 : 0.84;
        const y = isActive ? 0 : behind1 ? 12 : 24;
        const opacity = isActive ? 1 : behind1 ? 0.6 : 0.3;
        const zIndex = isActive ? 30 : behind1 ? 20 : 10;

        return (
          <motion.div
            key={i}
            animate={{ scale, y, opacity, zIndex }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-lg"
          >
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

function FeatureCarousel({
  items,
  autoPlay = 4000,
  showArrows = true,
  className,
  ...props
}: FeatureCarouselProps) {
  const [active, setActive] = React.useState(0);
  const total = items.length;

  // Auto-play
  React.useEffect(() => {
    if (!autoPlay || autoPlay <= 0) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, autoPlay);
    return () => clearInterval(timer);
  }, [autoPlay, total]);

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);
  const current = items[active];

  return (
    <div className={cn("space-y-6", className)} {...props}>
      {/* Pill labels */}
      <div className="flex flex-wrap items-center gap-2 justify-center">
        {items.map((item, i) => (
          <div key={item.id} onClick={() => setActive(i)}>
            <PillLabel label={item.label} color={item.color} active={i === active} />
          </div>
        ))}
      </div>

      {/* Content area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <h3 className="text-2xl font-bold tracking-tight">{current.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{current.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Stacked cards */}
        <div className="relative">
          <StackedImageCards
            images={items.map((i) => i.image)}
            activeIndex={active}
          />
        </div>
      </div>

      {/* Navigation arrows */}
      {showArrows && total > 1 && (
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={prev}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-xs text-muted-foreground tabular-nums">
            {active + 1} / {total}
          </span>
          <button
            onClick={next}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export { FeatureCarousel };
