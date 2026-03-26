"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { formatChunked, stripFormat, type FormatType, type FormatOptions } from "../../utils/format";

export interface InputProps extends React.ComponentProps<"input"> {
  /** Show error styling */
  error?: boolean;
  /** Auto-format the displayed value (phone, card, iban, currency, number) */
  format?: FormatType;
  /** Options for the formatter */
  formatOptions?: FormatOptions;
}

function Input({ className, type, error, format, formatOptions, onChange, onFocus, onBlur, value, defaultValue, ...props }: InputProps) {
  const [rawValue, setRawValue] = React.useState<string>(
    (value as string) ?? (defaultValue as string) ?? ""
  );
  const [isFocused, setIsFocused] = React.useState(false);

  // Sync controlled value
  React.useEffect(() => {
    if (value !== undefined) {
      setRawValue(String(value));
    }
  }, [value]);

  if (!format) {
    return (
      <input
        type={type}
        data-slot="input"
        aria-invalid={error || undefined}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
          className
        )}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        {...props}
      />
    );
  }

  const displayValue = isFocused ? rawValue : formatChunked(rawValue, format, formatOptions);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = stripFormat(e.target.value, format);
    setRawValue(raw);
    // Emit raw value
    const syntheticEvent = {
      ...e,
      target: { ...e.target, value: raw },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(syntheticEvent);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <input
      type={type ?? "text"}
      data-slot="input"
      aria-invalid={error || undefined}
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      value={displayValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
}

export { Input };
