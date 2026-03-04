"use client";

import * as React from "react";
import { ChevronDown, PanelLeftClose, PanelLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export interface SidebarNavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: React.ReactNode;
  children?: SidebarNavItem[];
}

export interface SidebarSeparator {
  type: "separator";
}

export type SidebarItem = SidebarNavItem | SidebarSeparator;

export interface SidebarProps extends React.ComponentProps<"div"> {
  items: SidebarItem[];
  collapsed?: boolean;
  onToggle?: () => void;
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  activeItemId?: string;
  onItemClick?: (item: SidebarNavItem) => void;
  renderLink?: (props: {
    href: string;
    className: string;
    children: React.ReactNode;
  }) => React.ReactNode;
}

const easeOut = [0.25, 0.1, 0.25, 1] as const;
const springNav = { type: "spring" as const, stiffness: 400, damping: 25 };
const springActive = { type: "spring" as const, stiffness: 500, damping: 30 };

function isSeparator(item: SidebarItem): item is SidebarSeparator {
  return "type" in item && item.type === "separator";
}

function findActiveParentIds(
  items: SidebarNavItem[],
  activeId: string,
  path: string[] = []
): string[] | null {
  for (const item of items) {
    if (item.id === activeId) return path;
    if (item.children) {
      const result = findActiveParentIds(item.children, activeId, [
        ...path,
        item.id,
      ]);
      if (result) return result;
    }
  }
  return null;
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

  // Auto-expand groups containing active item
  React.useEffect(() => {
    if (!activeItemId) return;
    const navItems = items.filter((i) => !isSeparator(i)) as SidebarNavItem[];
    const parentIds = findActiveParentIds(navItems, activeItemId);
    if (parentIds && parentIds.length > 0) {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        parentIds.forEach((id) => next.add(id));
        return next;
      });
    }
  }, [activeItemId, items]);

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const renderNavItem = (item: SidebarNavItem, depth = 0, index = 0) => {
    const isActive = activeItemId === item.id;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedIds.has(item.id);
    const isChild = depth > 0;

    const content = (
      <motion.div
        className={cn(
          "relative flex items-center gap-3 px-3 text-sm cursor-pointer rounded-sm",
          isChild ? "h-8 text-xs" : "h-10",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        style={isChild ? { paddingLeft: `${12 + depth * 16}px` } : undefined}
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
        transition={springNav}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            e.stopPropagation();
            toggleExpanded(item.id);
          }
          onItemClick?.(item);
        }}
      >
        {/* Active bar indicator (parent items) */}
        {isActive && !isChild && (
          <motion.div
            layoutId="activeNav"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-primary"
            transition={springActive}
          />
        )}

        {/* Active background */}
        {isActive && (
          <motion.div
            layoutId={isChild ? undefined : "activeNavBg"}
            className="absolute inset-0 bg-accent/50 rounded-sm"
            initial={false}
            transition={springActive}
          />
        )}

        {/* Active dot for child items */}
        {isActive && isChild && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary"
            style={{ left: `${4 + depth * 16}px` }}
          />
        )}

        {/* Icon */}
        {item.icon && (
          <motion.span
            className="relative z-10 shrink-0 [&_svg]:h-4 [&_svg]:w-4"
            animate={{ scale: isActive ? 1.05 : 1 }}
            transition={springNav}
          >
            {item.icon}
          </motion.span>
        )}

        {!collapsed && (
          <>
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.15, delay: index * 0.02 }}
              className="relative z-10 flex-1 truncate"
            >
              {item.label}
            </motion.span>
            {item.badge && (
              <span className="relative z-10 shrink-0">{item.badge}</span>
            )}
            {hasChildren && (
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    );

    // For items with children, don't wrap in link (they just expand/collapse)
    const wrappedContent =
      hasChildren
        ? content
        : item.href && renderLink
          ? renderLink({ href: item.href, className: "block", children: content })
          : item.href
            ? <a href={item.href} className="block">{content}</a>
            : content;

    return (
      <li key={item.id}>
        {wrappedContent}
        {hasChildren && (
          <AnimatePresence initial={false}>
            {isExpanded && !collapsed && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="overflow-hidden"
              >
                {item.children!.map((child, i) =>
                  renderNavItem(child, depth + 1, i)
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        )}
      </li>
    );
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 64 : 240 }}
      transition={{ duration: 0.2, ease: easeOut }}
      className={cn("flex h-full flex-col", className)}
      {...(props as any)}
    >
      {/* Logo */}
      {logo && (
        <div className="flex h-14 items-center border-b border-border px-3">
          {logo}
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-0.5 px-2">
          {items.map((item, idx) =>
            isSeparator(item) ? (
              <li key={`sep-${idx}`}>
                <hr className="my-3 border-border" />
              </li>
            ) : (
              renderNavItem(item, 0, idx)
            )
          )}
        </ul>
      </nav>

      {/* Footer */}
      {footer && <div className="border-t border-border p-2">{footer}</div>}

      {/* Collapse toggle */}
      {onToggle && (
        <div className="border-t border-border p-2">
          <motion.button
            onClick={onToggle}
            className={cn(
              "flex h-10 w-full items-center gap-3 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground",
              collapsed && "justify-center"
            )}
            whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: collapsed ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {collapsed ? (
                <PanelLeft className="h-4 w-4" />
              ) : (
                <PanelLeftClose className="h-4 w-4" />
              )}
            </motion.div>
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  Collapse
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}
    </motion.aside>
  );
}

export { Sidebar };
