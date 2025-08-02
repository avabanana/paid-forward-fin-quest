import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User,
  Sparkles,
  TrendingUp,
  DollarSign,
  PiggyBank
} from "lucide-react";

const sampleQuestions = [
  "How do I start building an emergency fund?",
  "What's the difference between stocks and bonds?",
  "How does compound interest work?",
  "When should I start investing?"
];

const sampleMessages = [
  {
    id: 1,
    type: "bot",
    message: "Hi! I'm your AI financial advisor. I can help you with budgeting, investing, taxes, and any other financial questions you have. What would you like to learn about today?",
    timestamp: "2 minutes ago"
  },
  {
    id: 2,
    type: "user", 
    message: "I'm 16 and want to start saving money. Where should I begin?",
    timestamp: "1 minute ago"
  },
  {
    id: 3,
    type: "bot",
    message: "Great question! Starting to save at 16 is amazing. Here's what I recommend:\n\n1. **Open a savings account** - Look for high-yield options\n2. **Set a savings goal** - Maybe $500 for your emergency fund\n3. **Save a percentage** - Try the 50/30/20 rule (50% needs, 30% wants, 20% savings)\n4. **Track your progress** - Use our built-in tools!\n\nWould you like me to explain any of these steps in more detail?",
    timestamp: "30 seconds ago"
  }
];

const AIChatbot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(sampleMessages);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      type: "user" as const,
      message: message,
      timestamp: "Just now"
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        message: "Thanks for your question! I'm here to help you understand financial concepts. This is a demo response - in the full app, I'd provide detailed, personalized financial guidance.",
        timestamp: "Just now"
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background" id="chatbot">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <MessageCircle className="w-4 h-4 mr-1" />
            AI Assistant
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Get <span className="bg-gradient-primary bg-clip-text text-transparent">Instant</span> Financial Guidance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI chatbot provides 24/7 support for all your financial questions. 
            From basic budgeting to complex investment strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Chat Interface */}
          <Card className="h-[600px] flex flex-col shadow-elegant">
            <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <span>Financial AI Assistant</span>
                <Badge className="ml-auto bg-white/20 text-white border-white/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Online
                </Badge>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        msg.type === 'user' ? 'bg-primary' : 'bg-gradient-primary'
                      }`}>
                        {msg.type === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className={`rounded-lg p-3 ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Input */}
              <div className="p-4 border-t bg-background">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask me anything about finances..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon" variant="default">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features & Quick Questions */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">What I Can Help With</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="p-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                      <PiggyBank className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Budgeting & Saving</h4>
                      <p className="text-sm text-muted-foreground">Create budgets, set savings goals, track expenses</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Investing Basics</h4>
                      <p className="text-sm text-muted-foreground">Stocks, bonds, ETFs, and portfolio building</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Taxes & Credit</h4>
                      <p className="text-sm text-muted-foreground">Tax planning, credit scores, debt management</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Popular Questions</h3>
              <div className="space-y-2">
                {sampleQuestions.map((question, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="w-full text-left justify-start h-auto p-3 whitespace-normal"
                    onClick={() => setMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gradient-primary text-white">
              <div className="text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-semibold mb-2">Premium AI Features</h3>
                <p className="text-white/90 mb-4">
                  Upgrade for personalized financial planning, goal tracking, and advanced investment analysis.
                </p>
                <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatbot;