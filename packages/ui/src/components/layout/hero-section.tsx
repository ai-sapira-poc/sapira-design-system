"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const heroOverlayVariants = cva(
  "absolute inset-0",
  {
    variants: {
      overlay: {
        light: "bg-white/70",
        dark: "bg-black/50",
        none: "",
      },
    },
    defaultVariants: {
      overlay: "light",
    },
  }
);

export interface HeroSectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof heroOverlayVariants> {
  backgroundImage?: string;
  children: React.ReactNode;
}

function HeroSection({
  backgroundImage,
  overlay = "light",
  children,
  className,
  style,
  ...props
}: HeroSectionProps) {
  return (
    <section
      data-slot="hero-section"
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center",
        !backgroundImage && "bg-gradient-to-br from-muted/50 via-background to-muted",
        className
      )}
      style={{
        ...(backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}),
        ...style,
      }}
      {...props}
    >
      {backgroundImage && overlay !== "none" && (
        <div className={heroOverlayVariants({ overlay })} />
      )}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

export { HeroSection, heroOverlayVariants };
