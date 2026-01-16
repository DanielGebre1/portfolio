import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Home,
  FolderKanban,
  BookOpen,
  Sparkles,
  FlaskConical,
  FileText,
  Mail,
  Bot,
  Smartphone,
  Coins,
  Gamepad2,
} from "lucide-react";

const pages = [
  { icon: Home, label: "Home", path: "/", description: "Go to homepage" },
  { icon: FolderKanban, label: "Projects", path: "/projects", description: "View all projects" },
  { icon: BookOpen, label: "Case Studies", path: "/case-studies", description: "Detailed case studies" },
  { icon: Sparkles, label: "Skills", path: "/skills", description: "Technical skills" },
  { icon: FlaskConical, label: "Playground", path: "/playground", description: "Interactive demos" },
  { icon: FileText, label: "Blog", path: "/blog", description: "Technical articles" },
  { icon: Mail, label: "Contact", path: "/contact", description: "Get in touch" },
];

const projects = [
  { icon: Bot, label: "AI Assistant", path: "/projects#ai-assistant", description: "Intelligent chat system" },
  { icon: Smartphone, label: "Super App", path: "/projects#super-app", description: "Multi-service mobile platform" },
  { icon: Coins, label: "Blockchain Crowdfunding", path: "/projects#blockchain", description: "Decentralized funding platform" },
  { icon: Gamepad2, label: "Unity Game", path: "/projects#game", description: "3D action adventure" },
];

interface GlobalSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GlobalSearch({ open, onOpenChange }: GlobalSearchProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search pages and projects..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {pages.map((item) => (
            <CommandItem
              key={item.path}
              onSelect={() => handleSelect(item.path)}
              className="cursor-pointer"
            >
              <item.icon className="mr-2 h-4 w-4 text-primary" />
              <div className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.description}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Projects">
          {projects.map((item) => (
            <CommandItem
              key={item.path}
              onSelect={() => handleSelect(item.path)}
              className="cursor-pointer"
            >
              <item.icon className="mr-2 h-4 w-4 text-accent" />
              <div className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.description}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
