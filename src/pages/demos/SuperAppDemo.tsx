import { useState } from "react";
import { Smartphone, CreditCard, ShoppingBag, MapPin, Users, Bell, Home, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { icon: ShoppingBag, name: "Shop", color: "from-orange-500 to-red-500" },
  { icon: CreditCard, name: "Pay", color: "from-green-500 to-emerald-500" },
  { icon: MapPin, name: "Delivery", color: "from-blue-500 to-cyan-500" },
  { icon: Users, name: "Social", color: "from-purple-500 to-pink-500" },
];

const recentActivity = [
  { type: "payment", title: "Payment to John Doe", amount: "-$50.00", time: "2 min ago" },
  { type: "order", title: "Order #12345 delivered", amount: "", time: "1 hour ago" },
  { type: "social", title: "Sarah liked your post", amount: "", time: "3 hours ago" },
];

export default function SuperAppDemo() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/projects" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-neon-pink flex items-center justify-center text-white">
              <Smartphone className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Super App Platform</h1>
              <p className="text-muted-foreground">Multi-service mobile platform for 1M+ users</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["React Native", "Laravel", "Redis", "AWS", "PostgreSQL"].map(tech => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center mb-12">
          <div className="relative w-[320px] h-[640px] bg-card rounded-[40px] border-4 border-border shadow-2xl overflow-hidden animate-fade-in stagger-1">
            {/* Status Bar */}
            <div className="h-12 bg-background flex items-center justify-between px-6">
              <span className="text-xs text-muted-foreground">9:41</span>
              <div className="w-20 h-6 bg-muted rounded-full" />
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-muted-foreground rounded-sm" />
                <div className="w-4 h-2 bg-muted-foreground rounded-sm" />
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 h-[calc(100%-112px)] overflow-y-auto">
              {/* Welcome */}
              <div className="mb-6">
                <p className="text-muted-foreground text-sm">Good morning,</p>
                <h2 className="text-xl font-bold text-foreground">Alex Johnson</h2>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {services.map((service) => (
                  <button key={service.name} className="flex flex-col items-center gap-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs text-muted-foreground">{service.name}</span>
                  </button>
                ))}
              </div>

              {/* Balance Card */}
              <div className="bg-gradient-to-r from-accent to-neon-pink rounded-2xl p-4 mb-6 text-white">
                <p className="text-sm opacity-80">Total Balance</p>
                <p className="text-2xl font-bold">$12,458.00</p>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="secondary" className="flex-1 bg-white/20 hover:bg-white/30 text-white border-0">
                    Send
                  </Button>
                  <Button size="sm" variant="secondary" className="flex-1 bg-white/20 hover:bg-white/30 text-white border-0">
                    Request
                  </Button>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                      {item.amount && (
                        <span className="text-sm font-semibold text-foreground">{item.amount}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-card border-t border-border flex items-center justify-around px-4">
              {[
                { icon: Home, label: "Home" },
                { icon: Search, label: "Search" },
                { icon: Bell, label: "Alerts" },
                { icon: User, label: "Profile" },
              ].map((item) => (
                <button key={item.label} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 animate-fade-in stagger-2">
          {[
            { label: "Active Users", value: "1.2M+" },
            { label: "Daily Transactions", value: "500K+" },
            { label: "App Rating", value: "4.8★" },
            { label: "Countries", value: "15" },
          ].map((stat) => (
            <div key={stat.label} className="glass p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
