import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeName = "neon" | "sunset" | "ocean" | "forest" | "lavender";

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
