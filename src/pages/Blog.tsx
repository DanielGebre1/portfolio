import { useState } from "react";
import { Clock, ArrowRight, Bot, Smartphone, Coins, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI", icon: <Bot className="h-4 w-4" /> },
  { id: "mobile", label: "Mobile", icon: <Smartphone className="h-4 w-4" /> },
  { id: "blockchain", label: "Blockchain", icon: <Coins className="h-4 w-4" /> },
  { id: "engineering", label: "Engineering", icon: <Wrench className="h-4 w-4" /> },
];

const articles = [
  {
    id: 1,
    title: "Building Production-Ready RAG Pipelines",
    excerpt: "A deep dive into retrieval-augmented generation, from chunking strategies to hybrid search implementations.",
    category: "ai",
    readTime: "12 min",
    date: "2024-01-15",
    featured: true,
    gradient: "from-primary to-neon-blue",
  },
  {
    id: 2,
    title: "Optimizing React Native for 60 FPS",
    excerpt: "Performance techniques for smooth animations and responsive UIs in cross-platform mobile apps.",
    category: "mobile",
    readTime: "8 min",
    date: "2024-01-10",
    featured: true,
    gradient: "from-accent to-neon-pink",
  },
  {
    id: 3,
    title: "Smart Contract Security Patterns",
    excerpt: "Common vulnerabilities and battle-tested patterns for writing secure Solidity code.",
    category: "blockchain",
    readTime: "15 min",
    date: "2024-01-05",
    featured: false,
    gradient: "from-neon-purple to-accent",
  },
  {
    id: 4,
    title: "Designing Microservices for Scale",
    excerpt: "Architecture decisions, communication patterns, and lessons from scaling to millions of users.",
    category: "engineering",
    readTime: "10 min",
    date: "2023-12-28",
    featured: false,
    gradient: "from-neon-blue to-primary",
  },
  {
    id: 5,
    title: "Fine-tuning LLMs for Domain-Specific Tasks",
    excerpt: "Practical guide to customizing language models for specialized applications with limited data.",
    category: "ai",
    readTime: "14 min",
    date: "2023-12-20",
    featured: false,
    gradient: "from-primary to-accent",
  },
  {
    id: 6,
    title: "State Management in Large Mobile Apps",
    excerpt: "Comparing approaches and finding the right balance between simplicity and power.",
    category: "mobile",
    readTime: "9 min",
    date: "2023-12-15",
    featured: false,
    gradient: "from-neon-pink to-neon-purple",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = articles.filter(
    (article) => activeCategory === "all" || article.category === activeCategory
  );

  const featuredArticles = filteredArticles.filter((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Technical deep dives, tutorials, and insights from building software across AI, mobile, and blockchain.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12 animate-fade-in stagger-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Featured
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.id}`}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <article className="glass-hover rounded-2xl p-6 h-full flex flex-col">
                    <div className={cn("h-2 w-20 rounded-full bg-gradient-to-r mb-4", article.gradient)} />
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                      <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            All Articles
          </h2>
          <div className="space-y-4">
            {regularArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="glass-hover rounded-xl p-4 flex items-center gap-4">
                  <div className={cn("h-12 w-1 rounded-full bg-gradient-to-b flex-shrink-0", article.gradient)} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">{article.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground flex-shrink-0">
                    <span className="hidden sm:inline">{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
