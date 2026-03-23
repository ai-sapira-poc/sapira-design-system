"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  label?: string;
  error?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  className?: string;
  /** Allow typing dates directly in the input (default: true) */
  allowTextInput?: boolean;
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MONTHS_SHORT = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function formatDate(d: Date) {
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

/**
 * Parse a variety of date string formats:
 * "mar 15", "15/03/2026", "2026-03-15", "March 15 2026", "March 15, 2026"
 */
function parseFlexibleDate(input: string): Date | null {
  const text = input.trim();
  if (!text) return null;

  // Try ISO format: 2026-03-15
  const isoMatch = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (isoMatch) {
    const d = new Date(+isoMatch[1], +isoMatch[2] - 1, +isoMatch[3]);
    if (!isNaN(d.getTime())) return d;
  }

  // Try DD/MM/YYYY or DD-MM-YYYY
  const dmy = text.match(/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4})$/);
  if (dmy) {
    const d = new Date(+dmy[3], +dmy[2] - 1, +dmy[1]);
    if (!isNaN(d.getTime())) return d;
  }

  // Try "Month Day, Year" or "Month Day Year" or "Mon Day"
  const lower = text.toLowerCase().replace(",", "");
  const parts = lower.split(/\s+/);

  if (parts.length >= 2) {
    let monthIdx = -1;
    // Check full month names
    const fullIdx = MONTHS.findIndex((m) => m.toLowerCase() === parts[0]);
    if (fullIdx !== -1) monthIdx = fullIdx;
    // Check short month names
    if (monthIdx === -1) {
      const shortIdx = MONTHS_SHORT.findIndex((m) => parts[0].startsWith(m));
      if (shortIdx !== -1) monthIdx = shortIdx;
    }

    if (monthIdx !== -1) {
      const day = parseInt(parts[1], 10);
      const year = parts[2] ? parseInt(parts[2], 10) : new Date().getFullYear();
      if (!isNaN(day) && !isNaN(year) && day >= 1 && day <= 31) {
        const d = new Date(year, monthIdx, day);
        if (!isNaN(d.getTime())) return d;
      }
    }
  }

  // Fallback: try native Date parse
  const fallback = new Date(text);
  if (!isNaN(fallback.getTime())) return fallback;

  return null;
}

function CalendarGrid({
  value,
  onChange,
  minDate,
  maxDate,
}: {
  value?: Date;
  onChange: (d: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}) {
  const today = new Date();
  const [viewYear, setViewYear] = React.useState(value?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = React.useState(value?.getMonth() ?? today.getMonth());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDow = new Date(viewYear, viewMonth, 1).getDay();

  const prev = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const next = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const isDisabled = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    if (minDate && d < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true;
    if (maxDate && d > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true;
    return false;
  };

  return (
    <div className="p-3 w-64">
      <div className="flex items-center justify-between mb-2">
        <button type="button" onClick={prev} className="p-1 rounded hover:bg-muted transition-colors">
          <ChevronLeft className="size-4" />
        </button>
        <span className="text-sm font-medium">{MONTHS[viewMonth]} {viewYear}</span>
        <button type="button" onClick={next} className="p-1 rounded hover:bg-muted transition-colors">
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-0 text-center">
        {DAYS.map((d) => (
          <div key={d} className="text-xs text-muted-foreground py-1 font-medium">{d}</div>
        ))}
        {Array.from({ length: firstDow }).map((_, i) => (
          <div key={`e-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(viewYear, viewMonth, day);
          const selected = value && isSameDay(value, date);
          const isToday = isSameDay(today, date);
          const disabled = isDisabled(day);
          return (
            <button
              key={day}
              type="button"
              disabled={disabled}
              onClick={() => onChange(date)}
              className={cn(
                "text-sm rounded-md py-1 transition-colors",
                "hover:bg-muted disabled:opacity-30 disabled:pointer-events-none",
                selected && "bg-primary text-primary-foreground hover:bg-primary/90",
                !selected && isToday && "border border-primary/50",
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
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
  allowTextInput = true,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [textValue, setTextValue] = React.useState("");
  const [parseError, setParseError] = React.useState<string | null>(null);
  const [isEditing, setIsEditing] = React.useState(false);
  const id = React.useId();

  const error = errorProp ?? parseError ?? undefined;

  // Sync text value when date changes from calendar
  React.useEffect(() => {
    if (!isEditing) {
      setTextValue(value ? formatDate(value) : "");
    }
  }, [value, isEditing]);

  const handleTextBlur = () => {
    setIsEditing(false);
    if (!textValue.trim()) {
      setParseError(null);
      onChange?.(undefined);
      return;
    }
    const parsed = parseFlexibleDate(textValue);
    if (parsed) {
      // Validate against min/max
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
    return (
      <div className={cn("space-y-1.5", className)}>
        {label && <label htmlFor={id} className="text-sm font-medium">{label}</label>}
        <Popover.Root open={open} onOpenChange={setOpen}>
          <div className="relative">
            <input
              id={id}
              type="text"
              disabled={disabled}
              aria-invalid={error ? true : undefined}
              placeholder={placeholder}
              value={isEditing ? textValue : (value ? formatDate(value) : textValue)}
              onChange={(e) => {
                setIsEditing(true);
                setTextValue(e.target.value);
                setParseError(null);
              }}
              onFocus={() => setIsEditing(true)}
              onBlur={handleTextBlur}
              className={cn(
                "flex items-center border-input h-9 w-full rounded-md border bg-transparent pl-9 pr-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
                "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
              )}
            />
            <Popover.Trigger asChild>
              <button
                type="button"
                disabled={disabled}
                tabIndex={-1}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-muted transition-colors text-muted-foreground"
              >
                <Calendar className="size-4" />
              </button>
            </Popover.Trigger>
          </div>
          <Popover.Portal>
            <Popover.Content
              align="start"
              sideOffset={4}
              className="z-50 rounded-lg border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <CalendarGrid
                value={value}
                onChange={(d) => {
                  setParseError(null);
                  setIsEditing(false);
                  onChange?.(d);
                  setOpen(false);
                }}
                minDate={minDate}
                maxDate={maxDate}
              />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    );
  }

  // Original button-only trigger
  return (
    <div className={cn("space-y-1.5", className)}>
      {label && <label htmlFor={id} className="text-sm font-medium">{label}</label>}
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button
            id={id}
            type="button"
            disabled={disabled}
            aria-invalid={error ? true : undefined}
            className={cn(
              "flex items-center gap-2 border-input h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
              "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
              !value && "text-muted-foreground"
            )}
          >
            <Calendar className="size-4 shrink-0 text-muted-foreground" />
            <span className="truncate">{value ? formatDate(value) : placeholder}</span>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            align="start"
            sideOffset={4}
            className="z-50 rounded-lg border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"
          >
            <CalendarGrid
              value={value}
              onChange={(d) => { onChange?.(d); setOpen(false); }}
              minDate={minDate}
              maxDate={maxDate}
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

export { DatePicker };
