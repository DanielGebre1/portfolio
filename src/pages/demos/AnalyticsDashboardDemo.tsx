import { useState } from "react";
import { Globe, TrendingUp, Users, DollarSign, Activity, BarChart3, PieChart, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const metrics = [
  { label: "Total Revenue", value: "$124,592", change: "+12.5%", positive: true, icon: DollarSign },
  { label: "Active Users", value: "8,462", change: "+8.2%", positive: true, icon: Users },
  { label: "Conversion Rate", value: "3.24%", change: "-0.4%", positive: false, icon: TrendingUp },
  { label: "Avg. Session", value: "4m 32s", change: "+15.3%", positive: true, icon: Activity },
];

const chartData = [
  { month: "Jan", revenue: 4000, users: 2400 },
  { month: "Feb", revenue: 3000, users: 1398 },
  { month: "Mar", revenue: 5000, users: 9800 },
  { month: "Apr", revenue: 2780, users: 3908 },
  { month: "May", revenue: 1890, users: 4800 },
  { month: "Jun", revenue: 6390, users: 3800 },
];

const trafficSources = [
  { source: "Organic Search", percentage: 42, color: "bg-primary" },
  { source: "Direct", percentage: 28, color: "bg-accent" },
  { source: "Social Media", percentage: 18, color: "bg-neon-pink" },
  { source: "Referral", percentage: 12, color: "bg-neon-blue" },
];

export default function AnalyticsDashboardDemo() {
  const [timeRange, setTimeRange] = useState("7d");

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/projects" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-neon-blue to-primary flex items-center justify-center text-white">
              <Globe className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Real-time analytics with custom visualizations</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Node.js", "D3.js", "ClickHouse", "Redis"].map(tech => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full bg-neon-blue/10 text-primary border border-primary/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Time Range Selector */}
        <div className="flex gap-2 mb-8 animate-fade-in stagger-1">
          {["24h", "7d", "30d", "90d"].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? "default" : "ghost"}
              size="sm"
              onClick={() => setTimeRange(range)}
              className={timeRange === range ? "bg-primary" : ""}
            >
              {range}
            </Button>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="glass p-6 rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <metric.icon className="h-5 w-5 text-primary" />
                </div>
                <span className={`text-sm flex items-center gap-1 ${metric.positive ? "text-green-500" : "text-red-500"}`}>
                  {metric.positive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                  {metric.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 glass p-6 rounded-xl animate-fade-in stagger-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Revenue Overview
              </h3>
            </div>
            <div className="h-64 flex items-end gap-3">
              {chartData.map((data, index) => (
                <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all duration-500 hover:from-primary/80"
                    style={{ height: `${(data.revenue / 7000) * 100}%` }}
                  />
                  <span className="text-xs text-muted-foreground">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="glass p-6 rounded-xl animate-fade-in stagger-2">
            <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
              <PieChart className="h-5 w-5 text-primary" />
              Traffic Sources
            </h3>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{source.source}</span>
                    <span className="text-foreground font-medium">{source.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${source.color} rounded-full transition-all duration-500`}
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Activity */}
        <div className="glass p-6 rounded-xl animate-fade-in stagger-3">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-green-500 animate-pulse" />
            Live Activity
          </h3>
          <div className="space-y-3">
            {[
              { action: "New user signup", location: "San Francisco, US", time: "Just now" },
              { action: "Purchase completed", location: "London, UK", time: "2 min ago" },
              { action: "Page view - /pricing", location: "Tokyo, JP", time: "3 min ago" },
              { action: "Feature activated", location: "Berlin, DE", time: "5 min ago" },
              { action: "Support ticket opened", location: "Sydney, AU", time: "8 min ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <p className="text-sm text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.location}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
