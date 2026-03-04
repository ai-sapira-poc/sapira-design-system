"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sidebar, type SidebarItem, type SidebarNavItem } from "@sapira/ui";

type NavItem =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string }[] }
  | { type: "separator" };

function toSidebarItems(navigation: NavItem[]): SidebarItem[] {
  return navigation.map((item, idx) => {
    if ("type" in item && item.type === "separator") {
      return { type: "separator" as const };
    }
    if ("children" in item && item.children) {
      const groupId = `group-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
      return {
        id: groupId,
        label: item.label,
        children: item.children.map((child) => ({
          id: child.href,
          label: child.label,
          href: child.href,
        })),
      } satisfies SidebarNavItem;
    }
    const simple = item as { label: string; href: string };
    return {
      id: simple.href,
      label: simple.label,
      href: simple.href,
    } satisfies SidebarNavItem;
  });
}

export function DocsShell({
  navigation,
  children,
}: {
  navigation: NavItem[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const sidebarItems = useMemo(() => toSidebarItems(navigation), [navigation]);

  // Find active item id — match pathname to an item's href
  const activeItemId = useMemo(() => {
    for (const item of navigation) {
      if ("type" in item) continue;
      if ("href" in item && item.href === pathname) return item.href;
      if ("children" in item && item.children) {
        for (const child of item.children) {
          if (child.href === pathname) return child.href;
        }
      }
    }
    return undefined;
  }, [navigation, pathname]);

  const renderLink = ({ href, className, children: linkChildren }: { href: string; className: string; children: React.ReactNode }) => (
    <Link href={href} className={className}>{linkChildren}</Link>
  );

  const logo = (
    <Link href="/" className="block">
      <h1 className="text-lg font-semibold tracking-tight">Sapira DS</h1>
      <p className="text-xs text-muted-foreground mt-0.5">Design System</p>
    </Link>
  );

  const sidebarContent = (
    <Sidebar
      items={sidebarItems}
      activeItemId={activeItemId}
      renderLink={renderLink}
      logo={logo}
      className="h-full w-full"
      style={{ width: "100%" }}
    />
  );

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 border-r border-border bg-sidebar flex-shrink-0 overflow-y-auto max-h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-base font-semibold tracking-tight">Sapira DS</h1>
        </Link>
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
          lg:hidden fixed top-14 left-0 bottom-0 z-50 w-72 bg-background border-r border-border
          overflow-y-auto transition-transform duration-200 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {sidebarContent}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl lg:mt-0 mt-14">
        {children}
      </main>
    </div>
  );
}
