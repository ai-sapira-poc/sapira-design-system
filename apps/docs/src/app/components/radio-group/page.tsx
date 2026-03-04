"use client";

import * as React from "react";
import { RadioGroup } from "@sapira/ui";

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

const options = [
  { label: "Email", value: "email" },
  { label: "Phone", value: "phone" },
  { label: "SMS", value: "sms" },
];

const optionsWithDesc = [
  { label: "Starter", value: "starter", description: "For individuals and small teams." },
  { label: "Pro", value: "pro", description: "For growing businesses with advanced needs." },
  { label: "Enterprise", value: "enterprise", description: "Custom solutions with dedicated support." },
];

export default function RadioGroupPage() {
  const [value, setValue] = React.useState("email");
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">RadioGroup</h1>
        <p className="text-muted-foreground mt-2">Accessible radio button group built on Radix UI.</p>
      </div>

      <Section title="Vertical (default)">
        <Demo>
          <RadioGroup options={options} value={value} onValueChange={setValue} />
          <p className="text-sm text-muted-foreground">Selected: {value}</p>
        </Demo>
      </Section>

      <Section title="Horizontal">
        <Demo>
          <RadioGroup options={options} orientation="horizontal" />
        </Demo>
      </Section>

      <Section title="With Descriptions">
        <Demo>
          <RadioGroup options={optionsWithDesc} />
        </Demo>
      </Section>

      <Section title="Disabled">
        <Demo>
          <RadioGroup options={options} disabled value="phone" />
        </Demo>
      </Section>
    </div>
  );
}
