"use client";

import * as React from "react";
import { DatePicker } from "@sapira/ui";

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

export default function DatePickerPage() {
  const [date, setDate] = React.useState<Date | undefined>();
  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">DatePicker</h1>
        <p className="text-muted-foreground mt-2">Date input with a popover calendar grid.</p>
      </div>

      <Section title="Basic">
        <Demo>
          <div className="max-w-xs">
            <DatePicker value={date} onChange={setDate} />
            {date && <p className="text-sm text-muted-foreground">Selected: {date.toLocaleDateString()}</p>}
          </div>
        </Demo>
      </Section>

      <Section title="With Label and Error">
        <Demo>
          <div className="max-w-xs">
            <DatePicker label="Start Date" error="Start date is required." />
          </div>
        </Demo>
      </Section>

      <Section title="With Min/Max Dates">
        <Demo>
          <div className="max-w-xs">
            <DatePicker label="Date (this quarter only)" minDate={minDate} maxDate={maxDate} />
            <p className="text-xs text-muted-foreground mt-1">
              Range: {minDate.toLocaleDateString()} – {maxDate.toLocaleDateString()}
            </p>
          </div>
        </Demo>
      </Section>

      <Section title="Text Input">
        <p className="text-sm text-muted-foreground">
          Type dates directly: &quot;mar 15&quot;, &quot;15/03/2026&quot;, &quot;2026-03-15&quot;, &quot;March 15 2026&quot;. Calendar still works alongside.
        </p>
        <Demo>
          <div className="max-w-xs">
            <DatePicker label="Type or pick" allowTextInput />
          </div>
        </Demo>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<DatePicker label="Type or pick" allowTextInput />`}</code>
        </pre>
      </Section>

      <Section title="Button-only (no text input)">
        <Demo>
          <div className="max-w-xs">
            <DatePicker label="Click only" allowTextInput={false} />
          </div>
        </Demo>
      </Section>

      <Section title="Disabled">
        <Demo>
          <div className="max-w-xs">
            <DatePicker label="Locked Date" disabled value={new Date()} />
          </div>
        </Demo>
      </Section>
    </div>
  );
}
