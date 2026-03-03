"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface PageHeaderProps extends React.ComponentProps<"div"> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  breadcrumbs?: Breadcrumb[];
  renderLink?: (props: { href: string; className: string; children: React.ReactNode }) => React.ReactNode;
}

function PageHeader({
  title,
  description,
  actions,
  breadcrumbs,
  renderLink,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div className={cn("space-y-2 pb-6", className)} {...props}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-1 text-sm text-muted-foreground">
          {breadcrumbs.map((crumb, i) => (
            <React.Fragment key={i}>
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {crumb.href && renderLink ? (
                renderLink({
                  href: crumb.href,
                  className: "hover:text-foreground transition-colors",
                  children: crumb.label,
                })
              ) : crumb.href ? (
                <a href={crumb.href} className="hover:text-foreground transition-colors">
                  {crumb.label}
                </a>
              ) : (
                <span className="text-foreground">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          {description && (
            <p className="text-sm text-muted-foreground max-w-2xl">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
      </div>
    </div>
  );
}

export { PageHeader };
