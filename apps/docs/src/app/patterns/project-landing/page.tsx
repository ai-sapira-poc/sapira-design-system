"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@sapira/ui";
import {
  FileText, BarChart3, Settings, Users, TrendingUp, Lock,
  Shield, Wrench, Search, ArrowRight,
} from "lucide-react";

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
  { id: "documents", icon: FileText, label: "Documents", tooltip: "Manage and organize project documents" },
  { id: "reports", icon: BarChart3, label: "Reports", tooltip: "View analytics and generate reports" },
  { id: "settings", icon: Settings, label: "Settings", tooltip: "Configure project parameters" },
  { id: "users", icon: Users, label: "Users", tooltip: "Manage team members and permissions" },
  { id: "analytics", icon: TrendingUp, label: "Analytics", tooltip: "Track performance and KPIs" },
  { id: "coming", icon: Lock, label: "Coming Soon", tooltip: "This module is not yet available" },
];

const roles = [
  { id: "admin", icon: Shield, title: "Administrator", description: "Manage users, settings, and system configuration" },
  { id: "operator", icon: Wrench, title: "Operator", description: "Process daily tasks and manage workflows" },
  { id: "auditor", icon: Search, title: "Auditor", description: "Review records and generate compliance reports" },
];

export default function ProjectLandingPattern() {
  const [selectedTile, setSelectedTile] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <TooltipProvider delayDuration={300}>
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

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />

        <motion.div
          className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto px-6 py-16 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero text */}
          <motion.div variants={itemVariants} className="text-center space-y-1">
            <p className="text-lg font-light text-muted-foreground tracking-wide">Project</p>
            <h1 className="text-5xl font-bold tracking-tight">Portal</h1>
            <p className="text-sm text-muted-foreground/60 mt-3">Select a module to get started</p>
          </motion.div>

          {/* Modules section */}
          <motion.div variants={itemVariants} className="w-full">
            <Tooltip>
              <TooltipTrigger asChild>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center cursor-help">
                  Modules
                </p>
              </TooltipTrigger>
              <TooltipContent>Quick access to project modules</TooltipContent>
            </Tooltip>
            <div className="grid grid-cols-3 gap-3">
              {tiles.map((tile) => {
                const Icon = tile.icon;
                const isDisabled = tile.id === "coming";
                const isSelected = selectedTile === tile.id;
                return (
                  <Tooltip key={tile.id}>
                    <TooltipTrigger asChild>
                      <motion.button
                        whileHover={isDisabled ? {} : { scale: 1.05, y: -2 }}
                        whileTap={isDisabled ? {} : { scale: 0.97 }}
                        onClick={() => !isDisabled && setSelectedTile(tile.id)}
                        className={`
                          relative flex flex-col items-center justify-center rounded-xl h-24 w-full gap-2
                          transition-colors duration-200 cursor-pointer
                          ${isDisabled
                            ? "border-2 border-dashed border-muted-foreground/20 bg-muted/20 text-muted-foreground/40 cursor-not-allowed"
                            : isSelected
                              ? "border border-foreground bg-foreground/[0.05] shadow-lg"
                              : "border border-border bg-background/80 backdrop-blur-sm hover:shadow-md hover:border-foreground/20"
                          }
                        `}
                      >
                        <Icon className={`h-6 w-6 ${isDisabled ? "text-muted-foreground/30" : isSelected ? "text-foreground" : "text-muted-foreground"}`} />
                        <span className={`text-xs font-medium ${isDisabled ? "text-muted-foreground/40" : "text-foreground/80"}`}>
                          {tile.label}
                        </span>
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent>{tile.tooltip}</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </motion.div>

          {/* Role cards section */}
          <motion.div variants={itemVariants} className="w-full">
            <Tooltip>
              <TooltipTrigger asChild>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center cursor-help">
                  Select a Role
                </p>
              </TooltipTrigger>
              <TooltipContent>Choose your role to see a personalized experience</TooltipContent>
            </Tooltip>
            <div className="space-y-2">
              {roles.map((role) => {
                const Icon = role.icon;
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
                    {isSelected && (
                      <motion.div
                        layoutId="role-selected-bg"
                        className="absolute inset-0 bg-foreground rounded-xl"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <div className={`relative z-10 flex items-center justify-center h-10 w-10 rounded-lg ${isSelected ? "bg-background/20" : "bg-muted/50"}`}>
                      <Icon className={`h-5 w-5 ${isSelected ? "text-background" : "text-muted-foreground"}`} />
                    </div>
                    <div className="relative z-10 flex-1 min-w-0">
                      <p className={`text-sm font-semibold ${isSelected ? "text-background" : "text-foreground"}`}>
                        {role.title}
                      </p>
                      <p className={`text-xs mt-0.5 ${isSelected ? "text-background/70" : "text-muted-foreground"}`}>
                        {role.description}
                      </p>
                    </div>
                    <motion.div
                      className={`relative z-10 ${isSelected ? "text-background/70" : "text-muted-foreground/30"}`}
                      animate={{ x: isSelected ? 0 : -4, opacity: isSelected ? 1 : 0.3 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
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
                    transition-shadow hover:shadow-xl group cursor-pointer
                  "
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-background/10 to-transparent" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enter <ArrowRight className="h-4 w-4 text-background/70" />
                  </span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-1 pt-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">Demo · v1.0</p>
            <p className="text-[10px] text-muted-foreground/30">Powered by Sapira</p>
          </motion.div>
        </motion.div>
      </div>
    </TooltipProvider>
  );
}
