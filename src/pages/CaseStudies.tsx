import { Bot, Smartphone, Coins, Gamepad2, Briefcase, LayoutDashboard, GraduationCap } from "lucide-react";
import { AIArchitecture, MobileArchitecture, BlockchainArchitecture, GameArchitecture } from "@/components/home/ArchitectureDiagrams";

const caseStudies = [
  {
    id: 1,
    title: "AI Assistant Platform",
    year: "2024",
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
    architecture: "ai",
  },
  {
    id: 2,
    title: "Super App Platform",
    year: "2023",
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
    architecture: "mobile",
  },
  {
    id: 3,
    title: "DeFi Crowdfunding",
    year: "2023",
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
    architecture: "blockchain",
  },
  {
    id: 4,
    title: "3D Action RPG",
    year: "2022",
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
    architecture: "game",
  },
  {
    id: 5,
    title: "Job & Scholarship Platform",
    year: "2024",
    icon: <Briefcase className="h-6 w-6" />,
    gradient: "from-primary to-neon-purple",
    problem: "Job seekers and scholarship applicants lack a unified platform with intelligent matching and streamlined workflows.",
    solution: "Built enterprise CRUD system with role-based access, AI resume screening, job-candidate matching scores, and complete application tracking.",
    techStack: ["React", "Next.js", "Laravel", "AI Resume Analyzer", "Cloud Storage"],
    challenges: [
      "Designing complex role-based permission systems (Applicant, Employer, Admin)",
      "Implementing accurate AI resume screening and matching algorithms",
      "Building scalable notification system for application status updates",
    ],
    lessons: [
      "Clear workflow visualization improves user completion rates",
      "AI screening should augment, not replace, human decision-making",
      "Real-time status updates reduce support inquiries significantly",
    ],
    architecture: "enterprise",
  },
  {
    id: 6,
    title: "Enterprise Admin Dashboard",
    year: "2024",
    icon: <LayoutDashboard className="h-6 w-6" />,
    gradient: "from-neon-blue to-neon-purple",
    problem: "Organizations needed centralized control over users, analytics, and system operations with granular permissions.",
    solution: "Developed comprehensive admin system with RBAC, real-time analytics dashboards, system logs, and audit trails.",
    techStack: ["React", "Laravel", "Charts", "RBAC", "System Logs"],
    challenges: [
      "Implementing flexible role-based access control without complexity",
      "Optimizing dashboard performance with large datasets",
      "Ensuring audit compliance with detailed activity logging",
    ],
    lessons: [
      "Hierarchical permissions scale better than flat permission lists",
      "Data aggregation at write-time improves dashboard load speed",
      "Admin audit logs are critical for security and debugging",
    ],
    architecture: "enterprise",
  },
  {
    id: 7,
    title: "AI Learning Management System",
    year: "2024",
    icon: <GraduationCap className="h-6 w-6" />,
    gradient: "from-accent to-primary",
    problem: "Traditional LMS platforms lack personalization and fail to adapt to individual learning styles and paces.",
    solution: "Created AI-powered LMS with intelligent tutoring, personalized learning paths, adaptive quizzes, and progress analytics.",
    techStack: ["Next.js", "Laravel", "AI Tutor", "Progress Tracking", "Analytics"],
    challenges: [
      "Training AI tutor to provide contextually relevant explanations",
      "Balancing adaptive difficulty without frustrating learners",
      "Designing effective progress visualization for varied content types",
    ],
    lessons: [
      "Micro-learning content keeps engagement higher than long modules",
      "AI explanations work best when combined with human-created content",
      "Gamification elements significantly boost course completion rates",
    ],
    architecture: "ai",
  },
];

function getArchitectureDiagram(type: string) {
  switch (type) {
    case "ai":
      return <AIArchitecture />;
    case "mobile":
      return <MobileArchitecture />;
    case "blockchain":
      return <BlockchainArchitecture />;
    case "game":
      return <GameArchitecture />;
    case "enterprise":
      return <EnterpriseArchitecture />;
    default:
      return <AIArchitecture />;
  }
}

function EnterpriseArchitecture() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" className="text-neon-purple">
      {/* Frontend */}
      <rect x="75" y="5" width="50" height="22" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="19" textAnchor="middle" className="text-[7px] fill-current">Dashboard</text>
      
      {/* API Gateway */}
      <rect x="60" y="35" width="80" height="20" rx="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="48" textAnchor="middle" className="text-[6px] fill-current">API Gateway + Auth</text>
      
      {/* Services */}
      <rect x="10" y="65" width="40" height="18" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="30" y="77" textAnchor="middle" className="text-[5px] fill-current">Users</text>
      
      <rect x="55" y="65" width="40" height="18" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="75" y="77" textAnchor="middle" className="text-[5px] fill-current">Analytics</text>
      
      <rect x="100" y="65" width="40" height="18" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="120" y="77" textAnchor="middle" className="text-[5px] fill-current">Logs</text>
      
      <rect x="145" y="65" width="45" height="18" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="167" y="77" textAnchor="middle" className="text-[5px] fill-current">RBAC</text>
      
      {/* Database */}
      <ellipse cx="100" cy="105" rx="35" ry="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="108" textAnchor="middle" className="text-[6px] fill-current">PostgreSQL</text>
      
      {/* Lines */}
      <path d="M100 27 L100 35" stroke="currentColor" strokeWidth="1" />
      <path d="M100 55 L30 65" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 55 L75 65" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 55 L120 65" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 55 L167 65" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M100 83 L100 95" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
    </svg>
  );
}

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
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground">{study.title}</h2>
                      <span className="text-sm text-muted-foreground">{study.year}</span>
                    </div>
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

                  {/* Architecture Diagram */}
                  <div className="mb-6 p-6 rounded-xl bg-muted/30 border border-border/30">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 text-center">
                      Architecture Overview
                    </h3>
                    <div className="flex justify-center">
                      {getArchitectureDiagram(study.architecture)}
                    </div>
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
