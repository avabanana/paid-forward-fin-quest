import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  TrendingUp,
  CreditCard,
  PiggyBank,
  Building,
  Trophy,
  Play
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Budgeting Fundamentals",
    description: "Learn to create and manage personal budgets effectively",
    duration: "2 hours",
    students: 1250,
    rating: 4.8,
    progress: 75,
    level: "Beginner",
    icon: PiggyBank,
    color: "text-success"
  },
  {
    id: 2,
    title: "Understanding Credit & Debt",
    description: "Master credit scores, loans, and debt management",
    duration: "3 hours", 
    students: 980,
    rating: 4.9,
    progress: 45,
    level: "Intermediate",
    icon: CreditCard,
    color: "text-primary"
  },
  {
    id: 3,
    title: "Investment Basics",
    description: "Introduction to stocks, bonds, and portfolio building",
    duration: "4 hours",
    students: 756,
    rating: 4.7,
    progress: 0,
    level: "Intermediate", 
    icon: TrendingUp,
    color: "text-accent"
  },
  {
    id: 4,
    title: "Tax Planning for Teens",
    description: "Understanding taxes, deductions, and filing",
    duration: "2.5 hours",
    students: 623,
    rating: 4.6,
    progress: 25,
    level: "Beginner",
    icon: Building,
    color: "text-muted-foreground"
  },
  {
    id: 5,
    title: "Retirement Planning 101",
    description: "401(k)s, IRAs, and long-term financial planning",
    duration: "3.5 hours",
    students: 445,
    rating: 4.8,
    progress: 0,
    level: "Advanced",
    icon: Trophy,
    color: "text-success"
  },
  {
    id: 6,
    title: "Emergency Fund Strategies",
    description: "Building financial security and risk management",
    duration: "1.5 hours",
    students: 892,
    rating: 4.9,
    progress: 100,
    level: "Beginner",
    icon: BookOpen,
    color: "text-primary"
  }
];

const CourseLibrary = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30" id="courses">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-4 h-4 mr-1" />
            Course Library
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Master <span className="bg-gradient-primary bg-clip-text text-transparent">Essential</span> Financial Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert-designed courses covering everything from budgeting basics to advanced investment strategies. 
            All completely free with optional certificates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card key={course.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center ${course.color}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'outline'}>
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {course.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300" 
                    variant={course.progress > 0 ? "default" : "outline"}
                  >
                    {course.progress === 100 ? (
                      <>Review Course</>
                    ) : course.progress > 0 ? (
                      <>Continue Learning</>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Start Course
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Courses
            <BookOpen className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseLibrary;