"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export interface ExpandableTab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface ExpandableTabsProps {
  tabs: ExpandableTab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

function ExpandableTabs({
  tabs,
  activeTab,
  onTabChange,
  className,
}: ExpandableTabsProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-background/80 backdrop-blur-sm p-1",
        className,
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <motion.button
            key={tab.id}
            layout
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium cursor-pointer",
              "transition-colors duration-200 outline-none",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {isActive && (
              <motion.div
                layoutId="expandable-tab-bg"
                className="absolute inset-0 rounded-full bg-foreground"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center h-4 w-4 shrink-0">
              {tab.icon}
            </span>
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.span
                  className="relative z-10 whitespace-nowrap overflow-hidden"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  {tab.label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}

export { ExpandableTabs };
