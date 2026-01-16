import { Bot, Smartphone, Coins, Gamepad2, Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingEffect } from "@/components/home/TypingEffect";
import { TechStatusCard } from "@/components/home/TechStatusCard";
import { ProjectCard } from "@/components/home/ProjectCard";
import { Link } from "react-router-dom";

const techStack = [
  "JavaScript",
  "TypeScript",
  "C#",
  "Laravel",
  "React",
  "Next.js",
  "Unity",
  "OpenAI",
  "Solidity",
];

const projects = [
  {
    title: "AI Assistant",
    description: "Intelligent conversational AI powered by GPT-4 with custom training, RAG pipeline, and real-time responses.",
    icon: <Bot className="h-6 w-6" />,
    techStack: ["OpenAI", "Next.js", "Python", "Vector DB"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "/case-studies",
    gradient: "bg-gradient-to-br from-primary to-neon-blue",
  },
  {
    title: "Super App",
    description: "Multi-service mobile platform with payments, delivery, social features, and marketplace integration.",
    icon: <Smartphone className="h-6 w-6" />,
    techStack: ["React Native", "Laravel", "Redis", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "/case-studies",
    gradient: "bg-gradient-to-br from-accent to-neon-pink",
  },
  {
    title: "Blockchain Crowdfunding",
    description: "Decentralized fundraising platform with smart contracts, transparent transactions, and token rewards.",
    icon: <Coins className="h-6 w-6" />,
    techStack: ["Solidity", "Web3.js", "IPFS", "Hardhat"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "/case-studies",
    gradient: "bg-gradient-to-br from-neon-purple to-accent",
  },
  {
    title: "Unity Action Game",
    description: "3D action-adventure game with advanced AI, physics-based combat, and procedural level generation.",
    icon: <Gamepad2 className="h-6 w-6" />,
    techStack: ["Unity", "C#", "Blender", "Shader Graph"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "/case-studies",
    gradient: "bg-gradient-to-br from-neon-pink to-primary",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 px-6 lg:px-12 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-mono text-sm tracking-wider uppercase animate-fade-in">
                  Software Engineer
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in stagger-1">
                  Building{" "}
                  <span className="block h-16 md:h-20">
                    <TypingEffect />
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in stagger-2">
                  Crafting innovative solutions across mobile, blockchain, and game
                  development. Passionate about pushing technological boundaries.
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 animate-fade-in stagger-3">
                {techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in stagger-4">
                <Button asChild className="btn-neon group">
                  <Link to="/projects">
                    <span className="flex items-center gap-2">
                      View Projects
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
                <Button variant="outline" className="glass border-primary/30 hover:bg-primary/10 hover:border-primary">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 animate-fade-in stagger-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 border border-transparent transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 border border-transparent transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Tech Status Card */}
            <div className="flex justify-center lg:justify-end animate-fade-in stagger-3">
              <TechStatusCard />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Industry-Level Projects
              </h2>
              <p className="text-muted-foreground">
                Explore my featured work
              </p>
            </div>
            <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
              <Link to="/projects">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
