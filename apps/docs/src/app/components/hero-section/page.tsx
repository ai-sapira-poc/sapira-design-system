"use client";

import { HeroSection, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@sapira/ui";
import { Sparkles, ArrowRight, Layout } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 22 } },
};

export default function HeroSectionPage() {
  return (
    <motion.div
      className="space-y-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-semibold tracking-tight">HeroSection</h1>
        <p className="text-muted-foreground mt-2">
          Full-screen hero section with optional background image and overlay.
          Perfect for landing pages and project entry points.
        </p>
      </motion.div>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Layout className="h-4 w-4" /> Dot-Grid Background
        </h2>
        <div className="border rounded-xl overflow-hidden">
          <HeroSection className="min-h-[360px] relative">
            {/* Dot grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" as const }}
              >
                <Sparkles className="h-8 w-8 mx-auto text-primary mb-3" />
                <h2 className="text-3xl font-bold tracking-tight">Welcome to Sapira</h2>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                  Build beautiful, consistent interfaces with our design system.
                </p>
              </motion.div>
            </div>
          </HeroSection>
        </div>
      </motion.section>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="h-4 w-4" /> Gradient Overlay
        </h2>
        <div className="border rounded-xl overflow-hidden">
          <HeroSection className="min-h-[360px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
            <div className="relative text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Premium Feel</h2>
              <p className="text-muted-foreground mt-2">Gradient overlay creates depth and visual interest</p>
              <motion.button
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </HeroSection>
        </div>
      </motion.section>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold">Dark Overlay</h2>
        <div className="border rounded-xl overflow-hidden h-[300px]">
          <HeroSection
            backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            overlay="dark"
            className="min-h-[300px]"
          >
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold">Dark Overlay</h2>
              <p className="mt-2 opacity-80">Content over a dark overlay</p>
            </div>
          </HeroSection>
        </div>
      </motion.section>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold">Light Overlay</h2>
        <div className="border rounded-xl overflow-hidden h-[300px]">
          <HeroSection
            backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            overlay="light"
            className="min-h-[300px]"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold">Light Overlay</h2>
              <p className="text-muted-foreground mt-2">Content over a light overlay</p>
            </div>
          </HeroSection>
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
              <tr><td className="p-3 border-b border-border">backgroundImage</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">overlay</td><td className="p-3 border-b border-border">&quot;light&quot; | &quot;dark&quot; | &quot;none&quot;</td><td className="p-3 border-b border-border">&quot;light&quot;</td></tr>
              <tr><td className="p-3 border-b border-border">children</td><td className="p-3 border-b border-border">ReactNode</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">className</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
            </tbody>
          </table>
        </div>
      </motion.section>
    </motion.div>
  );
}
