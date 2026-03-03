"use client";

import * as React from "react";
import { SearchIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface SearchBoxProps {
  placeholder?: string;
  shortcut?: string;
  onSearch: (value: string) => void;
  value?: string;
  debounceMs?: number;
  className?: string;
}

export function SearchBox({
  placeholder = "Search…",
  shortcut,
  onSearch,
  value: controlledValue,
  debounceMs = 300,
  className,
}: SearchBoxProps) {
  const [internalValue, setInternalValue] = React.useState(controlledValue ?? "");
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Sync controlled value
  React.useEffect(() => {
    if (controlledValue !== undefined) setInternalValue(controlledValue);
  }, [controlledValue]);

  // Keyboard shortcut
  React.useEffect(() => {
    if (!shortcut) return;
    const handler = (e: KeyboardEvent) => {
      const key = shortcut.toLowerCase();
      const isMeta = key.includes("⌘") || key.includes("cmd");
      const isCtrl = key.includes("ctrl");
      const letter = key.replace(/[⌘cmdctrl+\s]/gi, "").trim();

      if (
        ((isMeta && e.metaKey) || (isCtrl && e.ctrlKey)) &&
        e.key.toLowerCase() === letter
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [shortcut]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalValue(val);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onSearch(val), debounceMs);
  };

  return (
    <div className={cn("relative", className)}>
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        ref={inputRef}
        type="text"
        value={internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-12 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
      />
      {shortcut && (
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
          {shortcut}
        </kbd>
      )}
    </div>
  );
}
