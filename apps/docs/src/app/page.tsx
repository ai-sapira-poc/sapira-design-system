import { Button, Badge } from "@sapira/ui";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Sapira Design System</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          A themeable, production-ready component library for building professional demo
          applications. Built with React, Tailwind CSS, Radix UI, and CVA.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Quick Start</h2>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`import "@sapira/ui/tokens/globals.css";
import { Button, Badge, ThemeProvider } from "@sapira/ui";`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Preview</h2>
        <div className="flex gap-3 items-center flex-wrap">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex gap-2 items-center flex-wrap">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </div>
  );
}
