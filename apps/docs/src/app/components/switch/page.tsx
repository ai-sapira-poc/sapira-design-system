"use client";

import * as React from "react";
import { Switch } from "@sapira/ui";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Demo({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-lg p-6 space-y-4">{children}</div>;
}

export default function SwitchPage() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Switch</h1>
        <p className="text-muted-foreground mt-2">Toggle switch built on Radix UI with smooth transitions.</p>
      </div>

      <Section title="Basic Toggle">
        <Demo>
          <Switch checked={checked} onCheckedChange={setChecked} />
          <p className="text-sm text-muted-foreground">State: {checked ? "on" : "off"}</p>
        </Demo>
      </Section>

      <Section title="With Label and Description">
        <Demo>
          <Switch label="Enable notifications" description="Receive email notifications for updates." />
          <Switch label="Dark mode" description="Use dark theme across the application." />
        </Demo>
      </Section>

      <Section title="Sizes">
        <Demo>
          <div className="flex items-center gap-6">
            <Switch size="sm" label="Small" />
            <Switch size="md" label="Medium" />
            <Switch size="lg" label="Large" />
          </div>
        </Demo>
      </Section>

      <Section title="Disabled">
        <Demo>
          <Switch disabled label="Cannot toggle" />
          <Switch disabled checked label="Checked but disabled" />
        </Demo>
      </Section>
    </div>
  );
}
