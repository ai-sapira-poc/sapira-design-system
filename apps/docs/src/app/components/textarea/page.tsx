"use client";

import { Textarea } from "@sapira/ui";

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

export default function TextareaPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Textarea</h1>
        <p className="text-muted-foreground mt-2">Multi-line text input with label, error, helper text, and character count support.</p>
      </div>

      <Section title="Basic">
        <Demo>
          <Textarea placeholder="Type something…" className="max-w-sm" />
        </Demo>
      </Section>

      <Section title="With Label and Error">
        <Demo>
          <div className="max-w-sm">
            <Textarea label="Bio" error="Bio is required." placeholder="Tell us about yourself…" />
          </div>
        </Demo>
      </Section>

      <Section title="With Helper Text">
        <Demo>
          <div className="max-w-sm">
            <Textarea label="Notes" helperText="Optional. Add any relevant notes." placeholder="Notes…" />
          </div>
        </Demo>
      </Section>

      <Section title="Character Count">
        <Demo>
          <div className="max-w-sm">
            <Textarea label="Summary" maxLength={200} placeholder="Brief summary…" rows={3} />
          </div>
        </Demo>
      </Section>

      <Section title="Resize Variants">
        <Demo>
          <div className="grid gap-4 max-w-lg">
            <Textarea label="No resize" resize="none" placeholder="Cannot resize" rows={2} />
            <Textarea label="Vertical (default)" resize="vertical" placeholder="Resize vertically" rows={2} />
            <Textarea label="Both" resize="both" placeholder="Resize both directions" rows={2} />
          </div>
        </Demo>
      </Section>

      <Section title="Disabled">
        <Demo>
          <Textarea disabled placeholder="Cannot edit" className="max-w-sm" />
        </Demo>
      </Section>
    </div>
  );
}
