"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  Button,
  Badge,
  MetricsCard,
  DataTable,
  StatusBadge,
  AIBadge,
  Input,
} from "@sapira/ui";
import type { ColumnDef } from "@sapira/ui";

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

  return {
    "--primary": hslString(ph, ps, pl),
    "--primary-foreground": hslString(pfh, pfs, pfl),
    "--secondary": hslString(sh, ss, sl),
    "--secondary-foreground": hslString(sfh, sfs, sfl),
    "--brand": primary,
    "--brand-foreground": pFg,
    "--accent": hslString(sh, Math.max(ss - 10, 5), accentL),
    "--accent-foreground": hslString(afh, afs, afl),
    "--muted": hslString(mh, ms, ml),
    "--muted-foreground": hslString(mfh, mfs, mfl),
    "--ring": hslString(ph, ps, pl),
    "--destructive": "0 72% 41%",
    "--background": "0 0% 100%",
    "--foreground": "240 6% 10%",
    "--card": "0 0% 100%",
    "--card-foreground": "240 6% 10%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "240 6% 10%",
    "--border": hslString(sh, Math.max(ss - 15, 5), Math.min(sl + 10, 90)),
    "--input": hslString(sh, Math.max(ss - 15, 5), Math.min(sl + 10, 90)),
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

  const palette = useMemo(() => generatePalette(primary, secondary), [primary, secondary]);

  const cssVars = useMemo(() => {
    const vars: Record<string, string> = {};
    for (const [k, v] of Object.entries(palette)) {
      vars[k] = v;
    }
    return vars;
  }, [palette]);

  const copyThemeConfig = useCallback(() => {
    const [ph, ps, pl] = hexToHsl(primary);
    const code = `import { createTheme } from "@sapira/ui";

const theme = createTheme({
  name: "custom",
  brand: "${hslString(ph, ps, pl)}",
});`;
    navigator.clipboard.writeText(code);
  }, [primary]);

  const handleHexInput = (
    value: string,
    setter: (v: string) => void
  ) => {
    if (/^#[0-9a-fA-F]{6}$/.test(value)) setter(value);
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Theme Builder</h1>
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

        <button
          onClick={copyThemeConfig}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          📋 Copy Theme Config
        </button>
      </section>

      {/* Live preview */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Live Preview</h2>
        <div
          className="border rounded-xl p-6 space-y-6"
          style={cssVars as React.CSSProperties}
        >
          {/* Buttons */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Buttons</p>
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Badges */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Badges</p>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          {/* Status + AI badges */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Status &amp; AI</p>
            <div className="flex flex-wrap gap-2 items-center">
              <StatusBadge status="active" />
              <StatusBadge status="pending" />
              <StatusBadge status="error" />
              <StatusBadge status="info" />
              <AIBadge />
            </div>
          </div>

          {/* MetricsCard */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Metrics Card</p>
            <div className="grid grid-cols-3 gap-4">
              <MetricsCard label="Revenue" value="$48,200" change={{ value: 12.5, trend: "positive" }} />
              <MetricsCard label="Orders" value="1,243" change={{ value: -2.1, trend: "negative" }} />
              <MetricsCard label="Users" value="8,491" change={{ value: 4.3, trend: "positive" }} />
            </div>
          </div>

          {/* DataTable */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Data Table</p>
            <DataTable columns={demoCols} data={demoRows} />
          </div>

          {/* Input */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Input</p>
            <Input placeholder="Type something…" className="max-w-sm" />
          </div>
        </div>
      </section>

      {/* Generated palette */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Generated Palette</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Object.entries(palette)
            .filter(([k]) => !k.includes("foreground") && k !== "--ring" && k !== "--input")
            .map(([key, val]) => {
              const isHex = val.startsWith("#");
              const bg = isHex ? val : `hsl(${val})`;
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
      </section>
    </div>
  );
}
