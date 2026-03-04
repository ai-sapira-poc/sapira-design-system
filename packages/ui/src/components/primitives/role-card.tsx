"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface RoleCardProps extends Omit<React.ComponentProps<"div">, "onClick"> {
  icon: React.ReactNode;
  title: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  selected?: boolean;
}

function RoleCard({
  icon,
  title,
  description,
  href,
  onClick,
  selected = false,
  className,
  ...props
}: RoleCardProps) {
  const classes = cn(
    "flex items-center gap-4 rounded-xl border px-5 py-4 transition-all duration-200 cursor-pointer",
    "backdrop-blur-sm bg-background/80",
    "hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/40",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
    selected && "border-primary bg-primary/5 shadow-md",
    !selected && "border-border",
    className
  );

  const content = (
    <>
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl",
          selected
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground"
        )}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-sm leading-tight">{title}</p>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
            {description}
          </p>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.ComponentProps<"a">)}>
        {content}
      </a>
    );
  }

  return (
    <div
      data-slot="role-card"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {content}
    </div>
  );
}

export { RoleCard };
