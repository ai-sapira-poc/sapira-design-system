"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@sapira/ui";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
};

const tiles = [
  { id: "documents", icon: "📄", label: "Documents" },
  { id: "reports", icon: "📊", label: "Reports" },
  { id: "settings", icon: "⚙️", label: "Settings" },
  { id: "users", icon: "👥", label: "Users" },
  { id: "analytics", icon: "📈", label: "Analytics" },
  { id: "coming", icon: "🔒", label: "Coming Soon" },
];

const roles = [
  { id: "admin", icon: "👤", title: "Administrator", description: "Manage users, settings, and system configuration" },
  { id: "operator", icon: "🔧", title: "Operator", description: "Process daily tasks and manage workflows" },
  { id: "auditor", icon: "🔍", title: "Auditor", description: "Review records and generate compliance reports" },
];

export default function ProjectLandingPattern() {
  const [selectedTile, setSelectedTile] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 text-foreground"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.015,
        }}
      />

      {/* Subtle radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />

      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto px-6 py-16 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="h-16 w-16 rounded-2xl bg-foreground/[0.05] backdrop-blur-sm border border-border/50 flex items-center justify-center text-3xl"
        >
          🏢
        </motion.div>

        {/* Hero text */}
        <motion.div variants={itemVariants} className="text-center space-y-1">
          <p className="text-lg font-light text-muted-foreground tracking-wide">Project</p>
          <h1 className="text-5xl font-bold tracking-tight">Portal</h1>
        </motion.div>

        {/* Modules section */}
        <motion.div variants={itemVariants} className="w-full">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
            Modules
          </p>
          <div className="grid grid-cols-3 gap-3">
            {tiles.map((tile) => {
              const isDisabled = tile.id === "coming";
              const isSelected = selectedTile === tile.id;
              return (
                <motion.button
                  key={tile.id}
                  whileHover={isDisabled ? {} : { scale: 1.05, y: -2 }}
                  whileTap={isDisabled ? {} : { scale: 0.97 }}
                  onClick={() => !isDisabled && setSelectedTile(tile.id)}
                  className={`
                    relative flex flex-col items-center justify-center rounded-xl h-24 w-full gap-1.5
                    transition-colors duration-200 cursor-pointer
                    ${isDisabled
                      ? "border-2 border-dashed border-muted-foreground/20 bg-muted/20 text-muted-foreground/50 cursor-not-allowed"
                      : isSelected
                        ? "border border-foreground bg-foreground/[0.05] shadow-lg"
                        : "border border-border bg-background/80 backdrop-blur-sm hover:shadow-md hover:border-foreground/20"
                    }
                  `}
                >
                  <span className="text-2xl">{tile.icon}</span>
                  <span className={`text-xs font-medium ${isDisabled ? "text-muted-foreground/50" : "text-foreground/80"}`}>
                    {tile.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Role cards section */}
        <motion.div variants={itemVariants} className="w-full">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
            Select a Role
          </p>
          <div className="space-y-2">
            {roles.map((role) => {
              const isSelected = selectedRole === role.id;
              return (
                <motion.button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={`
                    relative w-full flex items-center gap-4 rounded-xl border px-5 py-4
                    text-left transition-colors duration-200 cursor-pointer overflow-hidden
                    ${isSelected
                      ? "border-foreground/20"
                      : "border-border hover:border-foreground/10"
                    }
                  `}
                >
                  {/* Animated selection background */}
                  {isSelected && (
                    <motion.div
                      layoutId="role-selected-bg"
                      className="absolute inset-0 bg-foreground rounded-xl"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 text-xl ${isSelected ? "" : ""}`}>{role.icon}</span>
                  <div className="relative z-10 flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${isSelected ? "text-background" : "text-foreground"}`}>
                      {role.title}
                    </p>
                    <p className={`text-xs mt-0.5 ${isSelected ? "text-background/70" : "text-muted-foreground"}`}>
                      {role.description}
                    </p>
                  </div>
                  <motion.span
                    className={`relative z-10 text-sm ${isSelected ? "text-background/70" : "text-muted-foreground/40"}`}
                    animate={{ x: isSelected ? 0 : -4, opacity: isSelected ? 1 : 0.4 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Enter button */}
        <AnimatePresence>
          {selectedRole && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="
                  relative w-full py-3.5 rounded-xl bg-foreground text-background
                  font-semibold text-sm tracking-wide overflow-hidden
                  transition-shadow hover:shadow-xl
                  group cursor-pointer
                "
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-background/10 to-transparent" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enter <span className="text-background/70">→</span>
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-1 pt-4"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
            Demo · v1.0
          </p>
          <p className="text-[10px] text-muted-foreground/30">
            Powered by Sapira
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
