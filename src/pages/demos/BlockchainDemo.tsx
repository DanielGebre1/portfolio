import { useState } from "react";
import { Coins, Shield, Vote, Clock, TrendingUp, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const campaigns = [
  {
    id: 1,
    title: "Green Energy Initiative",
    description: "Funding solar panel installations in rural communities",
    raised: 125000,
    goal: 200000,
    backers: 1250,
    daysLeft: 15,
    image: "🌱",
  },
  {
    id: 2,
    title: "DeFi Education Platform",
    description: "Building free blockchain education resources",
    raised: 85000,
    goal: 100000,
    backers: 890,
    daysLeft: 8,
    image: "📚",
  },
  {
    id: 3,
    title: "Ocean Cleanup DAO",
    description: "Decentralized ocean plastic removal operations",
    raised: 340000,
    goal: 500000,
    backers: 3200,
    daysLeft: 22,
    image: "🌊",
  },
];

const milestones = [
  { phase: "Planning", status: "completed", released: "25%" },
  { phase: "Development", status: "completed", released: "25%" },
  { phase: "Beta Launch", status: "active", released: "25%" },
  { phase: "Full Release", status: "pending", released: "25%" },
];

export default function BlockchainDemo() {
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/projects" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-neon-purple to-accent flex items-center justify-center text-white">
              <Coins className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">DeFi Crowdfunding</h1>
              <p className="text-muted-foreground">Decentralized fundraising with smart contracts</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Solidity", "Hardhat", "Web3.js", "IPFS", "TheGraph"].map(tech => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full bg-neon-purple/10 text-accent border border-accent/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Shield, title: "Smart Contract Security", desc: "Audited contracts with multi-sig" },
            { icon: Vote, title: "Token Governance", desc: "Community voting on proposals" },
            { icon: Clock, title: "Milestone Releases", desc: "Funds released on completion" },
          ].map((feature, index) => (
            <div key={feature.title} className="glass p-6 rounded-xl animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <feature.icon className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Campaign Dashboard */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Campaign List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-4">Active Campaigns</h2>
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                onClick={() => setSelectedCampaign(campaign)}
                className={`glass p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedCampaign.id === campaign.id ? "border-accent/50 shadow-lg" : "hover:border-accent/30"
                }`}
              >
                <div className="flex gap-4">
                  <div className="text-4xl">{campaign.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{campaign.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{campaign.description}</p>
                    <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2 mb-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-accent font-medium">
                        ${campaign.raised.toLocaleString()} / ${campaign.goal.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">{campaign.daysLeft} days left</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Milestone Tracker */}
          <div className="glass p-6 rounded-xl h-fit">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Milestone Tracker
            </h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={milestone.phase} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    milestone.status === "completed" ? "bg-green-500" :
                    milestone.status === "active" ? "bg-accent animate-pulse" : "bg-muted"
                  }`} />
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      milestone.status === "pending" ? "text-muted-foreground" : "text-foreground"
                    }`}>{milestone.phase}</p>
                  </div>
                  <span className="text-xs text-accent">{milestone.released}</span>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6 bg-accent hover:bg-accent/90">
              <TrendingUp className="h-4 w-4 mr-2" />
              Back This Project
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 animate-fade-in stagger-2">
          {[
            { label: "Total Raised", value: "$5.2M" },
            { label: "Active Campaigns", value: "156" },
            { label: "Total Backers", value: "45K+" },
            { label: "Success Rate", value: "94%" },
          ].map((stat) => (
            <div key={stat.label} className="glass p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-accent mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
