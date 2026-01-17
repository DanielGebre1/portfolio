import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, GraduationCap, BookOpen, Brain, Trophy, MessageSquare, PlayCircle, CheckCircle, Clock, Star, Sparkles, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const mockCourses = [
  { id: 1, title: "Full-Stack Web Development", instructor: "John Doe", progress: 68, lessons: 24, duration: "40 hours", rating: 4.9, enrolled: 12500 },
  { id: 2, title: "Machine Learning Fundamentals", instructor: "Jane Smith", progress: 45, lessons: 32, duration: "50 hours", rating: 4.8, enrolled: 8900 },
  { id: 3, title: "UI/UX Design Masterclass", instructor: "Alice Brown", progress: 0, lessons: 18, duration: "25 hours", rating: 4.7, enrolled: 6200 },
];

const mockLessons = [
  { id: 1, title: "Introduction to React", duration: "15 min", completed: true, type: "video" },
  { id: 2, title: "Components & Props", duration: "25 min", completed: true, type: "video" },
  { id: 3, title: "State Management", duration: "30 min", completed: true, type: "video" },
  { id: 4, title: "Quiz: React Basics", duration: "10 min", completed: false, type: "quiz" },
  { id: 5, title: "Hooks Deep Dive", duration: "35 min", completed: false, type: "video" },
  { id: 6, title: "Building a Project", duration: "45 min", completed: false, type: "project" },
];

const mockQuizQuestions = [
  { id: 1, question: "What is the purpose of useState hook?", options: ["State management", "Side effects", "Routing", "Styling"], correct: 0 },
  { id: 2, question: "Which method re-renders a component?", options: ["forceUpdate()", "setState()", "render()", "Both A & B"], correct: 3 },
];

const aiSuggestions = [
  "Based on your progress, I recommend focusing on State Management next.",
  "You've been excelling at practical exercises! Try the React Hooks challenge.",
  "Consider reviewing Components & Props before the quiz.",
];

export default function AILMSDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedCourse, setSelectedCourse] = useState(mockCourses[0]);
  const [chatMessages, setChatMessages] = useState([
    { role: "ai", content: "Hello! I'm your AI tutor. How can I help you with your learning today?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    setChatMessages([...chatMessages, { role: "user", content: inputMessage }]);
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        role: "ai", 
        content: "That's a great question! Let me explain... The useState hook allows you to add state to functional components. When you call useState, it returns an array with two elements: the current state value and a function to update it." 
      }]);
    }, 1000);
    setInputMessage("");
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/projects">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">AI Learning Management System</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Intelligent LMS with AI tutor, personalized learning paths, courses, lessons, quizzes, and progress tracking.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="dashboard">
              <GraduationCap className="h-4 w-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="courses">
              <BookOpen className="h-4 w-4 mr-2" />
              My Courses
            </TabsTrigger>
            <TabsTrigger value="ai-tutor">
              <Brain className="h-4 w-4 mr-2" />
              AI Tutor
            </TabsTrigger>
            <TabsTrigger value="learning-path">
              <Target className="h-4 w-4 mr-2" />
              Learning Path
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-muted-foreground">Completed Lessons</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-500/20">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">5</p>
                      <p className="text-sm text-muted-foreground">Achievements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">24h</p>
                      <p className="text-sm text-muted-foreground">Learning Time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Suggestions */}
            <Card className="glass border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  AI Personalized Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {aiSuggestions.map((suggestion, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                      <Brain className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-sm">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Continue Learning */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCourses.filter(c => c.progress > 0).map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.instructor}</p>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>{course.progress}% complete</span>
                            <span>{Math.round(course.lessons * course.progress / 100)}/{course.lessons} lessons</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      </div>
                      <Button className="ml-4">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Continue
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {mockCourses.map((course) => (
                <Card key={course.id} className="glass overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <PlayCircle className="h-4 w-4" />
                        {course.lessons} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{course.enrolled.toLocaleString()} enrolled</span>
                    </div>
                    {course.progress > 0 && (
                      <Progress value={course.progress} className="h-2 mb-3" />
                    )}
                    <Button className="w-full" variant={course.progress > 0 ? "default" : "outline"}>
                      {course.progress > 0 ? "Continue" : "Enroll Now"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Lesson List */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Course Content: {selectedCourse.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockLessons.map((lesson, i) => (
                    <div key={lesson.id} className={`flex items-center justify-between p-3 rounded-lg ${lesson.completed ? "bg-green-500/10" : "bg-muted/30"}`}>
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${lesson.completed ? "bg-green-500 text-white" : "bg-muted"}`}>
                          {lesson.completed ? <CheckCircle className="h-4 w-4" /> : <span className="text-sm">{i + 1}</span>}
                        </div>
                        <div>
                          <p className="font-medium">{lesson.title}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Badge variant="secondary" className="text-xs">{lesson.type}</Badge>
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {lesson.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Tutor Tab */}
          <TabsContent value="ai-tutor" className="space-y-6">
            <Card className="glass h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  AI Tutor Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                        {msg.role === "ai" && (
                          <div className="flex items-center gap-2 mb-1">
                            <Brain className="h-4 w-4" />
                            <span className="text-xs font-medium">AI Tutor</span>
                          </div>
                        )}
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask your AI tutor anything..."
                    className="flex-1 px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button onClick={handleSendMessage}>
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learning Path Tab */}
          <TabsContent value="learning-path" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Your Personalized Learning Path
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
                  <div className="space-y-8">
                    {[
                      { title: "Foundation", status: "completed", skills: ["HTML", "CSS", "JavaScript"], weeks: "Weeks 1-4" },
                      { title: "Frontend Framework", status: "in-progress", skills: ["React", "State Management", "Routing"], weeks: "Weeks 5-8" },
                      { title: "Backend Development", status: "upcoming", skills: ["Node.js", "Express", "Databases"], weeks: "Weeks 9-12" },
                      { title: "Full-Stack Projects", status: "upcoming", skills: ["API Integration", "Deployment", "Testing"], weeks: "Weeks 13-16" },
                    ].map((phase, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className={`relative z-10 h-12 w-12 rounded-full flex items-center justify-center ${
                          phase.status === "completed" ? "bg-green-500" : 
                          phase.status === "in-progress" ? "bg-primary" : "bg-muted"
                        }`}>
                          {phase.status === "completed" ? (
                            <CheckCircle className="h-6 w-6 text-white" />
                          ) : phase.status === "in-progress" ? (
                            <TrendingUp className="h-6 w-6 text-white" />
                          ) : (
                            <Clock className="h-6 w-6" />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{phase.title}</h4>
                            <Badge variant={phase.status === "completed" ? "default" : phase.status === "in-progress" ? "secondary" : "outline"}>
                              {phase.status.replace("-", " ")}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{phase.weeks}</p>
                          <div className="flex flex-wrap gap-1">
                            {phase.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Tech Stack */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "Laravel", "AI Tutor", "Progress Tracking", "PostgreSQL", "Redis", "OpenAI"].map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}