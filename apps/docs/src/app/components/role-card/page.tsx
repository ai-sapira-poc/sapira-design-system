"use client";

import { useState } from "react";
import { RoleCard, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@sapira/ui";
import { Shield, Search, Eye, UserCog, PenTool } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

const roles = [
  { id: "admin", icon: <Shield className="h-5 w-5" />, title: "Administrator", description: "Full access to all settings and data" },
  { id: "reviewer", icon: <Search className="h-5 w-5" />, title: "Reviewer", description: "Can review and approve submissions" },
  { id: "viewer", icon: <Eye className="h-5 w-5" />, title: "Viewer", description: "Read-only access to dashboards" },
  { id: "editor", icon: <PenTool className="h-5 w-5" />, title: "Editor", description: "Create and edit content" },
  { id: "manager", icon: <UserCog className="h-5 w-5" />, title: "Manager", description: "Manage team members and permissions" },
];

export default function RoleCardPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <motion.div
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-semibold tracking-tight">RoleCard</h1>
        <p className="text-muted-foreground mt-2">
          Navigation card with icon, title, and description. Ideal for role-based or category selection screens.
        </p>
      </motion.div>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold">Interactive Selection</h2>
        <p className="text-sm text-muted-foreground">Click a role — the selection background animates between cards.</p>
        <TooltipProvider>
          <motion.div
            className="space-y-3 max-w-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {roles.map((role) => (
              <motion.div key={role.id} variants={itemVariants} className="relative">
                <AnimatePresence>
                  {selected === role.id && (
                    <motion.div
                      layoutId="role-selection-bg"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring" as const, stiffness: 350, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative z-10">
                      <RoleCard
                        icon={role.icon}
                        title={role.title}
                        description={role.description}
                        selected={selected === role.id}
                        onClick={() => setSelected(role.id)}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right">Select {role.title} role</TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
        {selected && (
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Selected: <strong>{selected}</strong>
          </motion.p>
        )}
      </motion.section>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-md">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 border-b border-border">Prop</th>
                <th className="text-left p-3 border-b border-border">Type</th>
                <th className="text-left p-3 border-b border-border">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b border-border">icon</td><td className="p-3 border-b border-border">ReactNode</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">title</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">description</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">href</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">onClick</td><td className="p-3 border-b border-border">() =&gt; void</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">selected</td><td className="p-3 border-b border-border">boolean</td><td className="p-3 border-b border-border">false</td></tr>
            </tbody>
          </table>
        </div>
      </motion.section>
    </motion.div>
  );
}
