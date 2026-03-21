/**
 * formatChunked — formats raw string values into human-readable chunks.
 *
 * Supported formats: phone, card, iban, currency, number
 */

export type FormatType = "phone" | "card" | "iban" | "currency" | "number";

export interface FormatOptions {
  /** Separator between chunks (default: " ") */
  separator?: string;
  /** Currency symbol for currency format (default: "€") */
  currencySymbol?: string;
  /** Decimal places for currency/number (default: 2 for currency, 0 for number) */
  decimals?: number;
  /** Thousand separator for currency/number (default: ".") */
  thousandSeparator?: string;
  /** Decimal separator for currency/number (default: ",") */
  decimalSeparator?: string;
}

function chunkString(str: string, sizes: number[], sep: string): string {
  const parts: string[] = [];
  let offset = 0;
  for (const size of sizes) {
    if (offset >= str.length) break;
    parts.push(str.slice(offset, offset + size));
    offset += size;
  }
  if (offset < str.length) {
    parts.push(str.slice(offset));
  }
  return parts.join(sep);
}

function formatPhone(raw: string, sep: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length <= 3) return digits;
  // Spanish-style: 3 3 3
  return chunkString(digits, [3, 3, 3], sep);
}

function formatCard(raw: string, sep: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 16);
  return chunkString(digits, [4, 4, 4, 4], sep);
}

function formatIban(raw: string, sep: string): string {
  const clean = raw.replace(/\s/g, "").toUpperCase();
  return chunkString(clean, [4, 4, 4, 4, 4, 4, 4, 4], sep);
}

function formatCurrency(raw: string, opts: FormatOptions): string {
  const num = parseFloat(raw.replace(/[^\d.\-]/g, ""));
  if (isNaN(num)) return raw;
  const decimals = opts.decimals ?? 2;
  const tSep = opts.thousandSeparator ?? ".";
  const dSep = opts.decimalSeparator ?? ",";
  const symbol = opts.currencySymbol ?? "€";

  const [intPart, decPart] = Math.abs(num).toFixed(decimals).split(".");
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, tSep);
  const sign = num < 0 ? "-" : "";
  return `${sign}${formatted}${dSep}${decPart} ${symbol}`;
}

function formatNumber(raw: string, opts: FormatOptions): string {
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

export function stripFormat(value: string, format: FormatType): string {
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

export function formatChunked(
  raw: string,
  format: FormatType,
  options?: FormatOptions
): string {
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
