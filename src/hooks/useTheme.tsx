import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeName = "neon" | "sunset" | "ocean" | "forest" | "lavender" | "light";

interface Theme {
  name: ThemeName;
  label: string;
  colors: {
    primary: string;
    accent: string;
    neonCyan: string;
    neonPurple: string;
    neonPink: string;
    neonBlue: string;
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    muted: string;
    mutedForeground: string;
    border: string;
  };
}

export const themes: Theme[] = [
  {
    name: "neon",
    label: "Neon Cyber",
    colors: {
      primary: "173 80% 50%",
      accent: "280 80% 60%",
      neonCyan: "173 80% 50%",
      neonPurple: "280 80% 60%",
      neonPink: "330 80% 60%",
      neonBlue: "210 100% 60%",
      background: "222 47% 6%",
      foreground: "210 40% 98%",
      card: "222 47% 8%",
      cardForeground: "210 40% 98%",
      muted: "222 30% 15%",
      mutedForeground: "215 20% 65%",
      border: "222 30% 18%",
    },
  },
  {
    name: "sunset",
    label: "Sunset Glow",
    colors: {
      primary: "25 95% 55%",
      accent: "340 80% 55%",
      neonCyan: "25 95% 55%",
      neonPurple: "340 80% 55%",
      neonPink: "350 90% 60%",
      neonBlue: "15 85% 50%",
      background: "15 30% 8%",
      foreground: "30 40% 95%",
      card: "15 25% 12%",
      cardForeground: "30 40% 95%",
      muted: "15 20% 18%",
      mutedForeground: "25 20% 60%",
      border: "15 25% 22%",
    },
  },
  {
    name: "ocean",
    label: "Ocean Depths",
    colors: {
      primary: "200 80% 50%",
      accent: "240 70% 60%",
      neonCyan: "200 80% 50%",
      neonPurple: "240 70% 60%",
      neonPink: "260 75% 55%",
      neonBlue: "210 85% 55%",
      background: "210 50% 6%",
      foreground: "200 40% 98%",
      card: "210 45% 10%",
      cardForeground: "200 40% 98%",
      muted: "210 35% 15%",
      mutedForeground: "200 25% 60%",
      border: "210 35% 20%",
    },
  },
  {
    name: "forest",
    label: "Forest Mist",
    colors: {
      primary: "150 60% 45%",
      accent: "120 50% 50%",
      neonCyan: "150 60% 45%",
      neonPurple: "90 55% 50%",
      neonPink: "160 65% 40%",
      neonBlue: "140 55% 45%",
      background: "140 30% 6%",
      foreground: "140 30% 95%",
      card: "140 25% 10%",
      cardForeground: "140 30% 95%",
      muted: "140 20% 15%",
      mutedForeground: "140 15% 55%",
      border: "140 20% 18%",
    },
  },
  {
    name: "lavender",
    label: "Lavender Dreams",
    colors: {
      primary: "270 60% 60%",
      accent: "300 65% 55%",
      neonCyan: "270 60% 60%",
      neonPurple: "300 65% 55%",
      neonPink: "320 70% 60%",
      neonBlue: "280 60% 55%",
      background: "270 30% 8%",
      foreground: "270 30% 95%",
      card: "270 25% 12%",
      cardForeground: "270 30% 95%",
      muted: "270 20% 18%",
      mutedForeground: "270 15% 55%",
      border: "270 20% 22%",
    },
  },
  {
    name: "light",
    label: "Light Mode",
    colors: {
      primary: "220 70% 50%",
      accent: "260 60% 55%",
      neonCyan: "220 70% 50%",
      neonPurple: "260 60% 55%",
      neonPink: "330 70% 55%",
      neonBlue: "210 80% 55%",
      background: "0 0% 98%",
      foreground: "222 47% 11%",
      card: "0 0% 100%",
      cardForeground: "222 47% 11%",
      muted: "220 15% 92%",
      mutedForeground: "220 10% 40%",
      border: "220 15% 85%",
    },
  },
];

interface ThemeContextType {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme") as ThemeName;
      return saved && themes.some(t => t.name === saved) ? saved : "neon";
    }
    return "neon";
  });

  useEffect(() => {
    const theme = themes.find(t => t.name === currentTheme);
    if (!theme) return;

    const root = document.documentElement;
    root.style.setProperty("--primary", theme.colors.primary);
    root.style.setProperty("--accent", theme.colors.accent);
    root.style.setProperty("--ring", theme.colors.primary);
    root.style.setProperty("--neon-cyan", theme.colors.neonCyan);
    root.style.setProperty("--neon-purple", theme.colors.neonPurple);
    root.style.setProperty("--neon-pink", theme.colors.neonPink);
    root.style.setProperty("--neon-blue", theme.colors.neonBlue);
    root.style.setProperty("--background", theme.colors.background);
    root.style.setProperty("--foreground", theme.colors.foreground);
    root.style.setProperty("--card", theme.colors.card);
    root.style.setProperty("--card-foreground", theme.colors.cardForeground);
    root.style.setProperty("--popover", theme.colors.card);
    root.style.setProperty("--popover-foreground", theme.colors.cardForeground);
    root.style.setProperty("--muted", theme.colors.muted);
    root.style.setProperty("--muted-foreground", theme.colors.mutedForeground);
    root.style.setProperty("--border", theme.colors.border);
    root.style.setProperty("--input", theme.colors.border);
    root.style.setProperty("--secondary", theme.colors.muted);
    root.style.setProperty("--secondary-foreground", theme.colors.foreground);

    localStorage.setItem("portfolio-theme", currentTheme);
  }, [currentTheme]);

  const setTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
