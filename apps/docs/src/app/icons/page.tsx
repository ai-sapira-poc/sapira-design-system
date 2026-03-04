"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@sapira/ui";
import { Search, ExternalLink,
  Home, ArrowLeft, ArrowRight, ChevronDown, ChevronRight, Menu, X,
  Plus, Minus, Edit, Trash2, Copy, Download, Upload, Send, Filter,
  Check, AlertTriangle, AlertCircle, Info, XCircle, CheckCircle, Clock, Loader2,
  BarChart3, TrendingUp, PieChart, Activity, Database, Table,
  FileText, Image, Video, Music, Folder, Archive, Bookmark,
  User, Users, UserPlus, Shield, Lock, Unlock, Key, Eye, EyeOff,
  Mail, MessageSquare, Bell, Phone, Globe,
  ShoppingCart, CreditCard, Package, Truck, Receipt,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categories: { name: string; icons: [string, LucideIcon][] }[] = [
  { name: "Navigation", icons: [["Home", Home], ["ArrowLeft", ArrowLeft], ["ArrowRight", ArrowRight], ["ChevronDown", ChevronDown], ["ChevronRight", ChevronRight], ["Menu", Menu], ["X", X], ["ExternalLink", ExternalLink]] },
  { name: "Actions", icons: [["Plus", Plus], ["Minus", Minus], ["Edit", Edit], ["Trash2", Trash2], ["Copy", Copy], ["Download", Download], ["Upload", Upload], ["Send", Send], ["Search", Search], ["Filter", Filter]] },
  { name: "Status", icons: [["Check", Check], ["AlertTriangle", AlertTriangle], ["AlertCircle", AlertCircle], ["Info", Info], ["XCircle", XCircle], ["CheckCircle", CheckCircle], ["Clock", Clock], ["Loader2", Loader2]] },
  { name: "Data", icons: [["BarChart3", BarChart3], ["TrendingUp", TrendingUp], ["PieChart", PieChart], ["Activity", Activity], ["Database", Database], ["Table", Table]] },
  { name: "Content", icons: [["FileText", FileText], ["Image", Image], ["Video", Video], ["Music", Music], ["Folder", Folder], ["Archive", Archive], ["Bookmark", Bookmark]] },
  { name: "Users", icons: [["User", User], ["Users", Users], ["UserPlus", UserPlus], ["Shield", Shield], ["Lock", Lock], ["Unlock", Unlock], ["Key", Key], ["Eye", Eye], ["EyeOff", EyeOff]] },
  { name: "Communication", icons: [["Mail", Mail], ["MessageSquare", MessageSquare], ["Bell", Bell], ["Phone", Phone], ["Globe", Globe]] },
  { name: "Commerce", icons: [["ShoppingCart", ShoppingCart], ["CreditCard", CreditCard], ["Package", Package], ["Truck", Truck], ["Receipt", Receipt]] },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function IconsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return categories;
    const q = query.toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        icons: cat.icons.filter(([name]) => name.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.icons.length > 0);
  }, [query]);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Icons</h1>
        <p className="text-muted-foreground mt-2">
          Sapira DS uses{" "}
          <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground inline-flex items-center gap-1">
            Lucide Icons <ExternalLink className="h-3 w-3" />
          </a>{" "}
          — a beautiful, consistent icon library with 1000+ icons.
        </p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Filter icons…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
        <code>{`import { IconName } from 'lucide-react'`}</code>
      </div>

      <TooltipProvider>
        {filtered.map((cat) => (
          <section key={cat.name} className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{cat.name}</h2>
            <motion.div
              className="grid grid-cols-6 sm:grid-cols-8 gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {cat.icons.map(([name, Icon]) => (
                <motion.div key={name} variants={itemVariants}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-muted transition-colors cursor-default">
                        <Icon className="h-5 w-5" />
                        <span className="text-[10px] text-muted-foreground truncate max-w-full">{name}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{`import { ${name} } from 'lucide-react'`}</TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
      </TooltipProvider>

      {filtered.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-8">No icons match &quot;{query}&quot;</p>
      )}
    </div>
  );
}
