"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface DisplayCardsProps {
  className?: string;
  children: React.ReactNode;
}

function DisplayCards({ className, children }: DisplayCardsProps) {
  const cards = React.Children.toArray(children);
  const total = cards.length;
  const mid = Math.floor(total / 2);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center py-20",
        className,
      )}
    >
      {cards.map((child, i) => {
        const offset = i - mid;
        const rotate = offset * 6;
        const x = offset * 40;
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{ rotate, x, scale: 0.95 }}
            animate={{ rotate, x, scale: 0.95 }}
            whileHover={{ rotate: 0, x: 0, scale: 1.05, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ zIndex: total - Math.abs(offset) }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}

export interface DisplayCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
  color?: string;
}

function DisplayCard({
  title,
  description,
  icon,
  image,
  className,
  color,
}: DisplayCardProps) {
  return (
    <motion.div
      className={cn(
        "w-64 rounded-2xl border border-border bg-background/90 backdrop-blur-md",
        "shadow-xl overflow-hidden cursor-pointer select-none",
        className,
      )}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {color && (
        <div className="h-1 w-full" style={{ backgroundColor: color }} />
      )}
      {image && (
        <div className="h-32 w-full overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-5 space-y-3">
        {icon && (
          <div
            className="flex items-center justify-center h-10 w-10 rounded-lg"
            style={{ backgroundColor: color ? `${color}18` : undefined }}
          >
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        )}
        {description && (
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export { DisplayCards, DisplayCard };
