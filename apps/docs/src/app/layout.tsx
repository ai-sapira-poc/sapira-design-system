import type { Metadata } from "next";
import "./globals.css";
import { DocsShell } from "./docs-shell";

export const metadata: Metadata = {
  title: "Sapira Design System",
  description: "Themeable component library for Sapira demos",
};

const navigation = [
  { label: "Overview", href: "/" },
  { label: "Brand Themes", href: "/themes" },
  { label: "For Agents", href: "/agents" },
  { label: "Icons", href: "/icons" },
  { type: "separator" },
  {
    label: "Primitives",
    children: [
      { label: "Button", href: "/components/button" },
      { label: "Input", href: "/components/input" },
      { label: "Breadcrumbs", href: "/components/breadcrumbs" },
      { label: "Tabs", href: "/components/tabs" },
      { label: "Checkbox", href: "/components/checkbox" },
      { label: "CardSelector", href: "/components/card-selector" },
      { label: "SelectDropdown", href: "/components/select-dropdown" },
      { label: "UserProfile", href: "/components/user-profile" },
      { label: "IconTile", href: "/components/icon-tile" },
      { label: "RoleCard", href: "/components/role-card" },
      { label: "TrustBar", href: "/components/trust-bar" },
      { label: "LanguageSelector", href: "/components/language-selector" },
      { label: "Textarea", href: "/components/textarea" },
      { label: "Switch", href: "/components/switch" },
      { label: "RadioGroup", href: "/components/radio-group" },
      { label: "DatePicker", href: "/components/date-picker" },
      { label: "FileUpload", href: "/components/file-upload" },
      { label: "ExpandableTabs", href: "/components/expandable-tabs" },
      { label: "GlassCard", href: "/components/glass-card" },
    ],
  },
  {
    label: "Overlay",
    children: [
      { label: "Dialog", href: "/components/dialog" },
      { label: "Sheet", href: "/components/sheet" },
      { label: "Dropdown Menu", href: "/components/dropdown-menu" },
      { label: "Popover", href: "/components/popover" },
      { label: "Command Palette", href: "/components/command-palette" },
    ],
  },
  {
    label: "Layout",
    children: [
      { label: "AppShell", href: "/components/app-shell" },
      { label: "PageHeader", href: "/components/page-header" },
      { label: "GuidedPanel", href: "/components/guided-panel" },
      { label: "Sidebar", href: "/components/sidebar" },
      { label: "BentoGrid", href: "/components/bento-grid" },
    ],
  },
  {
    label: "Data Display",
    children: [
      { label: "DataTable", href: "/components/data-table" },
      { label: "MetricsCard", href: "/components/metrics-card" },
      { label: "Timeline", href: "/components/timeline" },
      { label: "StatusBadge", href: "/components/status-badge" },
      { label: "EmptyState", href: "/components/empty-state" },
      { label: "Skeleton", href: "/components/skeleton" },
      { label: "StatCard", href: "/components/stat-card" },
      { label: "ProgressBar", href: "/components/progress-bar" },
      { label: "BarChart", href: "/components/bar-chart" },
      { label: "LineChart", href: "/components/line-chart" },
      { label: "PieChart", href: "/components/pie-chart" },
      { label: "AreaChart", href: "/components/area-chart" },
      { label: "Sparkline", href: "/components/sparkline" },
      { label: "Marquee", href: "/components/marquee" },
      { label: "InteractiveLogsTable", href: "/components/interactive-logs-table" },
      { label: "WorkflowBuilder", href: "/components/workflow-builder" },
      { label: "FeatureCarousel", href: "/components/feature-carousel" },
    ],
  },
  {
    label: "Feedback",
    children: [
      { label: "Toast", href: "/components/toast" },
      { label: "ConfirmDialog", href: "/components/confirm-dialog" },
      { label: "FilterBar", href: "/components/filter-bar" },
      { label: "SearchBox", href: "/components/search-box" },
      { label: "DrawerPanel", href: "/components/drawer-panel" },
      { label: "WizardStepper", href: "/components/wizard-stepper" },
      { label: "NotificationCard", href: "/components/notification-card" },
      { label: "NotificationBell", href: "/components/notification-bell" },
      { label: "CompactStepper", href: "/components/compact-stepper" },
      { label: "Alert", href: "/components/alert" },
      { label: "Spinner", href: "/components/spinner" },
      { label: "Pagination", href: "/components/pagination" },
    ],
  },
  {
    label: "Effects",
    children: [
      { label: "GlowingEffect", href: "/components/glowing-effect" },
      { label: "ShimmerButton", href: "/components/shimmer-button" },
      { label: "NumberTicker", href: "/components/number-ticker" },
      { label: "TextShimmer", href: "/components/text-shimmer" },
      { label: "AnimatedBackground", href: "/components/animated-background" },
      { label: "GlowyWavesHero", href: "/components/glowy-waves-hero" },
    ],
  },
  {
    label: "AI",
    children: [
      { label: "AIBadge", href: "/components/ai-badge" },
      { label: "StreamingText", href: "/components/streaming-text" },
      { label: "AIGenerationPreview", href: "/components/ai-generation-preview" },
    ],
  },
  {
    label: "Patterns",
    children: [
      { label: "Dashboard", href: "/patterns/dashboard" },
      { label: "CRUD", href: "/patterns/crud" },
      { label: "Wizard", href: "/patterns/wizard" },
      { label: "Form", href: "/patterns/form" },
      { label: "Project Landing", href: "/patterns/project-landing" },
      { label: "Welcome", href: "/patterns/welcome" },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DocsShell navigation={navigation as any}>
          {children}
        </DocsShell>
      </body>
    </html>
  );
}
