import { useState } from "react";
import { Bot, Smartphone, Coins, Gamepad2, Globe, Database, ExternalLink, Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI Systems" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "blockchain", label: "Blockchain" },
  { id: "games", label: "Games" },
  { id: "fullstack", label: "Full-Stack" },
];

const projects = [
  {
    id: "ai-assistant",
    title: "AI Assistant Platform",
    description: "Enterprise-grade conversational AI with custom training, multi-modal inputs, and advanced RAG pipeline.",
    icon: <Bot className="h-6 w-6" />,
    category: "ai",
    techStack: ["OpenAI", "LangChain", "Next.js", "Python", "Pinecone"],
    demoUrl: "/demo/ai-assistant",
    githubUrl: "#",
    gradient: "from-primary to-neon-blue",
  },
  {
    id: "super-app",
    title: "Super App Platform",
    description: "Multi-service mobile platform handling 1M+ users with payments, delivery, and social features.",
    icon: <Smartphone className="h-6 w-6" />,
    category: "mobile",
    techStack: ["React Native", "Laravel", "Redis", "AWS", "PostgreSQL"],
    demoUrl: "/demo/super-app",
    githubUrl: "#",
    gradient: "from-accent to-neon-pink",
  },
  {
    id: "blockchain-crowdfunding",
    title: "DeFi Crowdfunding",
    description: "Decentralized fundraising with smart contracts, milestone-based releases, and token governance.",
    icon: <Coins className="h-6 w-6" />,
    category: "blockchain",
    techStack: ["Solidity", "Hardhat", "Web3.js", "IPFS", "TheGraph"],
    demoUrl: "/demo/blockchain",
    githubUrl: "#",
    gradient: "from-neon-purple to-accent",
  },
  {
    id: "unity-game",
    title: "3D Action RPG",
    description: "Immersive action game with advanced AI, procedural generation, and real-time multiplayer.",
    icon: <Gamepad2 className="h-6 w-6" />,
    category: "games",
    techStack: ["Unity", "C#", "Photon", "Blender", "Shader Graph"],
    demoUrl: "/demo/unity-game",
    githubUrl: "#",
    gradient: "from-neon-pink to-primary",
  },
  {
    id: "saas-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time analytics platform with custom visualizations and automated reporting.",
    icon: <Globe className="h-6 w-6" />,
    category: "fullstack",
    techStack: ["React", "Node.js", "D3.js", "ClickHouse", "Redis"],
    demoUrl: "/demo/analytics",
    githubUrl: "#",
    gradient: "from-neon-blue to-primary",
  },
  {
    id: "ai-image-gen",
    title: "AI Image Generator",
    description: "Text-to-image generation with style transfer, inpainting, and batch processing capabilities.",
    icon: <Bot className="h-6 w-6" />,
    category: "ai",
    techStack: ["Stable Diffusion", "FastAPI", "Redis", "S3", "React"],
    demoUrl: "/demo/ai-image",
    githubUrl: "#",
    gradient: "from-primary to-accent",
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    description: "Multi-chain NFT platform with lazy minting, auctions, and creator royalties.",
    icon: <Coins className="h-6 w-6" />,
    category: "blockchain",
    techStack: ["Solidity", "Next.js", "Moralis", "IPFS", "Polygon"],
    demoUrl: "/demo/nft-marketplace",
    githubUrl: "#",
    gradient: "from-accent to-neon-purple",
  },
  {
    id: "fitness-app",
    title: "Fitness Tracker",
    description: "Cross-platform fitness app with AI-powered workout plans and progress tracking.",
    icon: <Smartphone className="h-6 w-6" />,
    category: "mobile",
    techStack: ["Flutter", "Firebase", "TensorFlow Lite", "HealthKit"],
    demoUrl: "/demo/fitness-app",
    githubUrl: "#",
    gradient: "from-neon-pink to-accent",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of industry-level projects spanning AI, mobile, blockchain, and game development.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12 animate-fade-in stagger-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              className="group glass-hover rounded-2xl p-6 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={cn("h-12 w-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white", project.gradient)}>
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-border/30">
                <Button variant="ghost" size="sm" className="flex-1 text-primary hover:text-primary hover:bg-primary/10" asChild>
                  <Link to={project.demoUrl}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
