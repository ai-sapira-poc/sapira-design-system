"use client";

import * as React from "react";
import { Info, CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";
import { cn } from "../../lib/utils";

const variantConfig = {
  info: { icon: Info, bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", iconColor: "text-blue-500" },
  success: { icon: CheckCircle, bg: "bg-green-50", border: "border-green-200", text: "text-green-800", iconColor: "text-green-500" },
  warning: { icon: AlertTriangle, bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800", iconColor: "text-amber-500" },
  error: { icon: XCircle, bg: "bg-red-50", border: "border-red-200", text: "text-red-800", iconColor: "text-red-500" },
} as const;

export type AlertVariant = keyof typeof variantConfig;

export interface AlertProps extends React.ComponentProps<"div"> {
  variant?: AlertVariant;
  title?: string;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

function Alert({
  variant = "info",
  title,
  icon,
  dismissible = false,
  onDismiss,
  children,
  className,
  ...props
}: AlertProps) {
  const [dismissed, setDismissed] = React.useState(false);
  if (dismissed) return null;

  const config = variantConfig[variant];
  const IconComp = config.icon;

  return (
    <div
      role="alert"
      className={cn(
        "relative flex gap-3 rounded-lg border p-4",
        config.bg, config.border, config.text,
        className
      )}
      {...props}
    >
      <div className={cn("shrink-0 mt-0.5", config.iconColor)}>
        {icon ?? <IconComp className="h-5 w-5" />}
      </div>
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold text-sm">{title}</p>}
        {children && <div className={cn("text-sm", title && "mt-1 opacity-90")}>{children}</div>}
      </div>
      {dismissible && (
        <button
          onClick={() => { setDismissed(true); onDismiss?.(); }}
          className={cn("shrink-0 p-0.5 rounded hover:bg-black/5 transition-colors", config.text)}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export { Alert };
