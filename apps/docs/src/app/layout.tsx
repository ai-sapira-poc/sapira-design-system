import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sapira Design System",
  description: "Themeable component library for Sapira demos",
};

const navigation = [
  { label: "Overview", href: "/" },
  { label: "Button", href: "/components/button" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 border-r border-border bg-sidebar p-6 flex-shrink-0">
            <div className="mb-8">
              <h1 className="text-lg font-semibold tracking-tight">Sapira DS</h1>
              <p className="text-xs text-muted-foreground mt-1">Design System</p>
            </div>
            <nav className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-8 max-w-4xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
