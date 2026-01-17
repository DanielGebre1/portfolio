import { useState } from "react";
import { Smartphone, Activity, Flame, Footprints, Heart, Trophy, Calendar, TrendingUp, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const workoutPlan = [
  { name: "Push-ups", sets: 3, reps: 15, completed: true },
  { name: "Squats", sets: 4, reps: 12, completed: true },
  { name: "Lunges", sets: 3, reps: 10, completed: false },
  { name: "Plank", sets: 3, reps: "60s", completed: false },
];

const weeklyProgress = [
  { day: "Mon", value: 80 },
  { day: "Tue", value: 100 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 75 },
  { day: "Sat", value: 0 },
  { day: "Sun", value: 0 },
];

export default function FitnessAppDemo() {
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/projects" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-neon-pink to-accent flex items-center justify-center text-white">
              <Smartphone className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Fitness Tracker</h1>
              <p className="text-muted-foreground">AI-powered workout plans & progress tracking</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Flutter", "Firebase", "TensorFlow Lite", "HealthKit"].map(tech => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full bg-neon-pink/10 text-neon-pink border border-neon-pink/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Phone Mockup with App */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Phone */}
          <div className="w-[320px] h-[640px] bg-card rounded-[40px] border-4 border-border shadow-2xl overflow-hidden animate-fade-in stagger-1 mx-auto lg:mx-0">
            {/* Status Bar */}
            <div className="h-12 bg-background flex items-center justify-between px-6">
              <span className="text-xs text-muted-foreground">9:41</span>
              <div className="w-20 h-6 bg-muted rounded-full" />
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-muted-foreground rounded-sm" />
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 h-[calc(100%-60px)] overflow-y-auto">
              {/* Greeting */}
              <div className="mb-6">
                <p className="text-muted-foreground text-sm">Good morning,</p>
                <h2 className="text-xl font-bold text-foreground">Ready to crush it! 💪</h2>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  { icon: Flame, value: "420", label: "Cal", color: "text-orange-500" },
                  { icon: Footprints, value: "6.2K", label: "Steps", color: "text-primary" },
                  { icon: Heart, value: "72", label: "BPM", color: "text-red-500" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted/30 p-3 rounded-xl text-center">
                    <stat.icon className={`h-4 w-4 ${stat.color} mx-auto mb-1`} />
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Active Workout */}
              <div className="bg-gradient-to-r from-neon-pink to-accent rounded-2xl p-4 mb-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-80">Today's Workout</span>
                  <Activity className="h-4 w-4" />
                </div>
                <p className="text-lg font-bold mb-1">Full Body Strength</p>
                <p className="text-sm opacity-80 mb-3">45 min • 4 exercises left</p>
                <Button
                  onClick={() => setIsWorkoutActive(!isWorkoutActive)}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
                  size="sm"
                >
                  {isWorkoutActive ? (
                    <>
                      <Pause className="h-4 w-4 mr-2" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Continue
                    </>
                  )}
                </Button>
              </div>

              {/* Exercise List */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Exercises</h3>
                <div className="space-y-2">
                  {workoutPlan.map((exercise) => (
                    <div
                      key={exercise.name}
                      className={`p-3 rounded-xl flex items-center gap-3 ${
                        exercise.completed ? "bg-green-500/10" : "bg-muted/30"
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        exercise.completed ? "bg-green-500 text-white" : "border-2 border-muted-foreground"
                      }`}>
                        {exercise.completed && "✓"}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${exercise.completed ? "text-muted-foreground line-through" : "text-foreground"}`}>
                          {exercise.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {exercise.sets}x{exercise.reps}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Progress */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">This Week</h3>
                <div className="flex items-end gap-1 h-20">
                  {weeklyProgress.map((day) => (
                    <div key={day.day} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className={`w-full rounded-t transition-all ${
                          day.value > 0 ? "bg-gradient-to-t from-neon-pink to-accent" : "bg-muted"
                        }`}
                        style={{ height: `${Math.max(day.value * 0.6, 4)}px` }}
                      />
                      <span className="text-xs text-muted-foreground">{day.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex-1 space-y-6 animate-fade-in stagger-2">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-neon-pink" />
                AI-Powered Features
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Smart Workout Plans", desc: "AI generates personalized routines based on your goals and fitness level" },
                  { title: "Form Analysis", desc: "Real-time feedback on exercise form using camera and ML" },
                  { title: "Progress Prediction", desc: "ML models predict your progress and adjust plans accordingly" },
                  { title: "Recovery Optimization", desc: "Smart rest recommendations based on workout intensity" },
                ].map((feature) => (
                  <div key={feature.title} className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-medium text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Recent Achievements
              </h3>
              <div className="flex gap-3">
                {["🏃", "💪", "🔥", "⭐"].map((emoji, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-2xl">
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Active Users", value: "500K+" },
                { label: "Workouts Completed", value: "12M+" },
                { label: "App Rating", value: "4.9★" },
                { label: "Countries", value: "120+" },
              ].map((stat) => (
                <div key={stat.label} className="glass p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold text-neon-pink">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
