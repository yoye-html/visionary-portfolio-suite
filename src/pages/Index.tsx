import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { CareerGoals } from "@/components/portfolio/CareerGoals";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { ElevatorPitch } from "@/components/portfolio/ElevatorPitch";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CareerGoals />
      <ExperienceTimeline />
      <ElevatorPitch />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
