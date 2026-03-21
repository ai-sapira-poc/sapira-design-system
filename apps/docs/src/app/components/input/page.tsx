"use client";

import { Input } from "@sapira/ui";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Demo({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`border rounded-lg p-6 space-y-4 ${className ?? ""}`}>{children}</div>;
}

export default function InputPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Input</h1>
        <p className="text-muted-foreground mt-2">
          A styled text input with support for error states, disabled mode, and all native input types.
        </p>
      </div>

      <Section title="Default">
        <Demo>
          <Input placeholder="Type something…" className="max-w-sm" />
        </Demo>
      </Section>

      <Section title="With Label">
        <Demo>
          <div className="space-y-1.5 max-w-sm">
            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
            <Input id="name" placeholder="John Doe" />
          </div>
        </Demo>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<label htmlFor="name" className="text-sm font-medium">Full Name</label>
<Input id="name" placeholder="John Doe" />`}</code>
        </pre>
      </Section>

      <Section title="With Placeholder">
        <Demo>
          <Input placeholder="Search projects…" className="max-w-sm" />
        </Demo>
      </Section>

      <Section title="Error State">
        <Demo>
          <div className="space-y-1.5 max-w-sm">
            <label className="text-sm font-medium">Email</label>
            <Input error placeholder="email@example.com" defaultValue="not-an-email" />
            <p className="text-xs text-destructive">Please enter a valid email address.</p>
          </div>
        </Demo>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<Input error placeholder="email@example.com" />
<p className="text-xs text-destructive">Please enter a valid email.</p>`}</code>
        </pre>
      </Section>

      <Section title="With Helper Text">
        <Demo>
          <div className="space-y-1.5 max-w-sm">
            <label className="text-sm font-medium">Username</label>
            <Input placeholder="claudinho" />
            <p className="text-xs text-muted-foreground">Must be 3–20 characters, no spaces.</p>
          </div>
        </Demo>
      </Section>

      <Section title="Disabled">
        <Demo>
          <Input disabled placeholder="Cannot edit" className="max-w-sm" />
        </Demo>
      </Section>

      <Section title="Input Types">
        <Demo>
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            {(["text", "email", "password", "number", "search"] as const).map((t) => (
              <div key={t} className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">{t}</label>
                <Input type={t} placeholder={t} />
              </div>
            ))}
          </div>
        </Demo>
      </Section>

      <Section title="With Icon">
        <Demo>
          <div className="relative max-w-sm">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <Input placeholder="Search…" className="pl-9" />
          </div>
        </Demo>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<div className="relative">
  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input placeholder="Search…" className="pl-9" />
</div>`}</code>
        </pre>
      </Section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <p className="text-sm text-muted-foreground">
          Extends all native <code>&lt;input&gt;</code> props, plus:
        </p>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Default</th>
                <th className="text-left p-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["error", "boolean", "false", "Show destructive (red) border and ring"],
                ["type", "string", '"text"', "Native input type"],
                ["disabled", "boolean", "false", "Disable interaction and dim the input"],
                ["className", "string", "—", "Additional CSS classes"],
              ].map(([prop, type, def, desc]) => (
                <tr key={prop} className="border-t">
                  <td className="p-3 font-mono text-xs">{prop}</td>
                  <td className="p-3 font-mono text-xs">{type}</td>
                  <td className="p-3 font-mono text-xs">{def}</td>
                  <td className="p-3 text-xs text-muted-foreground">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Section title="Formatted Input">
        <p className="text-sm text-muted-foreground">
          Use the <code>format</code> prop for auto-formatting. The raw value is preserved — formatted text is shown on blur.
        </p>
        <Demo>
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Phone</label>
              <Input format="phone" placeholder="612 345 678" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Card</label>
              <Input format="card" placeholder="4242 4242 4242 4242" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">IBAN</label>
              <Input format="iban" placeholder="ES12 3456 7890 1234 5678" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Currency</label>
              <Input format="currency" placeholder="1.234,50 €" />
            </div>
          </div>
        </Demo>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<Input format="phone" placeholder="612 345 678" />
<Input format="card" placeholder="4242 4242 4242 4242" />
<Input format="iban" placeholder="ES12 3456 …" />
<Input format="currency" formatOptions={{ currencySymbol: "$" }} />`}</code>
        </pre>
      </Section>

      <div className="rounded-lg border border-muted bg-muted/30 p-4 text-sm text-muted-foreground">
        💡 See the <a href="/patterns/form" className="underline font-medium text-foreground">Form pattern</a> for
        a complete form example with labels, validation, and Select.
      </div>
    </div>
  );
}
