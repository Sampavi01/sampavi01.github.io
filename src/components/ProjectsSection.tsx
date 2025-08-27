import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Full-Stack RAG Chatbot (RagBot 2.0)",
    description: `Built a FastAPI backend for multi-PDF ingestion, vector storage, and context-aware Q&A.
Developed a Streamlit client with real-time chat interface, document upload, and history management.
Integrated Gemini LLM, Hugging Face embeddings, and ChromaDB to enable scalable, retrieval-augmented conversations.`,
    techStack: ["Python", "FastAPI", "Streamlit", "LangChain", "ChromaDB", "Hugging Face", "Gemini API"],
    links: [
      { label: "GitHub", url: "https://github.com/Sampavi01/RagChatbot.git" }
    ]
  },
  {
    title: "Advanced Time Series Forecasting on Energy Data",
    description: `Built forecasting pipelines combining statistical models, ML regressors, and deep learning architectures (RNN, LSTM, GRU, CNN-LSTM, Transformer).
Engineered lag features, rolling statistics, and Fourier terms to capture multiple seasonal patterns.
Demonstrated consistent improvements of modern deep learning models over classical baselines.`,
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Statsmodels"],
    links: [
      { label: "GitHub", url: "https://github.com/Sampavi01/Advanced_Time_Series_Forecasting.git" }
    ]
  },
  {
    title: "MultiTool Modular Chatbot (MCP Agent)",
    description: `Built a multi-agent conversational platform integrating math, weather, dictionary, and research tools.
Developed a Streamlit interface for real-time chat and unified query routing across all tools.
Engineered asynchronous MCP servers with Groq Llama orchestration for context-aware responses.
Delivered a scalable, modular platform for interactive problem-solving and knowledge retrieval.`,
    techStack: ["Python", "FastMCP", "Streamlit", "LangGraph", "Groq Llama", "OpenWeatherMap API", "Arxiv API"],
    links: [
      { label: "GitHub MCP Agent", url: "https://github.com/Sampavi01/Multi_mcp_agent.git" },
      { label: "Knowledge MCP", url: "https://github.com/Sampavi01/Knowledge-MCP.git" }
    ]
  },
  {
    title: "Multi-Agent AI Platform",
    description: `Built a modular multi-agent AI system for research, math, and knowledge tools.
Developed graph-based workflows for dynamic, context-aware conversations.
Designed a clean Streamlit interface supporting dynamic queries to YouTube, DuckDuckGo, Arxiv, Wikipedia, weather, and Python REPL.`,
    techStack: ["Python", "Streamlit", "LangGraph", "LangChain", "Groq Llama", "Arxiv/Wikipedia/Weather APIs"],
    links: [
      { label: "MultiAI Skeleton", url: "https://github.com/Sampavi01/MultiAI-Skeleton.git" },
      { label: "MultiToolBot", url: "https://github.com/Sampavi01/MultiToolBot.git" }
    ]
  },
  {
    title: "CrewAI Autonomous Agents",
    description: `Built a modular AI agent framework for autonomous web search, analysis, and information processing.
Leveraged Google Gemini for advanced reasoning and natural language understanding.
Integrated SerperDevTool for live internet search and real-time data extraction.
Implemented CrewAI orchestration for coordinated multi-agent workflows solving complex, multi-step tasks.`,
    techStack: ["Python", "CrewAI", "Google Gemini", "SerperDevTool", "LiteLLM"],
    links: [
      { label: "GitHub", url: "https://github.com/Sampavi01/News-AI-Agents.git" }
    ]
  },
  {
    title: "Machine Learning & NLP",
    subProjects: [
      {
        title: "NER, Hyperparameter Tuning & Customer Segmentation (KMeans)",
        description: `Built a BiLSTM-LSTM NER model with token/tag preprocessing.
Performed hyperparameter tuning (Grid & Random Search) on neural networks.
Developed RFM-based customer segmentation using KMeans, with interactive visualizations.`,
        techStack: ["Python", "TensorFlow/Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Gradio"],
        links: [
          { label: "Hyperparameter Tuning", url: "https://github.com/Sampavi01/Hyperparameter_Tuning.git" },
          { label: "NER Model", url: "https://github.com/Sampavi01/NER-model.git" },
          { label: "RFM Customer Segmentation", url: "https://github.com/Sampavi01/RFM-Customer-Segmentation-App-with-KMeans.git" }
        ]
      }
    ]
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
          {projects.map((project, index) =>
            project.subProjects ? (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:scale-105 border-0 shadow-elegant card-gradient overflow-hidden"
              >
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-semibold text-foreground leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {project.subProjects.map((sub, subIndex) => (
                    <div key={subIndex}>
                      <h4 className="font-light text-lg">{sub.title}</h4>
                      <p className="text-base text-muted-foreground whitespace-pre-line">{sub.description}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {sub.techStack.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="tech-gradient border-primary/20 text-primary font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        {sub.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                            asChild
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <Github size={18} />
                              <span>{link.label}</span>
                              <ExternalLink size={16} className="group-hover:translate-x-1 transition-smooth" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ) : (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:scale-105 border-0 shadow-elegant card-gradient overflow-hidden"
              >
                <CardHeader className="relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-semibold text-foreground leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                    {project.description}
                  </CardDescription>

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

                  <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github size={18} />
                          <span>{link.label}</span>
                          <ExternalLink size={16} className="group-hover:translate-x-1 transition-smooth" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

