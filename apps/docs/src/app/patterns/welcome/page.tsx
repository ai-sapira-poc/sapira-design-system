"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
  AnimatedBackground, Marquee,
} from "@sapira/ui";
import { ArrowLeft, Shield, Clock, BookOpen, Sparkles, Lock, Zap, Globe } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 28 },
  },
};

const languages = [
  { id: "en", label: "English" },
  { id: "es", label: "Español" },
  { id: "fr", label: "Français" },
  { id: "pt", label: "Português" },
];

const trustItems = [
  { icon: Shield, label: "Secure data" },
  { icon: Clock, label: "5 minutes" },
  { icon: BookOpen, label: "Guided process" },
];

const marqueeItems = [
  { icon: Shield, label: "SOC 2 Compliant" },
  { icon: Lock, label: "End-to-End Encrypted" },
  { icon: Zap, label: "99.9% Uptime" },
  { icon: Globe, label: "Global CDN" },
  { icon: Sparkles, label: "AI-Powered" },
  { icon: Shield, label: "GDPR Ready" },
  { icon: Zap, label: "Sub-100ms Latency" },
  { icon: Globe, label: "24/7 Support" },
];

const defaultHeading = "Welcome";

export default function WelcomePattern() {
  const [lang, setLang] = useState("en");
  const [hoveredLang, setHoveredLang] = useState<string | null>(null);

  const displayHeading = hoveredLang
    ? languages.find((l) => l.id === hoveredLang)?.label ?? defaultHeading
    : defaultHeading;

  return (
    <TooltipProvider delayDuration={300}>
      <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-background">
        {/* Aurora animated background */}
        <AnimatedBackground variant="aurora" speed="slow" className="absolute inset-0" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.01]" />

        {/* Back link */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28, delay: 0.1 }}
          className="absolute top-8 left-8 z-20 text-sm text-muted-foreground/60 hover:text-foreground transition-colors flex items-center gap-1.5 group"
        >
          <motion.span
            className="inline-block"
            whileHover={{ x: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <ArrowLeft className="h-4 w-4" />
          </motion.span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">Back</span>
        </motion.a>

        {/* Main content */}
        <motion.div
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={displayHeading}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.2 }}
                className="text-6xl sm:text-7xl font-bold tracking-tight"
              >
                {displayHeading}
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground text-center max-w-sm leading-relaxed"
          >
            Let&apos;s get you set up. Choose your preferred language to continue.
          </motion.p>

          {/* Language selector */}
          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6">
            {languages.map((l) => (
              <Tooltip key={l.id}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setLang(l.id)}
                    onMouseEnter={() => setHoveredLang(l.id)}
                    onMouseLeave={() => setHoveredLang(null)}
                    className="relative px-1 py-2 text-sm transition-colors cursor-pointer"
                  >
                    <span
                      className={
                        lang === l.id
                          ? "text-foreground font-medium"
                          : "text-muted-foreground/60 hover:text-muted-foreground"
                      }
                    >
                      {l.label}
                    </span>
                    {lang === l.id && (
                      <motion.div
                        layoutId="lang-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent>Switch to {l.label}</TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust bar (original) */}
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative z-10 flex items-center justify-center gap-6 pb-6 px-6 cursor-help"
            >
              {trustItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    {i > 0 && <span className="text-muted-foreground/20 mr-4">·</span>}
                    <Icon className="h-3.5 w-3.5 text-muted-foreground/40" />
                    <span className="text-xs text-muted-foreground/50">{item.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>This process is secure, quick, and fully guided</TooltipContent>
        </Tooltip>

        {/* Marquee trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-10 pb-8 border-t border-border/30"
        >
          <Marquee speed={30} gap={32} className="py-4">
            {marqueeItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-muted-foreground/40">
                  <Icon className="h-3.5 w-3.5" />
                  <span className="text-xs whitespace-nowrap">{item.label}</span>
                </div>
              );
            })}
          </Marquee>
        </motion.div>
      </div>
    </TooltipProvider>
  );
}
