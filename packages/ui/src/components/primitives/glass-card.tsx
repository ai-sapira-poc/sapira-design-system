"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface GlassCardAuthor {
  name: string;
  avatar?: string;
}

export interface GlassCardProps extends React.ComponentProps<"div"> {
  title?: string;
  description?: string;
  image?: string;
  author?: GlassCardAuthor;
  date?: string;
  readingTime?: string;
  tags?: string[];
  onCardClick?: () => void;
}

/* ------------------------------------------------------------------ */
/*  Defaults                                                           */
/* ------------------------------------------------------------------ */

const defaultPost = {
  title: "The Future of UI Design",
  description:
    "Exploring the latest trends in glassmorphism, 3D elements, and micro-interactions.",
  image:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  author: {
    name: "Moumen Soliman",
    avatar: "https://github.com/shadcn.png",
  },
  date: "Dec 2, 2025",
  readingTime: "5 min read",
  tags: ["Design", "UI/UX"],
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

function GlassCard({
  title = defaultPost.title,
  description = defaultPost.description,
  image = defaultPost.image,
  author = defaultPost.author,
  date = defaultPost.date,
  readingTime = defaultPost.readingTime,
  tags = defaultPost.tags,
  onCardClick,
  className,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onCardClick}
      className={cn("w-full max-w-[400px] cursor-pointer", className)}
      {...(props as any)}
    >
      <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        {/* Image Section */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

          <div className="absolute bottom-3 left-3 flex gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover Overlay Action */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25"
            >
              <BookOpen className="h-4 w-4" />
              Read Article
            </motion.button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 p-5">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold leading-tight tracking-tight text-white transition-colors group-hover:text-white/90">
              {title}
            </h3>
            {description && (
              <p className="line-clamp-2 text-sm text-white/70">
                {description}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-white/20 pt-4">
            {author && (
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border border-white/20">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-xs">
                  <span className="font-medium text-white">
                    {author.name}
                  </span>
                  {date && (
                    <span className="text-white/70">{date}</span>
                  )}
                </div>
              </div>
            )}

            {readingTime && (
              <div className="flex items-center gap-1 text-xs text-white/70">
                <Clock className="h-3 w-3" />
                <span>{readingTime}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export { GlassCard };
