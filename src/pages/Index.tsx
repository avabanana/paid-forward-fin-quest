import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import CourseLibrary from "@/components/CourseLibrary";
import AIChatbot from "@/components/AIChatbot";
import Gamification from "@/components/Gamification";
import Discussions from "@/components/Discussions";
import About from "@/components/About";

const Index = () => {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="chatbot">AI Assistant</TabsTrigger>
            <TabsTrigger value="games">Games</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="space-y-0">
            <CourseLibrary />
          </TabsContent>
          
          <TabsContent value="chatbot" className="space-y-0">
            <AIChatbot />
          </TabsContent>
          
          <TabsContent value="games" className="space-y-0">
            <Gamification />
          </TabsContent>
          
          <TabsContent value="discussions" className="space-y-0">
            <Discussions />
          </TabsContent>
          
          <TabsContent value="about" className="space-y-0">
            <About />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
