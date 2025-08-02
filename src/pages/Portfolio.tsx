import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download,
  Copy,
  Star,
  Calendar,
  MapPin,
  Award,
  Code,
  Eye,
  Share2,
  Sparkles,
  Palette,
  Zap,
  Waves,
  Globe,
  Building,
  Settings,
  Trophy,
  GraduationCap,
  BarChart3,
  Activity,
  Briefcase,
  Edit3,
  CheckCircle,
  ArrowRight,
  Code2,
  Rocket,
  Target,
  Lightbulb,
  User,
  BookOpen,
  Layers
} from "lucide-react";

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const [currentTemplate, setCurrentTemplate] = useState('classic');

  // Set template from URL params
  useEffect(() => {
    const templateParam = searchParams.get('template');
    if (templateParam && ['classic', 'creative', 'modern'].includes(templateParam)) {
      setCurrentTemplate(templateParam);
    }
  }, [searchParams]);

  const portfolioData = {
    name: "Alex Chen",
    title: "Full-Stack Developer & AI Enthusiast",
    tagline: "Building the future with code, one project at a time",
    location: "San Francisco, CA",
    email: "alex.chen@email.com",
    github: "alex-dev",
    linkedin: "alexchen-dev",
    about: "Aspiring full-stack developer with a passion for AI and machine learning. Experienced in React, Python, and cloud technologies. Currently pursuing Computer Science degree while building real-world applications and contributing to open-source projects.",
    
    achievements: [
      {
        title: "Software Engineering Intern",
        issuer: "TechCorp Inc.",
        date: "Summer 2024",
        type: "internship",
        description: "Developed microservices architecture, improved API performance by 40%"
      },
      {
        title: "Best Innovation Award",
        issuer: "University Hackathon",
        date: "2024",
        type: "award",
        description: "First place for developing an AI-powered sustainability platform"
      }
    ],

    certificates: [
      {
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        credentialId: "AWS-12345"
      },
      {
        title: "Google Data Analytics Certificate",
        issuer: "Google",
        date: "2023",
        credentialId: "GOOGLE-67890"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <main className="pt-2 pb-20">
        
        {/* Professional Achievements Timeline - Fixed Mobile/Desktop Layout */}
        <section className="py-20 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Achievements & Milestones</h2>
              </div>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Celebrating moments of growth and recognition in my journey
              </p>
            </div>
            
            {/* Mobile Cards Layout */}
            <div className="block md:hidden">
              <div className="grid gap-6">
                {portfolioData.achievements.map((achievement, index) => (
                  <Card 
                    key={index}
                    className="bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          {achievement.type === 'internship' ? 
                            <Briefcase className="w-6 h-6 text-primary" /> : 
                            <Trophy className="w-6 h-6 text-primary" />
                          }
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                            {achievement.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-primary font-medium text-sm mb-2">
                            <Building className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{achievement.issuer}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{achievement.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {achievement.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <Badge 
                          variant="outline" 
                          className={`${
                            achievement.type === 'internship' 
                              ? 'border-blue-500/30 text-blue-600 bg-blue-500/10' 
                              : 'border-yellow-500/30 text-yellow-600 bg-yellow-500/10'
                          } font-medium`}
                        >
                          {achievement.type === 'internship' ? '💼 Internship' : '🏆 Award'}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Desktop Timeline Layout */}
            <div className="hidden md:block relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/20 rounded-full" />
              
              <div className="space-y-12">
                {portfolioData.achievements.map((achievement, index) => (
                  <div key={index} className="relative flex items-start group">
                    <div className="relative z-10 mr-8">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg border-4 border-background group-hover:shadow-xl transition-all duration-300">
                        {achievement.type === 'internship' ? 
                          <Briefcase className="w-8 h-8 text-primary-foreground" /> : 
                          <Trophy className="w-8 h-8 text-primary-foreground" />
                        }
                      </div>
                    </div>
                    
                    <Card className="flex-1 bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/30">
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                              {achievement.title}
                            </h3>
                            <div className="flex items-center space-x-3 mb-1">
                              <div className="flex items-center space-x-2 text-primary font-semibold">
                                <Building className="w-4 h-4" />
                                <span>{achievement.issuer}</span>
                              </div>
                            </div>
                          </div>
                          
                          <Badge className="bg-secondary border-border text-foreground px-4 py-2 rounded-lg">
                            <Calendar className="w-4 h-4 mr-2" />
                            {achievement.date}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {achievement.description}
                        </p>
                        
                        <div className="flex justify-end">
                          <Badge 
                            variant="outline" 
                            className={`${
                              achievement.type === 'internship' 
                                ? 'border-blue-500/30 text-blue-600 bg-blue-500/10' 
                                : 'border-yellow-500/30 text-yellow-600 bg-yellow-500/10'
                            } px-3 py-2 font-medium`}
                          >
                            {achievement.type === 'internship' ? '💼 Internship' : '🏆 Award'}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Certificates Section - Standardized Heading */}
        <section className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Certifications</h2>
              </div>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional certifications and continuous learning achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.certificates.map((cert, index) => (
                <Card 
                  key={index}
                  className="glass-card group hover:glow-accent transition-all duration-500 border-accent/20 hover:border-accent/40 overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-pulse/5 to-electric/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative z-10 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-gradient-to-r from-accent/20 to-electric/20 border-accent/30 text-foreground px-3 py-1 rounded-lg">
                        <Calendar className="w-3 h-3 mr-2" />
                        {cert.date}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient-accent transition-all duration-300 mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-accent font-semibold text-lg">
                          {cert.issuer}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-foreground-muted">Credential ID:</span>
                          <span className="font-mono text-foreground bg-secondary px-2 py-1 rounded">
                            {cert.credentialId}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-electric/50 text-electric hover:bg-electric/20 rounded-xl font-bold transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
