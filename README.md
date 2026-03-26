# Sapira Design System

A themeable, production-ready component library for building professional demo applications. Built with React 19, Tailwind CSS, Radix UI, Framer Motion, and CVA.

## Quick Start

```bash
pnpm add @sapira/ui
```

```tsx
import "@sapira/ui/tokens/globals.css";
import "@sapira/ui/tailwind.css"; // Ensures Tailwind scans DS component classes
import { ThemeProvider, Button } from "@sapira/ui";

function App() {
  return (
    <ThemeProvider brand="210 100% 50%">
      <Button>Hello Sapira</Button>
    </ThemeProvider>
  );
}
```

## Components

### Primitives
`Button` · `Badge` · `Input` · `Select` · `CustomSelect` · `Separator` · `Avatar` · `Tooltip`

### Overlay
`Dialog` · `Sheet` · `DropdownMenu` · `Popover` · `CommandPalette`

### Layout
`AppShell` · `Sidebar` · `Header` · `PageHeader`

### Data Display
`DataTable` · `MetricsCard` · `StatusBadge` · `Timeline` · `EmptyState` · `Skeleton`

### Feedback
`Toast` / `useToast()` · `ConfirmDialog` · `FilterBar` · `SearchBox` · `DrawerPanel` · `WizardStepper`

### AI
`AIBadge` · `StreamingText` / `useStreamingText()` · `AIGenerationPreview`

## Theming

Wrap your app with `ThemeProvider` to customize brand color, fonts, and border radius:

```tsx
import { ThemeProvider, createTheme } from "@sapira/ui";

// Simple — just a brand color (HSL values)
<ThemeProvider brand="210 100% 50%">
  <App />
</ThemeProvider>

// Full config
const theme = createTheme({
  name: "my-brand",
  brand: "210 100% 50%",
  brandForeground: "0 0% 100%",
  fontSans: "'Inter', sans-serif",
  radius: 8,
});

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

Themes cascade — you can nest `ThemeProvider` for section-level theming.

> **Note:** Sapira UI is light-mode only. Dark mode variables and utilities have been removed. The `ThemeProvider` automatically enforces `color-scheme: light` on the document.

## Toast Notifications

```tsx
// Root layout
import { ToastProvider } from "@sapira/ui";

<ToastProvider>
  <App />
</ToastProvider>

// Any component
import { useToast } from "@sapira/ui";

const { toast } = useToast();
toast({ title: "Saved!", variant: "success" });
```

## Documentation

Run the docs site locally:

```bash
pnpm dev --filter @sapira/docs
```

The docs include live previews for every component, full-page pattern examples (Dashboard, CRUD, Wizard), theming demos, and an AI agent guide.

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Dev mode (watch)
pnpm dev
```

## Project Structure

```
sapira-design-system/
├── packages/
│   └── ui/              # Component library (@sapira/ui)
│       └── src/
│           ├── components/
│           │   ├── primitives/
│           │   ├── overlay/
│           │   ├── layout/
│           │   ├── data-display/
│           │   ├── feedback/
│           │   └── ai/
│           ├── tokens/      # CSS tokens & theming
│           └── lib/         # Utilities
├── apps/
│   └── docs/            # Next.js documentation site
└── README.md
```

## Contributing

1. Components go in the appropriate category under `packages/ui/src/components/`
2. Export from the category's `index.ts` and the root `src/index.ts`
3. Add a docs page in `apps/docs/src/app/components/<name>/page.tsx`
4. All components must accept `className`, use TypeScript (no `any`), and be generic (no domain-specific content)
5. Run `pnpm build` before committing to ensure everything compiles
