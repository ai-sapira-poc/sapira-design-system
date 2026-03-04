"use client";

import {
  Input,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@sapira/ui";

function Field({
  label,
  htmlFor,
  error,
  helper,
  children,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
      {!error && helper && <p className="text-xs text-muted-foreground">{helper}</p>}
    </div>
  );
}

export default function FormPatternPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Form Pattern</h1>
        <p className="text-muted-foreground mt-2">
          A realistic form layout using Input, Select, and Button with labels, validation errors, and helper text.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Create Project</h2>
        <div className="border rounded-lg p-6 max-w-lg">
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Field label="Project Name" htmlFor="project-name" error="Project name is required.">
              <Input id="project-name" error placeholder="My awesome project" />
            </Field>

            <Field label="Description" htmlFor="project-desc" helper="Optional. A short summary of the project.">
              <Input id="project-desc" placeholder="Describe what this project is about…" />
            </Field>

            <Field label="Owner Email" htmlFor="owner-email" error="Please enter a valid email.">
              <Input id="owner-email" type="email" error defaultValue="not-valid" />
            </Field>

            <Field label="Team Size" htmlFor="team-size" helper="How many people will work on this?">
              <Input id="team-size" type="number" placeholder="5" />
            </Field>

            <Field label="Category">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <Field label="Priority">
              <Select defaultValue="medium">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <div className="flex gap-3 pt-2">
              <Button type="submit">Create Project</Button>
              <Button type="button" variant="outline">Cancel</Button>
            </div>
          </form>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Field Pattern</h2>
        <p className="text-sm text-muted-foreground">
          Compose labels, inputs, error messages, and helper text with a simple wrapper:
        </p>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<div className="space-y-1.5">
  <label htmlFor="email" className="text-sm font-medium">Email</label>
  <Input id="email" type="email" error />
  <p className="text-xs text-destructive">Please enter a valid email.</p>
</div>`}</code>
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Tips</h2>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>Use <code className="text-foreground">htmlFor</code> on labels matching <code className="text-foreground">id</code> on inputs for accessibility.</li>
          <li>Set the <code className="text-foreground">error</code> prop on Input to show destructive styling.</li>
          <li>Place error text in <code className="text-foreground">text-destructive</code> and helper text in <code className="text-foreground">text-muted-foreground</code>.</li>
          <li>Group related fields; use <code className="text-foreground">space-y-5</code> between fields for comfortable spacing.</li>
        </ul>
      </section>
    </div>
  );
}
