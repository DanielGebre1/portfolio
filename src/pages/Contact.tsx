import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have an exciting project or opportunity? Let's discuss how we can build something impactful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in stagger-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="glass border-border/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="glass border-border/30 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="glass border-border/30 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                  className="glass border-border/30 focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" className="w-full btn-neon" disabled={isSubmitting}>
                <span className="flex items-center gap-2">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in stagger-2">
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="glass rounded-xl p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@example.com" className="font-medium text-foreground hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="glass rounded-xl p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Remote / Worldwide</p>
                </div>
              </div>

              <div className="glass rounded-xl p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-neon-purple/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-neon-purple" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                  <p className="font-medium text-foreground">Open to opportunities</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="h-12 w-12 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="glass rounded-xl p-6 border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for new projects</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Let's build something impactful
              </h3>
              <p className="text-muted-foreground">
                Whether it's AI, mobile, blockchain, or games — I'm ready to tackle complex engineering challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
