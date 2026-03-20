"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Spinner } from "../feedback/spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        shimmer:
          "relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 [&>.shimmer-layer]:absolute [&>.shimmer-layer]:inset-0 [&>.shimmer-layer]:bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] [&>.shimmer-layer]:bg-[length:200%_100%] [&>.shimmer-layer]:animate-[shimmer-sweep_3s_ease-in-out_infinite]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** Show loading spinner and disable interactions */
  loading?: boolean;
  /** Text to display while loading (replaces children) */
  loadingText?: string;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  loadingText,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const ref = React.useRef<HTMLButtonElement>(null);
  const [minWidth, setMinWidth] = React.useState<number | undefined>(undefined);

  // Capture width before entering loading state to prevent layout shift
  React.useEffect(() => {
    if (loading && ref.current && minWidth === undefined) {
      setMinWidth(ref.current.offsetWidth);
    }
    if (!loading) {
      setMinWidth(undefined);
    }
  }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Comp
      ref={ref}
      data-slot="button"
      disabled={loading || props.disabled}
      aria-busy={loading || undefined}
      className={cn(
        buttonVariants({ variant, size, className }),
        loading && "pointer-events-none opacity-70"
      )}
      style={minWidth ? { minWidth } : undefined}
      {...props}
    >
      {loading ? (
        <>
          <Spinner size="sm" className="shrink-0" />
          {loadingText ?? children}
        </>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
