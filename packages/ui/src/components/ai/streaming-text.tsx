"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

/* ------------------------------------------------------------------ */
/*  Hook                                                               */
/* ------------------------------------------------------------------ */

export interface UseStreamingTextOptions {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export function useStreamingText({
  text,
  speed = 30,
  onComplete,
}: UseStreamingTextOptions) {
  const [displayed, setDisplayed] = React.useState("");
  const [isStreaming, setIsStreaming] = React.useState(false);
  const indexRef = React.useRef(0);

  React.useEffect(() => {
    if (!text) return;

    setDisplayed("");
    setIsStreaming(true);
    indexRef.current = 0;

    const words = text.split(/(\s+)/);
    let current = "";

    const tick = () => {
      if (indexRef.current >= words.length) {
        setIsStreaming(false);
        onComplete?.();
        return;
      }
      current += words[indexRef.current];
      indexRef.current++;
      setDisplayed(current);

      const delay = speed + Math.random() * 20;
      setTimeout(tick, delay);
    };

    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed]);

  return { displayed, isStreaming };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export interface StreamingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  cursor?: boolean;
  className?: string;
}

export function StreamingText({
  text,
  speed = 30,
  onComplete,
  cursor = true,
  className,
}: StreamingTextProps) {
  const { displayed, isStreaming } = useStreamingText({ text, speed, onComplete });

  return (
    <div
      className={cn(
        "whitespace-pre-wrap font-mono text-sm leading-relaxed",
        className
      )}
    >
      {displayed}
      <AnimatePresence>
        {cursor && isStreaming && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inline-block"
          >
            <motion.span
              className="inline-block w-2 h-4 bg-foreground ml-0.5 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
