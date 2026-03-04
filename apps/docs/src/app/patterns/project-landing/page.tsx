"use client";

import { useState } from "react";
import { HeroSection, IconTile, RoleCard } from "@sapira/ui";

export default function ProjectLandingPattern() {
  const [selectedTile, setSelectedTile] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const tiles = [
    { id: "documents", icon: "📄", label: "Documents" },
    { id: "reports", icon: "📊", label: "Reports" },
    { id: "settings", icon: "⚙️", label: "Settings" },
    { id: "users", icon: "👥", label: "Users" },
    { id: "analytics", icon: "📈", label: "Analytics" },
    { id: "coming", icon: "🔒", label: "Coming Soon" },
  ];

  const roles = [
    { id: "admin", icon: "👤", title: "Administrator", description: "Manage users, settings, and system configuration" },
    { id: "operator", icon: "🔧", title: "Operator", description: "Process daily tasks and manage workflows" },
    { id: "auditor", icon: "🔍", title: "Auditor", description: "Review records and generate compliance reports" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Project Landing Pattern</h1>
        <p className="text-muted-foreground mt-2">
          Full-screen hero page for demo project entry points. Combines HeroSection with IconTile grids and RoleCard selectors.
        </p>
      </div>

      {/* Demo */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Live Example</h2>
        <div className="border rounded-lg overflow-hidden">
          <HeroSection className="min-h-[700px]">
            <div className="flex flex-col items-center text-center px-6 py-12 gap-8 max-w-2xl mx-auto">
              {/* Logo placeholder */}
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">🏢</div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight">Project Portal</h2>
                <p className="text-muted-foreground mt-2">Select a module to get started</p>
              </div>

              {/* Icon tiles grid */}
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Modules</p>
                <div className="grid grid-cols-3 gap-3">
                  {tiles.map((tile) => (
                    <IconTile
                      key={tile.id}
                      icon={<span>{tile.icon}</span>}
                      label={tile.label}
                      variant={tile.id === "coming" ? "dashed" : selectedTile === tile.id ? "solid" : "outline"}
                      onClick={() => tile.id !== "coming" && setSelectedTile(tile.id)}
                    />
                  ))}
                </div>
                {selectedTile && <p className="text-xs text-muted-foreground mt-2">Selected: {selectedTile}</p>}
              </div>

              {/* Role cards alternative */}
              <div className="w-full">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Or select a role</p>
                <div className="space-y-2">
                  {roles.map((role) => (
                    <RoleCard
                      key={role.id}
                      icon={<span>{role.icon}</span>}
                      title={role.title}
                      description={role.description}
                      selected={selectedRole === role.id}
                      onClick={() => setSelectedRole(role.id)}
                    />
                  ))}
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4">v1.0.0</p>
            </div>
          </HeroSection>
        </div>
      </section>
    </div>
  );
}
