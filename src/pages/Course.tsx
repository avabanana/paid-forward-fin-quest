import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  BookOpen,
  CheckCircle,
  PlayCircle,
  Download,
  Award,
  PiggyBank,
  CreditCard,
  TrendingUp,
  Building,
  Trophy
} from "lucide-react";

const courseData = {
  1: {
    title: "Budgeting Fundamentals",
    description: "Learn to create and manage personal budgets effectively",
    duration: "2 hours",
    students: 1250,
    rating: 4.8,
    progress: 75,
    level: "Beginner",
    icon: PiggyBank,
    instructor: "Sarah Johnson",
    lessons: [
      {
        id: 1,
        title: "Introduction to Budgeting",
        duration: "15 min",
        completed: true,
        content: {
          overview: "Understanding what budgeting is and why it's essential for financial success.",
          keyPoints: [
            "What is a budget and why you need one",
            "The psychology of spending",
            "Common budgeting mistakes to avoid",
            "Setting realistic financial goals"
          ]
        }
      },
      {
        id: 2,
        title: "The 50/30/20 Rule",
        duration: "20 min",
        completed: true,
        content: {
          overview: "Learn the most popular budgeting method that splits your income into needs, wants, and savings.",
          keyPoints: [
            "50% for needs (housing, food, utilities)",
            "30% for wants (entertainment, dining out)",
            "20% for savings and debt repayment",
            "How to calculate your percentages"
          ]
        }
      },
      {
        id: 3,
        title: "Tracking Your Expenses",
        duration: "25 min",
        completed: false,
        content: {
          overview: "Master the art of expense tracking to understand where your money goes.",
          keyPoints: [
            "Different methods of expense tracking",
            "Using apps vs. spreadsheets",
            "Categorizing expenses effectively",
            "Weekly and monthly review processes"
          ]
        }
      },
      {
        id: 4,
        title: "Creating Your First Budget",
        duration: "30 min",
        completed: false,
        content: {
          overview: "Put everything together and create a personalized budget that works for you.",
          keyPoints: [
            "Calculating your total income",
            "Listing all fixed and variable expenses",
            "Allocating money to different categories",
            "Building in flexibility for unexpected costs"
          ]
        }
      }
    ]
  },
  2: {
    title: "Understanding Credit & Debt",
    description: "Master credit scores, loans, and debt management",
    duration: "3 hours",
    students: 980,
    rating: 4.9,
    progress: 45,
    level: "Intermediate",
    icon: CreditCard,
    instructor: "Michael Chen",
    lessons: [
      {
        id: 1,
        title: "What is Credit?",
        duration: "20 min",
        completed: true,
        content: {
          overview: "Understanding the basics of credit and how it affects your financial life.",
          keyPoints: [
            "Definition of credit and how it works",
            "Types of credit accounts",
            "The importance of credit history",
            "How credit affects major purchases"
          ]
        }
      },
      {
        id: 2,
        title: "Credit Scores Explained",
        duration: "25 min",
        completed: true,
        content: {
          overview: "Deep dive into credit scores and what factors influence them.",
          keyPoints: [
            "FICO vs. VantageScore models",
            "The five factors that determine your score",
            "Score ranges and what they mean",
            "How to check your credit score for free"
          ]
        }
      },
      {
        id: 3,
        title: "Managing Credit Cards",
        duration: "30 min",
        completed: false,
        content: {
          overview: "Best practices for using credit cards responsibly and avoiding debt traps.",
          keyPoints: [
            "How to choose your first credit card",
            "Understanding APR and fees",
            "Payment strategies to avoid interest",
            "Building credit with responsible use"
          ]
        }
      },
      {
        id: 4,
        title: "Debt Management Strategies",
        duration: "35 min",
        completed: false,
        content: {
          overview: "Learn effective strategies to pay off debt and avoid falling into debt cycles.",
          keyPoints: [
            "Debt avalanche vs. debt snowball methods",
            "Negotiating with creditors",
            "When to consider debt consolidation",
            "Creating a debt repayment plan"
          ]
        }
      }
    ]
  },
  3: {
    title: "Investment Basics",
    description: "Introduction to stocks, bonds, and portfolio building",
    duration: "4 hours",
    students: 756,
    rating: 4.7,
    progress: 0,
    level: "Intermediate",
    icon: TrendingUp,
    instructor: "Emily Rodriguez",
    lessons: [
      {
        id: 1,
        title: "Why Invest?",
        duration: "18 min",
        completed: false,
        content: {
          overview: "Understanding the importance of investing for long-term wealth building.",
          keyPoints: [
            "The power of compound interest",
            "Inflation and purchasing power",
            "Risk vs. reward concepts",
            "Starting early vs. starting late"
          ]
        }
      },
      {
        id: 2,
        title: "Types of Investments",
        duration: "35 min",
        completed: false,
        content: {
          overview: "Explore different investment vehicles and their characteristics.",
          keyPoints: [
            "Stocks: ownership in companies",
            "Bonds: lending money for interest",
            "Mutual funds and ETFs",
            "Real estate and alternative investments"
          ]
        }
      },
      {
        id: 3,
        title: "Building Your Portfolio",
        duration: "40 min",
        completed: false,
        content: {
          overview: "Learn how to create a diversified investment portfolio.",
          keyPoints: [
            "Asset allocation strategies",
            "Diversification principles",
            "Risk tolerance assessment",
            "Rebalancing your portfolio"
          ]
        }
      },
      {
        id: 4,
        title: "Getting Started",
        duration: "25 min",
        completed: false,
        content: {
          overview: "Practical steps to begin your investment journey.",
          keyPoints: [
            "Choosing a brokerage account",
            "Understanding fees and expenses",
            "Dollar-cost averaging strategy",
            "Common beginner mistakes to avoid"
          ]
        }
      }
    ]
  }
};

const Course = () => {
  const { courseId } = useParams();
  const courseIdNum = courseId ? parseInt(courseId, 10) : null;
  const course = courseIdNum && courseData[courseIdNum as keyof typeof courseData] ? courseData[courseIdNum as keyof typeof courseData] : null;

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const IconComponent = course.icon;
  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
  const totalLessons = course.lessons.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
          
          <Card className="bg-gradient-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge variant={course.level === 'Beginner' ? 'secondary' : 'default'} className="mb-2">
                      {course.level}
                    </Badge>
                    <CardTitle className="text-3xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-lg">{course.description}</CardDescription>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <Button variant="hero">
                    <Award className="w-4 h-4 mr-2" />
                    Get Certificate
                  </Button>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Course Progress</span>
                  <span className="font-medium">{completedLessons}/{totalLessons} lessons completed</span>
                </div>
                <Progress value={(completedLessons / totalLessons) * 100} className="h-3" />
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Course Content */}
        <Tabs defaultValue="lessons" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="lessons">
              <BookOpen className="w-4 h-4 mr-2" />
              Lessons
            </TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="lessons" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Lessons</CardTitle>
                <CardDescription>
                  Complete all lessons to earn your certificate and master {course.title.toLowerCase()}.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {course.lessons.map((lesson, index) => (
                    <AccordionItem key={lesson.id} value={`lesson-${lesson.id}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center space-x-3 text-left">
                          {lesson.completed ? (
                            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                          ) : (
                            <PlayCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                          <div>
                            <div className="font-medium">{lesson.title}</div>
                            <div className="text-sm text-muted-foreground flex items-center space-x-2">
                              <Clock className="w-3 h-3" />
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-4 pl-8 space-y-4">
                          <p className="text-muted-foreground">{lesson.content.overview}</p>
                          <div>
                            <h4 className="font-medium mb-2">What You'll Learn:</h4>
                            <ul className="space-y-1">
                              {lesson.content.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant={lesson.completed ? "secondary" : "default"}>
                              {lesson.completed ? "Review Lesson" : "Start Lesson"}
                            </Button>
                            {lesson.completed && (
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4 mr-2" />
                                Download Notes
                              </Button>
                            )}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">About This Course</h3>
                  <p className="text-muted-foreground">
                    {course.description}. This comprehensive course is designed to give you practical, 
                    real-world knowledge that you can apply immediately to improve your financial situation.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Instructor</h3>
                  <p className="text-muted-foreground">{course.instructor}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Course Details</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-lg bg-secondary/50">
                      <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="font-medium">{course.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-secondary/50">
                      <BookOpen className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="font-medium">{totalLessons}</div>
                      <div className="text-sm text-muted-foreground">Lessons</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-secondary/50">
                      <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="font-medium">{course.students.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-secondary/50">
                      <Award className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="font-medium">Certificate</div>
                      <div className="text-sm text-muted-foreground">Included</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Resources</CardTitle>
                <CardDescription>
                  Download helpful materials and additional resources to support your learning.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <Download className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Course Workbook</div>
                        <div className="text-sm text-muted-foreground">Interactive exercises and templates</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <Download className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Quick Reference Guide</div>
                        <div className="text-sm text-muted-foreground">Key concepts and formulas</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <Download className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Bonus Calculator Tools</div>
                        <div className="text-sm text-muted-foreground">Spreadsheet templates</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Course;