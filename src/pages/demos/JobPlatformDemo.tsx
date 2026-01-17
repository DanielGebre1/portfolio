import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Briefcase, Users, FileText, CheckCircle, Clock, XCircle, Upload, Search, BarChart3, Mail, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const mockJobs = [
  { id: 1, title: "Senior Full-Stack Developer", company: "TechCorp", location: "Remote", salary: "$120k-150k", applicants: 45, status: "active" },
  { id: 2, title: "AI/ML Engineer", company: "DataFlow", location: "San Francisco", salary: "$140k-180k", applicants: 32, status: "active" },
  { id: 3, title: "Product Manager", company: "StartupXYZ", location: "New York", salary: "$100k-130k", applicants: 28, status: "closed" },
];

const mockScholarships = [
  { id: 1, title: "STEM Excellence Award", amount: "$25,000", deadline: "Mar 15, 2024", applicants: 156, status: "open" },
  { id: 2, title: "Future Leaders Grant", amount: "$15,000", deadline: "Apr 1, 2024", applicants: 89, status: "open" },
];

const mockApplications = [
  { id: 1, job: "Senior Full-Stack Developer", company: "TechCorp", status: "reviewed", matchScore: 92, date: "2024-01-10" },
  { id: 2, job: "AI/ML Engineer", company: "DataFlow", status: "applied", matchScore: 78, date: "2024-01-12" },
  { id: 3, job: "Product Manager", company: "StartupXYZ", status: "rejected", matchScore: 65, date: "2024-01-08" },
  { id: 4, job: "STEM Excellence Award", company: "Scholarship", status: "accepted", matchScore: 88, date: "2024-01-05" },
];

export default function JobPlatformDemo() {
  const [activeRole, setActiveRole] = useState<"applicant" | "employer" | "admin">("applicant");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "applied": return <Clock className="h-4 w-4 text-yellow-500" />;
      case "reviewed": return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case "accepted": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "rejected": return <XCircle className="h-4 w-4 text-red-500" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "applied": return "bg-yellow-500/20 text-yellow-400";
      case "reviewed": return "bg-blue-500/20 text-blue-400";
      case "accepted": return "bg-green-500/20 text-green-400";
      case "rejected": return "bg-red-500/20 text-red-400";
      default: return "bg-muted text-muted-foreground";
    }
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Job & Scholarship Application Platform</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Enterprise-grade platform with AI resume screening, job-candidate matching, and complete workflow management.
          </p>
        </div>

        {/* Role Switcher */}
        <div className="flex gap-2 mb-8">
          {(["applicant", "employer", "admin"] as const).map((role) => (
            <Button
              key={role}
              variant={activeRole === role ? "default" : "outline"}
              onClick={() => setActiveRole(role)}
              className="capitalize"
            >
              {role === "applicant" && <Users className="h-4 w-4 mr-2" />}
              {role === "employer" && <Briefcase className="h-4 w-4 mr-2" />}
              {role === "admin" && <BarChart3 className="h-4 w-4 mr-2" />}
              {role}
            </Button>
          ))}
        </div>

        {/* Applicant View */}
        {activeRole === "applicant" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">4</p>
                      <p className="text-sm text-muted-foreground">Applications</p>
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
                      <p className="text-2xl font-bold">1</p>
                      <p className="text-sm text-muted-foreground">Accepted</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Clock className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-sm text-muted-foreground">In Review</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <Brain className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">85%</p>
                      <p className="text-sm text-muted-foreground">Avg Match</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Resume Upload */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Resume & AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">Drop your resume here or click to upload</p>
                  <Button variant="outline">Upload Resume</Button>
                </div>
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm font-medium mb-2">AI Resume Analysis</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Skills Match</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Experience Level</span>
                      <span>Senior</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">AWS</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockApplications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-4">
                        {getStatusIcon(app.status)}
                        <div>
                          <p className="font-medium">{app.job}</p>
                          <p className="text-sm text-muted-foreground">{app.company} • Applied {app.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-sm font-medium">Match Score</p>
                          <p className="text-lg font-bold text-primary">{app.matchScore}%</p>
                        </div>
                        <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Employer View */}
        {activeRole === "employer" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Job Postings</h2>
              <Button>
                <Briefcase className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
            </div>

            <div className="grid gap-4">
              {mockJobs.map((job) => (
                <Card key={job.id} className="glass">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-muted-foreground">{job.company} • {job.location}</p>
                        <p className="text-primary font-medium mt-1">{job.salary}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={job.status === "active" ? "default" : "secondary"}>
                          {job.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-2">{job.applicants} applicants</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">View Applicants</Button>
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">AI Screen</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass">
              <CardHeader>
                <CardTitle>Scholarship Postings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockScholarships.map((scholarship) => (
                    <div key={scholarship.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium">{scholarship.title}</p>
                        <p className="text-sm text-muted-foreground">Deadline: {scholarship.deadline}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">{scholarship.amount}</p>
                        <p className="text-sm text-muted-foreground">{scholarship.applicants} applicants</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Admin View */}
        {activeRole === "admin" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="glass">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-3xl font-bold">12,450</p>
                  <p className="text-xs text-green-500">+12% this month</p>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Active Jobs</p>
                  <p className="text-3xl font-bold">342</p>
                  <p className="text-xs text-green-500">+8% this month</p>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Applications</p>
                  <p className="text-3xl font-bold">8,923</p>
                  <p className="text-xs text-green-500">+23% this month</p>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Placements</p>
                  <p className="text-3xl font-bold">456</p>
                  <p className="text-xs text-green-500">+15% this month</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass">
              <CardHeader>
                <CardTitle>Moderation Queue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                    <div>
                      <p className="font-medium">Job: "Remote Developer Position"</p>
                      <p className="text-sm text-muted-foreground">Flagged for review • Submitted 2 hours ago</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Approve</Button>
                      <Button size="sm" variant="destructive">Reject</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                    <div>
                      <p className="font-medium">Scholarship: "Tech Innovation Grant"</p>
                      <p className="text-sm text-muted-foreground">Pending verification • Submitted 5 hours ago</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Approve</Button>
                      <Button size="sm" variant="destructive">Reject</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Notification Center
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm">Email notifications sent today: <span className="font-bold">1,234</span></p>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm">In-app notifications: <span className="font-bold">3,456</span></p>
                    </div>
                    <Button variant="outline" className="w-full">Send Broadcast</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">Avg. Time to Hire</span>
                      <span className="font-bold">14 days</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">Application Rate</span>
                      <span className="font-bold">68%</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">AI Match Accuracy</span>
                      <span className="font-bold">94%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "Laravel", "AI Resume Analyzer", "Cloud Storage", "PostgreSQL", "Redis", "Email Service"].map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}