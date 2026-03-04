"use client";

import React, { useState, useMemo, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import {
  Button,
  Badge,
  MetricsCard,
  DataTable,
  StatusBadge,
  AIBadge,
  Input,
  Timeline,
  EmptyState,
  WizardStepper,
  SearchBox,
  Skeleton,
  FilterBar,
  PageHeader,
} from "@sapira/ui";
import type { ColumnDef } from "@sapira/ui";
import { Search, Users, FileText, Package, TrendingUp, BarChart3, Settings } from "lucide-react";

// ─── Color utilities ───────────────────────────────────────────────

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h: number, s: number, l: number): string {
  const s1 = s / 100,
    l1 = l / 100;
  const a = s1 * Math.min(l1, 1 - l1);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l1 - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hslString(h: number, s: number, l: number) {
  return `${h} ${s}% ${l}%`;
}

function contrastForeground(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.55 ? "#18181B" : "#FFFFFF";
}

// ─── Palette generation ────────────────────────────────────────────

function generatePalette(primary: string, secondary: string) {
  const [ph, ps, pl] = hexToHsl(primary);
  const [sh, ss, sl] = hexToHsl(secondary);
  const pFg = contrastForeground(primary);
  const sFg = contrastForeground(secondary);
  const [pfh, pfs, pfl] = hexToHsl(pFg);
  const [sfh, sfs, sfl] = hexToHsl(sFg);

  // Accent: lighter variant of secondary
  const accentL = Math.min(sl + 15, 96);
  const accentHex = hslToHex(sh, Math.max(ss - 10, 5), accentL);
  const accentFg = contrastForeground(accentHex);
  const [afh, afs, afl] = hexToHsl(accentFg);

  // Muted: very light variant of secondary
  const mutedL = Math.min(sl + 25, 97);
  const mutedHex = hslToHex(sh, Math.max(ss - 20, 3), mutedL);
  const mutedFgHex = hslToHex(sh, Math.min(ss, 15), 45);

  const [mh, ms, ml] = hexToHsl(mutedHex);
  const [mfh, mfs, mfl] = hexToHsl(mutedFgHex);

  const borderHex = hslToHex(sh, Math.max(ss - 15, 5), Math.min(sl + 10, 90));

  return {
    "--primary": primary,
    "--primary-foreground": pFg,
    "--secondary": secondary,
    "--secondary-foreground": sFg,
    "--brand": primary,
    "--brand-foreground": pFg,
    "--accent": accentHex,
    "--accent-foreground": accentFg,
    "--muted": mutedHex,
    "--muted-foreground": mutedFgHex,
    "--ring": primary,
    "--destructive": "#B91C1C",
    "--background": "#FFFFFF",
    "--foreground": "#18181B",
    "--card": "#FFFFFF",
    "--card-foreground": "#18181B",
    "--popover": "#FFFFFF",
    "--popover-foreground": "#18181B",
    "--border": borderHex,
    "--input": borderHex,
  };
}

// ─── Presets ───────────────────────────────────────────────────────

const presets: { name: string; primary: string; secondary: string }[] = [
  { name: "Industrial", primary: "#18181B", secondary: "#F4F4F5" },
  { name: "Ocean", primary: "#2563EB", secondary: "#DBEAFE" },
  { name: "Forest", primary: "#16A34A", secondary: "#DCFCE7" },
  { name: "Sunset", primary: "#EA580C", secondary: "#FFF7ED" },
];

// ─── Demo data ─────────────────────────────────────────────────────

type Row = { id: number; name: string; status: string; role: string };
const demoRows: Row[] = [
  { id: 1, name: "Alice Johnson", status: "active", role: "Engineer" },
  { id: 2, name: "Bob Smith", status: "pending", role: "Designer" },
  { id: 3, name: "Carol Lee", status: "inactive", role: "Manager" },
];
const demoCols: ColumnDef<Row>[] = [
  { id: "name", header: "Name", accessor: "name" },
  { id: "role", header: "Role", accessor: "role" },
  { id: "status", header: "Status", accessor: "status", cell: (_v, r) => <StatusBadge status={r.status} /> },
];

// ─── Page ──────────────────────────────────────────────────────────

export default function ThemesPage() {
  const [primary, setPrimary] = useState("#2563EB");
  const [secondary, setSecondary] = useState("#DBEAFE");
  const [radius, setRadius] = useState<"sharp" | "soft" | "rounded">("soft");
  const [copied, setCopied] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const radiusValue = radius === "sharp" ? "0px" : radius === "soft" ? "0.5rem" : "1rem";

  const palette = useMemo(() => generatePalette(primary, secondary), [primary, secondary]);

  const cssVars = useMemo(() => {
    const vars: Record<string, string> = {};
    for (const [k, v] of Object.entries(palette)) {
      vars[k] = v;
    }
    vars["--radius"] = radiusValue;
    return vars;
  }, [palette, radiusValue]);

  const copyThemeConfig = useCallback(() => {
    const [ph, ps, pl] = hexToHsl(primary);
    const code = `import { createTheme } from "@sapira/ui";

const theme = createTheme({
  name: "custom",
  brand: "${hslString(ph, ps, pl)}",
  radius: "${radiusValue}",
});`;
    navigator.clipboard.writeText(code);
  }, [primary, radiusValue]);

  const handleHexInput = (
    value: string,
    setter: (v: string) => void
  ) => {
    if (/^#[0-9a-fA-F]{6}$/.test(value)) setter(value);
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Brand Themes</h1>
        <p className="text-muted-foreground mt-2">
          Pick your brand colors and preview every component in real time.
        </p>
      </div>

      {/* Controls */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Colors</h2>
        <div className="flex flex-wrap gap-8 items-end">
          <div className="space-y-2">
            <label className="text-sm font-medium">Primary Color</label>
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
                className="w-10 h-10 rounded border cursor-pointer"
              />
              <input
                type="text"
                value={primary}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v.length <= 7) {
                    if (/^#[0-9a-fA-F]{6}$/.test(v)) setPrimary(v);
                    // allow typing
                  }
                }}
                onBlur={(e) => handleHexInput(e.target.value, setPrimary)}
                className="w-24 h-10 border rounded-md px-2 text-sm font-mono"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Secondary Color</label>
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
                className="w-10 h-10 rounded border cursor-pointer"
              />
              <input
                type="text"
                value={secondary}
                onChange={(e) => {
                  const v = e.target.value;
                  if (/^#[0-9a-fA-F]{6}$/.test(v)) setSecondary(v);
                }}
                onBlur={(e) => handleHexInput(e.target.value, setSecondary)}
                className="w-24 h-10 border rounded-md px-2 text-sm font-mono"
              />
            </div>
          </div>
        </div>

        {/* Presets */}
        <div className="flex gap-2 flex-wrap">
          {presets.map((p) => (
            <button
              key={p.name}
              onClick={() => {
                setPrimary(p.primary);
                setSecondary(p.secondary);
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm hover:bg-accent transition-colors"
            >
              <span
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: p.primary }}
              />
              {p.name}
            </button>
          ))}
        </div>

        {/* Corner Radius */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Corner Radius</label>
          <div className="flex gap-2">
            {(["sharp", "soft", "rounded"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRadius(r)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm border transition-colors ${
                  radius === r
                    ? "bg-primary text-primary-foreground border-primary"
                    : "hover:bg-accent"
                }`}
                style={{ borderRadius: r === "sharp" ? "0px" : r === "soft" ? "0.5rem" : "1rem" }}
              >
                <span
                  className="w-5 h-5 border-2 border-current"
                  style={{ borderRadius: r === "sharp" ? "0px" : r === "soft" ? "4px" : "8px" }}
                />
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            copyThemeConfig();
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
        >
          {copied ? "✅ Copied!" : "📋 Copy Theme Config"}
        </button>
      </section>

      {/* Generated palette (collapsible) */}
      <section className="space-y-4">
        <button
          onClick={() => setPaletteOpen((o) => !o)}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <h2 className="text-lg font-semibold">Generated Palette</h2>
          <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${paletteOpen ? "rotate-180" : ""}`} />
        </button>
        {paletteOpen && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(palette)
              .filter(([k]) => !k.includes("foreground") && k !== "--ring" && k !== "--input")
              .map(([key, val]) => {
                const bg = val;
                return (
                  <div key={key} className="border rounded-md p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md border shrink-0" style={{ backgroundColor: bg }} />
                    <div>
                      <p className="text-xs font-mono">{key.replace("--", "")}</p>
                      <p className="text-[10px] text-muted-foreground font-mono">{val}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </section>

      {/* Live preview */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Live Preview</h2>
        <style>{`
          .theme-preview [class*="rounded-md"] { border-radius: ${radiusValue} !important; }
          .theme-preview [class*="rounded-lg"] { border-radius: ${radiusValue} !important; }
          .theme-preview [class*="rounded-xl"] { border-radius: calc(${radiusValue} + 0.25rem) !important; }
        `}</style>
        <div
          className="theme-preview border rounded-xl p-6 space-y-8"
          style={cssVars as React.CSSProperties}
        >
          {/* Page Header */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Page Header</p>
            <PageHeader
              title="Project Dashboard"
              description="Overview of project metrics and recent activity"
              actions={
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Export</Button>
                  <Button size="sm">New Project</Button>
                </div>
              }
            />
          </div>

          {/* Buttons */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Buttons</p>
            <div className="flex flex-wrap gap-2 items-center">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-2 items-center mt-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Settings className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Badges */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Badges</p>
            <div className="flex flex-wrap gap-2 items-center">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <StatusBadge status="active" />
              <StatusBadge status="pending" />
              <StatusBadge status="error" />
              <StatusBadge status="info" />
              <AIBadge />
              <AIBadge label="Generated" size="md" />
            </div>
          </div>

          {/* Search & Filters */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Search &amp; Filters</p>
            <div className="space-y-3">
              <SearchBox placeholder="Search projects, users, documents..." shortcut="⌘K" onSearch={() => {}} />
              <FilterBar
                filters={[
                  { label: "Status", value: "status", options: [{ label: "Active", value: "active" }, { label: "Pending", value: "pending" }, { label: "Archived", value: "archived" }] },
                  { label: "Role", value: "role", options: [{ label: "Admin", value: "admin" }, { label: "Editor", value: "editor" }, { label: "Viewer", value: "viewer" }] },
                ]}
                activeFilters={{}}
                onChange={() => {}}
                onClear={() => {}}
              />
            </div>
          </div>

          {/* Form Inputs */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Form Inputs</p>
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="space-y-1">
                <label className="text-sm font-medium">Project Name</label>
                <Input placeholder="Enter name..." />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="you@company.com" />
              </div>
              <div className="space-y-1 col-span-2">
                <label className="text-sm font-medium text-destructive">Invalid Field</label>
                <Input error placeholder="This field has an error" />
                <p className="text-xs text-destructive">This field is required</p>
              </div>
            </div>
          </div>

          {/* MetricsCards */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Metrics Cards</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <MetricsCard label="Revenue" value="$48,200" change={{ value: 12.5, trend: "positive" }} icon={<TrendingUp className="h-4 w-4" />} />
              <MetricsCard label="Orders" value="1,243" change={{ value: -2.1, trend: "negative" }} icon={<Package className="h-4 w-4" />} />
              <MetricsCard label="Users" value="8,491" change={{ value: 4.3, trend: "positive" }} icon={<Users className="h-4 w-4" />} />
              <MetricsCard label="Reports" value="342" description="This quarter" icon={<BarChart3 className="h-4 w-4" />} />
            </div>
          </div>

          {/* DataTable */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Data Table</p>
            <DataTable columns={demoCols} data={demoRows} />
          </div>

          {/* Timeline */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Timeline</p>
            <div className="max-w-md">
              <Timeline
                events={[
                  { id: "1", title: "Project created", description: "Initial setup completed", timestamp: "2026-03-04T09:00:00Z", variant: "success" as const },
                  { id: "2", title: "AI analysis started", description: "Processing 1,200 documents", timestamp: "2026-03-04T09:15:00Z", variant: "ai" as const },
                  { id: "3", title: "Review required", description: "3 items flagged for review", timestamp: "2026-03-04T09:30:00Z", variant: "warning" as const },
                  { id: "4", title: "Export completed", description: "Results exported successfully", timestamp: "2026-03-04T10:00:00Z", variant: "user" as const },
                ]}
              />
            </div>
          </div>

          {/* Wizard Stepper */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Wizard Stepper</p>
            <WizardStepper
              steps={[
                { label: "Project Info", description: "Basic details" },
                { label: "Configuration", description: "Set up parameters" },
                { label: "Team Members", description: "Assign roles" },
                { label: "Review", description: "Confirm & launch" },
              ]}
              currentStep={2}
            />
          </div>

          {/* Skeletons */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Loading Skeletons</p>
            <div className="flex gap-4 items-start">
              <Skeleton variant="circular" width={48} height={48} />
              <div className="space-y-2 flex-1">
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="40%" />
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Empty State</p>
            <EmptyState
              icon={<FileText className="h-10 w-10" />}
              title="No documents yet"
              description="Upload your first document to get started with the analysis."
              action={<Button>Upload Document</Button>}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
