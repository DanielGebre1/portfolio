import { useState } from "react";
import { Bot, Send, Sparkles, Brain, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const features = [
  { icon: Brain, title: "Custom Training", description: "Train on your own data for domain-specific responses" },
  { icon: MessageSquare, title: "Multi-modal Inputs", description: "Process text, images, and documents seamlessly" },
  { icon: Zap, title: "RAG Pipeline", description: "Advanced retrieval-augmented generation for accurate answers" },
  { icon: Sparkles, title: "Context Aware", description: "Maintains conversation context across sessions" },
];

const sampleMessages = [
  { role: "user", content: "Explain quantum computing in simple terms" },
  { role: "assistant", content: "Quantum computing harnesses quantum mechanics to process information. Unlike classical bits (0 or 1), quantum bits or 'qubits' can exist in multiple states simultaneously through superposition. This allows quantum computers to explore many solutions at once, making them exponentially faster for certain problems like cryptography and drug discovery." },
  { role: "user", content: "What are its practical applications?" },
  { role: "assistant", content: "Key applications include: 1) Drug discovery - simulating molecular interactions, 2) Financial modeling - optimizing portfolios, 3) Cryptography - breaking and creating secure codes, 4) Climate modeling - complex weather predictions, 5) Supply chain optimization - solving logistics problems efficiently." },
];

export default function AIAssistantDemo() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(sampleMessages);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "This is a demo response. In production, this would connect to our AI backend with custom training and RAG pipeline integration." 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/projects" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-neon-blue flex items-center justify-center text-white">
              <Bot className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">AI Assistant Platform</h1>
              <p className="text-muted-foreground">Enterprise-grade conversational AI</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["OpenAI", "LangChain", "Next.js", "Python", "Pinecone"].map(tech => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass p-4 rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Demo Chat Interface */}
        <div className="glass rounded-2xl overflow-hidden animate-fade-in stagger-2">
          <div className="bg-card/80 px-6 py-4 border-b border-border/30">
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Live Demo
            </h2>
          </div>
          
          <div className="h-[400px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border/30 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask something..."
              className="flex-1 bg-muted/50 border-border/50"
            />
            <Button onClick={handleSend} className="bg-primary hover:bg-primary/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
