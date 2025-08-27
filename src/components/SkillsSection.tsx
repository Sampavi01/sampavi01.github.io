import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skills = [
  // AI & Machine Learning
  "Generative AI",
  "Large Language Models (LLM)",
  "RAG",
  "Multi-Agent Systems",
  "Deep Learning",
  "Time Series Forecasting",
  "NLP",
  "Hyperparameter Tuning",

  // Programming & Data Science
  "Python",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",

  // AI App Development
  "FastAPI",
  "Streamlit",
  "LangChain",
  "CrewAI",
  "Gemini API",

  // Developer Tools
  "Git & GitHub",
  "VSCode",
  "Modular System Design"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Core Competencies
          </h2>
          
          <Card className="p-8 md:p-10 shadow-elegant border-0 card-gradient">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-base font-medium tech-gradient border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
