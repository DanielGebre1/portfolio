import { useEffect, useState } from "react";
import { Code, Layout, Server, Smartphone, Brain, Coins, Gamepad2, Wrench, Database, Cloud, Shield, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    gradient: "from-primary to-neon-blue",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C#", level: 82 },
      { name: "PHP", level: 80 },
      { name: "Solidity", level: 75 },
      { name: "SQL", level: 88 },
      { name: "Go", level: 65 },
      { name: "Rust", level: 55 },
    ],
  },
  {
    title: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    gradient: "from-accent to-neon-pink",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 78 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
      { name: "Three.js", level: 70 },
      { name: "SCSS/SASS", level: 88 },
      { name: "Redux", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    gradient: "from-neon-purple to-accent",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Laravel", level: 88 },
      { name: "FastAPI", level: 82 },
      { name: "Express.js", level: 88 },
      { name: "GraphQL", level: 80 },
      { name: "Django", level: 72 },
      { name: "NestJS", level: 75 },
    ],
  },
  {
    title: "Database",
    icon: <Database className="h-5 w-5" />,
    gradient: "from-neon-blue to-neon-purple",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "Supabase", level: 78 },
      { name: "Prisma", level: 80 },
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="h-5 w-5" />,
    gradient: "from-neon-pink to-primary",
    skills: [
      { name: "React Native", level: 88 },
      { name: "Flutter", level: 75 },
      { name: "iOS (Swift)", level: 70 },
      { name: "Android (Kotlin)", level: 68 },
      { name: "Expo", level: 85 },
      { name: "Ionic", level: 72 },
    ],
  },
  {
    title: "AI & ML",
    icon: <Brain className="h-5 w-5" />,
    gradient: "from-primary to-accent",
    skills: [
      { name: "OpenAI API", level: 92 },
      { name: "LangChain", level: 85 },
      { name: "Pinecone", level: 80 },
      { name: "TensorFlow", level: 70 },
      { name: "Hugging Face", level: 75 },
      { name: "RAG Pipelines", level: 88 },
      { name: "PyTorch", level: 68 },
      { name: "Anthropic", level: 82 },
    ],
  },
  {
    title: "Blockchain",
    icon: <Coins className="h-5 w-5" />,
    gradient: "from-neon-purple to-neon-blue",
    skills: [
      { name: "Solidity", level: 82 },
      { name: "Hardhat", level: 78 },
      { name: "Web3.js", level: 80 },
      { name: "Ethers.js", level: 82 },
      { name: "IPFS", level: 75 },
      { name: "TheGraph", level: 72 },
      { name: "Foundry", level: 65 },
    ],
  },
  {
    title: "Game Dev",
    icon: <Gamepad2 className="h-5 w-5" />,
    gradient: "from-neon-pink to-neon-purple",
    skills: [
      { name: "Unity", level: 85 },
      { name: "C#", level: 82 },
      { name: "Blender", level: 70 },
      { name: "Shader Graph", level: 68 },
      { name: "Photon Networking", level: 72 },
      { name: "Procedural Gen", level: 75 },
      { name: "Unreal Engine", level: 55 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    gradient: "from-neon-blue to-primary",
    skills: [
      { name: "AWS", level: 82 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "Vercel", level: 90 },
      { name: "CI/CD", level: 82 },
      { name: "Terraform", level: 65 },
      { name: "GitHub Actions", level: 85 },
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    gradient: "from-accent to-primary",
    skills: [
      { name: "Git", level: 95 },
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 88 },
      { name: "Jira", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Vim", level: 72 },
    ],
  },
  {
    title: "Design",
    icon: <Palette className="h-5 w-5" />,
    gradient: "from-neon-pink to-accent",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 75 },
      { name: "Photoshop", level: 72 },
      { name: "UI/UX Design", level: 80 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "Testing & Security",
    icon: <Shield className="h-5 w-5" />,
    gradient: "from-primary to-neon-purple",
    skills: [
      { name: "Jest", level: 85 },
      { name: "Cypress", level: 78 },
      { name: "Playwright", level: 75 },
      { name: "OWASP", level: 70 },
      { name: "Penetration Testing", level: 65 },
    ],
  },
];

function AnimatedProgressBar({ level, gradient, delay }: { level: number; gradient: string; delay: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="h-1.5 rounded-full bg-muted/30 overflow-hidden">
      <div
        className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out", gradient)}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Skills</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive toolkit spanning frontend, backend, mobile, AI, blockchain, game development, and more.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-hover rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.05}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={cn("h-10 w-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white", category.gradient)}>
                  {category.icon}
                </div>
                <h2 className="font-semibold text-foreground">{category.title}</h2>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground/70">{skill.level}%</span>
                    </div>
                    <AnimatedProgressBar 
                      level={skill.level} 
                      gradient={category.gradient}
                      delay={(categoryIndex * 80) + (skillIndex * 40) + 200}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Technologies */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Other Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "REST APIs", "WebSockets", "gRPC", "Microservices", "Event Sourcing", 
              "CQRS", "DDD", "TDD", "Clean Architecture", "OAuth2", "JWT", 
              "Elasticsearch", "RabbitMQ", "Kafka", "MongoDB", "Firebase", 
              "Supabase", "Vercel", "Netlify", "GitHub Actions", "Jest", 
              "Cypress", "Storybook", "Figma", "Linear", "Notion"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}