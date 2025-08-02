import Hero from "@/components/Hero";
import CourseLibrary from "@/components/CourseLibrary";
import AIChatbot from "@/components/AIChatbot";
import Gamification from "@/components/Gamification";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CourseLibrary />
      <AIChatbot />
      <Gamification />
    </div>
  );
};

export default Index;
