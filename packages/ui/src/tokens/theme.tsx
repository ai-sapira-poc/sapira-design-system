"use client";

import * as React from "react";

export interface ThemeConfig {
  name: string;
  brand?: string;
  brandForeground?: string;
  fontSans?: string;
  fontMono?: string;
  radius?: number;
}

export interface ThemeCSS {
  "--brand"?: string;
  "--brand-foreground"?: string;
  "--font-sans-family"?: string;
  "--font-mono-family"?: string;
  "--radius"?: string;
}

/**
 * Create CSS custom property overrides from a theme config.
 */
export function createTheme(config: ThemeConfig): ThemeCSS {
  const css: ThemeCSS = {};

  if (config.brand) css["--brand"] = config.brand;
  if (config.brandForeground) css["--brand-foreground"] = config.brandForeground;
  if (config.fontSans) css["--font-sans-family"] = config.fontSans;
  if (config.fontMono) css["--font-mono-family"] = config.fontMono;
  if (config.radius != null) css["--radius"] = `${config.radius}px`;

  return css;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: ThemeConfig;
  /** Shorthand: set brand color directly */
  brand?: string;
  fontSans?: string;
  fontMono?: string;
  className?: string;
}

const ThemeContext = React.createContext<ThemeConfig | null>(null);

export function useTheme(): ThemeConfig | null {
  return React.useContext(ThemeContext);
}

export function ThemeProvider({
  children,
  theme,
  brand,
  fontSans,
  fontMono,
  className,
}: ThemeProviderProps) {
  const config: ThemeConfig = theme ?? {
    name: "custom",
    brand,
    fontSans,
    fontMono,
  };

  const cssVars = createTheme(config);

  // Force light mode — remove dark class and set color-scheme
  React.useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }, []);

  return (
    <ThemeContext.Provider value={config}>
      <div style={cssVars as React.CSSProperties} className={className}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
