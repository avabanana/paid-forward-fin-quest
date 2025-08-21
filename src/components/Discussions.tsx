import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Users, Clock, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Discussions = () => {
  const forumTopics = [
    {
      title: "Best budgeting apps for teens?",
      author: "sarah_m",
      replies: 23,
      lastActive: "2 hours ago",
      category: "Budgeting",
      isHot: true
    },
    {
      title: "How to start investing with $50?",
      author: "alex_k",
      replies: 17,
      lastActive: "5 hours ago",
      category: "Investing",
      isHot: true
    },
    {
      title: "Credit score questions",
      author: "maya_r",
      replies: 31,
      lastActive: "1 day ago",
      category: "Credit",
      isHot: false
    },
    {
      title: "College savings strategies",
      author: "jordan_p",
      replies: 12,
      lastActive: "2 days ago",
      category: "Savings",
      isHot: false
    }
  ];

  const faqs = [
    {
      question: "How do I start building credit as a teenager?",
      answer: "You can start building credit by becoming an authorized user on a parent's credit card, applying for a student credit card when you turn 18, or considering a secured credit card. Always pay on time and keep balances low."
    },
    {
      question: "What's the difference between a debit and credit card?",
      answer: "A debit card uses money directly from your bank account, while a credit card lets you borrow money that you must pay back later. Credit cards can help build credit history when used responsibly."
    },
    {
      question: "How much should I save for emergencies?",
      answer: "Aim to save 3-6 months of expenses for emergencies. As a teen, start with a smaller goal like $500-1000 and build from there."
    },
    {
      question: "When should I start investing?",
      answer: "The earlier the better! Even small amounts invested in your teens can grow significantly over time due to compound interest. Start with index funds or ETFs for diversification."
    },
    {
      question: "How do taxes work for teenagers?",
      answer: "If you earn over $12,950 (2022 limit), you'll need to file taxes. Even if you earn less, filing can help you get refunds on withheld taxes from part-time jobs."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Community Discussions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow learners, ask questions, and share your financial journey
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Forum Section */}
        <Card className="h-fit">
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <CardTitle>Community Forum</CardTitle>
            </div>
            <CardDescription>
              Join discussions with other teens learning about finance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {forumTopics.map((topic, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{topic.title}</h4>
                      {topic.isHot && (
                        <Badge variant="destructive" className="text-xs">
                          <Star className="h-3 w-3 mr-1" />
                          Hot
                        </Badge>
                      )}
                    </div>
                    <Badge variant="outline" className="mb-2">
                      {topic.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">
                          {topic.author.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span>{topic.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{topic.replies} replies</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{topic.lastActive}</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center pt-4">
              <button className="text-primary hover:text-primary-glow transition-colors font-medium">
                View All Topics →
              </button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to common financial questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Discussions;