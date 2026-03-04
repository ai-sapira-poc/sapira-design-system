"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
  { icon: "🔒", label: "Secure data" },
  { icon: "⏱️", label: "5 minutes" },
  { icon: "📋", label: "Guided process" },
];

export default function WelcomePattern() {
  const [lang, setLang] = useState("en");

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-background">
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 text-foreground"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.015,
        }}
      />

      {/* Soft gradient wash */}
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
          ←
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
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="h-18 w-18 rounded-2xl bg-foreground/[0.04] backdrop-blur-sm border border-border/40 flex items-center justify-center text-4xl mb-12"
          style={{ height: 72, width: 72 }}
        >
          ✨
        </motion.div>

        {/* Welcome heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl font-bold tracking-tight text-center"
        >
          Welcome
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-base text-muted-foreground text-center max-w-sm leading-relaxed"
        >
          Let&apos;s get you set up. Choose your preferred language to continue.
        </motion.p>

        {/* Language selector with animated underline */}
        <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6">
          {languages.map((l) => (
            <button
              key={l.id}
              onClick={() => setLang(l.id)}
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
          ))}
        </motion.div>
      </motion.div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 flex items-center justify-center gap-6 pb-10 px-6"
      >
        {trustItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-muted-foreground/20 mr-4">·</span>}
            <span className="text-sm">{item.icon}</span>
            <span className="text-xs text-muted-foreground/50">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
