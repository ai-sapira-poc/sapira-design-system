"use client";

import { useState } from "react";
import { LanguageSelector } from "@sapira/ui";

const languages = [
  { id: "en", label: "English" },
  { id: "es", label: "Español" },
  { id: "fr", label: "Français" },
  { id: "de", label: "Deutsch" },
];

export default function LanguageSelectorPage() {
  const [lang1, setLang1] = useState("en");
  const [lang2, setLang2] = useState("en");

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">LanguageSelector</h1>
        <p className="text-muted-foreground mt-2">
          Inline or dropdown language/option selector for onboarding and settings screens.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Inline</h2>
        <div className="border rounded-lg p-6">
          <LanguageSelector options={languages} selected={lang1} onChange={setLang1} variant="inline" />
          <p className="text-sm text-muted-foreground mt-2">Selected: {lang1}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Dropdown</h2>
        <div className="border rounded-lg p-6">
          <LanguageSelector options={languages} selected={lang2} onChange={setLang2} variant="dropdown" />
          <p className="text-sm text-muted-foreground mt-2">Selected: {lang2}</p>
        </div>
      </section>

      <section className="space-y-4">
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
      </section>
    </div>
  );
}
