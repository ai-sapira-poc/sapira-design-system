"use client";

import { useState } from "react";
import { IconTile, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@sapira/ui";
import { FileText, Package, Lock, Zap, BarChart3, Settings, Briefcase, Users, Globe, Palette, Code, Database } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export default function IconTilePage() {
  const [selectedTile, setSelectedTile] = useState<string | null>(null);

  const gridTiles = [
    { icon: <FileText className="h-6 w-6" />, label: "Documents", id: "documents" },
    { icon: <BarChart3 className="h-6 w-6" />, label: "Reports", id: "reports" },
    { icon: <Settings className="h-6 w-6" />, label: "Settings", id: "settings" },
    { icon: <Briefcase className="h-6 w-6" />, label: "Projects", id: "projects" },
    { icon: <Users className="h-6 w-6" />, label: "Team", id: "team" },
    { icon: <Globe className="h-6 w-6" />, label: "Domains", id: "domains" },
    { icon: <Palette className="h-6 w-6" />, label: "Design", id: "design" },
    { icon: <Code className="h-6 w-6" />, label: "API", id: "api" },
    { icon: <Database className="h-6 w-6" />, label: "Data", id: "data" },
  ];

  return (
    <motion.div
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-semibold tracking-tight">IconTile</h1>
        <p className="text-muted-foreground mt-2">
          Square icon tile for navigation grids. Supports solid, outline, and dashed (coming soon) variants.
        </p>
      </motion.div>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold">Variants</h2>
        <div className="flex gap-4 flex-wrap">
          <IconTile icon={<FileText className="h-6 w-6" />} label="Solid" variant="solid" />
          <IconTile icon={<Package className="h-6 w-6" />} label="Outline" variant="outline" />
          <IconTile icon={<Lock className="h-6 w-6" />} label="Coming Soon" variant="dashed" />
        </div>
      </motion.section>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold">Interactive Grid</h2>
        <p className="text-sm text-muted-foreground">Click a tile to select it.</p>
        <TooltipProvider>
          <motion.div
            className="grid grid-cols-3 gap-3 max-w-sm"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {gridTiles.map((tile) => (
              <motion.div key={tile.id} variants={itemVariants}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`cursor-pointer rounded-lg transition-all w-fit ${
                        selectedTile === tile.id
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                          : ""
                      }`}
                      onClick={() => setSelectedTile(tile.id)}
                    >
                      <IconTile icon={tile.icon} label={tile.label} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Select {tile.label}</TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
        {selectedTile && (
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Selected: <strong>{selectedTile}</strong>
          </motion.p>
        )}
      </motion.section>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold">Sizes</h2>
        <div className="flex gap-4 items-end flex-wrap">
          <IconTile icon={<Zap className="h-4 w-4" />} label="Small" size="sm" />
          <IconTile icon={<Zap className="h-6 w-6" />} label="Medium" size="md" />
          <IconTile icon={<Zap className="h-8 w-8" />} label="Large" size="lg" />
        </div>
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
              <tr><td className="p-3 border-b border-border">label</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">href</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">onClick</td><td className="p-3 border-b border-border">() =&gt; void</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">variant</td><td className="p-3 border-b border-border">&quot;solid&quot; | &quot;outline&quot; | &quot;dashed&quot;</td><td className="p-3 border-b border-border">&quot;solid&quot;</td></tr>
              <tr><td className="p-3 border-b border-border">size</td><td className="p-3 border-b border-border">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</td><td className="p-3 border-b border-border">&quot;md&quot;</td></tr>
            </tbody>
          </table>
        </div>
      </motion.section>
    </motion.div>
  );
}
