import { useState } from "react";
import { Coins, Heart, Clock, Gavel, Wallet, Grid3X3, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const nfts = [
  { id: 1, name: "Cosmic Dreams #42", creator: "ArtistX", price: "2.5 ETH", likes: 234, emoji: "🌌" },
  { id: 2, name: "Digital Phoenix", creator: "CryptoArt", price: "1.8 ETH", likes: 189, emoji: "🔥" },
  { id: 3, name: "Neon Genesis", creator: "VirtualVisions", price: "3.2 ETH", likes: 567, emoji: "💜" },
  { id: 4, name: "Abstract Mind", creator: "MetaCreator", price: "0.8 ETH", likes: 123, emoji: "🧠" },
  { id: 5, name: "Ocean Depths", creator: "DeepArt", price: "1.5 ETH", likes: 345, emoji: "🌊" },
  { id: 6, name: "Future City", creator: "TechArt", price: "2.1 ETH", likes: 456, emoji: "🏙️" },
];

const liveAuctions = [
  { name: "Genesis Collection #1", currentBid: "12.5 ETH", timeLeft: "2h 34m", bidders: 24 },
  { name: "Rare Artifact", currentBid: "8.2 ETH", timeLeft: "45m", bidders: 18 },
];

export default function NFTMarketplaceDemo() {
  const [activeTab, setActiveTab] = useState("explore");
  const [likedNFTs, setLikedNFTs] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedNFTs(prev => 
      prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/projects" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-neon-purple flex items-center justify-center text-white">
              <Coins className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">NFT Marketplace</h1>
              <p className="text-muted-foreground">Multi-chain NFT platform with lazy minting</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Solidity", "Next.js", "Moralis", "IPFS", "Polygon"].map(tech => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Wallet Connection */}
        <div className="glass p-4 rounded-xl mb-8 flex items-center justify-between animate-fade-in stagger-1">
          <div className="flex items-center gap-3">
            <Wallet className="h-5 w-5 text-primary" />
            <span className="text-foreground">0x7F4d...8E2a</span>
            <span className="text-sm text-muted-foreground">Balance: 4.52 ETH</span>
          </div>
          <Button variant="outline" size="sm">
            Connected
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 animate-fade-in stagger-1">
          {[
            { id: "explore", label: "Explore", icon: Grid3X3 },
            { id: "auctions", label: "Live Auctions", icon: Gavel },
            { id: "trending", label: "Trending", icon: TrendingUp },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "bg-accent hover:bg-accent/90" : ""}
            >
              <tab.icon className="h-4 w-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Live Auctions Banner */}
        {activeTab === "auctions" && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {liveAuctions.map((auction) => (
              <div key={auction.name} className="glass p-6 rounded-xl border-accent/30 animate-fade-in">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-neon-purple flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <span className="flex items-center gap-1 text-sm text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full">
                    <Clock className="h-3 w-3" />
                    {auction.timeLeft}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{auction.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Current Bid</p>
                    <p className="text-lg font-bold text-accent">{auction.currentBid}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Bidders</p>
                    <p className="text-lg font-bold text-foreground">{auction.bidders}</p>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-accent hover:bg-accent/90">
                  Place Bid
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* NFT Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {nfts.map((nft, index) => (
            <div
              key={nft.id}
              className="glass rounded-xl overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gradient-to-br from-accent/20 via-neon-purple/20 to-primary/20 flex items-center justify-center text-6xl relative">
                {nft.emoji}
                <button
                  onClick={() => toggleLike(nft.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                    likedNFTs.includes(nft.id)
                      ? "bg-red-500 text-white"
                      : "bg-background/50 text-muted-foreground hover:text-red-500"
                  }`}
                >
                  <Heart className="h-4 w-4" fill={likedNFTs.includes(nft.id) ? "currentColor" : "none"} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{nft.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">by {nft.creator}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-bold">{nft.price}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {likedNFTs.includes(nft.id) ? nft.likes + 1 : nft.likes}
                  </span>
                </div>
                <Button className="w-full mt-3" size="sm" variant="outline">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 animate-fade-in stagger-2">
          {[
            { label: "Total Volume", value: "12.5K ETH" },
            { label: "NFTs Listed", value: "45K+" },
            { label: "Active Users", value: "8.2K" },
            { label: "Creators", value: "2.1K" },
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
