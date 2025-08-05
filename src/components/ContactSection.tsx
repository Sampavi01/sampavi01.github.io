import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get in Touch
          </h2>
          
          <Card className="p-8 md:p-10 shadow-elegant border-0 card-gradient">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                Let's Connect and Build Something Amazing
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Email */}
              <div className="flex items-center justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full max-w-md border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
                  asChild
                >
                  <a 
                    href="mailto:sampavijesuthas1@gmail.com"
                    className="flex items-center gap-3"
                  >
                    <Mail size={20} />
                    <span className="font-medium">sampavijesuthas1@gmail.com</span>
                  </a>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce group"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/sampavi-jesuthas-a290122b2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-smooth" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce group"
                  asChild
                >
                  <a 
                    href="https://github.com/Sampavi01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-smooth" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;