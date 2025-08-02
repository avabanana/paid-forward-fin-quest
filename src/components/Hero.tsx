import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Trophy, 
  BookOpen, 
  MessageCircle, 
  Award,
  DollarSign,
  Target,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-financial-literacy.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">PaidForward</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">Courses</a>
          <a href="#labs" className="text-muted-foreground hover:text-foreground transition-colors">Labs</a>
          <a href="#competitions" className="text-muted-foreground hover:text-foreground transition-colors">Competitions</a>
          <a href="#chatbot" className="text-muted-foreground hover:text-foreground transition-colors">AI Chat</a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button variant="hero">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <Zap className="w-4 h-4 mr-1" />
                Free Financial Education
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Master Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Financial Future</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Learn essential financial skills through gamified courses, AI-powered assistance, 
                and real-world simulations. Built specifically for teens and young adults.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Free Courses</p>
                  <p className="text-sm text-muted-foreground">Expert-led lessons</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">AI Chatbot</p>
                  <p className="text-sm text-muted-foreground">24/7 assistance</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Team Labs</p>
                  <p className="text-sm text-muted-foreground">Real simulations</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Competitions</p>
                  <p className="text-sm text-muted-foreground">Win prizes</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Learning Free
                <TrendingUp className="w-5 h-5 ml-2 group-hover:animate-bounce" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">95%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-glow-pulse"></div>
            <img 
              src={heroImage} 
              alt="Students learning financial literacy" 
              className="relative rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105"
            />
            
            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 p-4 bg-gradient-card shadow-elegant animate-float">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-success" />
                <div>
                  <p className="font-semibold text-sm">Certificate Earned!</p>
                  <p className="text-xs text-muted-foreground">Budgeting Basics</p>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 p-4 bg-gradient-card shadow-elegant animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Goal Achieved!</p>
                  <p className="text-xs text-muted-foreground">$500 saved</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;