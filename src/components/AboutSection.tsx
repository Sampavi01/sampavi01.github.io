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
              {/* Decorative accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/20 rounded-full"></div>

              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                I am an Electrical Engineering student with a focus on creating intelligent and efficient AI systems. 
                I develop applications that handle complex workflows, integrate multiple data sources, and deliver practical solutions for real-world problems.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mt-6">
                My experience includes building autonomous AI agents, interactive tools, and scalable systems that combine predictive modeling, deep learning, and data-driven insights. 
                I am committed to exploring emerging technologies to enhance system performance and usability.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mt-6">
                Through hands-on projects, I aim to bridge advanced AI concepts with tangible applications, delivering solutions that are both innovative and impactful.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


