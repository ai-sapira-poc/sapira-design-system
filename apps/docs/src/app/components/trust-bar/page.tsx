"use client";

import { TrustBar, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@sapira/ui";
import { Shield, Clock, BookOpen, CreditCard, X, Repeat, Info } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export default function TrustBarPage() {
  return (
    <motion.div
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <TooltipProvider>
          <h1 className="text-2xl font-semibold tracking-tight inline-flex items-center gap-2">
            TrustBar
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                A horizontal strip of trust signals — use at the bottom of onboarding or landing pages to reassure users about security, speed, and ease.
              </TooltipContent>
            </Tooltip>
          </h1>
        </TooltipProvider>
        <p className="text-muted-foreground mt-2">
          Horizontal bar of trust/feature badges. Use at the bottom of onboarding or landing screens for reassurance.
        </p>
      </motion.div>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold">Default</h2>
        <div className="border rounded-xl p-6">
          <TrustBar
            items={[
              { icon: <Shield className="h-3.5 w-3.5" />, label: "Secure data" },
              { icon: <Clock className="h-3.5 w-3.5" />, label: "5 minutes" },
              { icon: <BookOpen className="h-3.5 w-3.5" />, label: "Guided process" },
            ]}
          />
        </div>
      </motion.section>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold">Custom Separator</h2>
        <div className="border rounded-xl p-6">
          <TrustBar
            separator="|"
            items={[
              { icon: <CreditCard className="h-3.5 w-3.5" />, label: "Free trial" },
              { icon: <X className="h-3.5 w-3.5" />, label: "No credit card" },
              { icon: <Repeat className="h-3.5 w-3.5" />, label: "Cancel anytime" },
            ]}
          />
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
              <tr><td className="p-3 border-b border-border">items</td><td className="p-3 border-b border-border">{`{ icon?: ReactNode; label: string }[]`}</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">separator</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">&quot;·&quot;</td></tr>
            </tbody>
          </table>
        </div>
      </motion.section>
    </motion.div>
  );
}
