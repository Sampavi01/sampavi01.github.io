import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Autonomous AI Agents for Real-Time Web Search and Analysis",
    description: "A modular framework that empowers AI agents to autonomously search, analyze, and process information from the web. Designed for orchestrating complex, multi-step tasks and extracting actionable insights from live internet data.",
    techStack: ["Python", "CrewAI", "Google Gemini API", "SerperDevTool", "LiteLLM"],
    githubUrl: "https://github.com/Sampavi01/News-AI-Agents.git"
  },
  {
    title: "RagBot 2.0: PDF-Powered Chatbot with Retrieval-Augmented Generation",
    description: "RagBot 2.0 is a Streamlit-based chatbot that enables users to upload PDF documents and interact with their content using advanced retrieval-augmented generation (RAG) techniques. The system ingests PDFs, stores them in a vector database, and provides intelligent, context-aware responses.",
    techStack: ["Python", "Streamlit", "FastAPI", "ChromaDB", "PyPDF2"],
    githubUrl: "https://github.com/Sampavi01/RagChatbot.git"
  },
  {
    title: "WanderWise: Interactive AI Storyteller for Colombo",
    description: "A command-line AI-powered tour guide that personalizes your journey through Colombo, Sri Lanka. Choose your persona and explore local places, cultures, and foods with engaging stories, quizzes, and secrets.",
    techStack: ["Jac Language", "Python", "Gemini LLM API", "CLI", "JSON"],
    githubUrl: "https://github.com/Sampavi01/AI-TravelGuide.git"
  },
  {
    title: "Named Entity Recognition (NER) with BiLSTM-LSTM Model",
    description: "This project builds a deep learning model to perform Named Entity Recognition on text data using a BiLSTM-LSTM architecture.",
    techStack: ["Python", "Pandas", "scikit-learn", "Keras", "TensorFlow"],
    githubUrl: "https://github.com/Sampavi01/NER-model.git"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:scale-105 border-0 shadow-elegant card-gradient overflow-hidden"
            >
              <CardHeader className="relative">
                {/* Project number indicator */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                
                <CardTitle className="text-xl md:text-2xl font-semibold text-foreground leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="tech-gradient border-primary/20 text-primary font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* GitHub Link */}
                <Button 
                  variant="outline" 
                  className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
                  asChild
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={18} />
                    <span>GitHub Repository</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-smooth" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;