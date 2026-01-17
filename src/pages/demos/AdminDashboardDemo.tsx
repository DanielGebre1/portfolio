import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, LayoutDashboard, Users, Shield, FileText, Settings, Activity, AlertTriangle, CheckCircle, Clock, TrendingUp, TrendingDown, BarChart3, PieChart, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "active", lastLogin: "2 mins ago" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Moderator", status: "active", lastLogin: "1 hour ago" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "User", status: "inactive", lastLogin: "2 days ago" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "active", lastLogin: "5 mins ago" },
];

const mockLogs = [
  { id: 1, action: "User Login", user: "john@example.com", timestamp: "2024-01-15 14:32:01", level: "info" },
  { id: 2, action: "Role Changed", user: "admin@example.com", timestamp: "2024-01-15 14:28:45", level: "warning" },
  { id: 3, action: "Failed Login Attempt", user: "unknown", timestamp: "2024-01-15 14:25:12", level: "error" },
  { id: 4, action: "Settings Updated", user: "jane@example.com", timestamp: "2024-01-15 14:20:33", level: "info" },
  { id: 5, action: "New User Registration", user: "newuser@example.com", timestamp: "2024-01-15 14:15:00", level: "info" },
];

export default function AdminDashboardDemo() {
  const [activeTab, setActiveTab] = useState("overview");

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin": return "bg-red-500/20 text-red-400";
      case "Moderator": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-blue-500/20 text-blue-400";
    }
  };

  const getLogLevelIcon = (level: string) => {
    switch (level) {
      case "error": return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "warning": return <Clock className="h-4 w-4 text-yellow-500" />;
      default: return <CheckCircle className="h-4 w-4 text-green-500" />;
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Enterprise Admin Dashboard</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive admin system with role-based access control, real-time analytics, and system monitoring.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="h-4 w-4 mr-2" />
              Users & RBAC
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="logs">
              <FileText className="h-4 w-4 mr-2" />
              System Logs
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Users</p>
                      <p className="text-3xl font-bold">24,521</p>
                    </div>
                    <div className="flex items-center text-green-500">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm">+12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Sessions</p>
                      <p className="text-3xl font-bold">1,842</p>
                    </div>
                    <div className="flex items-center text-green-500">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm">+8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">API Requests</p>
                      <p className="text-3xl font-bold">2.4M</p>
                    </div>
                    <div className="flex items-center text-red-500">
                      <TrendingDown className="h-4 w-4 mr-1" />
                      <span className="text-sm">-3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">System Uptime</p>
                      <p className="text-3xl font-bold">99.9%</p>
                    </div>
                    <Activity className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockLogs.slice(0, 4).map((log) => (
                      <div key={log.id} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        {getLogLevelIcon(log.level)}
                        <div className="flex-1">
                          <p className="text-sm font-medium">{log.action}</p>
                          <p className="text-xs text-muted-foreground">{log.user}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{log.timestamp.split(" ")[1]}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>CPU Usage</span>
                        <span>45%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full w-[45%] bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Memory</span>
                        <span>68%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full w-[68%] bg-yellow-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Disk Space</span>
                        <span>32%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full w-[32%] bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Network I/O</span>
                        <span>78%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full w-[78%] bg-orange-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users & RBAC Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">User Management</h2>
              <Button>
                <Users className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Role-Based Access Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Admin</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Full system access</li>
                      <li>• User management</li>
                      <li>• System configuration</li>
                      <li>• View all logs</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-2">Moderator</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Content moderation</li>
                      <li>• User support</li>
                      <li>• View reports</li>
                      <li>• Limited settings</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">User</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• View own data</li>
                      <li>• Update profile</li>
                      <li>• Submit requests</li>
                      <li>• Basic features</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  {mockUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-sm font-bold">{user.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                        <Badge variant={user.status === "active" ? "default" : "secondary"}>
                          {user.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{user.lastLogin}</span>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    Traffic Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-end justify-around gap-2">
                    {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div 
                          className="w-8 bg-gradient-to-t from-primary to-primary/50 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-muted-foreground">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    User Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-48">
                    <div className="relative">
                      <div className="h-32 w-32 rounded-full border-8 border-primary"></div>
                      <div className="absolute inset-0 h-32 w-32 rounded-full border-8 border-accent border-t-transparent border-l-transparent rotate-45"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">24.5k</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <span>Active (78%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-accent"></div>
                      <span>Inactive (22%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Page Load Time</span>
                        <span className="text-green-500">1.2s</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full w-[85%] bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>API Response</span>
                        <span className="text-green-500">45ms</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full w-[92%] bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Error Rate</span>
                        <span className="text-green-500">0.1%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full w-[99%] bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>User Satisfaction</span>
                        <span className="text-green-500">4.8/5</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full w-[96%] bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Logs Tab */}
          <TabsContent value="logs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">System Logs</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Export</Button>
                <Button variant="outline" size="sm">Filter</Button>
              </div>
            </div>

            <Card className="glass">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 text-sm font-medium">Level</th>
                        <th className="text-left p-4 text-sm font-medium">Action</th>
                        <th className="text-left p-4 text-sm font-medium">User</th>
                        <th className="text-left p-4 text-sm font-medium">Timestamp</th>
                        <th className="text-left p-4 text-sm font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockLogs.map((log) => (
                        <tr key={log.id} className="border-t border-border/30">
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              {getLogLevelIcon(log.level)}
                              <span className="capitalize text-sm">{log.level}</span>
                            </div>
                          </td>
                          <td className="p-4 text-sm">{log.action}</td>
                          <td className="p-4 text-sm text-muted-foreground">{log.user}</td>
                          <td className="p-4 text-sm text-muted-foreground">{log.timestamp}</td>
                          <td className="p-4">
                            <Button variant="ghost" size="sm">View Details</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Tech Stack */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Laravel", "Charts.js", "RBAC", "PostgreSQL", "Redis", "WebSockets"].map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}