import { Bot, FileCode, Coins, Gamepad2, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const demos = [
  {
    title: "AI Chat Demo",
    description: "Interactive conversation with a custom-trained AI assistant. Try asking about coding, architecture, or tech topics.",
    icon: <Bot className="h-6 w-6" />,
    gradient: "from-primary to-neon-blue",
    status: "live",
    tags: ["GPT-4", "Streaming", "RAG"],
  },
  {
    title: "Smart Contract Sandbox",
    description: "Deploy and interact with sample smart contracts on a testnet. Explore DeFi primitives and token mechanics.",
    icon: <Coins className="h-6 w-6" />,
    gradient: "from-neon-purple to-accent",
    status: "live",
    tags: ["Solidity", "Testnet", "Web3"],
  },
  {
    title: "Game AI Simulation",
    description: "Watch AI agents learn and compete in a simulated environment. Observe behavior trees and decision making.",
    icon: <Gamepad2 className="h-6 w-6" />,
    gradient: "from-neon-pink to-primary",
    status: "coming-soon",
    tags: ["Unity WebGL", "ML Agents", "Pathfinding"],
  },
  {
    title: "Code Experiments",
    description: "Collection of interactive code snippets and mini-projects. Algorithms, animations, and creative coding.",
    icon: <FileCode className="h-6 w-6" />,
    gradient: "from-accent to-neon-pink",
    status: "live",
    tags: ["Canvas", "WebGL", "Algorithms"],
  },
];

export default function Playground() {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-primary text-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Experimental Lab
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Playground</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Interactive demos and experiments. Play with AI, blockchain, games, and creative code in your browser.
          </p>
        </div>

        {/* Demos Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow */}
              <div className={cn("absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500", demo.gradient)} />

              {/* Card */}
              <div className="relative glass-hover rounded-2xl p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={cn("h-14 w-14 rounded-xl bg-gradient-to-br flex items-center justify-center text-white", demo.gradient)}>
                    {demo.icon}
                  </div>
                  <span className={cn(
                    "px-2 py-1 text-xs rounded-full font-medium",
                    demo.status === "live"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  )}>
                    {demo.status === "live" ? "Live" : "Coming Soon"}
                  </span>
                </div>

                {/* Content */}
                <h2 className="text-xl font-semibold text-foreground mb-2">{demo.title}</h2>
                <p className="text-muted-foreground mb-4 flex-1">{demo.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {demo.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <Button
                  className={cn(
                    "w-full group/btn",
                    demo.status === "live" ? "btn-neon" : "glass opacity-50 cursor-not-allowed"
                  )}
                  disabled={demo.status !== "live"}
                >
                  <span className="flex items-center gap-2">
                    {demo.status === "live" ? (
                      <>
                        <Play className="h-4 w-4" />
                        Try it now
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </>
                    ) : (
                      "Coming Soon"
                    )}
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Notes */}
        <div className="mt-16 glass rounded-2xl p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-4">Lab Notes</h2>
          <p className="text-muted-foreground mb-6">
            This playground is constantly evolving. Here are some experiments in the pipeline:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Real-time collaborative code editor with AI assistance
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Cross-chain bridge simulation for DeFi education
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-pink" />
              Procedural terrain generator with shader visualization
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-purple" />
              Voice-controlled AI coding assistant demo
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
