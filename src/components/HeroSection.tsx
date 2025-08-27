import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 z-10">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-elegant border-0 card-gradient">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Hero Content (no profile photo) */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sampavi Jesuthas
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
                AI Developer
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Building intelligent solutions with a focus on{" "}
                <span className="text-accent font-medium">Autonomous Agents</span> and{" "}
                <span className="text-primary font-medium">Large Language Models (LLMs)</span>.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary-glow shadow-glow transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </Card>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
