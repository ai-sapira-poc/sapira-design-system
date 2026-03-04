"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavItem =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string }[] }
  | { type: "separator" };

export function DocsShell({
  navigation,
  children,
}: {
  navigation: NavItem[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile nav on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navContent = (
    <nav className="space-y-4">
      {navigation.map((section, idx) =>
        "type" in section && section.type === "separator" ? (
          <hr key={`sep-${idx}`} className="border-border" />
        ) : "children" in section && section.children ? (
          <div key={section.label}>
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1 px-3">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.children.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                    pathname === item.href
                      ? "bg-accent text-accent-foreground font-medium"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <a
            key={"href" in section ? section.href : `item-${idx}`}
            href={"href" in section ? section.href : "#"}
            className={`block px-3 py-2 text-sm rounded-md transition-colors font-medium ${
              "href" in section && pathname === section.href
                ? "bg-accent text-accent-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {"label" in section ? section.label : ""}
          </a>
        )
      )}
    </nav>
  );

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 border-r border-border bg-sidebar p-6 flex-shrink-0 overflow-y-auto max-h-screen sticky top-0">
        <div className="mb-8">
          <a href="/" className="block">
            <h1 className="text-lg font-semibold tracking-tight">Sapira DS</h1>
            <p className="text-xs text-muted-foreground mt-1">Design System</p>
          </a>
        </div>
        {navContent}
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border px-4 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <h1 className="text-base font-semibold tracking-tight">Sapira DS</h1>
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-accent transition-colors cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <aside
        className={`
          lg:hidden fixed top-14 left-0 bottom-0 z-50 w-72 bg-background border-r border-border p-6
          overflow-y-auto transition-transform duration-200 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {navContent}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl lg:mt-0 mt-14">
        {children}
      </main>
    </div>
  );
}
