"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { GlowingEffect } from "../effects/glowing-effect";

const iconTileVariants = cva(
  "inline-flex flex-col items-center justify-center rounded-xl transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
  {
    variants: {
      variant: {
        solid:
          "bg-primary/10 border border-border hover:bg-primary/20 hover:shadow-md hover:scale-105",
        outline:
          "border border-border bg-background hover:bg-accent hover:shadow-md hover:scale-105",
        dashed:
          "border-2 border-dashed border-muted-foreground/30 bg-muted/30 text-muted-foreground cursor-default",
      },
      size: {
        sm: "h-16 w-16 text-lg gap-1",
        md: "h-24 w-24 text-2xl gap-1.5",
        lg: "h-32 w-32 text-3xl gap-2",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

export interface IconTileProps
  extends Omit<React.ComponentProps<"div">, "onClick">,
    VariantProps<typeof iconTileVariants> {
  icon: React.ReactNode;
  label?: string;
  href?: string;
  onClick?: () => void;
  glowing?: boolean;
  /** Show selected/active ring state */
  selected?: boolean;
}

function IconTile({
  icon,
  label,
  href,
  onClick,
  variant,
  size,
  className,
  glowing = false,
  selected = false,
  ...props
}: IconTileProps) {
  const classes = cn(
    iconTileVariants({ variant, size }),
    selected && "ring-2 ring-primary ring-offset-2 ring-offset-background",
    className
  );

  const content = (
    <>
      <span className="flex items-center justify-center">{icon}</span>
      {label && (
        <span
          className={cn(
            "font-medium leading-tight text-center px-1",
            size === "sm" ? "text-[10px]" : size === "lg" ? "text-xs" : "text-[11px]"
          )}
        >
          {label}
        </span>
      )}
    </>
  );

  const wrapGlow = (el: React.ReactElement) =>
    glowing ? <GlowingEffect className="rounded-xl">{el}</GlowingEffect> : el;

  if (href && variant !== "dashed") {
    return wrapGlow(
      <a href={href} className={classes} {...(props as React.ComponentProps<"a">)}>
        {content}
      </a>
    );
  }

  return wrapGlow(
    <div
      data-slot="icon-tile"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={variant !== "dashed" ? onClick : undefined}
      className={classes}
      {...props}
    >
      {content}
    </div>
  );
}

export { IconTile, iconTileVariants };
