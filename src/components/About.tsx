import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Download, Linkedin, Mail, Globe, Users, BookOpen, Trophy, MessageCircle } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      bio: "Former Goldman Sachs analyst passionate about financial education",
      initials: "AC"
    },
    {
      name: "Sarah Martinez",
      role: "Co-Founder & CTO",
      bio: "Stanford CS graduate with experience at fintech startups",
      initials: "SM"
    },
    {
      name: "Jordan Kim",
      role: "Head of Education",
      bio: "Former high school teacher and curriculum development expert",
      initials: "JK"
    },
    {
      name: "Maya Patel",
      role: "Lead Designer",
      bio: "UX designer focused on making complex topics accessible",
      initials: "MP"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Free Financial Courses",
      description: "Comprehensive curriculum covering all essential financial topics"
    },
    {
      icon: MessageCircle,
      title: "AI Financial Assistant",
      description: "Get instant answers to your financial questions 24/7"
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description: "Earn points, badges, and compete in financial challenges"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with peers and learn together in our forums"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About PaidForward
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Empowering the next generation with essential financial literacy skills
        </p>
      </div>

      {/* Mission */}
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We believe every young person deserves access to quality financial education. 
              PaidForward makes learning about money management fun, interactive, and completely free. 
              Through gamification, AI assistance, and community support, we're preparing teens 
              for financial success in adulthood.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* App Download */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Download className="h-6 w-6" />
            Download PaidForward
          </CardTitle>
          <CardDescription>
            Get the mobile app for the best learning experience
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download for Android
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>50K+ Downloads</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center">What We Offer</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center">Meet Our Team</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarFallback className="text-lg font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold mb-1">{member.name}</h4>
                <Badge variant="secondary" className="mb-3">
                  {member.role}
                </Badge>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Have questions or feedback? We'd love to hear from you!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              hello@paidforward.app
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              Follow on LinkedIn
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Visit Our Blog
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;