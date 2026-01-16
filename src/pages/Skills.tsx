import { Code, Layout, Server, Smartphone, Brain, Coins, Gamepad2, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    gradient: "from-primary to-neon-blue",
    skills: ["JavaScript", "TypeScript", "Python", "C#", "PHP", "Solidity", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    gradient: "from-accent to-neon-pink",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    gradient: "from-neon-purple to-accent",
    skills: ["Node.js", "Laravel", "FastAPI", "GraphQL", "PostgreSQL", "Redis", "MongoDB"],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="h-5 w-5" />,
    gradient: "from-neon-pink to-primary",
    skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Expo"],
  },
  {
    title: "AI & ML",
    icon: <Brain className="h-5 w-5" />,
    gradient: "from-primary to-accent",
    skills: ["OpenAI API", "LangChain", "Pinecone", "TensorFlow", "Hugging Face", "RAG Pipelines"],
  },
  {
    title: "Blockchain",
    icon: <Coins className="h-5 w-5" />,
    gradient: "from-neon-purple to-neon-blue",
    skills: ["Solidity", "Hardhat", "Web3.js", "Ethers.js", "IPFS", "TheGraph"],
  },
  {
    title: "Game Dev",
    icon: <Gamepad2 className="h-5 w-5" />,
    gradient: "from-neon-pink to-neon-purple",
    skills: ["Unity", "C#", "Blender", "Shader Graph", "Photon Networking", "Procedural Generation"],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="h-5 w-5" />,
    gradient: "from-neon-blue to-primary",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Figma", "Linux"],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Skills</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive toolkit spanning frontend, backend, mobile, AI, blockchain, and game development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-hover rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("h-10 w-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white", category.gradient)}>
                  {category.icon}
                </div>
                <h2 className="font-semibold text-foreground">{category.title}</h2>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Level */}
        <div className="mt-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-8">Primary Expertise</h2>
          <div className="space-y-4">
            {[
              { skill: "Full-Stack Development", level: 95, color: "bg-primary" },
              { skill: "AI/ML Integration", level: 88, color: "bg-accent" },
              { skill: "Mobile Development", level: 85, color: "bg-neon-pink" },
              { skill: "Blockchain/Web3", level: 82, color: "bg-neon-purple" },
              { skill: "Game Development", level: 78, color: "bg-neon-blue" },
            ].map((item, index) => (
              <div key={item.skill} className="animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div
                    className={cn("h-full rounded-full transition-all duration-1000 ease-out", item.color)}
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
