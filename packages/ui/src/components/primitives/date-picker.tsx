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
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function formatDate(d: Date) {
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
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

function DatePicker({ value, onChange, label, error, placeholder = "Pick a date", minDate, maxDate, disabled, className }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const id = React.useId();

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
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
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
