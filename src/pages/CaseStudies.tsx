import { Bot, Smartphone, Coins, Gamepad2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "AI Assistant Platform",
    icon: <Bot className="h-6 w-6" />,
    gradient: "from-primary to-neon-blue",
    problem: "Enterprise clients needed a conversational AI that could understand domain-specific terminology and integrate with existing systems.",
    solution: "Built a custom RAG pipeline with fine-tuned embeddings, multi-turn conversation memory, and seamless API integrations.",
    techStack: ["OpenAI GPT-4", "LangChain", "Pinecone", "Next.js", "Python FastAPI"],
    challenges: [
      "Optimizing response latency for real-time conversations",
      "Implementing accurate context retrieval across large document sets",
      "Ensuring data privacy and compliance requirements",
    ],
    lessons: [
      "Chunking strategy significantly impacts retrieval accuracy",
      "Hybrid search (semantic + keyword) outperforms pure vector search",
      "Streaming responses dramatically improve perceived performance",
    ],
  },
  {
    id: 2,
    title: "Super App Platform",
    icon: <Smartphone className="h-6 w-6" />,
    gradient: "from-accent to-neon-pink",
    problem: "Create a unified mobile platform consolidating multiple services (payments, delivery, social) for millions of users.",
    solution: "Designed microservices architecture with event-driven communication, real-time sync, and optimized mobile experience.",
    techStack: ["React Native", "Laravel", "Redis", "PostgreSQL", "AWS"],
    challenges: [
      "Handling concurrent transactions at scale",
      "Maintaining consistent state across offline/online modes",
      "Coordinating multiple third-party service integrations",
    ],
    lessons: [
      "Event sourcing enables reliable audit trails and debugging",
      "Optimistic UI updates with proper reconciliation improve UX",
      "Feature flags are essential for gradual rollouts",
    ],
  },
  {
    id: 3,
    title: "DeFi Crowdfunding",
    icon: <Coins className="h-6 w-6" />,
    gradient: "from-neon-purple to-accent",
    problem: "Traditional crowdfunding lacks transparency in fund usage. Backers have no control once funds are transferred.",
    solution: "Implemented milestone-based smart contracts with decentralized voting for fund release and automatic refund mechanisms.",
    techStack: ["Solidity", "Hardhat", "Web3.js", "IPFS", "TheGraph", "React"],
    challenges: [
      "Designing gas-efficient smart contract architecture",
      "Implementing secure upgrade patterns without compromising decentralization",
      "Building intuitive UX for non-crypto-native users",
    ],
    lessons: [
      "Thorough testing and audits are non-negotiable for DeFi",
      "Layer 2 solutions essential for mainstream adoption",
      "Clear error messages reduce user support burden",
    ],
  },
  {
    id: 4,
    title: "3D Action RPG",
    icon: <Gamepad2 className="h-6 w-6" />,
    gradient: "from-neon-pink to-primary",
    problem: "Create an engaging action game with intelligent enemy AI, smooth combat, and replayable procedural content.",
    solution: "Developed behavior trees for enemy AI, physics-based combat system, and procedural dungeon generator with hand-crafted elements.",
    techStack: ["Unity", "C#", "Photon Networking", "Blender", "Shader Graph"],
    challenges: [
      "Balancing AI difficulty to be challenging but fair",
      "Optimizing rendering for target frame rate on mobile",
      "Synchronizing physics-based combat in multiplayer",
    ],
    lessons: [
      "Player feedback (animations, sounds) is as important as mechanics",
      "Procedural + handcrafted hybrid creates best content variety",
      "Early performance profiling saves massive refactoring later",
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Deep dives into the engineering challenges, solutions, and lessons learned from key projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-neon-purple hidden md:block" />

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 hidden md:block">
                  <div className={`h-4 w-4 rounded-full bg-gradient-to-br ${study.gradient}`} />
                </div>

                {/* Card */}
                <div className="md:ml-20 glass-hover rounded-2xl p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center text-white`}>
                      {study.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{study.title}</h2>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Problem
                      </h3>
                      <p className="text-muted-foreground">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                        Solution
                      </h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Architecture Placeholder */}
                  <div className="mb-6 p-6 rounded-xl bg-muted/30 border border-border/30">
                    <p className="text-sm text-muted-foreground text-center">
                      📐 Architecture Diagram
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Lessons */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Challenges
                      </h3>
                      <ul className="space-y-2">
                        {study.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Lessons Learned
                      </h3>
                      <ul className="space-y-2">
                        {study.lessons.map((lesson, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-accent mt-1">✓</span>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
