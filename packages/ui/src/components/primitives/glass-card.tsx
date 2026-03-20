"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { cn } from "../../lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface GlassCardAuthor {
  name: string;
  avatar?: string;
}

export interface GlassCardProps extends React.ComponentProps<"div"> {
  /** Card image URL */
  image: string;
  /** Card title */
  title: string;
  /** Card description / excerpt */
  description?: string;
  /** Category tags shown as chips */
  tags?: string[];
  /** Author information */
  author?: GlassCardAuthor;
  /** Estimated reading time (e.g. "5 min read") */
  readingTime?: string;
  /** Date string */
  date?: string;
  /** Click handler */
  onCardClick?: () => void;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

function GlassCard({
  image,
  title,
  description,
  tags,
  author,
  readingTime,
  date,
  onCardClick,
  className,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={onCardClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer",
        "border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg",
        "transition-shadow hover:shadow-2xl",
        className,
      )}
      {...(props as any)}
    >
      {/* Image with zoom on hover */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Tags overlay */}
        {tags && tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold leading-snug line-clamp-2">{title}</h3>

        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        {/* Footer: author + meta */}
        <div className="flex items-center justify-between pt-2">
          {author && (
            <div className="flex items-center gap-2">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-6 w-6 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  {author.name.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="text-xs text-muted-foreground">{author.name}</span>
            </div>
          )}

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {date && <span>{date}</span>}
            {readingTime && (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readingTime}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export { GlassCard };
