"use client";
import * as React11 from 'react';
import { useState, useRef, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, ChevronUp, Check, Search, Calendar, Upload, X, BookOpen, Clock, XIcon, CheckIcon, CircleIcon, ChevronRightIcon, SearchIcon, PanelLeft, PanelLeftClose, ChevronRight, TrendingUp, TrendingDown, ChevronLeft, Webhook, Database, Settings, Plus, Bell, XCircle, AlertTriangle, CheckCircle, Info, ChevronsLeft, ChevronsRight, Sparkles, RefreshCw, ArrowUpDown, ArrowUp, ArrowDown, Mail, Zap, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useInView, useTransform, animate, useSpring } from 'framer-motion';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as Popover from '@radix-ui/react-popover';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Command as Command$1 } from 'cmdk';
import { ResponsiveContainer, BarChart as BarChart$1, CartesianGrid, XAxis, YAxis, Tooltip as Tooltip$1, Legend, Bar, LineChart as LineChart$1, Line, AreaChart as AreaChart$1, Area, PieChart as PieChart$1, Pie, Cell } from 'recharts';
import { flushSync } from 'react-dom';

// src/components/primitives/button.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var sizeMap = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-10 w-10" };
function Spinner({ size = "md", label = "Loading", className, ...props }) {
  return /* @__PURE__ */ jsxs("div", { role: "status", className: cn("inline-flex items-center justify-center", className), ...props, children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        className: cn("animate-spin text-primary", sizeMap[size]),
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
          /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: label })
  ] });
}
var buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive before:hidden before:absolute before:min-h-[44px] before:min-w-[44px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 [@media(pointer:coarse)]:before:block",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        shimmer: "relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 [&>.shimmer-layer]:absolute [&>.shimmer-layer]:inset-0 [&>.shimmer-layer]:bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] [&>.shimmer-layer]:bg-[length:200%_100%] [&>.shimmer-layer]:animate-[shimmer-sweep_3s_ease-in-out_infinite]"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  loadingText,
  children,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  const ref = React11.useRef(null);
  const [minWidth, setMinWidth] = React11.useState(void 0);
  React11.useEffect(() => {
    if (loading && ref.current && minWidth === void 0) {
      setMinWidth(ref.current.offsetWidth);
    }
    if (!loading) {
      setMinWidth(void 0);
    }
  }, [loading]);
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-slot": "button",
      disabled: loading || props.disabled,
      "aria-busy": loading || void 0,
      className: cn(
        buttonVariants({ variant, size, className }),
        loading && "pointer-events-none opacity-70"
      ),
      style: minWidth ? { minWidth } : void 0,
      ...props,
      children: loading ? size?.toString().startsWith("icon") ? /* @__PURE__ */ jsx(Spinner, { size: "sm", className: "shrink-0" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Spinner, { size: "sm", className: "shrink-0" }),
        loadingText ?? children
      ] }) : children
    }
  );
}
var badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        success: "border-transparent bg-green-100 text-green-800",
        warning: "border-transparent bg-yellow-100 text-yellow-800",
        info: "border-transparent bg-blue-100 text-blue-800"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/utils/format.ts
function chunkString(str, sizes2, sep) {
  const parts = [];
  let offset = 0;
  for (const size of sizes2) {
    if (offset >= str.length) break;
    parts.push(str.slice(offset, offset + size));
    offset += size;
  }
  if (offset < str.length) {
    parts.push(str.slice(offset));
  }
  return parts.join(sep);
}
function formatPhone(raw, sep) {
  const digits = raw.replace(/\D/g, "");
  if (digits.length <= 3) return digits;
  return chunkString(digits, [3, 3, 3], sep);
}
function formatCard(raw, sep) {
  const digits = raw.replace(/\D/g, "").slice(0, 16);
  return chunkString(digits, [4, 4, 4, 4], sep);
}
function formatIban(raw, sep) {
  const clean = raw.replace(/\s/g, "").toUpperCase();
  return chunkString(clean, [4, 4, 4, 4, 4, 4, 4, 4], sep);
}
function formatCurrency(raw, opts) {
  const num = parseFloat(raw.replace(/[^\d.\-]/g, ""));
  if (isNaN(num)) return raw;
  const decimals = opts.decimals ?? 2;
  const tSep = opts.thousandSeparator ?? ".";
  const dSep = opts.decimalSeparator ?? ",";
  const symbol = opts.currencySymbol ?? "\u20AC";
  const [intPart, decPart] = Math.abs(num).toFixed(decimals).split(".");
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, tSep);
  const sign = num < 0 ? "-" : "";
  return `${sign}${formatted}${dSep}${decPart} ${symbol}`;
}
function formatNumber(raw, opts) {
  const num = parseFloat(raw.replace(/[^\d.\-]/g, ""));
  if (isNaN(num)) return raw;
  const decimals = opts.decimals ?? 0;
  const tSep = opts.thousandSeparator ?? ".";
  const dSep = opts.decimalSeparator ?? ",";
  const [intPart, decPart] = Math.abs(num).toFixed(decimals).split(".");
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, tSep);
  const sign = num < 0 ? "-" : "";
  if (decimals === 0) return `${sign}${formatted}`;
  return `${sign}${formatted}${dSep}${decPart}`;
}
function stripFormat(value, format) {
  switch (format) {
    case "phone":
    case "card":
      return value.replace(/\D/g, "");
    case "iban":
      return value.replace(/\s/g, "").toUpperCase();
    case "currency":
    case "number":
      return value.replace(/[^\d.\-]/g, "");
    default:
      return value;
  }
}
function formatChunked(raw, format, options) {
  const sep = options?.separator ?? " ";
  switch (format) {
    case "phone":
      return formatPhone(raw, sep);
    case "card":
      return formatCard(raw, sep);
    case "iban":
      return formatIban(raw, sep);
    case "currency":
      return formatCurrency(raw, options ?? {});
    case "number":
      return formatNumber(raw, options ?? {});
    default:
      return raw;
  }
}
function Input({ className, type, error, format, formatOptions, onChange, onFocus, onBlur, value, defaultValue, ...props }) {
  const [rawValue, setRawValue] = React11.useState(
    value ?? defaultValue ?? ""
  );
  const [isFocused, setIsFocused] = React11.useState(false);
  React11.useEffect(() => {
    if (value !== void 0) {
      setRawValue(String(value));
    }
  }, [value]);
  if (!format) {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        "data-slot": "input",
        "aria-invalid": error || void 0,
        className: cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
          className
        ),
        onChange,
        onFocus,
        onBlur,
        value,
        defaultValue,
        ...props
      }
    );
  }
  const displayValue = isFocused ? rawValue : formatChunked(rawValue, format, formatOptions);
  const handleChange = (e) => {
    const raw = stripFormat(e.target.value, format);
    setRawValue(raw);
    const syntheticEvent = {
      ...e,
      target: { ...e.target, value: raw }
    };
    onChange?.(syntheticEvent);
  };
  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: type ?? "text",
      "data-slot": "input",
      "aria-invalid": error || void 0,
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      ),
      value: displayValue,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      ...props
    }
  );
}
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = "SelectTrigger";
var SelectScrollUpButton = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = "SelectScrollUpButton";
var SelectScrollDownButton = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = "SelectScrollDownButton";
var SelectContent = React11.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = "SelectContent";
var SelectLabel = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = "SelectLabel";
var SelectItem = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = "SelectItem";
var SelectSeparator = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = "SelectSeparator";
function normalizeOptions(options) {
  return options.map(
    (opt) => typeof opt === "string" ? { label: opt, value: opt } : opt
  );
}
function CustomSelect({
  value,
  onChange,
  options: rawOptions,
  placeholder = "Select...",
  disabled = false,
  className
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const options = normalizeOptions(rawOptions);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);
  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };
  const selectedLabel = options.find((o) => o.value === value)?.label;
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: cn("relative", className), children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => !disabled && setIsOpen(!isOpen),
        disabled,
        className: cn(
          "w-full flex items-center justify-between px-3 py-2.5 rounded-lg border text-sm transition-colors text-left",
          isOpen ? "border-foreground bg-background" : "border-border bg-background hover:border-muted-foreground",
          disabled && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ jsx("span", { className: cn(value ? "text-foreground" : "text-muted-foreground"), children: selectedLabel || placeholder }),
          /* @__PURE__ */ jsx(motion.div, { animate: { rotate: isOpen ? 180 : 0 }, transition: { duration: 0.2 }, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -8, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -8, scale: 0.96 },
        transition: { duration: 0.15 },
        className: "absolute z-50 top-full left-0 right-0 mt-1 py-1 rounded-lg border border-border bg-background shadow-lg overflow-hidden",
        children: options.map((option, index) => {
          const isSelected = option.value === value;
          return /* @__PURE__ */ jsxs(
            motion.button,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: index * 0.03 },
              onClick: () => handleSelect(option.value),
              className: cn(
                "w-full flex items-center justify-between px-3 py-2 text-sm text-left transition-colors",
                isSelected ? "bg-foreground text-background" : "text-foreground hover:bg-muted"
              ),
              children: [
                /* @__PURE__ */ jsx("span", { children: option.label }),
                isSelected && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
              ]
            },
            option.value
          );
        })
      }
    ) })
  ] });
}
function Separator2({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function Avatar({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
function Breadcrumbs({ items, separator = "/", className, ...props }) {
  return /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: cn("flex items-center gap-1.5 text-sm", className), ...props, children: items.map((item, i) => {
    const isLast = i === items.length - 1;
    return /* @__PURE__ */ jsxs(React11.Fragment, { children: [
      i > 0 && /* @__PURE__ */ jsx("span", { className: "text-muted-foreground select-none", children: separator }),
      isLast || !item.href ? /* @__PURE__ */ jsx("span", { className: cn(isLast ? "text-foreground font-medium" : "text-muted-foreground"), children: item.label }) : /* @__PURE__ */ jsx("a", { href: item.href, className: "text-muted-foreground hover:text-foreground transition-colors", children: item.label })
    ] }, i);
  }) });
}
function Tabs({ tabs, activeTab, onChange, className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex border-b border-border", className), role: "tablist", ...props, children: tabs.map((tab) => /* @__PURE__ */ jsxs(
    "button",
    {
      role: "tab",
      "aria-selected": activeTab === tab.id,
      onClick: () => onChange(tab.id),
      className: cn(
        "relative px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
        activeTab === tab.id ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary" : "text-muted-foreground hover:text-foreground"
      ),
      children: [
        tab.label,
        tab.count != null && /* @__PURE__ */ jsx("span", { className: "ml-1.5 inline-flex items-center justify-center rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium", children: tab.count })
      ]
    },
    tab.id
  )) });
}
function Checkbox({ checked, onChange, label, disabled, indeterminate, className }) {
  const state = indeterminate ? "indeterminate" : checked;
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-2", className), children: [
    /* @__PURE__ */ jsx(
      CheckboxPrimitive.Root,
      {
        checked: state,
        onCheckedChange: (v) => onChange(v === true),
        disabled,
        className: cn(
          "peer size-4 shrink-0 rounded border border-primary shadow-xs transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground"
        ),
        children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: "flex items-center justify-center", children: indeterminate ? /* @__PURE__ */ jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M2 5h6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) : /* @__PURE__ */ jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M2 5l2.5 2.5L8 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
      }
    ),
    label && /* @__PURE__ */ jsx("label", { className: cn("text-sm select-none", disabled && "opacity-50 cursor-not-allowed"), children: label })
  ] });
}
var sizeVariants = cva("w-full rounded-full bg-muted overflow-hidden", {
  variants: {
    size: { sm: "h-1.5", md: "h-2.5", lg: "h-4" }
  },
  defaultVariants: { size: "md" }
});
function getAutoColor(pct) {
  if (pct > 66) return "bg-green-500";
  if (pct > 33) return "bg-yellow-500";
  return "bg-red-500";
}
var variantColors = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500"
};
function ProgressBar({ value, max, label, showValue, size = "md", variant = "default", className, ...props }) {
  const pct = Math.min(100, Math.max(0, value / max * 100));
  const barColor = variant === "default" ? getAutoColor(pct) : variantColors[variant] ?? "bg-primary";
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-1", className), ...props, children: [
    (label || showValue) && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
      label && /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: label }),
      showValue && /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
        value,
        "/",
        max
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: sizeVariants({ size }), children: /* @__PURE__ */ jsx("div", { className: cn("h-full rounded-full transition-all", barColor), style: { width: `${pct}%` } }) })
  ] });
}
function CardSelector({ options, selected, onChange, multiple = false, className }) {
  const selectedSet = new Set(Array.isArray(selected) ? selected : [selected]);
  function toggle(id) {
    if (multiple) {
      const arr = Array.isArray(selected) ? selected : [selected];
      onChange(selectedSet.has(id) ? arr.filter((s) => s !== id) : [...arr, id]);
    } else {
      onChange(id);
    }
  }
  return /* @__PURE__ */ jsx("div", { className: cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className), children: options.map((opt) => {
    const isSelected = selectedSet.has(opt.id);
    return /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => toggle(opt.id),
        className: cn(
          "flex flex-col items-center gap-2 rounded-lg border p-4 text-center transition-all",
          isSelected ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-primary/50"
        ),
        children: [
          opt.icon && /* @__PURE__ */ jsx("div", { className: "text-2xl", children: opt.icon }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: opt.title }),
          opt.description && /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: opt.description }),
          opt.badge && /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium", children: opt.badge })
        ]
      },
      opt.id
    );
  }) });
}
function SelectDropdown({
  options,
  value,
  onChange,
  placeholder = "Select...",
  searchable = true,
  disabled = false,
  className
}) {
  const [open, setOpen] = React11.useState(false);
  const [query, setQuery] = React11.useState("");
  const containerRef = React11.useRef(null);
  const inputRef = React11.useRef(null);
  const selectedOption = options.find((o) => o.value === value);
  const filtered = query ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase())) : options;
  React11.useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  React11.useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);
  React11.useEffect(() => {
    if (open && searchable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open, searchable]);
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: cn("relative inline-block w-full", className), children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => !disabled && setOpen(!open),
        disabled,
        className: cn(
          "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs",
          "transition-colors hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          !selectedOption && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ jsx("span", { className: "truncate", children: selectedOption?.label ?? placeholder }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: cn(
                "h-3.5 w-3.5 opacity-50 transition-transform duration-200",
                open && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs("div", { className: "absolute top-full left-0 z-50 mt-1 w-full min-w-[180px] rounded-md border border-border bg-background shadow-lg animate-in fade-in-0 slide-in-from-top-1 duration-150", children: [
      searchable && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border px-3 py-2", children: [
        /* @__PURE__ */ jsx(Search, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: inputRef,
            type: "text",
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: "Search...",
            className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-h-[220px] overflow-y-auto py-1", children: filtered.length === 0 ? /* @__PURE__ */ jsx("div", { className: "px-3 py-2 text-sm text-muted-foreground", children: "No results" }) : filtered.map((opt) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            onChange?.(opt.value);
            setOpen(false);
            setQuery("");
          },
          className: cn(
            "flex w-full items-center gap-2 px-3 py-1.5 text-sm transition-colors hover:bg-accent",
            opt.value === value && "bg-accent/50 font-medium"
          ),
          children: [
            /* @__PURE__ */ jsx(
              Check,
              {
                className: cn(
                  "h-3.5 w-3.5 shrink-0",
                  opt.value === value ? "opacity-100" : "opacity-0"
                )
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "truncate", children: opt.label })
          ]
        },
        opt.value
      )) })
    ] })
  ] });
}
var sizes = { sm: "size-8 text-xs", md: "size-10 text-sm", lg: "size-14 text-lg" };
var textSizes = { sm: "text-sm", md: "text-base", lg: "text-lg" };
function getInitials(name) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}
function UserProfile({ name, role, avatar, size = "md", className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-3", className), children: [
    avatar ? /* @__PURE__ */ jsx("img", { src: avatar, alt: name, className: cn("rounded-full object-cover", sizes[size]) }) : /* @__PURE__ */ jsx("div", { className: cn("rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium", sizes[size]), children: getInitials(name) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: cn("font-semibold leading-tight", textSizes[size]), children: name }),
      role && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: role })
    ] })
  ] });
}
function GlowingEffect({
  spread = 80,
  glow = true,
  proximity = 100,
  borderWidth = 2,
  disabled = false,
  className,
  color = "var(--primary)",
  children
}) {
  const containerRef = React11.useRef(null);
  const overlayRef = React11.useRef(null);
  const handleMouseMove = React11.useCallback(
    (e) => {
      if (disabled || !containerRef.current || !overlayRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlayRef.current.style.setProperty("--gx", `${x}px`);
      overlayRef.current.style.setProperty("--gy", `${y}px`);
      overlayRef.current.style.opacity = "1";
    },
    [disabled]
  );
  const handleMouseLeave = React11.useCallback(() => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "0";
    }
  }, []);
  if (disabled || !glow) {
    return /* @__PURE__ */ jsx("div", { className: cn("relative", className), children });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      className: cn("relative", className),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: overlayRef,
            className: "pointer-events-none absolute inset-0 z-10 rounded-[inherit] overflow-hidden transition-opacity duration-300",
            style: { opacity: 0 },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 rounded-[inherit]",
                style: {
                  background: `radial-gradient(${spread}px circle at var(--gx, -100px) var(--gy, -100px), ${color}, transparent)`,
                  mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: borderWidth
                }
              }
            )
          }
        ),
        children
      ]
    }
  );
}
var iconTileVariants = cva(
  "inline-flex flex-col items-center justify-center rounded-xl transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
  {
    variants: {
      variant: {
        solid: "bg-primary/10 border border-border hover:bg-primary/20 hover:shadow-md hover:scale-105",
        outline: "border border-border bg-background hover:bg-accent hover:shadow-md hover:scale-105",
        dashed: "border-2 border-dashed border-muted-foreground/30 bg-muted/30 text-muted-foreground cursor-default"
      },
      size: {
        sm: "h-16 w-16 text-lg gap-1",
        md: "h-24 w-24 text-2xl gap-1.5",
        lg: "h-32 w-32 text-3xl gap-2"
      }
    },
    defaultVariants: {
      variant: "solid",
      size: "md"
    }
  }
);
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
}) {
  const classes = cn(
    iconTileVariants({ variant, size }),
    selected && "ring-2 ring-primary ring-offset-2 ring-offset-background",
    className
  );
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center", children: icon }),
    label && /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "font-medium leading-tight text-center px-1",
          size === "sm" ? "text-[10px]" : size === "lg" ? "text-xs" : "text-[11px]"
        ),
        children: label
      }
    )
  ] });
  const wrapGlow = (el) => glowing ? /* @__PURE__ */ jsx(GlowingEffect, { className: "rounded-xl", children: el }) : el;
  if (href && variant !== "dashed") {
    return wrapGlow(
      /* @__PURE__ */ jsx("a", { href, className: classes, ...props, children: content })
    );
  }
  return wrapGlow(
    /* @__PURE__ */ jsx(
      "div",
      {
        "data-slot": "icon-tile",
        role: onClick ? "button" : void 0,
        tabIndex: onClick ? 0 : void 0,
        onClick: variant !== "dashed" ? onClick : void 0,
        className: classes,
        ...props,
        children: content
      }
    )
  );
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
}) {
  const classes = cn(
    "flex items-center gap-4 rounded-xl border px-5 py-4 transition-all duration-200 cursor-pointer",
    "backdrop-blur-sm bg-background/80",
    "hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/40",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
    selected && "border-primary bg-primary/5 shadow-md",
    !selected && "border-border",
    className
  );
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl",
          selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
        ),
        children: icon
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm leading-tight", children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-snug", children: description })
    ] })
  ] });
  if (href) {
    return /* @__PURE__ */ jsx("a", { href, className: classes, ...props, children: content });
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "role-card",
      role: onClick ? "button" : void 0,
      tabIndex: onClick ? 0 : void 0,
      onClick,
      className: classes,
      ...props,
      children: content
    }
  );
}
function TrustBar({
  items,
  separator = "\xB7",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "trust-bar",
      className: cn(
        "flex items-center justify-center gap-3 text-xs text-muted-foreground",
        className
      ),
      ...props,
      children: items.map((item, i) => /* @__PURE__ */ jsxs(React11.Fragment, { children: [
        i > 0 && /* @__PURE__ */ jsx("span", { className: "select-none opacity-40", children: separator }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          item.icon && /* @__PURE__ */ jsx("span", { className: "flex items-center text-muted-foreground/70", children: item.icon }),
          item.label
        ] })
      ] }, i))
    }
  );
}
function LanguageSelector({
  options,
  selected,
  onChange,
  variant = "inline",
  className,
  ...props
}) {
  const [open, setOpen] = React11.useState(false);
  const selectedOption = options.find((o) => o.id === selected);
  if (variant === "dropdown") {
    return /* @__PURE__ */ jsxs("div", { "data-slot": "language-selector", className: cn("relative inline-block", className), ...props, children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setOpen(!open),
          className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent transition-colors",
          children: [
            selectedOption?.label ?? "Select",
            /* @__PURE__ */ jsx("svg", { className: "h-3 w-3 opacity-50", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) })
          ]
        }
      ),
      open && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 mt-1 min-w-[120px] rounded-md border border-border bg-background shadow-md z-50", children: options.map((opt) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            onChange?.(opt.id);
            setOpen(false);
          },
          className: cn(
            "block w-full text-left px-3 py-1.5 text-sm hover:bg-accent transition-colors",
            opt.id === selected && "bg-accent font-medium"
          ),
          children: opt.label
        },
        opt.id
      )) })
    ] });
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "language-selector",
      className: cn("flex items-center gap-1", className),
      ...props,
      children: options.map((opt) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => onChange?.(opt.id),
          className: cn(
            "px-3 py-1.5 text-sm rounded-md transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            opt.id === selected ? "font-semibold text-foreground underline underline-offset-4 decoration-primary decoration-2" : "text-muted-foreground"
          ),
          children: opt.label
        },
        opt.id
      ))
    }
  );
}
var Textarea = React11.forwardRef(
  ({ className, label, error, helperText, resize = "vertical", maxLength, ...props }, ref) => {
    const [length, setLength] = React11.useState(0);
    const id = React11.useId();
    const inputId = props.id || id;
    return /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
      label && /* @__PURE__ */ jsx("label", { htmlFor: inputId, className: "text-sm font-medium", children: label }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ref,
          id: inputId,
          maxLength,
          "aria-invalid": error ? true : void 0,
          className: cn(
            "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
            resize === "none" && "resize-none",
            resize === "vertical" && "resize-y",
            resize === "both" && "resize",
            className
          ),
          onChange: (e) => {
            setLength(e.target.value.length);
            props.onChange?.(e);
          },
          ...props
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          error && /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive", children: error }),
          !error && helperText && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: helperText })
        ] }),
        maxLength != null && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
          length,
          "/",
          maxLength
        ] })
      ] })
    ] });
  }
);
Textarea.displayName = "Textarea";
var sizeMap2 = {
  sm: { root: "h-4 w-7", thumb: "size-3 data-[state=checked]:translate-x-3" },
  md: { root: "h-5 w-9", thumb: "size-4 data-[state=checked]:translate-x-4" },
  lg: { root: "h-6 w-11", thumb: "size-5 data-[state=checked]:translate-x-5" }
};
function Switch({ checked, onCheckedChange, label, description, disabled, size = "md", className }) {
  const id = React11.useId();
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-3", className), children: [
    /* @__PURE__ */ jsx(
      SwitchPrimitive.Root,
      {
        id,
        checked,
        onCheckedChange,
        disabled,
        className: cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          sizeMap2[size].root
        ),
        children: /* @__PURE__ */ jsx(
          SwitchPrimitive.Thumb,
          {
            className: cn(
              "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
              sizeMap2[size].thumb
            )
          }
        )
      }
    ),
    (label || description) && /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      label && /* @__PURE__ */ jsx("label", { htmlFor: id, className: cn("text-sm font-medium select-none", disabled && "opacity-50 cursor-not-allowed"), children: label }),
      description && /* @__PURE__ */ jsx("p", { className: cn("text-xs text-muted-foreground", disabled && "opacity-50"), children: description })
    ] })
  ] });
}
function RadioGroup({ value, onValueChange, options, orientation = "vertical", disabled, className }) {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    {
      value,
      onValueChange,
      disabled,
      orientation,
      className: cn(
        "flex gap-3",
        orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
        className
      ),
      children: options.map((option) => {
        const id = `radio-${option.value}`;
        return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(
            RadioGroupPrimitive.Item,
            {
              id,
              value: option.value,
              className: cn(
                "mt-0.5 size-4 shrink-0 rounded-full border border-primary shadow-xs transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "data-[state=checked]:border-primary"
              ),
              children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "block size-2 rounded-full bg-primary" }) })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: id, className: cn("text-sm select-none", disabled && "opacity-50 cursor-not-allowed"), children: option.label }),
            option.description && /* @__PURE__ */ jsx("p", { className: cn("text-xs text-muted-foreground", disabled && "opacity-50"), children: option.description })
          ] })
        ] }, option.value);
      })
    }
  );
}
var DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var MONTHS_SHORT = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function formatDate(d) {
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
function parseFlexibleDate(input) {
  const text = input.trim();
  if (!text) return null;
  const isoMatch = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (isoMatch) {
    const d = new Date(+isoMatch[1], +isoMatch[2] - 1, +isoMatch[3]);
    if (!isNaN(d.getTime())) return d;
  }
  const dmy = text.match(/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4})$/);
  if (dmy) {
    const d = new Date(+dmy[3], +dmy[2] - 1, +dmy[1]);
    if (!isNaN(d.getTime())) return d;
  }
  const lower = text.toLowerCase().replace(",", "");
  const parts = lower.split(/\s+/);
  if (parts.length >= 2) {
    let monthIdx = -1;
    const fullIdx = MONTHS.findIndex((m) => m.toLowerCase() === parts[0]);
    if (fullIdx !== -1) monthIdx = fullIdx;
    if (monthIdx === -1) {
      const shortIdx = MONTHS_SHORT.findIndex((m) => parts[0].startsWith(m));
      if (shortIdx !== -1) monthIdx = shortIdx;
    }
    if (monthIdx !== -1) {
      const day = parseInt(parts[1], 10);
      const year = parts[2] ? parseInt(parts[2], 10) : (/* @__PURE__ */ new Date()).getFullYear();
      if (!isNaN(day) && !isNaN(year) && day >= 1 && day <= 31) {
        const d = new Date(year, monthIdx, day);
        if (!isNaN(d.getTime())) return d;
      }
    }
  }
  const fallback = new Date(text);
  if (!isNaN(fallback.getTime())) return fallback;
  return null;
}
function CalendarGrid({
  value,
  onChange,
  minDate,
  maxDate
}) {
  const today = /* @__PURE__ */ new Date();
  const [viewYear, setViewYear] = React11.useState(value?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = React11.useState(value?.getMonth() ?? today.getMonth());
  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
  const prev = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else setViewMonth(viewMonth - 1);
  };
  const next = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else setViewMonth(viewMonth + 1);
  };
  const isDisabled = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    if (minDate && d < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true;
    if (maxDate && d > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true;
    return false;
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-3 w-64", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: prev, className: "p-1 rounded hover:bg-muted transition-colors", children: /* @__PURE__ */ jsx(ChevronLeft, { className: "size-4" }) }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
        MONTHS[viewMonth],
        " ",
        viewYear
      ] }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: next, className: "p-1 rounded hover:bg-muted transition-colors", children: /* @__PURE__ */ jsx(ChevronRight, { className: "size-4" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-7 gap-0 text-center", children: [
      DAYS.map((d) => /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground py-1 font-medium", children: d }, d)),
      Array.from({ length: firstDow }).map((_, i) => /* @__PURE__ */ jsx("div", {}, `e-${i}`)),
      Array.from({ length: daysInMonth }).map((_, i) => {
        const day = i + 1;
        const date = new Date(viewYear, viewMonth, day);
        const selected = value && isSameDay(value, date);
        const isToday = isSameDay(today, date);
        const disabled = isDisabled(day);
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            disabled,
            onClick: () => onChange(date),
            className: cn(
              "text-sm rounded-md py-1 transition-colors",
              "hover:bg-muted disabled:opacity-30 disabled:pointer-events-none",
              selected && "bg-primary text-primary-foreground hover:bg-primary/90",
              !selected && isToday && "border border-primary/50"
            ),
            children: day
          },
          day
        );
      })
    ] })
  ] });
}
function DatePicker({
  value,
  onChange,
  label,
  error: errorProp,
  placeholder = "Pick a date",
  minDate,
  maxDate,
  disabled,
  className,
  allowTextInput = true
}) {
  const [open, setOpen] = React11.useState(false);
  const [textValue, setTextValue] = React11.useState("");
  const [parseError, setParseError] = React11.useState(null);
  const [isEditing, setIsEditing] = React11.useState(false);
  const id = React11.useId();
  const error = errorProp ?? parseError ?? void 0;
  React11.useEffect(() => {
    if (!isEditing) {
      setTextValue(value ? formatDate(value) : "");
    }
  }, [value, isEditing]);
  const handleTextBlur = () => {
    setIsEditing(false);
    if (!textValue.trim()) {
      setParseError(null);
      onChange?.(void 0);
      return;
    }
    const parsed = parseFlexibleDate(textValue);
    if (parsed) {
      if (minDate && parsed < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) {
        setParseError("Date is before minimum allowed date");
        return;
      }
      if (maxDate && parsed > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) {
        setParseError("Date is after maximum allowed date");
        return;
      }
      setParseError(null);
      onChange?.(parsed);
    } else {
      setParseError("Invalid date format");
    }
  };
  if (allowTextInput) {
    return /* @__PURE__ */ jsxs("div", { className: cn("space-y-1.5", className), children: [
      label && /* @__PURE__ */ jsx("label", { htmlFor: id, className: "text-sm font-medium", children: label }),
      /* @__PURE__ */ jsxs(Popover.Root, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id,
              type: "text",
              disabled,
              "aria-invalid": error ? true : void 0,
              placeholder,
              value: isEditing ? textValue : value ? formatDate(value) : textValue,
              onChange: (e) => {
                setIsEditing(true);
                setTextValue(e.target.value);
                setParseError(null);
              },
              onFocus: () => setIsEditing(true),
              onBlur: handleTextBlur,
              className: cn(
                "flex items-center border-input h-9 w-full rounded-md border bg-transparent pl-9 pr-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
                "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              )
            }
          ),
          /* @__PURE__ */ jsx(Popover.Trigger, { asChild: true, children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              disabled,
              tabIndex: -1,
              className: "absolute left-2 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-muted transition-colors text-muted-foreground",
              children: /* @__PURE__ */ jsx(Calendar, { className: "size-4" })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(Popover.Portal, { children: /* @__PURE__ */ jsx(
          Popover.Content,
          {
            align: "start",
            sideOffset: 4,
            className: "z-50 rounded-lg border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
            onOpenAutoFocus: (e) => e.preventDefault(),
            children: /* @__PURE__ */ jsx(
              CalendarGrid,
              {
                value,
                onChange: (d) => {
                  setParseError(null);
                  setIsEditing(false);
                  onChange?.(d);
                  setOpen(false);
                },
                minDate,
                maxDate
              }
            )
          }
        ) })
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive", children: error })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-1.5", className), children: [
    label && /* @__PURE__ */ jsx("label", { htmlFor: id, className: "text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxs(Popover.Root, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(Popover.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs(
        "button",
        {
          id,
          type: "button",
          disabled,
          "aria-invalid": error ? true : void 0,
          className: cn(
            "flex items-center gap-2 border-input h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
            "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            !value && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ jsx(Calendar, { className: "size-4 shrink-0 text-muted-foreground" }),
            /* @__PURE__ */ jsx("span", { className: "truncate", children: value ? formatDate(value) : placeholder })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(Popover.Portal, { children: /* @__PURE__ */ jsx(
        Popover.Content,
        {
          align: "start",
          sideOffset: 4,
          className: "z-50 rounded-lg border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
          children: /* @__PURE__ */ jsx(
            CalendarGrid,
            {
              value,
              onChange: (d) => {
                onChange?.(d);
                setOpen(false);
              },
              minDate,
              maxDate
            }
          )
        }
      ) })
    ] }),
    error && /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive", children: error })
  ] });
}
function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function FileUpload({ onFiles, accept, maxFiles, maxSizeMB, label, description, disabled, className }) {
  const [files, setFiles] = React11.useState([]);
  const [dragOver, setDragOver] = React11.useState(false);
  const inputRef = React11.useRef(null);
  const addFiles = (incoming) => {
    if (!incoming) return;
    let arr = Array.from(incoming);
    if (accept) {
      const types = accept.split(",").map((t) => t.trim());
      arr = arr.filter((f) => types.some((t) => {
        if (t.startsWith(".")) return f.name.toLowerCase().endsWith(t.toLowerCase());
        if (t.endsWith("/*")) return f.type.startsWith(t.replace("/*", "/"));
        return f.type === t;
      }));
    }
    if (maxSizeMB) arr = arr.filter((f) => f.size <= maxSizeMB * 1024 * 1024);
    const next = [...files, ...arr];
    const limited = maxFiles ? next.slice(0, maxFiles) : next;
    setFiles(limited);
    onFiles?.(limited);
  };
  const removeFile = (index) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFiles?.(next);
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-1.5", className), children: [
    label && /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        role: "button",
        tabIndex: disabled ? -1 : 0,
        onClick: () => !disabled && inputRef.current?.click(),
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        },
        onDragOver: (e) => {
          e.preventDefault();
          if (!disabled) setDragOver(true);
        },
        onDragLeave: () => setDragOver(false),
        onDrop: (e) => {
          e.preventDefault();
          setDragOver(false);
          if (!disabled) addFiles(e.dataTransfer.files);
        },
        className: cn(
          "flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-8 transition-colors cursor-pointer",
          "border-input text-muted-foreground hover:border-ring hover:bg-muted/50",
          dragOver && "border-primary bg-primary/5",
          disabled && "pointer-events-none opacity-50"
        ),
        children: [
          /* @__PURE__ */ jsx(Upload, { className: "size-8" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Drag files here or click to browse" }),
          description && /* @__PURE__ */ jsx("p", { className: "text-xs", children: description }),
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputRef,
              type: "file",
              accept,
              multiple: maxFiles !== 1,
              className: "hidden",
              onChange: (e) => addFiles(e.target.files)
            }
          )
        ]
      }
    ),
    files.length > 0 && /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: files.map((f, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center justify-between rounded-md border px-3 py-1.5 text-sm", children: [
      /* @__PURE__ */ jsxs("span", { className: "truncate", children: [
        f.name,
        " ",
        /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
          "(",
          formatSize(f.size),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => removeFile(i), className: "ml-2 p-0.5 rounded hover:bg-muted transition-colors", children: /* @__PURE__ */ jsx(X, { className: "size-3.5" }) })
    ] }, `${f.name}-${i}`)) })
  ] });
}
function ExpandableTabs({
  tabs,
  activeTab,
  onTabChange,
  className
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-background/80 backdrop-blur-sm p-1",
        className
      ),
      children: tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return /* @__PURE__ */ jsxs(
          motion.button,
          {
            layout: true,
            onClick: () => onTabChange(tab.id),
            className: cn(
              "relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium cursor-pointer",
              "transition-colors duration-200 outline-none",
              isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            ),
            transition: { type: "spring", stiffness: 400, damping: 30 },
            children: [
              isActive && /* @__PURE__ */ jsx(
                motion.div,
                {
                  layoutId: "expandable-tab-bg",
                  className: "absolute inset-0 rounded-full bg-foreground",
                  transition: { type: "spring", stiffness: 400, damping: 30 }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "relative z-10 flex items-center justify-center h-4 w-4 shrink-0", children: tab.icon }),
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isActive && /* @__PURE__ */ jsx(
                motion.span,
                {
                  className: "relative z-10 whitespace-nowrap overflow-hidden",
                  initial: { width: 0, opacity: 0 },
                  animate: { width: "auto", opacity: 1 },
                  exit: { width: 0, opacity: 0 },
                  transition: { type: "spring", stiffness: 400, damping: 30 },
                  children: tab.label
                }
              ) })
            ]
          },
          tab.id
        );
      })
    }
  );
}
var defaultPost = {
  title: "The Future of UI Design",
  description: "Exploring the latest trends in glassmorphism, 3D elements, and micro-interactions.",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  author: {
    name: "Moumen Soliman",
    avatar: "https://github.com/shadcn.png"
  },
  date: "Dec 2, 2025",
  readingTime: "5 min read",
  tags: ["Design", "UI/UX"]
};
function GlassCard({
  title = defaultPost.title,
  description = defaultPost.description,
  image = defaultPost.image,
  author = defaultPost.author,
  date = defaultPost.date,
  readingTime = defaultPost.readingTime,
  tags = defaultPost.tags,
  onCardClick,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      onClick: onCardClick,
      className: cn("w-full max-w-[400px] cursor-pointer", className),
      ...props,
      children: /* @__PURE__ */ jsxs("div", { className: "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/9] overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            motion.img,
            {
              src: image,
              alt: title,
              className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-3 flex gap-2", children: tags?.map((tag, index) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white",
              children: tag
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: "flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25",
              children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4" }),
                "Read Article"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 p-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold leading-tight tracking-tight text-white transition-colors group-hover:text-white/90", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm text-white/70", children: description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-white/20 pt-4", children: [
            author && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 border border-white/20", children: [
                /* @__PURE__ */ jsx(AvatarImage, { src: author.avatar, alt: author.name }),
                /* @__PURE__ */ jsx(AvatarFallback, { children: author.name[0] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-xs", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: author.name }),
                date && /* @__PURE__ */ jsx("span", { className: "text-white/70", children: date })
              ] })
            ] }),
            readingTime && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-xs text-white/70", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsx("span", { children: readingTime })
            ] })
          ] })
        ] })
      ] })
    }
  );
}
function Dialog({ ...props }) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ jsx(XIcon, {}),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
var Sheet = DialogPrimitive.Root;
var SheetTrigger = DialogPrimitive.Trigger;
var SheetClose = DialogPrimitive.Close;
var SheetPortal = DialogPrimitive.Portal;
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    {
      className: cn(
        "fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
var sheetContentVariants = cva(
  "fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-md",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
function SheetContent({
  side = "right",
  showCloseButton = true,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        className: cn(sheetContentVariants({ side }), className),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("flex flex-col space-y-2 px-6 py-4 border-b border-border", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 px-6 py-4 border-t border-border bg-muted/20",
        className
      ),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    {
      className: cn("text-lg font-semibold text-foreground tracking-tight", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    {
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
var Popover2 = Popover.Root;
var PopoverTrigger = Popover.Trigger;
var PopoverAnchor = Popover.Anchor;
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(Popover.Portal, { children: /* @__PURE__ */ jsx(
    Popover.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...props });
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className),
      ...props
    }
  );
}
function DropdownMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}
function Command({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$1,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props
    }
  );
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(Dialog, { ...props, children: [
    /* @__PURE__ */ jsxs(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: title }),
      /* @__PURE__ */ jsx(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsx(DialogContent, { className: cn("overflow-hidden p-0", className), showCloseButton, children: /* @__PURE__ */ jsx(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) })
  ] });
}
function CommandInput({ className, ...props }) {
  return /* @__PURE__ */ jsxs("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [
    /* @__PURE__ */ jsx(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ jsx(
      Command$1.Input,
      {
        "data-slot": "command-input",
        className: cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    )
  ] });
}
function CommandList({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$1.List,
    {
      "data-slot": "command-list",
      className: cn("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className),
      ...props
    }
  );
}
function CommandEmpty({ ...props }) {
  return /* @__PURE__ */ jsx(Command$1.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...props });
}
function CommandGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$1.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Command$1.Separator,
    {
      "data-slot": "command-separator",
      className: cn("bg-border -mx-1 h-px", className),
      ...props
    }
  );
}
function CommandItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$1.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function CommandShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "command-shortcut",
      className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className),
      ...props
    }
  );
}
function AppShell({
  sidebar,
  header,
  sidebarWidth = 240,
  sidebarCollapsed = false,
  collapsedWidth = 64,
  className,
  children,
  ...props
}) {
  const currentWidth = sidebarCollapsed ? collapsedWidth : sidebarWidth;
  return /* @__PURE__ */ jsxs("div", { className: cn("flex min-h-screen", className), ...props, children: [
    sidebar && /* @__PURE__ */ jsx(
      "aside",
      {
        style: { width: currentWidth },
        className: "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-border bg-background transition-[width] duration-200",
        children: sidebar
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-1 flex-col",
        style: { marginLeft: sidebar ? currentWidth : 0 },
        children: [
          header,
          /* @__PURE__ */ jsx("main", { className: "flex-1", children })
        ]
      }
    )
  ] });
}
var easeOut = [0.25, 0.1, 0.25, 1];
var springNav = { type: "spring", stiffness: 400, damping: 25 };
var springActive = { type: "spring", stiffness: 500, damping: 30 };
function isSeparator(item) {
  return "type" in item && item.type === "separator";
}
function findActiveParentIds(items, activeId, path = []) {
  for (const item of items) {
    if (item.id === activeId) return path;
    if (item.children) {
      const result = findActiveParentIds(item.children, activeId, [
        ...path,
        item.id
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
}) {
  const [expandedIds, setExpandedIds] = React11.useState(/* @__PURE__ */ new Set());
  React11.useEffect(() => {
    if (!activeItemId) return;
    const navItems = items.filter((i) => !isSeparator(i));
    const parentIds = findActiveParentIds(navItems, activeItemId);
    if (parentIds && parentIds.length > 0) {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        parentIds.forEach((id) => next.add(id));
        return next;
      });
    }
  }, [activeItemId, items]);
  const toggleExpanded = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const renderNavItem = (item, depth = 0, index = 0) => {
    const isActive = activeItemId === item.id;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedIds.has(item.id);
    const isChild = depth > 0;
    const content = /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: cn(
          "relative flex items-center gap-3 px-3 text-sm cursor-pointer rounded-sm",
          isChild ? "h-8 text-xs" : "h-10",
          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        ),
        style: isChild ? { paddingLeft: `${12 + depth * 16}px` } : void 0,
        whileHover: { x: 2 },
        whileTap: { scale: 0.98 },
        transition: springNav,
        onClick: (e) => {
          if (hasChildren) {
            e.preventDefault();
            e.stopPropagation();
            toggleExpanded(item.id);
          }
          onItemClick?.(item);
        },
        children: [
          isActive && !isChild && /* @__PURE__ */ jsx(
            motion.div,
            {
              layoutId: "activeNav",
              className: "absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-primary",
              transition: springActive
            }
          ),
          isActive && /* @__PURE__ */ jsx(
            motion.div,
            {
              layoutId: isChild ? void 0 : "activeNavBg",
              className: "absolute inset-0 bg-accent/50 rounded-sm",
              initial: false,
              transition: springActive
            }
          ),
          isActive && isChild && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0 },
              animate: { opacity: 1, scale: 1 },
              className: "absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary",
              style: { left: `${4 + depth * 16}px` }
            }
          ),
          item.icon && /* @__PURE__ */ jsx(
            motion.span,
            {
              className: "relative z-10 shrink-0 [&_svg]:h-4 [&_svg]:w-4",
              animate: { scale: isActive ? 1.05 : 1 },
              transition: springNav,
              children: item.icon
            }
          ),
          !collapsed && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0, x: -8 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -8 },
                transition: { duration: 0.15, delay: index * 0.02 },
                className: "relative z-10 flex-1 truncate",
                children: item.label
              }
            ),
            item.badge && /* @__PURE__ */ jsx("span", { className: "relative z-10 shrink-0", children: item.badge }),
            hasChildren && /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { rotate: isExpanded ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "relative z-10",
                children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ]
      }
    );
    const wrappedContent = hasChildren ? content : item.href && renderLink ? renderLink({ href: item.href, className: "block", children: content }) : item.href ? /* @__PURE__ */ jsx("a", { href: item.href, className: "block", children: content }) : content;
    return /* @__PURE__ */ jsxs("li", { children: [
      wrappedContent,
      hasChildren && /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isExpanded && !collapsed && /* @__PURE__ */ jsx(
        motion.ul,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.2, ease: easeOut },
          className: "overflow-hidden",
          children: item.children.map(
            (child, i) => renderNavItem(child, depth + 1, i)
          )
        }
      ) })
    ] }, item.id);
  };
  return /* @__PURE__ */ jsxs(
    motion.aside,
    {
      initial: false,
      animate: { width: collapsed ? 64 : 240 },
      transition: { duration: 0.2, ease: easeOut },
      className: cn("flex h-full flex-col", className),
      ...props,
      children: [
        logo && /* @__PURE__ */ jsx("div", { className: "flex h-14 items-center border-b border-border px-3", children: logo }),
        /* @__PURE__ */ jsx("nav", { className: "flex-1 overflow-y-auto py-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-0.5 px-2", children: items.map(
          (item, idx) => isSeparator(item) ? /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("hr", { className: "my-3 border-border" }) }, `sep-${idx}`) : renderNavItem(item, 0, idx)
        ) }) }),
        footer && /* @__PURE__ */ jsx("div", { className: "border-t border-border p-2", children: footer }),
        onToggle && /* @__PURE__ */ jsx("div", { className: "border-t border-border p-2", children: /* @__PURE__ */ jsxs(
          motion.button,
          {
            onClick: onToggle,
            className: cn(
              "flex h-10 w-full items-center gap-3 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground",
              collapsed && "justify-center"
            ),
            whileHover: { backgroundColor: "rgba(0,0,0,0.03)" },
            whileTap: { scale: 0.98 },
            children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { rotate: collapsed ? 180 : 0 },
                  transition: { duration: 0.2 },
                  children: collapsed ? /* @__PURE__ */ jsx(PanelLeft, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(PanelLeftClose, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: !collapsed && /* @__PURE__ */ jsx(
                motion.span,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.1 },
                  children: "Collapse"
                }
              ) })
            ]
          }
        ) })
      ]
    }
  );
}
function Header({ left, right, className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn(
        "sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/80 backdrop-blur-sm px-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: left }),
        children,
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: right })
      ]
    }
  );
}
function PageHeader({
  title,
  description,
  actions,
  breadcrumbs,
  renderLink,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-2 pb-6", className), ...props, children: [
    breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ jsx("nav", { className: "flex items-center gap-1 text-sm text-muted-foreground", children: breadcrumbs.map((crumb, i) => /* @__PURE__ */ jsxs(React11.Fragment, { children: [
      i > 0 && /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3" }),
      crumb.href && renderLink ? renderLink({
        href: crumb.href,
        className: "hover:text-foreground transition-colors",
        children: crumb.label
      }) : crumb.href ? /* @__PURE__ */ jsx("a", { href: crumb.href, className: "hover:text-foreground transition-colors", children: crumb.label }) : /* @__PURE__ */ jsx("span", { className: "text-foreground", children: crumb.label })
    ] }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-2xl", children: description })
      ] }),
      actions && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 shrink-0", children: actions })
    ] })
  ] });
}
function getInitials2(name) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}
function GuidedPanel({ user, step, title, description, context, action, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("w-80 border-l border-border bg-card p-6 space-y-5 overflow-y-auto", className), children: [
    user && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      user.avatar ? /* @__PURE__ */ jsx("img", { src: user.avatar, alt: user.name, className: "size-10 rounded-full object-cover" }) : /* @__PURE__ */ jsx("div", { className: "size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium", children: getInitials2(user.name) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: user.name }),
        user.role && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: user.role })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-xs font-bold", children: step }),
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-base", children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
    ] }),
    context && context.length > 0 && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: context.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-md border bg-muted/50 p-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-1", children: item.label }),
      /* @__PURE__ */ jsx("p", { className: "text-sm", children: item.content })
    ] }, i)) }),
    action && /* @__PURE__ */ jsxs("div", { className: "rounded-md border-2 border-primary bg-primary/5 p-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-medium uppercase tracking-wider text-primary mb-1", children: "Next Action" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: action })
    ] })
  ] });
}
function BentoGrid({ className, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 w-full",
        className
      ),
      ...props,
      children
    }
  );
}
var colSpanMap = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3"
};
var rowSpanMap = {
  1: "row-span-1",
  2: "row-span-2"
};
function BentoGridItem({
  title,
  description,
  icon,
  className,
  colSpan = 1,
  rowSpan = 1,
  header,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      whileHover: { y: -2 },
      transition: { type: "spring", stiffness: 400, damping: 25 },
      className: cn(
        "rounded-xl border border-border bg-background/80 backdrop-blur-sm p-6",
        "transition-shadow duration-200 hover:shadow-lg hover:border-foreground/10",
        "flex flex-col gap-4 overflow-hidden",
        colSpanMap[colSpan],
        rowSpanMap[rowSpan],
        className
      ),
      ...props,
      children: [
        header && /* @__PURE__ */ jsx("div", { className: "w-full", children: header }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 flex-1", children: [
          (icon || title) && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            icon && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10 text-primary shrink-0", children: icon }),
            title && /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold tracking-tight text-foreground", children: title })
          ] }),
          description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: description }),
          children
        ] })
      ]
    }
  );
}
var skeletonVariants = cva("animate-pulse bg-muted", {
  variants: {
    variant: {
      text: "h-4 w-full rounded",
      circular: "rounded-full",
      rectangular: "rounded-md",
      card: "h-32 w-full rounded-lg"
    }
  },
  defaultVariants: {
    variant: "text"
  }
});
function Skeleton({ variant, width, height, className, style, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(skeletonVariants({ variant }), className),
      style: { width, height, ...style },
      ...props
    }
  );
}
function DataTable({
  columns,
  data,
  onSort,
  sortState,
  emptyMessage = "No data available",
  rowKey,
  onRowClick,
  loading = false,
  skeletonRows = 5,
  className,
  ...props
}) {
  const getCellValue = (row, col) => {
    const raw = typeof col.accessor === "function" ? col.accessor(row) : row[col.accessor];
    if (col.cell) return col.cell(raw, row);
    return raw;
  };
  const handleSort = (col) => {
    if (!col.sortable || !onSort) return;
    const newDir = sortState?.columnId === col.id ? sortState.direction === "asc" ? "desc" : sortState.direction === "desc" ? null : "asc" : "asc";
    onSort({ columnId: col.id, direction: newDir });
  };
  const SortIcon = ({ columnId }) => {
    if (sortState?.columnId !== columnId || !sortState.direction) {
      return /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3 opacity-50" });
    }
    return sortState.direction === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3" });
  };
  return /* @__PURE__ */ jsx("div", { className: cn("w-full overflow-auto", className), ...props, children: /* @__PURE__ */ jsxs("table", { className: "w-full caption-bottom text-sm", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-border", children: columns.map((col) => /* @__PURE__ */ jsx(
      "th",
      {
        className: cn(
          "h-10 px-3 text-left align-middle font-medium text-muted-foreground",
          col.sortable && "cursor-pointer select-none hover:text-foreground",
          col.className
        ),
        onClick: () => handleSort(col),
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          col.header,
          col.sortable && /* @__PURE__ */ jsx(SortIcon, { columnId: col.id })
        ] })
      },
      col.id
    )) }) }),
    /* @__PURE__ */ jsx("tbody", { children: loading ? Array.from({ length: skeletonRows }).map((_, i) => /* @__PURE__ */ jsx("tr", { className: "border-b border-border", children: columns.map((col) => /* @__PURE__ */ jsx("td", { className: cn("p-3 align-middle", col.className), children: /* @__PURE__ */ jsx(Skeleton, { variant: "text", className: "h-4 w-3/4" }) }, col.id)) }, `skeleton-${i}`)) : data.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
      "td",
      {
        colSpan: columns.length,
        className: "h-24 text-center text-muted-foreground",
        children: emptyMessage
      }
    ) }) : data.map((row, i) => /* @__PURE__ */ jsx(
      "tr",
      {
        className: cn(
          "border-b border-border transition-colors hover:bg-muted/50",
          onRowClick && "cursor-pointer"
        ),
        onClick: () => onRowClick?.(row, i),
        children: columns.map((col) => /* @__PURE__ */ jsx("td", { className: cn("p-3 align-middle", col.className), children: getCellValue(row, col) }, col.id))
      },
      rowKey ? rowKey(row, i) : i
    )) })
  ] }) });
}
function NumberTicker({
  value,
  duration = 1500,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  direction = "up"
}) {
  const ref = React11.useRef(null);
  const motionValue = useMotionValue(direction === "up" ? 0 : value);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [displayValue, setDisplayValue] = React11.useState(
    direction === "up" ? "0" : formatNumber2(value, decimals)
  );
  const rounded = useTransform(
    motionValue,
    (latest) => formatNumber2(latest, decimals)
  );
  React11.useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });
    return unsubscribe;
  }, [rounded]);
  React11.useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const controls = animate(motionValue, direction === "up" ? value : 0, {
        duration: duration / 1e3,
        ease: "easeOut"
      });
      return () => controls.stop();
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, value, duration, delay, direction, motionValue]);
  return /* @__PURE__ */ jsxs("span", { ref, className: cn("tabular-nums", className), children: [
    prefix,
    displayValue,
    suffix
  ] });
}
function formatNumber2(n, decimals) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}
function MetricsCard({
  label,
  value,
  change,
  icon,
  description,
  animated = false,
  glowing = false,
  className,
  ...props
}) {
  const card = /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "rounded-lg border border-border bg-background p-4 transition-colors hover:bg-muted/30",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: label }),
          icon && /* @__PURE__ */ jsx("span", { className: "text-muted-foreground [&_svg]:h-4 [&_svg]:w-4", children: icon })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-semibold tabular-nums", children: animated && typeof value === "number" ? /* @__PURE__ */ jsx(NumberTicker, { value }) : value }),
          change && /* @__PURE__ */ jsxs(
            "span",
            {
              className: cn(
                "flex items-center gap-0.5 text-xs font-medium",
                change.trend === "positive" && "text-emerald-600",
                change.trend === "negative" && "text-red-600",
                change.trend === "neutral" && "text-muted-foreground"
              ),
              children: [
                change.trend === "positive" && /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }),
                change.trend === "negative" && /* @__PURE__ */ jsx(TrendingDown, { className: "h-3 w-3" }),
                change.value > 0 ? "+" : "",
                change.value,
                "%"
              ]
            }
          )
        ] }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: description })
      ]
    }
  );
  if (glowing) {
    return /* @__PURE__ */ jsx(GlowingEffect, { className: "rounded-lg", children: card });
  }
  return card;
}
var defaultColorMap = {
  active: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  success: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  pending: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  warning: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  error: "bg-red-500/10 text-red-700 border-red-500/20",
  failed: "bg-red-500/10 text-red-700 border-red-500/20",
  inactive: "bg-muted text-muted-foreground border-border",
  draft: "bg-muted text-muted-foreground border-border",
  info: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  processing: "bg-violet-500/10 text-violet-700 border-violet-500/20"
};
function StatusBadge({
  status,
  label,
  colorMap,
  dot = true,
  className,
  ...props
}) {
  const colors = { ...defaultColorMap, ...colorMap };
  const colorClass = colors[status] ?? "bg-muted text-muted-foreground border-border";
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colorClass,
        className
      ),
      ...props,
      children: [
        dot && /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-current opacity-70" }),
        label ?? status
      ]
    }
  );
}
var timelineIconVariants = cva(
  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        ai: "bg-violet-500/10 text-violet-600",
        user: "bg-blue-500/10 text-blue-600",
        system: "bg-muted text-muted-foreground",
        success: "bg-emerald-500/10 text-emerald-600",
        warning: "bg-amber-500/10 text-amber-600",
        error: "bg-red-500/10 text-red-600"
      }
    },
    defaultVariants: {
      variant: "system"
    }
  }
);
function Timeline({
  events,
  maxItems,
  formatTimestamp,
  className,
  ...props
}) {
  const displayed = maxItems ? events.slice(0, maxItems) : events;
  const defaultFormat = (ts) => {
    const date = new Date(ts);
    return date.toLocaleDateString(void 0, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const fmt = formatTimestamp ?? defaultFormat;
  return /* @__PURE__ */ jsx("div", { className: cn("space-y-0", className), ...props, children: displayed.map((event, index) => /* @__PURE__ */ jsxs("div", { className: "relative flex gap-3 pb-4", children: [
    index < displayed.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-8 h-full w-px bg-border" }),
    /* @__PURE__ */ jsx("div", { className: cn(timelineIconVariants({ variant: event.variant })), children: event.icon ?? /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-current" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 pt-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: fmt(event.timestamp) }),
        event.meta
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground mt-0.5 leading-tight font-medium", children: event.title }),
      event.description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: event.description })
    ] })
  ] }, event.id)) });
}
function EmptyState({ icon, title, description, action, className, ...props }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center py-12 px-4 text-center",
        className
      ),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx("div", { className: "mb-4 text-muted-foreground [&_svg]:h-12 [&_svg]:w-12", children: icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground max-w-md", children: description }),
        action && /* @__PURE__ */ jsx("div", { className: "mt-4", children: action })
      ]
    }
  );
}
function StatCard({ value, label, onClick, highlight, color, className, animated = false, glowing = false }) {
  const Comp = onClick ? "button" : "div";
  const card = /* @__PURE__ */ jsxs(
    Comp,
    {
      onClick,
      className: cn(
        "rounded-lg border bg-card p-4 text-left transition-all",
        onClick && "cursor-pointer hover:shadow-md hover:border-primary/50",
        highlight && "border-primary bg-primary/5",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("p", { className: cn("text-2xl font-bold tabular-nums", color), style: color?.startsWith("#") ? { color } : void 0, children: animated && typeof value === "number" ? /* @__PURE__ */ jsx(NumberTicker, { value }) : value }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: label })
      ]
    }
  );
  if (glowing) {
    return /* @__PURE__ */ jsx(GlowingEffect, { className: "rounded-lg", children: card });
  }
  return card;
}
function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return /* @__PURE__ */ jsxs("div", { className: cn(
    "rounded-lg border border-border bg-popover px-3 py-2 shadow-lg",
    "text-popover-foreground text-sm"
  ), children: [
    label && /* @__PURE__ */ jsx("p", { className: "font-medium mb-1 text-xs text-muted-foreground", children: label }),
    payload.map((entry, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full shrink-0", style: { backgroundColor: entry.color } }),
      /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
        entry.name,
        ":"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "font-medium", children: typeof entry.value === "number" ? entry.value.toLocaleString() : entry.value })
    ] }, i))
  ] });
}
function ChartLegend({ payload }) {
  if (!payload?.length) return null;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-4 pt-2 text-sm", children: payload.map((entry, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full shrink-0", style: { backgroundColor: entry.color } }),
    /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: entry.value })
  ] }, i)) });
}
var defaultChartColors = [
  "var(--chart-1, hsl(220, 70%, 50%))",
  "var(--chart-2, hsl(160, 60%, 45%))",
  "var(--chart-3, hsl(30, 80%, 55%))",
  "var(--chart-4, hsl(280, 65%, 60%))",
  "var(--chart-5, hsl(340, 75%, 55%))"
];
function getColor(colors, index) {
  const c = colors?.length ? colors : defaultChartColors;
  return c[index % c.length];
}
function BarChart({
  data,
  xKey,
  yKey,
  bars,
  layout = "horizontal",
  stacked = false,
  colors,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  height = 300,
  animate: animate2 = true,
  className,
  ...props
}) {
  const resolvedBars = bars ?? (yKey ? [{ key: yKey }] : []);
  const isVertical = layout === "vertical";
  return /* @__PURE__ */ jsx("div", { className: cn("w-full", className), ...props, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs(
    BarChart$1,
    {
      data,
      layout: isVertical ? "vertical" : "horizontal",
      margin: { top: 5, right: 20, left: 0, bottom: 5 },
      children: [
        showGrid && /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border, #e5e7eb)", opacity: 0.5 }),
        isVertical ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(XAxis, { type: "number", tick: { fontSize: 12, fill: "var(--muted-foreground, #71717a)" } }),
          /* @__PURE__ */ jsx(YAxis, { dataKey: xKey, type: "category", tick: { fontSize: 12, fill: "var(--muted-foreground, #71717a)" }, width: 80 })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(XAxis, { dataKey: xKey, tick: { fontSize: 12, fill: "var(--muted-foreground, #71717a)" } }),
          /* @__PURE__ */ jsx(YAxis, { tick: { fontSize: 12, fill: "var(--muted-foreground, #71717a)" } })
        ] }),
        showTooltip && /* @__PURE__ */ jsx(Tooltip$1, { content: /* @__PURE__ */ jsx(ChartTooltip, {}) }),
        showLegend && /* @__PURE__ */ jsx(Legend, { content: /* @__PURE__ */ jsx(ChartLegend, {}) }),
        resolvedBars.map((bar, i) => /* @__PURE__ */ jsx(
          Bar,
          {
            dataKey: bar.key,
            name: bar.label ?? bar.key,
            fill: bar.color ?? getColor(colors, i),
            stackId: stacked ? "stack" : void 0,
            radius: [4, 4, 0, 0],
            isAnimationActive: animate2
          },
          bar.key
        ))
      ]
    }
  ) }) });
}
function LineChart({
  data,
  xKey,
  lines,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  height = 300,
  animate: animate2 = true,
  curved = true,
  colors,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("w-full", className), ...props, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs(LineChart$1, { data, margin: { top: 5, right: 20, left: 0, bottom: 5 }, children: [
    showGrid && /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border, #e5e7eb)", opacity: 0.5 }),
    /* @__PURE__ */ jsx(XAxis, { dataKey: xKey, tick: { fontSize: 12, fill: "var(--muted-foreground, #71717a)" } }),
    /* @__PURE__ */ jsx(YAxis, { tick: { fontSize: 12, fill: "var(--muted-foreground, #71717a)" } }),
    showTooltip && /* @__PURE__ */ jsx(Tooltip$1, { content: /* @__PURE__ */ jsx(ChartTooltip, {}) }),
    showLegend && /* @__PURE__ */ jsx(Legend, { content: /* @__PURE__ */ jsx(ChartLegend, {}) }),
    lines.map((line, i) => {
      const color = line.color ?? getColor(colors, i);
      return /* @__PURE__ */ jsx(
        Line,
        {
          type: curved ? "monotone" : "linear",
          dataKey: line.key,
          name: line.label ?? line.key,
          stroke: color,
          strokeWidth: 2,
          strokeDasharray: line.dashed ? "5 5" : void 0,
          dot: false,
          activeDot: { r: 4, strokeWidth: 0 },
          isAnimationActive: animate2
        },
        line.key
      );
    })
  ] }) }) });
}
function AreaChart({
  data,
  xKey,
  areas,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  height = 300,
  animate: animate2 = true,
  curved = true,
  colors,
  stacked = false,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("w-full", className), ...props, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs(AreaChart$1, { data, margin: { top: 5, right: 20, left: 0, bottom: 5 }, children: [
    /* @__PURE__ */ jsx("defs", { children: areas.map((area, i) => {
      const color = area.color ?? getColor(colors, i);
      return /* @__PURE__ */ jsxs("linearGradient", { id: `gradient-${area.key}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: color, stopOpacity: 0.3 }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: color, stopOpacity: 0.02 })
      ] }, area.key);
    }) }),
    showGrid && /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border, #e5e7eb)", opacity: 0.5 }),
    /* @__PURE__ */ jsx(XAxis, { dataKey: xKey, tick: { fontSize: 12, fill: "var(--muted-foreground, #71717a)" } }),
    /* @__PURE__ */ jsx(YAxis, { tick: { fontSize: 12, fill: "var(--muted-foreground, #71717a)" } }),
    showTooltip && /* @__PURE__ */ jsx(Tooltip$1, { content: /* @__PURE__ */ jsx(ChartTooltip, {}) }),
    showLegend && /* @__PURE__ */ jsx(Legend, { content: /* @__PURE__ */ jsx(ChartLegend, {}) }),
    areas.map((area, i) => {
      const color = area.color ?? getColor(colors, i);
      return /* @__PURE__ */ jsx(
        Area,
        {
          type: curved ? "monotone" : "linear",
          dataKey: area.key,
          name: area.label ?? area.key,
          stroke: color,
          strokeWidth: 2,
          fill: `url(#gradient-${area.key})`,
          stackId: stacked ? "stack" : void 0,
          strokeDasharray: area.dashed ? "5 5" : void 0,
          dot: false,
          activeDot: { r: 4, strokeWidth: 0 },
          isAnimationActive: animate2
        },
        area.key
      );
    })
  ] }) }) });
}
function PieChart({
  data,
  donut = false,
  showLabels = false,
  showLegend = true,
  showTooltip = true,
  innerRadius,
  height = 300,
  animate: animate2 = true,
  colors,
  className,
  ...props
}) {
  const resolvedInner = innerRadius ?? (donut ? 60 : 0);
  return /* @__PURE__ */ jsx("div", { className: cn("w-full", className), ...props, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs(PieChart$1, { children: [
    /* @__PURE__ */ jsx(
      Pie,
      {
        data,
        cx: "50%",
        cy: "50%",
        innerRadius: resolvedInner,
        outerRadius: "80%",
        paddingAngle: 2,
        dataKey: "value",
        nameKey: "name",
        isAnimationActive: animate2,
        label: showLabels ? ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%` : false,
        labelLine: showLabels,
        children: data.map((entry, i) => /* @__PURE__ */ jsx(Cell, { fill: entry.color ?? getColor(colors, i) }, i))
      }
    ),
    showTooltip && /* @__PURE__ */ jsx(Tooltip$1, { content: /* @__PURE__ */ jsx(ChartTooltip, {}) }),
    showLegend && /* @__PURE__ */ jsx(Legend, { content: /* @__PURE__ */ jsx(ChartLegend, {}) })
  ] }) }) });
}
function Sparkline({
  data,
  width = 120,
  height = 32,
  color = "var(--primary, #18181b)",
  filled = false,
  className,
  ...props
}) {
  const chartData = data.map((v, i) => ({ i, v }));
  return /* @__PURE__ */ jsx("div", { className: cn("inline-block", className), style: { width, height }, ...props, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(AreaChart$1, { data: chartData, margin: { top: 2, right: 2, left: 2, bottom: 2 }, children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: `spark-${color}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: color, stopOpacity: filled ? 0.3 : 0 }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: color, stopOpacity: 0 })
    ] }) }),
    /* @__PURE__ */ jsx(
      Area,
      {
        type: "monotone",
        dataKey: "v",
        stroke: color,
        strokeWidth: 1.5,
        fill: `url(#spark-${color})`,
        dot: false,
        isAnimationActive: false
      }
    )
  ] }) }) });
}
function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className,
  gap = 16,
  ...props
}) {
  const animationDirection = direction === "left" ? "normal" : "reverse";
  const duration = `${1e3 / speed * 10}s`;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("overflow-hidden relative w-full", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
            @keyframes sapira-marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `
            }
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "flex w-max",
              pauseOnHover && "hover:[animation-play-state:paused]"
            ),
            style: {
              animation: `sapira-marquee ${duration} linear infinite`,
              animationDirection,
              gap: `${gap}px`
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex shrink-0", style: { gap: `${gap}px` }, children }),
              /* @__PURE__ */ jsx("div", { className: "flex shrink-0", style: { gap: `${gap}px` }, "aria-hidden": true, children })
            ]
          }
        )
      ]
    }
  );
}
var levelConfig = {
  error: { label: "ERR", className: "bg-red-500/15 text-red-500 border-red-500/30" },
  warn: { label: "WRN", className: "bg-amber-500/15 text-amber-500 border-amber-500/30" },
  info: { label: "INF", className: "bg-blue-500/15 text-blue-500 border-blue-500/30" },
  debug: { label: "DBG", className: "bg-gray-500/15 text-gray-400 border-gray-500/30" },
  trace: { label: "TRC", className: "bg-gray-500/10 text-gray-500 border-gray-500/20" }
};
function statusCodeColor(code) {
  if (!code) return "";
  if (code >= 500) return "text-red-500 font-semibold";
  if (code >= 400) return "text-amber-500";
  if (code >= 300) return "text-blue-400";
  if (code >= 200) return "text-emerald-500";
  return "text-muted-foreground";
}
function LogLevelBadge({ level }) {
  const cfg = levelConfig[level];
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center justify-center rounded border px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider",
        cfg.className
      ),
      children: cfg.label
    }
  );
}
function LogRow({ log }) {
  const [expanded, setExpanded] = React11.useState(false);
  const hasDetails = log.details && Object.keys(log.details).length > 0;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "tr",
      {
        onClick: () => hasDetails && setExpanded(!expanded),
        className: cn(
          "border-b border-border/50 text-sm transition-colors",
          hasDetails && "cursor-pointer hover:bg-muted/50",
          log.level === "error" && "bg-red-500/5"
        ),
        children: [
          /* @__PURE__ */ jsx("td", { className: "w-8 pl-3 py-2", children: hasDetails ? expanded ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 text-muted-foreground" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground" }) : null }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 font-mono text-xs text-muted-foreground whitespace-nowrap", children: log.timestamp }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: /* @__PURE__ */ jsx(LogLevelBadge, { level: log.level }) }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 text-xs text-muted-foreground whitespace-nowrap", children: log.service ?? "\u2014" }),
          /* @__PURE__ */ jsx("td", { className: cn("py-2 pr-3 text-xs font-mono whitespace-nowrap", statusCodeColor(log.statusCode)), children: log.statusCode ?? "\u2014" }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 truncate max-w-xs font-mono text-xs", children: log.message })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: expanded && hasDetails && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 6, className: "p-0", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "bg-muted/30 px-6 py-3 border-b border-border/50", children: [
          /* @__PURE__ */ jsx("pre", { className: "text-xs font-mono whitespace-pre-wrap text-muted-foreground overflow-auto max-h-48", children: JSON.stringify(log.details, null, 2) }),
          log.traceId && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
            "Trace ID: ",
            /* @__PURE__ */ jsx("code", { className: "text-foreground", children: log.traceId })
          ] })
        ] })
      }
    ) }) }) })
  ] });
}
function InteractiveLogsTable({
  logs,
  services,
  title,
  maxHeight = "500px",
  className,
  ...props
}) {
  const [search, setSearch] = React11.useState("");
  const [levelFilter, setLevelFilter] = React11.useState("all");
  const [serviceFilter, setServiceFilter] = React11.useState("all");
  const allServices = React11.useMemo(
    () => services ?? [...new Set(logs.map((l) => l.service).filter(Boolean))],
    [logs, services]
  );
  const filtered = React11.useMemo(() => {
    return logs.filter((log) => {
      if (levelFilter !== "all" && log.level !== levelFilter) return false;
      if (serviceFilter !== "all" && log.service !== serviceFilter) return false;
      if (search && !log.message.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [logs, levelFilter, serviceFilter, search]);
  const hasFilters = levelFilter !== "all" || serviceFilter !== "all" || search !== "";
  return /* @__PURE__ */ jsxs("div", { className: cn("rounded-xl border border-border bg-background overflow-hidden", className), ...props, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 border-b border-border px-4 py-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        title && /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold", children: title }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
          filtered.length,
          " of ",
          logs.length,
          " entries"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search logs...",
              className: "h-7 rounded-md border border-border bg-background pl-7 pr-2 text-xs focus:outline-none focus:ring-1 focus:ring-ring w-40"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            value: levelFilter,
            onChange: (e) => setLevelFilter(e.target.value),
            className: "h-7 rounded-md border border-border bg-background px-2 text-xs focus:outline-none focus:ring-1 focus:ring-ring",
            children: [
              /* @__PURE__ */ jsx("option", { value: "all", children: "All levels" }),
              Object.keys(levelConfig).map((l) => /* @__PURE__ */ jsx("option", { value: l, children: levelConfig[l].label }, l))
            ]
          }
        ),
        allServices.length > 0 && /* @__PURE__ */ jsxs(
          "select",
          {
            value: serviceFilter,
            onChange: (e) => setServiceFilter(e.target.value),
            className: "h-7 rounded-md border border-border bg-background px-2 text-xs focus:outline-none focus:ring-1 focus:ring-ring",
            children: [
              /* @__PURE__ */ jsx("option", { value: "all", children: "All services" }),
              allServices.map((s) => /* @__PURE__ */ jsx("option", { value: s, children: s }, s))
            ]
          }
        ),
        hasFilters && /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setSearch("");
              setLevelFilter("all");
              setServiceFilter("all");
            },
            className: "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 text-xs hover:bg-muted",
            children: [
              /* @__PURE__ */ jsx(X, { className: "h-3 w-3" }),
              " Clear"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-auto", style: { maxHeight }, children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
      /* @__PURE__ */ jsx("thead", { className: "sticky top-0 bg-muted/80 backdrop-blur-sm border-b border-border", children: /* @__PURE__ */ jsxs("tr", { className: "text-xs font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsx("th", { className: "w-8 pl-3 py-2" }),
        /* @__PURE__ */ jsx("th", { className: "py-2 pr-3", children: "Timestamp" }),
        /* @__PURE__ */ jsx("th", { className: "py-2 pr-3", children: "Level" }),
        /* @__PURE__ */ jsx("th", { className: "py-2 pr-3", children: "Service" }),
        /* @__PURE__ */ jsx("th", { className: "py-2 pr-3", children: "Status" }),
        /* @__PURE__ */ jsx("th", { className: "py-2 pr-3", children: "Message" })
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        filtered.map((log) => /* @__PURE__ */ jsx(LogRow, { log }, log.id)),
        filtered.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 6, className: "py-8 text-center text-sm text-muted-foreground", children: "No log entries match the current filters." }) })
      ] })
    ] }) })
  ] });
}
function PillLabel({ label, color, active }) {
  return /* @__PURE__ */ jsx(
    motion.button,
    {
      layout: true,
      className: cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium transition-colors whitespace-nowrap",
        active ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"
      ),
      style: active && color ? { backgroundColor: color, color: "#fff" } : void 0,
      children: label
    }
  );
}
function StackedImageCards({ images, activeIndex }) {
  return /* @__PURE__ */ jsx("div", { className: "relative h-64 w-full sm:h-80", children: images.map((img, i) => {
    const offset = i - activeIndex;
    const isActive = i === activeIndex;
    const behind1 = Math.abs(offset) === 1;
    const behind2 = Math.abs(offset) === 2;
    const visible = isActive || behind1 || behind2;
    if (!visible) return null;
    const scale = isActive ? 1 : behind1 ? 0.92 : 0.84;
    const y = isActive ? 0 : behind1 ? 12 : 24;
    const opacity = isActive ? 1 : behind1 ? 0.6 : 0.3;
    const zIndex = isActive ? 30 : behind1 ? 20 : 10;
    return /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { scale, y, opacity, zIndex },
        transition: { type: "spring", stiffness: 300, damping: 30 },
        className: "absolute inset-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-lg",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: img,
            alt: "",
            className: "h-full w-full object-cover",
            loading: "eager"
          }
        )
      },
      i
    );
  }) });
}
function FeatureCarousel({
  items,
  autoPlay = 4e3,
  showArrows = true,
  className,
  ...props
}) {
  const [active, setActive] = React11.useState(0);
  const total = items.length;
  React11.useEffect(() => {
    if (!autoPlay || autoPlay <= 0) return;
    const timer = setInterval(() => {
      setActive((prev2) => (prev2 + 1) % total);
    }, autoPlay);
    return () => clearInterval(timer);
  }, [autoPlay, total]);
  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);
  const current = items[active];
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-6", className), ...props, children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-2 justify-center", children: items.map((item, i) => /* @__PURE__ */ jsx("div", { onClick: () => setActive(i), children: /* @__PURE__ */ jsx(PillLabel, { label: item.label, color: item.color, active: i === active }) }, item.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          transition: { duration: 0.3 },
          className: "space-y-3",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold tracking-tight", children: current.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: current.description })
          ]
        },
        current.id
      ) }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        StackedImageCards,
        {
          images: items.map((i) => i.image),
          activeIndex: active
        }
      ) })
    ] }),
    showArrows && total > 1 && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prev,
          className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
        active + 1,
        " / ",
        total
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: next,
          className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
        }
      )
    ] })
  ] });
}
var NODE_WIDTH = 200;
var NODE_HEIGHT = 100;
var nodeTemplates = [
  {
    type: "trigger",
    title: "Webhook",
    description: "Receive data from external service",
    icon: Webhook,
    color: "emerald"
  },
  {
    type: "action",
    title: "Database Query",
    description: "Fetch user records",
    icon: Database,
    color: "blue"
  },
  {
    type: "condition",
    title: "Condition",
    description: "Check user status",
    icon: Settings,
    color: "amber"
  },
  {
    type: "action",
    title: "Send Email",
    description: "Notify user",
    icon: Mail,
    color: "purple"
  },
  {
    type: "action",
    title: "Log Event",
    description: "Record activity",
    icon: Zap,
    color: "indigo"
  }
];
var initialNodes = [
  {
    id: "node-1",
    type: "trigger",
    title: "Webhook",
    description: "Receive data from external service",
    icon: Webhook,
    color: "emerald",
    position: { x: 50, y: 100 }
  },
  {
    id: "node-2",
    type: "action",
    title: "Database Query",
    description: "Fetch user records",
    icon: Database,
    color: "blue",
    position: { x: 300, y: 100 }
  },
  {
    id: "node-3",
    type: "condition",
    title: "Condition",
    description: "Check user status",
    icon: Settings,
    color: "amber",
    position: { x: 550, y: 100 }
  }
];
var initialConnections = [
  { from: "node-1", to: "node-2" },
  { from: "node-2", to: "node-3" }
];
var colorClasses = {
  emerald: "border-emerald-400/40 bg-emerald-400/10 text-emerald-400",
  blue: "border-blue-400/40 bg-blue-400/10 text-blue-400",
  amber: "border-amber-400/40 bg-amber-400/10 text-amber-400",
  purple: "border-purple-400/40 bg-purple-400/10 text-purple-400",
  indigo: "border-indigo-400/40 bg-indigo-400/10 text-indigo-400"
};
var badgeColors = {
  emerald: "bg-emerald-400/20 text-emerald-400 border-emerald-400/30",
  blue: "bg-blue-400/20 text-blue-400 border-blue-400/30",
  amber: "bg-amber-400/20 text-amber-400 border-amber-400/30",
  purple: "bg-purple-400/20 text-purple-400 border-purple-400/30",
  indigo: "bg-indigo-400/20 text-indigo-400 border-indigo-400/30"
};
var iconBg = {
  emerald: "bg-emerald-400/15",
  blue: "bg-blue-400/15",
  amber: "bg-amber-400/15",
  purple: "bg-purple-400/15",
  indigo: "bg-indigo-400/15"
};
function ConnectionSVG({
  nodes,
  connections
}) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  return /* @__PURE__ */ jsx("svg", { className: "absolute inset-0 pointer-events-none", style: { overflow: "visible" }, children: connections.map((conn) => {
    const from = nodeMap.get(conn.from);
    const to = nodeMap.get(conn.to);
    if (!from || !to) return null;
    const x1 = from.position.x + NODE_WIDTH;
    const y1 = from.position.y + NODE_HEIGHT / 2;
    const x2 = to.position.x;
    const y2 = to.position.y + NODE_HEIGHT / 2;
    const midX = (x1 + x2) / 2;
    return /* @__PURE__ */ jsx(
      "path",
      {
        d: `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.5,
        strokeDasharray: "6 4",
        className: "text-border"
      },
      `${conn.from}-${conn.to}`
    );
  }) });
}
function DraggableNode({
  node,
  onDrag
}) {
  const Icon2 = node.icon;
  const colors = colorClasses[node.color] ?? colorClasses.blue;
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      drag: true,
      dragMomentum: false,
      dragElastic: 0,
      dragTransition: { power: 0, timeConstant: 0 },
      onDrag: (_e, info) => onDrag(node.id, info),
      whileHover: { scale: 1.02 },
      className: cn(
        "absolute cursor-grab active:cursor-grabbing select-none",
        "rounded-xl border bg-background/90 backdrop-blur-sm shadow-md",
        "flex flex-col gap-2 p-4",
        colors
      ),
      style: {
        left: node.position.x,
        top: node.position.y,
        width: NODE_WIDTH,
        minHeight: NODE_HEIGHT
      },
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "inline-flex self-start items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
              badgeColors[node.color] ?? badgeColors.blue
            ),
            children: node.type
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-lg", iconBg[node.color]), children: /* @__PURE__ */ jsx(Icon2, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium truncate", children: node.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs opacity-70 truncate", children: node.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-[10px] opacity-50", children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" }),
          /* @__PURE__ */ jsx("span", { children: "CONNECTED" })
        ] })
      ]
    }
  );
}
function WorkflowBuilder({ className, ...props }) {
  const [nodes, setNodes] = useState(initialNodes);
  const [connections, setConnections] = useState(initialConnections);
  const containerRef = useRef(null);
  const handleDrag = (id, info) => {
    setNodes(
      (prev) => prev.map(
        (n) => n.id === id ? {
          ...n,
          position: {
            x: n.position.x + info.delta.x,
            y: n.position.y + info.delta.y
          }
        } : n
      )
    );
  };
  const addNode = () => {
    const template = nodeTemplates[nodes.length % nodeTemplates.length];
    const newId = `node-${Date.now()}`;
    const lastNode = nodes[nodes.length - 1];
    const newNode = {
      ...template,
      id: newId,
      position: {
        x: lastNode ? lastNode.position.x + 250 : 50,
        y: lastNode ? lastNode.position.y : 100
      }
    };
    flushSync(() => {
      setNodes((prev) => [...prev, newNode]);
      if (lastNode) {
        setConnections((prev) => [...prev, { from: lastNode.id, to: newId }]);
      }
    });
  };
  const maxX = Math.max(...nodes.map((n) => n.position.x + NODE_WIDTH + 50), 800);
  const maxY = Math.max(...nodes.map((n) => n.position.y + NODE_HEIGHT + 50), 400);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "rounded-2xl border border-border bg-background/80 backdrop-blur-sm overflow-hidden",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-emerald-400/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400", children: "Active" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Workflow Builder" })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: addNode,
              className: "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors",
              children: [
                /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
                "Add Node"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { ref: containerRef, className: "overflow-auto", style: { maxHeight: 500 }, children: /* @__PURE__ */ jsxs("div", { className: "relative", style: { width: maxX, height: maxY }, children: [
          /* @__PURE__ */ jsx(ConnectionSVG, { nodes, connections }),
          nodes.map((node) => /* @__PURE__ */ jsx(DraggableNode, { node, onDrag: handleDrag }, node.id))
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-border px-5 py-2.5 text-[10px] uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            nodes.length,
            " nodes \u2022 ",
            connections.length,
            " connections"
          ] }),
          /* @__PURE__ */ jsx("span", { children: "Drag nodes to reposition" })
        ] })
      ]
    }
  );
}
var ToastContext = React11.createContext(null);
function useToast() {
  const ctx = React11.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return { toast: ctx.addToast, dismiss: ctx.removeToast, toasts: ctx.toasts };
}
var counter = 0;
function ToastProvider({ children, defaultDuration = 5e3 }) {
  const [toasts, setToasts] = React11.useState([]);
  const timersRef = React11.useRef(/* @__PURE__ */ new Map());
  const removeToast = React11.useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);
  const addToast = React11.useCallback(
    (input) => {
      const id = `toast-${++counter}`;
      const toast = { ...input, id };
      setToasts((prev) => [...prev, toast]);
      const duration = input.duration ?? defaultDuration;
      if (duration > 0) {
        const timer = setTimeout(() => removeToast(id), duration);
        timersRef.current.set(id, timer);
      }
      return id;
    },
    [defaultDuration, removeToast]
  );
  const value = React11.useMemo(
    () => ({ toasts, addToast, removeToast }),
    [toasts, addToast, removeToast]
  );
  return /* @__PURE__ */ jsxs(ToastContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ jsx(ToastViewport, { toasts, onDismiss: removeToast })
  ] });
}
var toastVariants = cva(
  "pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border p-4 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        success: "bg-emerald-50 text-emerald-900 border-emerald-200",
        error: "bg-red-50 text-red-900 border-red-200",
        warning: "bg-amber-50 text-amber-900 border-amber-200"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var variantIcons = {
  default: /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  success: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 shrink-0 mt-0.5 text-emerald-600" }),
  error: /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 shrink-0 mt-0.5 text-red-600" }),
  warning: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 shrink-0 mt-0.5 text-amber-600" })
};
function ToastViewport({
  toasts,
  onDismiss
}) {
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: toasts.map((toast) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      layout: true,
      initial: { opacity: 0, y: 20, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, x: 100, scale: 0.95 },
      transition: { duration: 0.2 },
      className: cn(toastVariants({ variant: toast.variant })),
      children: [
        variantIcons[toast.variant ?? "default"],
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: toast.title }),
          toast.description && /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80 mt-0.5", children: toast.description })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => onDismiss(toast.id),
            className: "shrink-0 rounded-md p-1 opacity-50 hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ jsx(XIcon, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    },
    toast.id
  )) }) });
}
function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  variant = "default",
  className
}) {
  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };
  const handleConfirm = () => {
    onConfirm();
    onOpenChange?.(false);
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: cn("sm:max-w-md", className), children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: title }),
      description && /* @__PURE__ */ jsx(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleCancel, children: cancelLabel }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: variant === "destructive" ? "destructive" : "default",
          onClick: handleConfirm,
          children: confirmLabel
        }
      )
    ] })
  ] }) });
}
function FilterBar({
  filters,
  activeFilters,
  onChange,
  onClear,
  className
}) {
  const hasActive = Object.values(activeFilters).some((v) => v.length > 0);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-2 flex-wrap rounded-lg border border-border bg-background p-2",
        className
      ),
      children: [
        filters.map((filter) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-muted-foreground px-1", children: [
            filter.label,
            ":"
          ] }),
          filter.options.map((option) => {
            const isActive = activeFilters[filter.value]?.includes(option.value) ?? false;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => onChange(filter.value, option.value),
                className: cn(
                  "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                  isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                ),
                children: [
                  option.label,
                  isActive && /* @__PURE__ */ jsx(XIcon, { className: "h-3 w-3" })
                ]
              },
              option.value
            );
          })
        ] }, filter.value)),
        hasActive && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: onClear,
            className: "ml-auto text-xs h-7",
            children: "Clear all"
          }
        )
      ]
    }
  );
}
function SearchBox({
  placeholder = "Search\u2026",
  shortcut,
  onSearch,
  value: controlledValue,
  debounceMs = 300,
  className
}) {
  const [internalValue, setInternalValue] = React11.useState(controlledValue ?? "");
  const timerRef = React11.useRef(void 0);
  const inputRef = React11.useRef(null);
  React11.useEffect(() => {
    if (controlledValue !== void 0) setInternalValue(controlledValue);
  }, [controlledValue]);
  React11.useEffect(() => {
    if (!shortcut) return;
    const handler = (e) => {
      const key = shortcut.toLowerCase();
      const isMeta = key.includes("\u2318") || key.includes("cmd");
      const isCtrl = key.includes("ctrl");
      const letter = key.replace(/[⌘cmdctrl+\s]/gi, "").trim();
      if ((isMeta && e.metaKey || isCtrl && e.ctrlKey) && e.key.toLowerCase() === letter) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [shortcut]);
  const handleChange = (e) => {
    const val = e.target.value;
    setInternalValue(val);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onSearch(val), debounceMs);
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsx(SearchIcon, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: inputRef,
        type: "text",
        value: internalValue,
        onChange: handleChange,
        placeholder,
        className: "h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-12 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
      }
    ),
    shortcut && /* @__PURE__ */ jsx("kbd", { className: "absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground", children: shortcut })
  ] });
}
function DrawerPanel({
  open,
  onClose,
  title,
  description,
  side = "right",
  width,
  footer,
  children,
  className
}) {
  return /* @__PURE__ */ jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxs(
    SheetContent,
    {
      side,
      className: cn("flex flex-col", className),
      style: width ? { maxWidth: width, width: "100%" } : void 0,
      children: [
        /* @__PURE__ */ jsxs(SheetHeader, { children: [
          /* @__PURE__ */ jsx(SheetTitle, { children: title }),
          description && /* @__PURE__ */ jsx(SheetDescription, { children: description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto px-6 py-4", children }),
        footer && /* @__PURE__ */ jsx(SheetFooter, { children: footer })
      ]
    }
  ) });
}
function WizardStepper({
  steps,
  currentStep,
  orientation = "horizontal",
  onStepClick,
  className
}) {
  const isHorizontal = orientation === "horizontal";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex",
        isHorizontal ? "flex-row items-start" : "flex-col",
        className
      ),
      children: steps.map((step, index) => {
        const status = index < currentStep ? "complete" : index === currentStep ? "current" : "upcoming";
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "flex",
              isHorizontal ? "flex-1 flex-col items-center" : "flex-row items-start gap-3",
              isHorizontal && index < steps.length - 1 && "relative"
            ),
            children: [
              isHorizontal && index < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-[calc(50%+16px)] right-[calc(-50%+16px)] h-0.5", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "h-full w-full",
                    status === "complete" ? "bg-primary" : "bg-border"
                  )
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    disabled: !onStepClick,
                    onClick: () => onStepClick?.(index),
                    className: cn(
                      "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors",
                      status === "complete" && "border-primary bg-primary text-primary-foreground",
                      status === "current" && "border-primary bg-background text-primary",
                      status === "upcoming" && "border-border bg-background text-muted-foreground",
                      onStepClick && "cursor-pointer hover:opacity-80"
                    ),
                    children: status === "complete" ? /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) : index + 1
                  }
                ),
                !isHorizontal && index < steps.length - 1 && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "w-0.5 h-8 my-1",
                      status === "complete" ? "bg-primary" : "bg-border"
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: cn(
                    isHorizontal ? "mt-2 text-center" : "",
                    "min-w-0"
                  ),
                  children: [
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: cn(
                          "text-sm font-medium",
                          status === "upcoming" && "text-muted-foreground"
                        ),
                        children: step.label
                      }
                    ),
                    step.description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: step.description })
                  ]
                }
              )
            ]
          },
          index
        );
      })
    }
  );
}
var borderColors = {
  info: "border-l-blue-500",
  warning: "border-l-yellow-500",
  error: "border-l-red-500",
  success: "border-l-green-500"
};
var badgeColors2 = {
  info: "bg-blue-100 text-blue-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
  success: "bg-green-100 text-green-800"
};
function NotificationCard({ icon, title, description, badge, timestamp, onClick, variant = "info", className }) {
  const Comp = onClick ? "button" : "div";
  return /* @__PURE__ */ jsxs(
    Comp,
    {
      onClick,
      className: cn(
        "flex items-center gap-3 rounded-lg border border-l-4 bg-card p-4 text-left transition-colors",
        borderColors[variant],
        onClick && "cursor-pointer hover:bg-accent",
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsx("div", { className: "shrink-0 text-muted-foreground", children: icon }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
          badge && /* @__PURE__ */ jsx("span", { className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium", badgeColors2[badge.variant ?? variant]), children: badge.label }),
          timestamp && /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground whitespace-nowrap", children: timestamp }),
          onClick && /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-muted-foreground", children: /* @__PURE__ */ jsx("path", { d: "m9 18 6-6-6-6" }) })
        ] })
      ]
    }
  );
}
function NotificationBell({ count = 0, onClick, maxCount = 99, className }) {
  const display = count > maxCount ? `${maxCount}+` : String(count);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick,
      className: cn("relative inline-flex items-center justify-center size-9 rounded-md hover:bg-accent transition-colors", className),
      children: [
        /* @__PURE__ */ jsx(Bell, { className: "size-5" }),
        count > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[16px] h-4 rounded-full bg-red-500 text-white text-[10px] font-bold px-1", children: display })
      ]
    }
  );
}
function CompactStepper({ steps, currentStep, className }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-0", className), children: steps.map((step, i) => {
    const status = i < currentStep ? "completed" : i === currentStep ? "active" : "upcoming";
    return /* @__PURE__ */ jsxs(React11.Fragment, { children: [
      i > 0 && /* @__PURE__ */ jsx("div", { className: cn("h-px w-6 shrink-0", status === "upcoming" ? "bg-border" : "bg-primary") }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 min-w-0", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex items-center justify-center size-6 rounded-full text-[10px] font-bold shrink-0 transition-colors",
              status === "completed" && "bg-primary text-primary-foreground",
              status === "active" && "bg-primary text-primary-foreground ring-2 ring-primary/30",
              status === "upcoming" && "bg-muted text-muted-foreground"
            ),
            children: step.icon ?? i + 1
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground truncate max-w-[60px] text-center", children: step.label })
      ] })
    ] }, i);
  }) });
}
var variantConfig = {
  info: { icon: Info, bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", iconColor: "text-blue-500" },
  success: { icon: CheckCircle, bg: "bg-green-50", border: "border-green-200", text: "text-green-800", iconColor: "text-green-500" },
  warning: { icon: AlertTriangle, bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800", iconColor: "text-amber-500" },
  error: { icon: XCircle, bg: "bg-red-50", border: "border-red-200", text: "text-red-800", iconColor: "text-red-500" }
};
function Alert({
  variant = "info",
  title,
  icon,
  dismissible = false,
  onDismiss,
  children,
  className,
  ...props
}) {
  const [dismissed, setDismissed] = React11.useState(false);
  if (dismissed) return null;
  const config = variantConfig[variant];
  const IconComp = config.icon;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "alert",
      className: cn(
        "relative flex gap-3 rounded-lg border p-4",
        config.bg,
        config.border,
        config.text,
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: cn("shrink-0 mt-0.5", config.iconColor), children: icon ?? /* @__PURE__ */ jsx(IconComp, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          title && /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: title }),
          children && /* @__PURE__ */ jsx("div", { className: cn("text-sm", title && "mt-1 opacity-90"), children })
        ] }),
        dismissible && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setDismissed(true);
              onDismiss?.();
            },
            className: cn("shrink-0 p-0.5 rounded hover:bg-black/5 transition-colors", config.text),
            children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
          }
        )
      ]
    }
  );
}
function getPages(current, total, siblings) {
  const range = (s, e) => Array.from({ length: e - s + 1 }, (_, i) => s + i);
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);
  const pages = [1];
  if (left > 2) pages.push("...");
  pages.push(...range(left, right));
  if (right < total - 1) pages.push("...");
  if (total > 1) pages.push(total);
  return pages;
}
var btn = "inline-flex items-center justify-center h-8 min-w-[2rem] px-2 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none";
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirst = true,
  showLast = true,
  className,
  ...props
}) {
  const pages = getPages(currentPage, totalPages, siblingCount);
  return /* @__PURE__ */ jsxs("nav", { "aria-label": "Pagination", className: cn("flex items-center gap-1", className), ...props, children: [
    showFirst && /* @__PURE__ */ jsx("button", { className: cn(btn, "hover:bg-muted"), disabled: currentPage <= 1, onClick: () => onPageChange(1), children: /* @__PURE__ */ jsx(ChevronsLeft, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsx("button", { className: cn(btn, "hover:bg-muted"), disabled: currentPage <= 1, onClick: () => onPageChange(currentPage - 1), children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }) }),
    pages.map(
      (p, i) => p === "..." ? /* @__PURE__ */ jsx("span", { className: "px-1 text-muted-foreground text-sm", children: "\u2026" }, `e${i}`) : /* @__PURE__ */ jsx(
        "button",
        {
          className: cn(btn, p === currentPage ? "bg-primary text-primary-foreground" : "hover:bg-muted"),
          onClick: () => onPageChange(p),
          children: p
        },
        p
      )
    ),
    /* @__PURE__ */ jsx("button", { className: cn(btn, "hover:bg-muted"), disabled: currentPage >= totalPages, onClick: () => onPageChange(currentPage + 1), children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }) }),
    showLast && /* @__PURE__ */ jsx("button", { className: cn(btn, "hover:bg-muted"), disabled: currentPage >= totalPages, onClick: () => onPageChange(totalPages), children: /* @__PURE__ */ jsx(ChevronsRight, { className: "h-4 w-4" }) })
  ] });
}
function ShimmerButton({
  shimmerColor = "rgba(255,255,255,0.3)",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  background = "var(--primary, #2563eb)",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: cn(
        "group relative inline-flex h-9 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-white transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        className
      ),
      style: { background },
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 overflow-hidden",
            style: {
              ["--shimmer-color"]: shimmerColor,
              ["--shimmer-size"]: shimmerSize,
              ["--shimmer-duration"]: shimmerDuration
            },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 animate-[shimmer-sweep_var(--shimmer-duration)_ease-in-out_infinite]",
                style: {
                  background: `linear-gradient(
              120deg,
              transparent 25%,
              var(--shimmer-color) 50%,
              transparent 75%
            )`,
                  backgroundSize: "200% 100%"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "relative z-10", children }),
        /* @__PURE__ */ jsx(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
            @keyframes shimmer-sweep {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `
            }
          }
        )
      ]
    }
  );
}
function TextShimmer({
  children,
  duration = 2.5,
  spread = 2,
  className
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            @keyframes sapira-text-shimmer {
              0% { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn("inline-block", className),
        style: {
          backgroundImage: `linear-gradient(110deg, currentColor 35%, #60a5fa 45%, #a78bfa 50%, #60a5fa 55%, currentColor 65%)`,
          backgroundSize: `${spread * 100}% 100%`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `sapira-text-shimmer ${duration}s ease-in-out infinite`
        },
        children
      }
    )
  ] });
}
function AnimatedCounter({ value, className }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 100, damping: 30 });
  const [display, setDisplay] = React11.useState("0");
  React11.useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest).toLocaleString("en-US"));
    });
    return unsubscribe;
  }, [spring]);
  React11.useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);
  return /* @__PURE__ */ jsx("span", { className: cn("tabular-nums", className), children: display });
}
var speedMap = { slow: 20, medium: 12, fast: 6 };
function AnimatedBackground({
  variant = "gradient",
  colors,
  speed = "medium",
  interactive = false,
  className,
  children,
  ...props
}) {
  const dur = speedMap[speed];
  const c = colors ?? ["var(--primary, #2563eb)", "var(--secondary, #7c3aed)"];
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  useSpring(mouseX, { stiffness: 50, damping: 20 });
  useSpring(mouseY, { stiffness: 50, damping: 20 });
  const handleMouse = interactive ? (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  } : void 0;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("relative overflow-hidden", className),
      onMouseMove: handleMouse,
      ...props,
      children: [
        variant === "gradient" && /* @__PURE__ */ jsx(GradientBg, { colors: c, dur }),
        variant === "aurora" && /* @__PURE__ */ jsx(AuroraBg, { colors: c, dur }),
        variant === "dots" && /* @__PURE__ */ jsx(DotsBg, { dur }),
        variant === "grid" && /* @__PURE__ */ jsx(GridBg, { dur }),
        children && /* @__PURE__ */ jsx("div", { className: "relative z-10", children })
      ]
    }
  );
}
function GradientBg({ colors, dur }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
        @keyframes sapira-gradient-morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg) scale(1); }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(90deg) scale(1.05); }
          50% { border-radius: 50% 60% 30% 60% / 30% 50% 70% 60%; transform: rotate(180deg) scale(0.95); }
          75% { border-radius: 60% 30% 60% 40% / 70% 40% 50% 60%; transform: rotate(270deg) scale(1.02); }
        }
      ` } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: colors.map((c, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute w-[60%] h-[60%] opacity-[0.12] blur-3xl",
        style: {
          background: c,
          top: `${20 + i * 15}%`,
          left: `${10 + i * 25}%`,
          animation: `sapira-gradient-morph ${dur + i * 3}s ease-in-out infinite`,
          animationDelay: `${i * -dur / colors.length}s`
        }
      },
      i
    )) })
  ] });
}
function AuroraBg({ colors, dur }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
        @keyframes sapira-aurora {
          0%, 100% { transform: translateX(-10%) skewX(-5deg); opacity: 0.08; }
          33% { transform: translateX(5%) skewX(2deg); opacity: 0.14; }
          66% { transform: translateX(-5%) skewX(-2deg); opacity: 0.1; }
        }
      ` } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-x-0 h-[50%] blur-3xl",
        style: {
          background: `linear-gradient(90deg, transparent, ${colors[i % colors.length]}, transparent)`,
          top: `${10 + i * 20}%`,
          animation: `sapira-aurora ${dur + i * 4}s ease-in-out infinite`,
          animationDelay: `${i * -4}s`
        }
      },
      i
    )) })
  ] });
}
function DotsBg({ dur }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
        @keyframes sapira-dots-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }
      ` } }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute inset-0",
        style: {
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.04,
          animation: `sapira-dots-drift ${dur * 2}s ease-in-out infinite`
        }
      }
    )
  ] });
}
function GridBg({ dur }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
        @keyframes sapira-grid-shift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
      ` } }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute inset-0",
        style: {
          backgroundImage: `linear-gradient(to right, rgba(128,128,128,0.06) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(128,128,128,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          animation: `sapira-grid-shift ${dur * 2}s ease-in-out infinite`
        }
      }
    )
  ] });
}
function WaveCanvas({
  color1,
  color2,
  mouseX,
  mouseY
}) {
  const canvasRef = React11.useRef(null);
  const frameRef = React11.useRef(0);
  React11.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let time = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth * (typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1);
      canvas.height = canvas.offsetHeight * (typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1);
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      time += 8e-3;
      const w = canvas.width;
      const h = canvas.height;
      const mx = mouseX.get();
      const my = mouseY.get();
      ctx.clearRect(0, 0, w, h);
      for (let layer = 0; layer < 3; layer++) {
        const amplitude = h * (0.08 + layer * 0.03) * (1 + my * 0.3);
        const frequency = 3e-3 + layer * 1e-3;
        const speed = time * (1 + layer * 0.2) + mx * 0.5;
        const yBase = h * (0.55 + layer * 0.1);
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 3) {
          const y = yBase + Math.sin(x * frequency + speed) * amplitude + Math.sin(x * frequency * 2.5 + speed * 0.7) * amplitude * 0.3;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        const gradient = ctx.createLinearGradient(0, yBase - amplitude, 0, h);
        const alpha = 0.15 - layer * 0.03;
        gradient.addColorStop(0, layer % 2 === 0 ? color1 : color2);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.globalAlpha = alpha + 0.05;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      for (let i = 0; i < 2; i++) {
        const ox = w * (0.3 + i * 0.4 + Math.sin(time + i) * 0.1 + mx * 0.1);
        const oy = h * (0.4 + Math.cos(time * 0.7 + i) * 0.1 + my * 0.1);
        const r = Math.min(w, h) * (0.15 + i * 0.05);
        const gradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, r);
        gradient.addColorStop(0, i === 0 ? color1 : color2);
        gradient.addColorStop(1, "transparent");
        ctx.globalAlpha = 0.12;
        ctx.fillStyle = gradient;
        ctx.fillRect(ox - r, oy - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;
      frameRef.current = requestAnimationFrame(draw);
    };
    frameRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [color1, color2, mouseX, mouseY]);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "absolute inset-0 h-full w-full",
      style: { pointerEvents: "none" }
    }
  );
}
function StatCounter({ stat }) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3 },
        className: "text-3xl font-bold tracking-tight",
        children: stat.value
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: stat.label })
  ] });
}
function GlowyWavesHero({
  title,
  subtitle,
  ctas,
  stats,
  waveColor = "rgba(99, 102, 241, 0.6)",
  waveColorSecondary = "rgba(139, 92, 246, 0.6)",
  interactive = true,
  className,
  children,
  ...props
}) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });
  const handleMouse = interactive ? (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  } : void 0;
  return /* @__PURE__ */ jsxs(
    "section",
    {
      onMouseMove: handleMouse,
      className: cn(
        "relative overflow-hidden rounded-2xl bg-background min-h-[480px] flex items-center justify-center",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          WaveCanvas,
          {
            color1: waveColor,
            color2: waveColorSecondary,
            mouseX: springX,
            mouseY: springY
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center px-6 py-16 max-w-3xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
              children: title
            }
          ),
          subtitle && /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 15 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.15 },
              className: "text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed",
              children: subtitle
            }
          ),
          ctas && ctas.length > 0 && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.3 },
              className: "flex items-center justify-center gap-3 flex-wrap",
              children: ctas.map((cta, i) => {
                const isPrimary = cta.variant !== "secondary";
                const El = cta.href ? "a" : "button";
                return /* @__PURE__ */ jsx(
                  El,
                  {
                    href: cta.href,
                    onClick: cta.onClick,
                    className: cn(
                      "inline-flex items-center rounded-lg px-6 py-2.5 text-sm font-medium transition-colors",
                      isPrimary ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20" : "border border-border bg-background/60 backdrop-blur-sm hover:bg-muted"
                    ),
                    children: cta.label
                  },
                  i
                );
              })
            }
          ),
          stats && stats.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-10 pt-6", children: stats.map((stat, i) => /* @__PURE__ */ jsx(StatCounter, { stat }, i)) }),
          children
        ] })
      ]
    }
  );
}
function AIBadge({
  label = "AI",
  size = "sm",
  tooltip = "AI-generated content",
  showTooltip = true,
  animated = true,
  className
}) {
  const badge = /* @__PURE__ */ jsxs(
    motion.span,
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-sm bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-600",
        size === "sm" && "px-1.5 py-0.5 text-[10px]",
        size === "md" && "px-2 py-1 text-xs",
        className
      ),
      initial: animated ? { opacity: 0, scale: 0.8 } : void 0,
      animate: { opacity: 1, scale: 1 },
      whileHover: { scale: 1.05 },
      children: [
        /* @__PURE__ */ jsx(
          motion.span,
          {
            animate: animated ? { rotate: [0, 15, -15, 0] } : void 0,
            transition: animated ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : void 0,
            children: /* @__PURE__ */ jsx(Sparkles, { className: cn(size === "sm" ? "h-2.5 w-2.5" : "h-3 w-3") })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: label })
      ]
    }
  );
  if (!showTooltip) return badge;
  return /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 300, children: /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: badge }),
    /* @__PURE__ */ jsx(TooltipContent, { side: "top", className: "max-w-xs text-xs", children: /* @__PURE__ */ jsx("p", { children: tooltip }) })
  ] }) });
}
function useStreamingText({
  text,
  speed = 30,
  onComplete
}) {
  const [displayed, setDisplayed] = React11.useState("");
  const [isStreaming, setIsStreaming] = React11.useState(false);
  const indexRef = React11.useRef(0);
  React11.useEffect(() => {
    if (!text) return;
    setDisplayed("");
    setIsStreaming(true);
    indexRef.current = 0;
    const words = text.split(/(\s+)/);
    let current = "";
    const tick = () => {
      if (indexRef.current >= words.length) {
        setIsStreaming(false);
        onComplete?.();
        return;
      }
      current += words[indexRef.current];
      indexRef.current++;
      setDisplayed(current);
      const delay = speed + Math.random() * 20;
      setTimeout(tick, delay);
    };
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [text, speed]);
  return { displayed, isStreaming };
}
function StreamingText({
  text,
  speed = 30,
  onComplete,
  cursor = true,
  className
}) {
  const { displayed, isStreaming } = useStreamingText({ text, speed, onComplete });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "whitespace-pre-wrap font-mono text-sm leading-relaxed",
        className
      ),
      children: [
        displayed,
        /* @__PURE__ */ jsx(AnimatePresence, { children: cursor && isStreaming && /* @__PURE__ */ jsx(
          motion.span,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className: "inline-block",
            children: /* @__PURE__ */ jsx(
              motion.span,
              {
                className: "inline-block w-2 h-4 bg-foreground ml-0.5 align-middle",
                animate: { opacity: [1, 0, 1] },
                transition: { duration: 0.8, repeat: Infinity }
              }
            )
          }
        ) })
      ]
    }
  );
}
function AIGenerationPreview({
  title = "AI-Generated Content",
  content,
  isGenerating = false,
  onAccept,
  onReject,
  onRegenerate,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "rounded-lg border border-violet-200 bg-gradient-to-b from-violet-50/50 to-background overflow-hidden",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-violet-200/60 bg-violet-50/50", children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: isGenerating ? { rotate: [0, 15, -15, 0] } : void 0,
              transition: isGenerating ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : void 0,
              children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-violet-600" })
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-violet-700", children: title }),
          isGenerating && /* @__PURE__ */ jsx("span", { className: "text-xs text-violet-500 animate-pulse ml-auto", children: "Generating\u2026" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-4 min-h-[100px]", children: isGenerating ? /* @__PURE__ */ jsx(StreamingText, { text: content, speed: 25 }) : /* @__PURE__ */ jsx("div", { className: "whitespace-pre-wrap text-sm leading-relaxed", children: content }) }),
        !isGenerating && (onAccept || onReject || onRegenerate) && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-t border-violet-200/60 bg-muted/20", children: [
          onRegenerate && /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", onClick: onRegenerate, className: "gap-1.5", children: [
            /* @__PURE__ */ jsx(RefreshCw, { className: "h-3.5 w-3.5" }),
            "Regenerate"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1" }),
          onReject && /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: onReject, className: "gap-1.5", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            "Reject"
          ] }),
          onAccept && /* @__PURE__ */ jsxs(Button, { size: "sm", onClick: onAccept, className: "gap-1.5", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            "Accept"
          ] })
        ] })
      ]
    }
  );
}
function createTheme(config) {
  const css = {};
  if (config.brand) css["--brand"] = config.brand;
  if (config.brandForeground) css["--brand-foreground"] = config.brandForeground;
  if (config.fontSans) css["--font-sans-family"] = config.fontSans;
  if (config.fontMono) css["--font-mono-family"] = config.fontMono;
  if (config.radius != null) css["--radius"] = `${config.radius}px`;
  return css;
}
var ThemeContext = React11.createContext(null);
function useTheme() {
  return React11.useContext(ThemeContext);
}
function ThemeProvider({
  children,
  theme,
  brand,
  fontSans,
  fontMono,
  className
}) {
  const config = theme ?? {
    name: "custom",
    brand,
    fontSans,
    fontMono
  };
  const cssVars = createTheme(config);
  React11.useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }, []);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: config, children: /* @__PURE__ */ jsx("div", { style: cssVars, className, children }) });
}

// src/tokens/themes/industrial.ts
var industrialTheme = {
  name: "Industrial",
  brand: "#E85D2D",
  brandForeground: "#FFFFFF",
  fontSans: "Inter",
  fontMono: "Geist Mono",
  radius: 6
};

export { AIBadge, AIGenerationPreview, Alert, AnimatedBackground, AnimatedCounter, AppShell, AreaChart, Avatar, AvatarFallback, AvatarImage, Badge, BarChart, BentoGrid, BentoGridItem, Breadcrumbs, Button, CardSelector, Checkbox, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, CompactStepper, ConfirmDialog, CustomSelect, DataTable, DatePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DrawerPanel, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, ExpandableTabs, FeatureCarousel, FileUpload, FilterBar, GlassCard, GlowingEffect, GlowyWavesHero, GuidedPanel, Header, IconTile, Input, InteractiveLogsTable, LanguageSelector, LineChart, Marquee, MetricsCard, NotificationBell, NotificationCard, NumberTicker, PageHeader, Pagination, PieChart, Popover2 as Popover, PopoverAnchor, PopoverContent, PopoverTrigger, ProgressBar, RadioGroup, RoleCard, SearchBox, Select, SelectContent, SelectDropdown, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator2 as Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, ShimmerButton, Sidebar, Skeleton, Sparkline, Spinner, StatCard, StatusBadge, StreamingText, Switch, Tabs, TextShimmer, Textarea, ThemeProvider, Timeline, ToastProvider, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TrustBar, UserProfile, WizardStepper, WorkflowBuilder, badgeVariants, buttonVariants, cn, createTheme, formatChunked, iconTileVariants, industrialTheme, sheetContentVariants, skeletonVariants, stripFormat, timelineIconVariants, useStreamingText, useTheme, useToast };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map