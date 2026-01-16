import { useState } from "react";
import { Cpu, Zap, GitBranch, Server } from "lucide-react";

export function TechStatusCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 to-accent/30 blur-xl transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-50"
        }`}
      />
      
      {/* Card */}
      <div
        className={`relative glass rounded-2xl p-6 border border-primary/20 transition-all duration-500 ${
          isHovered ? "scale-[1.02]" : ""
        }`}
        style={{
          transform: isHovered
            ? "perspective(1000px) rotateX(5deg) rotateY(-5deg)"
            : "perspective(1000px) rotateX(0) rotateY(0)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Cpu className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Current Tech Status</h3>
            <p className="text-xs text-muted-foreground">Real-time overview</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Active Focus */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-muted-foreground">Active Focus</span>
            </div>
            <span className="text-sm font-medium text-primary">AI + LLMs</span>
          </div>

          {/* Current Stack */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">Primary Stack</span>
            </div>
            <span className="text-sm font-medium text-foreground">React, Laravel, Unity</span>
          </div>

          {/* Commits */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-green-400" />
              <span className="text-sm text-muted-foreground">This Week</span>
            </div>
            <span className="text-sm font-medium text-foreground">47 commits</span>
          </div>

          {/* Activity Bar */}
          <div className="pt-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-8 rounded-sm transition-all duration-300"
                  style={{
                    backgroundColor: `hsl(var(--primary) / ${Math.random() * 0.5 + 0.2})`,
                    transform: isHovered ? `scaleY(${Math.random() * 0.5 + 0.5})` : "scaleY(1)",
                  }}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Contribution activity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
