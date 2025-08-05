import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <Card className="p-8 md:p-10 shadow-elegant border-0 card-gradient">
            <div className="relative">
              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/20 rounded-full"></div>
              
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                I am a passionate and skilled{" "}
                <span className="text-primary font-semibold">AI Developer</span>{" "}
                with a strong focus on creating autonomous systems and leveraging the power of{" "}
                <span className="text-accent font-semibold">Large Language Models (LLMs)</span>. 
                My experience includes developing modular AI agents for real-time web analysis, 
                building interactive PDF-powered chatbots with{" "}
                <span className="text-primary font-semibold">Retrieval-Augmented Generation (RAG)</span>, 
                and designing creative AI-driven applications.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mt-6">
                I am proficient in{" "}
                <span className="text-accent font-semibold">Python</span>{" "}
                and a range of cutting-edge AI frameworks and tools, always eager to tackle 
                complex challenges and build impactful solutions.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;