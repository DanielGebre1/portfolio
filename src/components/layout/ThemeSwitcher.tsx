import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme, themes, ThemeName } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeSwitcherProps {
  isCollapsed?: boolean;
}

export function ThemeSwitcher({ isCollapsed = false }: ThemeSwitcherProps) {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectTheme = (themeName: ThemeName) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  const getThemeColor = (theme: typeof themes[0]) => {
    return `hsl(${theme.colors.primary})`;
  };

  const getThemeAccent = (theme: typeof themes[0]) => {
    return `hsl(${theme.colors.accent})`;
  };

  const currentThemeData = themes.find(t => t.name === currentTheme);
  const isLightMode = currentTheme === "light";

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg glass-hover text-muted-foreground hover:text-foreground transition-all",
          isCollapsed && "justify-center"
        )}
      >
        {/* Circular color wheel preview */}
        <div className="relative h-6 w-6">
          <div 
            className="absolute inset-0 rounded-full transition-all duration-300"
            style={{
              background: currentThemeData 
                ? `conic-gradient(from 0deg, ${getThemeColor(currentThemeData)}, ${getThemeAccent(currentThemeData)}, ${getThemeColor(currentThemeData)})`
                : undefined,
              boxShadow: `0 0 10px ${currentThemeData ? getThemeColor(currentThemeData) : 'transparent'}40`
            }}
          />
          <div className="absolute inset-[3px] rounded-full bg-card" />
          <motion.div 
            className="absolute inset-[6px] rounded-full flex items-center justify-center"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isLightMode ? (
              <Sun size={10} className="text-primary" />
            ) : (
              <Moon size={10} className="text-primary" />
            )}
          </motion.div>
        </div>
        {!isCollapsed && (
          <span className="text-sm">Themes</span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute z-50 glass rounded-2xl border border-border/50 p-4 shadow-xl",
              isCollapsed ? "left-full ml-2 top-0" : "left-0 right-0 bottom-full mb-2"
            )}
          >
            <p className="text-xs text-muted-foreground mb-4 font-medium text-center">Choose Theme</p>
            
            {/* Circular color palette */}
            <div className="relative w-32 h-32 mx-auto mb-4">
              {themes.map((theme, index) => {
                const angle = (index / themes.length) * 360 - 90;
                const radius = 45;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const isActive = currentTheme === theme.name;

                return (
                  <motion.button
                    key={theme.name}
                    onClick={() => handleSelectTheme(theme.name)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "absolute rounded-full transition-all duration-300",
                      isActive ? "w-8 h-8 z-10" : "w-6 h-6"
                    )}
                    style={{
                      left: `calc(50% + ${x}px - ${isActive ? 16 : 12}px)`,
                      top: `calc(50% + ${y}px - ${isActive ? 16 : 12}px)`,
                      background: `linear-gradient(135deg, ${getThemeColor(theme)}, ${getThemeAccent(theme)})`,
                      boxShadow: isActive 
                        ? `0 0 20px ${getThemeColor(theme)}80, 0 0 40px ${getThemeColor(theme)}40`
                        : `0 0 8px ${getThemeColor(theme)}40`,
                      border: isActive ? '2px solid white' : 'none',
                    }}
                    title={theme.label}
                  >
                    {theme.name === "light" && (
                      <Sun size={isActive ? 14 : 10} className="text-foreground absolute inset-0 m-auto" />
                    )}
                  </motion.button>
                );
              })}
              
              {/* Center indicator */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-border/50 flex items-center justify-center"
              >
                <motion.div
                  key={currentTheme}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="w-8 h-8 rounded-full"
                  style={{
                    background: currentThemeData 
                      ? `linear-gradient(135deg, ${getThemeColor(currentThemeData)}, ${getThemeAccent(currentThemeData)})`
                      : undefined,
                  }}
                />
              </div>
            </div>

            {/* Current theme label */}
            <motion.p 
              key={currentTheme}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-center text-foreground"
            >
              {currentThemeData?.label}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
