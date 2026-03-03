"use client";

import * as React from "react";
import { ChevronDown, PanelLeftClose, PanelLeft } from "lucide-react";
import { cn } from "../../lib/utils";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: React.ReactNode;
  children?: SidebarItem[];
}

export interface SidebarProps extends React.ComponentProps<"div"> {
  items: SidebarItem[];
  collapsed?: boolean;
  onToggle?: () => void;
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  activeItemId?: string;
  onItemClick?: (item: SidebarItem) => void;
  renderLink?: (props: { href: string; className: string; children: React.ReactNode }) => React.ReactNode;
}

function Sidebar({
  items,
  collapsed = false,
  onToggle,
  logo,
  footer,
  activeItemId,
  onItemClick,
  renderLink,
  className,
  ...props
}: SidebarProps) {
  const [expandedIds, setExpandedIds] = React.useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const renderItem = (item: SidebarItem, depth = 0) => {
    const isActive = activeItemId === item.id;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedIds.has(item.id);

    const content = (
      <div
        className={cn(
          "relative flex h-10 items-center gap-3 px-3 text-sm transition-colors rounded-sm cursor-pointer",
          depth > 0 && "h-8 text-xs",
          depth > 0 && `pl-${3 + depth * 4}`,
          isActive ? "text-foreground bg-accent/50" : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
        )}
        style={depth > 0 ? { paddingLeft: `${12 + depth * 16}px` } : undefined}
        onClick={() => {
          if (hasChildren) toggleExpanded(item.id);
          onItemClick?.(item);
        }}
      >
        {item.icon && <span className="shrink-0 [&_svg]:h-4 [&_svg]:w-4">{item.icon}</span>}
        {!collapsed && (
          <>
            <span className="flex-1 truncate">{item.label}</span>
            {item.badge && <span className="shrink-0">{item.badge}</span>}
            {hasChildren && (
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", isExpanded && "rotate-180")}
              />
            )}
          </>
        )}
      </div>
    );

    const wrappedContent =
      item.href && renderLink
        ? renderLink({ href: item.href, className: "block", children: content })
        : item.href
          ? <a href={item.href} className="block">{content}</a>
          : content;

    return (
      <li key={item.id}>
        {wrappedContent}
        {hasChildren && isExpanded && !collapsed && (
          <ul>
            {item.children!.map((child) => renderItem(child, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className={cn("flex h-full flex-col", className)} {...props}>
      {/* Logo */}
      {logo && (
        <div className="flex h-14 items-center border-b border-border px-3">{logo}</div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-0.5 px-2">
          {items.map((item) => renderItem(item))}
        </ul>
      </nav>

      {/* Footer */}
      {footer && <div className="border-t border-border p-2">{footer}</div>}

      {/* Collapse toggle */}
      {onToggle && (
        <div className="border-t border-border p-2">
          <button
            onClick={onToggle}
            className={cn(
              "flex h-10 w-full items-center gap-3 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground",
              collapsed && "justify-center"
            )}
          >
            {collapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      )}
    </div>
  );
}

export { Sidebar };
