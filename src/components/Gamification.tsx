import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Users, 
  Clock, 
  Star,
  Medal,
  Target,
  Zap,
  Calendar,
  Crown,
  Gift,
  Timer,
  TrendingUp
} from "lucide-react";

const competitions = [
  {
    id: 1,
    title: "Financial Time Travel Challenge",
    description: "Navigate through different life stages making smart financial decisions",
    participants: 2341,
    timeLeft: "3 days",
    prize: "$500 scholarship",
    difficulty: "Medium",
    type: "Simulation",
    icon: Clock,
    color: "text-primary"
  },
  {
    id: 2,
    title: "Budgeting Master Sprint",
    description: "Create the most efficient budget for a college student scenario",
    participants: 1876,
    timeLeft: "1 week",
    prize: "Premium course access",
    difficulty: "Easy",
    type: "Challenge",
    icon: Target,
    color: "text-success"
  },
  {
    id: 3,
    title: "Investment Portfolio Battle",
    description: "Build a diversified portfolio and compete for the best returns",
    participants: 987,
    timeLeft: "2 weeks",
    prize: "$1,000 scholarship",
    difficulty: "Hard",
    type: "Competition", 
    icon: TrendingUp,
    color: "text-accent"
  }
];

const achievements = [
  { name: "First Steps", description: "Complete your first course", icon: Star, earned: true },
  { name: "Budget Master", description: "Create 5 successful budgets", icon: Target, earned: true },
  { name: "Savings Champion", description: "Save $1,000 in simulation", icon: Medal, earned: true },
  { name: "Investment Guru", description: "Complete all investment courses", icon: Crown, earned: false },
  { name: "Community Helper", description: "Help 10 other students", icon: Users, earned: false },
  { name: "Time Traveler", description: "Complete Financial Time Travel", icon: Clock, earned: false }
];

const leaderboard = [
  { rank: 1, name: "Sarah M.", points: 2450, avatar: "🏆", level: 15 },
  { rank: 2, name: "Alex K.", points: 2380, avatar: "🥈", level: 14 },
  { rank: 3, name: "Jamie L.", points: 2290, avatar: "🥉", level: 13 },
  { rank: 4, name: "You", points: 1850, avatar: "🎯", level: 11 },
  { rank: 5, name: "Morgan P.", points: 1820, avatar: "⭐", level: 10 }
];

const Gamification = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-primary/5" id="competitions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Trophy className="w-4 h-4 mr-1" />
            Gamification
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Learn Through <span className="bg-gradient-primary bg-clip-text text-transparent">Competition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make learning fun with competitions, achievements, and real-world financial simulations. 
            Earn rewards while mastering essential money skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Competitions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Active Competitions</h3>
              <Button variant="outline">View All</Button>
            </div>
            
            <div className="space-y-4">
              {competitions.map((comp) => {
                const IconComponent = comp.icon;
                return (
                  <Card key={comp.id} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{comp.title}</CardTitle>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant={comp.difficulty === 'Easy' ? 'secondary' : comp.difficulty === 'Medium' ? 'default' : 'destructive'}>
                                {comp.difficulty}
                              </Badge>
                              <Badge variant="outline">{comp.type}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Timer className="w-4 h-4" />
                            <span>{comp.timeLeft}</span>
                          </div>
                        </div>
                      </div>
                      <CardDescription>{comp.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{comp.participants.toLocaleString()} participants</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-sm font-medium">
                          <Gift className="w-4 h-4 text-success" />
                          <span>{comp.prize}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full" variant="hero">
                        Join Competition
                        <Zap className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span>Weekly Leaderboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboard.map((user) => (
                  <div key={user.rank} className={`flex items-center space-x-3 p-2 rounded-lg ${user.name === 'You' ? 'bg-primary/10 border border-primary/20' : ''}`}>
                    <span className="text-lg">{user.avatar}</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-muted-foreground">Level {user.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">{user.points}</p>
                      <p className="text-xs text-muted-foreground">pts</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* User Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-white">11</span>
                  </div>
                  <p className="font-semibold">Level 11</p>
                  <p className="text-sm text-muted-foreground">Financial Explorer</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to Level 12</span>
                    <span>1,850 / 2,000 XP</span>
                  </div>
                  <Progress value={92} className="h-3" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-primary">6</p>
                    <p className="text-xs text-muted-foreground">Courses Completed</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-success">3</p>
                    <p className="text-xs text-muted-foreground">Competitions Won</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div 
                        key={index}
                        className={`flex flex-col items-center p-3 rounded-lg border transition-all duration-300 ${
                          achievement.earned 
                            ? 'bg-gradient-success text-white shadow-glow' 
                            : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                        }`}
                      >
                        <IconComponent className="w-6 h-6 mb-1" />
                        <p className="text-xs font-medium text-center">{achievement.name}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;