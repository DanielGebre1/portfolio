import { useState } from "react";
import { Gamepad2, Sword, Shield, Heart, Zap, Users, Trophy, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const characterClasses = [
  { name: "Warrior", icon: Sword, stats: { attack: 90, defense: 80, speed: 50, magic: 20 }, color: "from-red-500 to-orange-500" },
  { name: "Mage", icon: Zap, stats: { attack: 40, defense: 30, speed: 60, magic: 95 }, color: "from-blue-500 to-purple-500" },
  { name: "Rogue", icon: Shield, stats: { attack: 70, defense: 40, speed: 95, magic: 30 }, color: "from-green-500 to-emerald-500" },
];

const achievements = [
  { name: "First Blood", desc: "Defeat your first enemy", unlocked: true },
  { name: "Dragon Slayer", desc: "Defeat the Ancient Dragon", unlocked: true },
  { name: "Completionist", desc: "Complete all side quests", unlocked: false },
  { name: "Legendary", desc: "Reach max level", unlocked: false },
];

export default function UnityGameDemo() {
  const [selectedClass, setSelectedClass] = useState(characterClasses[0]);

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/projects" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-neon-pink to-primary flex items-center justify-center text-white">
              <Gamepad2 className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">3D Action RPG</h1>
              <p className="text-muted-foreground">Immersive action game with advanced AI</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Unity", "C#", "Photon", "Blender", "Shader Graph"].map(tech => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full bg-neon-pink/10 text-neon-pink border border-neon-pink/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Game Preview */}
        <div className="glass rounded-2xl overflow-hidden mb-12 animate-fade-in stagger-1">
          <div className="aspect-video bg-gradient-to-br from-card via-muted to-card relative flex items-center justify-center">
            {/* Fake game scene */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%2310B981%3Bstop-opacity%3A0.1%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%238B5CF6%3Bstop-opacity%3A0.1%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23g)%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
            
            {/* Character */}
            <div className="relative z-10 flex flex-col items-center">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${selectedClass.color} flex items-center justify-center shadow-2xl mb-4`}>
                <selectedClass.icon className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{selectedClass.name}</h3>
              <p className="text-muted-foreground">Level 42</p>
            </div>

            {/* HUD Elements */}
            <div className="absolute top-4 left-4 space-y-2">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <div className="w-32 h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-red-500 to-red-400" />
                </div>
                <span className="text-xs text-foreground">750/1000</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                <div className="w-32 h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-blue-400" />
                </div>
                <span className="text-xs text-foreground">250/500</span>
              </div>
            </div>

            {/* Play Button */}
            <Button className="absolute bottom-8 bg-gradient-to-r from-neon-pink to-primary hover:opacity-90 px-8 py-6 text-lg">
              <Play className="h-6 w-6 mr-2" />
              Play Demo
            </Button>
          </div>
        </div>

        {/* Character Selection */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Choose Your Class</h2>
            <div className="grid grid-cols-3 gap-4">
              {characterClasses.map((charClass) => (
                <button
                  key={charClass.name}
                  onClick={() => setSelectedClass(charClass)}
                  className={`glass p-4 rounded-xl text-center transition-all duration-300 ${
                    selectedClass.name === charClass.name ? "border-primary/50 shadow-lg" : "hover:border-primary/30"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${charClass.color} flex items-center justify-center mx-auto mb-2`}>
                    <charClass.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-medium text-foreground">{charClass.name}</p>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="glass p-6 rounded-xl mt-6">
              <h3 className="font-semibold text-foreground mb-4">Character Stats</h3>
              <div className="space-y-4">
                {Object.entries(selectedClass.stats).map(([stat, value]) => (
                  <div key={stat}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize text-muted-foreground">{stat}</span>
                      <span className="text-foreground">{value}</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Achievements
            </h2>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.name}
                  className={`glass p-4 rounded-xl flex items-center gap-4 ${
                    !achievement.unlocked && "opacity-50"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.unlocked ? "bg-yellow-500/20 text-yellow-500" : "bg-muted text-muted-foreground"
                  }`}>
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{achievement.name}</p>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                  </div>
                  {achievement.unlocked && (
                    <span className="ml-auto text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                      Unlocked
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 animate-fade-in stagger-2">
          {[
            { label: "Players Online", value: "12.5K" },
            { label: "Quests Completed", value: "2.4M" },
            { label: "Bosses Defeated", value: "890K" },
            { label: "Total Playtime", value: "5.2M hrs" },
          ].map((stat) => (
            <div key={stat.label} className="glass p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-neon-pink mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
