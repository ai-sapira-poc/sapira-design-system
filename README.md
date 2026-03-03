# Sapira Design System

A themeable, production-ready component library for building professional demo applications.

## Stack

- React 19 + TypeScript
- Tailwind CSS v4 + CSS custom properties
- Radix UI primitives + CVA + tailwind-merge
- Framer Motion for animations
- Turborepo monorepo with pnpm

## Getting Started

```bash
pnpm install
pnpm build
pnpm dev
```

## Usage

```tsx
import "@sapira/ui/tokens/globals.css";
import { Button, Badge, ThemeProvider } from "@sapira/ui";

function App() {
  return (
    <ThemeProvider brand="#E85D2D">
      <Button>Click me</Button>
      <Badge variant="secondary">Status</Badge>
    </ThemeProvider>
  );
}
```

## Structure

- `packages/ui` — Component library (built with tsup)
- `apps/docs` — Documentation site (Next.js)
