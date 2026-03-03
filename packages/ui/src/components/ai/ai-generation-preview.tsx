"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, X, RefreshCw } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../primitives/button";
import { StreamingText } from "./streaming-text";

export interface AIGenerationPreviewProps {
  title?: string;
  content: string;
  isGenerating?: boolean;
  onAccept?: () => void;
  onReject?: () => void;
  onRegenerate?: () => void;
  className?: string;
}

export function AIGenerationPreview({
  title = "AI-Generated Content",
  content,
  isGenerating = false,
  onAccept,
  onReject,
  onRegenerate,
  className,
}: AIGenerationPreviewProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-violet-200 dark:border-violet-800 bg-gradient-to-b from-violet-50/50 to-background dark:from-violet-950/30 overflow-hidden",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-violet-200/60 dark:border-violet-800/60 bg-violet-50/50 dark:bg-violet-950/20">
        <motion.span
          animate={isGenerating ? { rotate: [0, 15, -15, 0] } : undefined}
          transition={
            isGenerating
              ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        >
          <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-400" />
        </motion.span>
        <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
          {title}
        </span>
        {isGenerating && (
          <span className="text-xs text-violet-500 animate-pulse ml-auto">
            Generating…
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 min-h-[100px]">
        {isGenerating ? (
          <StreamingText text={content} speed={25} />
        ) : (
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {content}
          </div>
        )}
      </div>

      {/* Actions */}
      {!isGenerating && (onAccept || onReject || onRegenerate) && (
        <div className="flex items-center gap-2 px-4 py-3 border-t border-violet-200/60 dark:border-violet-800/60 bg-muted/20">
          {onRegenerate && (
            <Button variant="ghost" size="sm" onClick={onRegenerate} className="gap-1.5">
              <RefreshCw className="h-3.5 w-3.5" />
              Regenerate
            </Button>
          )}
          <div className="flex-1" />
          {onReject && (
            <Button variant="outline" size="sm" onClick={onReject} className="gap-1.5">
              <X className="h-3.5 w-3.5" />
              Reject
            </Button>
          )}
          {onAccept && (
            <Button size="sm" onClick={onAccept} className="gap-1.5">
              <Check className="h-3.5 w-3.5" />
              Accept
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
