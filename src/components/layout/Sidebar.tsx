import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FolderKanban,
  BookOpen,
  Sparkles,
  FlaskConical,
  FileText,
  Mail,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: FolderKanban, label: "Projects", path: "/projects" },
  { icon: BookOpen, label: "Case Studies", path: "/case-studies" },
  { icon: Sparkles, label: "Skills", path: "/skills" },
  { icon: FlaskConical, label: "Playground", path: "/playground" },
  { icon: FileText, label: "Blog", path: "/blog" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

interface SidebarProps {
  onOpenSearch: () => void;
  isCollapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

export function Sidebar({ onOpenSearch, isCollapsed, onCollapsedChange }: SidebarProps) {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen glass border-r border-border/30 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-border/30">
          {!isCollapsed && (
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">DG</span>
              </div>
              <span className="font-semibold text-foreground">Daniel Gebre</span>
            </Link>
          )}
          <button
            onClick={() => onCollapsedChange(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Search Button */}
        <div className="p-3">
          <button
            onClick={onOpenSearch}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg glass-hover text-muted-foreground hover:text-foreground transition-all",
              isCollapsed && "justify-center"
            )}
          >
            <Search size={18} />
            {!isCollapsed && (
              <>
                <span className="text-sm">Search</span>
                <kbd className="ml-auto text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">⌘K</kbd>
              </>
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-2 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  isCollapsed && "justify-center",
                  isActive
                    ? "bg-primary/10 text-primary neon-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <item.icon size={20} className={isActive ? "text-primary" : ""} />
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Status Card */}
        {!isCollapsed && (
          <div className="p-3">
            <div className="glass rounded-xl p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-muted-foreground">Available for work</span>
              </div>
              <p className="text-xs text-foreground/80">
                Open to exciting opportunities
              </p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
