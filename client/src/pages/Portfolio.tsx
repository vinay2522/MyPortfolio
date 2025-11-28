import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VNLogo, VNLogoText } from "@/components/VNLogo";
import { useTheme } from "@/components/ThemeProvider";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { 
  Sun, 
  Moon, 
  Github, 
  Mail, 
  MapPin,
  ExternalLink,
  ChevronDown,
  Lock,
  Ambulance,
  Leaf,
  Link2,
  GraduationCap,
  Briefcase,
  Award,
  BadgeCheck,
  Code2,
  Database,
  Server,
  Shield,
  Menu,
  X,
  Download,
  FileText,
  Terminal
} from "lucide-react";
const vinayPhoto = "/vinay-photo.jpg";

const projects = [
  {
    id: 1,
    title: "Secured Evidence Chain Blockchain",
    description: "Blockchain-based web app to securely store and track digital evidence using Ethereum, Solidity, and IPFS. Implements AES/RSA encryption and smart contracts for immutable, auditable logs.",
    tech: ["Ethereum", "Solidity", "IPFS", "React.js", "Web3.js", "Node.js"],
    github: "https://github.com/vinay2522/Hackcult",
    icon: Lock,
    gradient: "from-violet-500 to-purple-600",
    category: "Blockchain",
  },
  {
    id: 2,
    title: "AI-Based Ambulance Dispatch",
    description: "Reduced ambulance dispatch delays by 60%+ through ML-driven emergency demand forecasting. Full-stack MERN app with real-time allocation and tracking.",
    tech: ["Python", "scikit-learn", "MERN Stack", "Machine Learning"],
    github: "https://github.com/vinay2522/Temp-mini_project",
    icon: Ambulance,
    gradient: "from-cyan-500 to-blue-600",
    category: "AI/ML",
  },
  {
    id: 3,
    title: "Plant Disease Detection Model",
    description: "CNN using TensorFlow/Keras to identify plant diseases from leaf images with high accuracy. Integrated into user-friendly web interface using Flask.",
    tech: ["TensorFlow", "Keras", "Python", "Flask", "CNN"],
    github: "https://github.com/vinay2522/plant_disease",
    icon: Leaf,
    gradient: "from-emerald-500 to-green-600",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Serverless URL Shortener",
    description: "Built serverless web application using AWS Lambda, API Gateway, S3, and DynamoDB. Implemented unique short code generator and redirect mechanism.",
    tech: ["AWS Lambda", "API Gateway", "S3", "DynamoDB"],
    github: "#",
    icon: Link2,
    gradient: "from-orange-500 to-amber-600",
    category: "Cloud",
  },
];

const projectCategories = ["All", "Blockchain", "AI/ML", "Cloud"];

const skills = {
  languages: ["Java", "C", "JavaScript", "HTML", "CSS", "MySQL", "Python"],
  frameworks: ["Node.js", "Express.js", "React.js"],
  databases: ["MySQL", "MongoDB", "DynamoDB"],
  concepts: ["DSA", "OS", "DBMS", "CN", "Cybersecurity", "Software Testing"],
  tools: ["Git", "VS Code", "AWS (Lambda, S3)", "Security Testing Tools"],
};

const experience = [
  {
    title: "Student Intern, Security Development & Testing",
    company: "Nokia",
    location: "Bangalore, India",
    period: "Aug 2025 – Present",
    description: [
      "Contributing to security development and testing of enterprise-grade CFX-5000 products",
      "Performing advanced vulnerability analysis, penetration testing, and compliance verification",
      "Supporting secure software lifecycle processes and automating security validation workflows",
    ],
    current: true,
  },
];

const education = [
  {
    institution: "Siddaganga Institute of Technology",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Tumkur, India",
    period: "2022 – Present",
    score: "CGPA: 8.96/10",
  },
  {
    institution: "Seshadripuram PU College",
    degree: "Pre-University (PCMB)",
    location: "Tumkur, India",
    period: "2020 – 2022",
    score: "93%",
  },
  {
    institution: "Chirec Public School",
    degree: "High School (SSLC)",
    location: "Madhugiri, India",
    period: "10th - 2020",
    score: "95.84%",
  },
];

const achievements = [
  {
    title: "3rd Place - Hack Kshetra National-Level Hackathon",
    description: "Secured recognition in cybersecurity domain, competing against top-tier teams nationwide",
    year: "2024",
    venue: "VVCE College, Mysore",
  },
  {
    title: "7+ Hackathon Participations",
    description: "Demonstrated problem-solving and innovation across multiple competitions",
    year: "2024",
    venue: "SIH 2024, Hack Kshetra, NullClass",
  },
];

const certifications = [
  { name: "Data Structures & Algorithms", issuer: "GeeksforGeeks (GFG)" },
  { name: "Full Stack Web Development Bootcamp", issuer: "NullClass" },
  { name: "Java Programming Masterclass", issuer: "Udemy" },
];

const blogPosts = [
  {
    id: 1,
    title: "Building Secure Blockchain Applications",
    excerpt: "A deep dive into implementing secure evidence chains using Ethereum, Solidity, and IPFS with proper encryption practices.",
    date: "Nov 2024",
    readTime: "8 min read",
    category: "Blockchain",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "ML-Driven Emergency Response Systems",
    excerpt: "How machine learning can optimize ambulance dispatch and reduce emergency response times by over 60%.",
    date: "Oct 2024",
    readTime: "6 min read",
    category: "AI/ML",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    title: "Security Testing Best Practices",
    excerpt: "Lessons learned from Nokia: vulnerability analysis, penetration testing, and compliance verification workflows.",
    date: "Sep 2024",
    readTime: "10 min read",
    category: "Security",
    gradient: "from-emerald-500 to-green-600",
  },
];


const codeSnippets = [
  {
    id: 1,
    title: "Smart Contract - Evidence Chain",
    language: "solidity",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EvidenceChain {
    struct Evidence {
        bytes32 hash;
        address owner;
        uint256 timestamp;
        bool verified;
    }
    
    mapping(uint256 => Evidence) public evidences;
    uint256 public evidenceCount;
    
    event EvidenceAdded(
        uint256 id, 
        bytes32 hash, 
        address owner
    );
    
    function addEvidence(bytes32 _hash) 
        public returns (uint256) 
    {
        evidenceCount++;
        evidences[evidenceCount] = Evidence({
            hash: _hash,
            owner: msg.sender,
            timestamp: block.timestamp,
            verified: true
        });
        emit EvidenceAdded(
            evidenceCount, 
            _hash, 
            msg.sender
        );
        return evidenceCount;
    }
}`,
    description: "Smart contract for immutable evidence storage",
  },
  {
    id: 2,
    title: "ML Prediction Model",
    language: "python",
    code: `import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler

class AmbulancePredictor:
    def __init__(self):
        self.model = RandomForestRegressor(
            n_estimators=100,
            max_depth=10,
            random_state=42
        )
        self.scaler = StandardScaler()
    
    def preprocess(self, data):
        features = [
            'hour', 'day_of_week',
            'population_density',
            'historical_demand',
            'weather_severity'
        ]
        return self.scaler.fit_transform(
            data[features]
        )
    
    def predict_demand(self, X):
        X_scaled = self.preprocess(X)
        return self.model.predict(X_scaled)
    
    def optimize_dispatch(self, demand):
        # Allocation algorithm
        return np.argsort(demand)[::-1]`,
    description: "ML model for ambulance demand forecasting",
  },
  {
    id: 3,
    title: "AWS Lambda Handler",
    language: "javascript",
    code: `const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB
    .DocumentClient();
const crypto = require('crypto');

exports.handler = async (event) => {
    const { url } = JSON.parse(event.body);
    
    // Generate short code
    const shortCode = crypto
        .randomBytes(4)
        .toString('base64url');
    
    // Store in DynamoDB
    await dynamoDB.put({
        TableName: 'URLShortener',
        Item: {
            shortCode,
            originalUrl: url,
            createdAt: Date.now(),
            clicks: 0
        }
    }).promise();
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            shortUrl: \`https://short.ly/\${shortCode}\`
        })
    };
};`,
    description: "Serverless URL shortener with DynamoDB",
  },
];

function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <span className="border-r-2 border-current animate-blink ml-1" />
    </span>
  );
}

function ScrollReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "Code", href: "#code" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <ScrollProgress />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
        data-testid="navigation"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
              aria-label="Scroll to top"
            >
              <div className="group-hover:rotate-12 transition-transform duration-300">
                <VNLogo size="sm" />
              </div>
              <VNLogoText className="text-xl hidden sm:block group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-violet-500 group-hover:to-purple-500 transition-all duration-300" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium relative group"
                  data-testid={`nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                className="relative overflow-visible hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-accent/50"
                data-testid="button-theme-toggle"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-500 hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="h-5 w-5 text-violet-500 hover:rotate-180 transition-transform duration-500" />
                )}
              </Button>

            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
        </div>
      </nav>
    </>
  );
}

function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-testid="hero-section">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <VNLogo size="lg" />
            </div>
            
            <div className="space-y-2">
              <p className="text-cyan-400 font-mono text-sm tracking-wider">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
                <TypewriterText text="Vinay Naik V" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-500" />
              </h1>
            </div>

            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer & Security Engineer
            </p>

            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Currently interning at <span className="text-cyan-400 font-semibold">Nokia</span> in Security Development. 
              Passionate about Blockchain, AI/ML, and building secure, scalable applications.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50 active:scale-95 group"
                data-testid="button-view-projects"
              >
                View Projects
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 group-hover:animate-bounce transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline"
                className="border-border hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-contact-me"
              >
                Contact Me
              </Button>
              <a href="/vinay-naik-resume.pdf" download="Vinay_Naik_Resume.pdf">
                <Button 
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500/30 active:scale-95 group"
                  data-testid="button-download-resume"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce transition-transform duration-300" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/vinay2522"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card border border-border hover:border-violet-500 transition-colors"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:vinaynaik252@gmail.com"
                className="p-2 rounded-full bg-card border border-border hover:border-cyan-500 transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right: Photo with 3D Effect */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group" style={{ perspective: "1000px" }}>
              {/* Enhanced gradient border effect with 3D glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-violet-500 to-purple-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 animate-pulse-glow transition-opacity duration-300" />
              <div 
                className="relative transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div 
                  className="relative transition-transform duration-500"
                  style={{ 
                    transformStyle: "preserve-3d",
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
                  }}
                >
                  <img
                    src={vinayPhoto}
                    alt="Vinay Naik V"
                    className="w-64 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl border-2 border-border shadow-2xl shadow-violet-500/30"
                    style={{
                      transform: "translateZ(30px)",
                      filter: "brightness(1.05) contrast(1.05)",
                      willChange: "transform"
                    }}
                    data-testid="img-profile"
                  />
                  {/* 3D depth overlay */}
                  <div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 pointer-events-none"
                    style={{ transform: "translateZ(15px)" }}
                  />
                </div>
              </div>
              {/* Enhanced floating badge with 3D effect */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-xl animate-float transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm font-medium">Nokia Intern</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-32" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in blockchain, AI/ML, and cloud technologies
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-300 ${
                  activeFilter === category 
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0 shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60 hover:scale-105" 
                    : "border-border hover:border-violet-500/50 hover:bg-violet-500/10 hover:scale-105 active:scale-95"
                }`}
                data-testid={`filter-${category.toLowerCase().replace('/', '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <Card className="group relative overflow-visible bg-card border-border hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 cursor-pointer">
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
                
                <div className="p-6 space-y-4 relative z-10">
                  {/* Project Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <project.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <Badge variant="outline" className="text-xs font-mono border-border group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-all duration-300">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-500 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-all duration-300 group/link"
                      data-testid={`link-project-${project.id}`}
                    >
                      <Github className="h-4 w-4 group-hover/link:scale-125 group-hover/link:rotate-12 transition-transform duration-300" />
                      View on GitHub
                      <ExternalLink className="h-3 w-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    { title: "Languages", items: skills.languages, icon: Code2, color: "text-cyan-400" },
    { title: "Frameworks", items: skills.frameworks, icon: Server, color: "text-violet-400" },
    { title: "Databases", items: skills.databases, icon: Database, color: "text-purple-400" },
    { title: "Concepts", items: skills.concepts, icon: Shield, color: "text-emerald-400" },
    { title: "Tools", items: skills.tools, icon: Briefcase, color: "text-orange-400" },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-card/50" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 100}>
              <Card className="p-6 bg-card border-border hover:border-violet-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                  <h3 className="font-display font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-mono text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-32" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Experience</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="relative pl-8 pb-8">
                {/* Enhanced Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-purple-500 shadow-lg shadow-cyan-500/50" />
                
                {/* Enhanced Timeline dot with glow */}
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[5px] rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 ring-4 ring-background shadow-lg shadow-cyan-500/50 animate-pulse-glow" />
                
                <Card className="p-6 bg-card border-border hover:border-cyan-500/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <Badge className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white border-0">
                        Current
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-cyan-400 mt-1.5">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-32 bg-card/50" data-testid="education-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">Education</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="p-6 bg-card border-border hover:border-violet-500/50 transition-colors">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display font-semibold">{edu.institution}</h3>
                        <p className="text-muted-foreground text-sm">{edu.degree}</p>
                      </div>
                      <Badge variant="secondary" className="font-mono text-xs whitespace-nowrap">
                        {edu.score}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="py-20 sm:py-32" data-testid="achievements-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Certifications</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Achievements */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-yellow-500" />
              Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-5 bg-card border-border hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {achievement.venue} • {achievement.year}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold flex items-center gap-2 mb-6">
              <BadgeCheck className="h-5 w-5 text-emerald-500" />
              Certifications
            </h3>
            {certifications.map((cert, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-5 bg-card border-border hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                      <BadgeCheck className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{cert.name}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="py-20 sm:py-32 bg-card/50" data-testid="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Articles</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep dives into my projects and technical explorations
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <Card className="group h-full bg-card border-border hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs font-mono border-border">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-display font-semibold group-hover:text-violet-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                      Read more
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeSnippetsSection() {
  const [activeSnippet, setActiveSnippet] = useState(0);

  return (
    <section id="code" className="py-20 sm:py-32 bg-card/50" data-testid="code-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Showcase</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sample code from my projects demonstrating different technologies
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {codeSnippets.map((snippet, index) => (
              <Button
                key={snippet.id}
                variant={activeSnippet === index ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveSnippet(index)}
                className={activeSnippet === index 
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0" 
                  : "border-border hover:border-violet-500/50"}
                data-testid={`snippet-tab-${index}`}
              >
                <Terminal className="mr-2 h-4 w-4" />
                {snippet.language.charAt(0).toUpperCase() + snippet.language.slice(1)}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-[#1a1b26] border-border">
              <div className="flex items-center justify-between px-4 py-3 bg-[#16161e] border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm font-mono text-muted-foreground">
                  {codeSnippets[activeSnippet].title}
                </span>
                <Badge variant="outline" className="text-xs font-mono border-border">
                  {codeSnippets[activeSnippet].language}
                </Badge>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="text-gray-300">
                    {codeSnippets[activeSnippet].code}
                  </code>
                </pre>
              </div>
              <div className="px-4 py-3 bg-[#16161e] border-t border-border">
                <p className="text-sm text-muted-foreground">
                  {codeSnippets[activeSnippet].description}
                </p>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-card/50" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  href="mailto:vinaynaik252@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted transition-colors group"
                  data-testid="contact-email"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm group-hover:text-cyan-400 transition-colors break-all">
                      vinaynaik252@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/vinay2522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted transition-colors group"
                  data-testid="contact-github"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium text-sm group-hover:text-foreground transition-colors">
                      github.com/vinay2522
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-sm">Tumkur, India</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <VNLogo size="sm" />
            <span className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Vinay Naik V. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vinay2522"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:vinaynaik252@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <BlogSection />
        <CodeSnippetsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
