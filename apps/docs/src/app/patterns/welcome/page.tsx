"use client";

import { useState } from "react";
import { HeroSection, LanguageSelector, TrustBar } from "@sapira/ui";

export default function WelcomePattern() {
  const [lang, setLang] = useState("en");

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome / Onboarding Pattern</h1>
        <p className="text-muted-foreground mt-2">
          Centered, minimal, trust-building welcome screen for onboarding flows.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Live Example</h2>
        <div className="border rounded-lg overflow-hidden">
          <HeroSection className="min-h-[600px]">
            <div className="relative flex flex-col items-center justify-between min-h-[600px] px-6 py-10">
              {/* Back link */}
              <div className="absolute top-6 left-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ← Back
                </a>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-8 max-w-md text-center">
                {/* Logo */}
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">✨</div>

                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Welcome</h2>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    Let&apos;s get you set up. Choose your preferred language to continue.
                  </p>
                </div>

                <LanguageSelector
                  options={[
                    { id: "en", label: "English" },
                    { id: "es", label: "Español" },
                    { id: "fr", label: "Français" },
                    { id: "pt", label: "Português" },
                  ]}
                  selected={lang}
                  onChange={setLang}
                  variant="inline"
                />
              </div>

              {/* Trust bar at bottom */}
              <TrustBar
                items={[
                  { icon: <span>🔒</span>, label: "Secure data" },
                  { icon: <span>⏱️</span>, label: "5 minutes" },
                  { icon: <span>📋</span>, label: "Guided process" },
                ]}
              />
            </div>
          </HeroSection>
        </div>
      </section>
    </div>
  );
}
