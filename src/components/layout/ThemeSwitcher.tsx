import { useState } from "react";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme, themes, ThemeName } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeSwitcherProps {
  isCollapsed?: boolean;
}

export function ThemeSwitcher({ isCollapsed = false }: ThemeSwitcherProps) {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setRotation(prev => prev + 360);
  };

  const handleSelectTheme = (themeName: ThemeName) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  const getThemePreviewColors = (theme: typeof themes[0]) => {
    return `hsl(${theme.colors.primary})`;
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg glass-hover text-muted-foreground hover:text-foreground transition-all",
          isCollapsed && "justify-center"
        )}
      >
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Palette size={18} className="text-primary" />
        </motion.div>
        {!isCollapsed && (
          <span className="text-sm">Themes</span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute z-50 glass rounded-xl border border-border/50 p-3 shadow-xl",
              isCollapsed ? "left-full ml-2 top-0 w-48" : "left-0 right-0 bottom-full mb-2"
            )}
          >
            <p className="text-xs text-muted-foreground mb-3 font-medium">Choose Theme</p>
            <div className="space-y-2">
              {themes.map((theme) => (
                <motion.button
                  key={theme.name}
                  onClick={() => handleSelectTheme(theme.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all",
                    currentTheme === theme.name
                      ? "bg-primary/20 border border-primary/50"
                      : "hover:bg-muted/50"
                  )}
                >
                  <div
                    className="h-5 w-5 rounded-full shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${getThemePreviewColors(theme)}, hsl(${theme.colors.accent}))`
                    }}
                  />
                  <span className="text-sm font-medium">{theme.label}</span>
                  {currentTheme === theme.name && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto h-2 w-2 rounded-full bg-primary"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
