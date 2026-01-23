import { useState, useEffect } from "react";
import { Clock, ArrowRight, Bot, Smartphone, Coins, Wrench, Mail, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const categories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI", icon: <Bot className="h-4 w-4" /> },
  { id: "mobile", label: "Mobile", icon: <Smartphone className="h-4 w-4" /> },
  { id: "blockchain", label: "Blockchain", icon: <Coins className="h-4 w-4" /> },
  { id: "engineering", label: "Engineering", icon: <Wrench className="h-4 w-4" /> },
];

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  created_at: string;
  featured: boolean;
  gradient: string;
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, excerpt, category, read_time, created_at, featured, gradient")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching articles:", error);
    } else {
      setArticles(data || []);
    }
    setLoading(false);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribing(true);

    try {
      const { data, error } = await supabase.functions.invoke("newsletter-subscribe", {
        body: { email },
      });

      if (error) throw error;

      toast.success("Thanks for subscribing! You'll receive updates soon.");
      setEmail("");
    } catch (error: any) {
      toast.error(error.message || "Failed to subscribe. Please try again.");
    }
    setSubscribing(false);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate().toString().padStart(2, "0"),
      month: date.toLocaleString("en-US", { month: "short" }),
    };
  };

  const filteredArticles = articles.filter(
    (article) => activeCategory === "all" || article.category === activeCategory
  );

  const featuredArticles = filteredArticles.filter((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading articles...</div>
      </div>
    );
  }

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
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn("h-2 w-20 rounded-full bg-gradient-to-r", article.gradient)} />
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">{formatDate(article.created_at).day}</div>
                        <div className="text-xs text-muted-foreground uppercase">{formatDate(article.created_at).month}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {article.read_time}
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
          {filteredArticles.length === 0 ? (
            <div className="glass rounded-xl p-8 text-center">
              <p className="text-muted-foreground">No articles yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {regularArticles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.id}`}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <article className="glass-hover rounded-xl p-4 flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center w-12 flex-shrink-0">
                      <span className="text-lg font-bold text-foreground">{formatDate(article.created_at).day}</span>
                      <span className="text-xs text-muted-foreground uppercase">{formatDate(article.created_at).month}</span>
                    </div>
                    <div className={cn("h-12 w-1 rounded-full bg-gradient-to-b flex-shrink-0", article.gradient)} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">{article.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground flex-shrink-0">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.read_time}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Stay Updated Section */}
        <div className="mt-16 glass rounded-2xl p-8 animate-fade-in">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mx-auto mb-6">
              <Bell className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest articles on AI, mobile development, blockchain, and engineering delivered straight to your inbox.
            </p>
            <form 
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass border-muted-foreground/20 focus:border-primary"
                required
              />
              <Button type="submit" className="btn-neon flex-shrink-0" disabled={subscribing}>
                <Mail className="h-4 w-4 mr-2" />
                {subscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
