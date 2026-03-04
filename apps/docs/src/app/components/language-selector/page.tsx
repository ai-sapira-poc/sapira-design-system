"use client";

import { useState } from "react";
import { LanguageSelector, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@sapira/ui";
import { Globe, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

const languages = [
  { id: "en", label: "English" },
  { id: "es", label: "Español" },
  { id: "fr", label: "Français" },
  { id: "de", label: "Deutsch" },
];

const headings: Record<string, string> = {
  en: "Welcome to Sapira",
  es: "Bienvenido a Sapira",
  fr: "Bienvenue sur Sapira",
  de: "Willkommen bei Sapira",
};

export default function LanguageSelectorPage() {
  const [lang1, setLang1] = useState("en");
  const [lang2, setLang2] = useState("en");
  const [hoveredLang, setHoveredLang] = useState<string | null>(null);

  const displayLang = hoveredLang || lang1;

  return (
    <motion.div
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-semibold tracking-tight">LanguageSelector</h1>
        <p className="text-muted-foreground mt-2">
          Inline or dropdown language/option selector for onboarding and settings screens.
        </p>
      </motion.div>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Globe className="h-4 w-4" /> Inline with Animated Underline
        </h2>
        <p className="text-sm text-muted-foreground">Hover a language to preview the heading dynamically.</p>
        <div className="border rounded-xl p-8 text-center space-y-6">
          <AnimatePresence mode="wait">
            <motion.h3
              key={displayLang}
              className="text-2xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {headings[displayLang]}
            </motion.h3>
          </AnimatePresence>

          <div className="flex justify-center gap-1">
            {languages.map((l) => (
              <button
                key={l.id}
                className="relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors hover:text-foreground"
                style={{ color: lang1 === l.id ? "var(--foreground)" : undefined }}
                onClick={() => setLang1(l.id)}
                onMouseEnter={() => setHoveredLang(l.id)}
                onMouseLeave={() => setHoveredLang(null)}
              >
                {l.label}
                {lang1 === l.id && (
                  <motion.div
                    layoutId="lang-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">Selected: {lang1}</p>
        </div>
      </motion.section>

      <motion.section className="space-y-4" variants={itemVariants}>
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Languages className="h-4 w-4" /> Dropdown
        </h2>
        <div className="border rounded-xl p-6">
          <LanguageSelector options={languages} selected={lang2} onChange={setLang2} variant="dropdown" />
          <p className="text-sm text-muted-foreground mt-2">Selected: {lang2}</p>
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
              <tr><td className="p-3 border-b border-border">options</td><td className="p-3 border-b border-border">{`{ id: string; label: string }[]`}</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">selected</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">onChange</td><td className="p-3 border-b border-border">(id: string) =&gt; void</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">variant</td><td className="p-3 border-b border-border">&quot;inline&quot; | &quot;dropdown&quot;</td><td className="p-3 border-b border-border">&quot;inline&quot;</td></tr>
            </tbody>
          </table>
        </div>
      </motion.section>
    </motion.div>
  );
}
