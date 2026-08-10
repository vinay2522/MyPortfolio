"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sun,
  Moon,
  Github,
  Linkedin,
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
  Terminal,
} from "lucide-react"

// Theme Provider
function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") as "dark" | "light" | null
    if (stored === "dark" || stored === "light") setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  useEffect(() => {
    const handleThemeChange = (event: Event) => {
      const nextTheme = (event as CustomEvent<"dark" | "light">).detail
      if (nextTheme === "dark" || nextTheme === "light") setTheme(nextTheme)
    }
    window.addEventListener("portfolio-theme-change", handleThemeChange)
    return () => window.removeEventListener("portfolio-theme-change", handleThemeChange)
  }, [])

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))

  return { theme, toggleTheme }
}

// VN Logo Component
function VNLogo({ size = "md", className = "" }: { size?: "sm" | "md" | "lg" | "xl"; className?: string }) {
  const sizeClasses = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-14 h-14", xl: "w-20 h-20" }
  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="vnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="vnGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="46" fill="none" stroke="url(#vnGradient)" strokeWidth="3" filter="url(#glow)" />
        <path
          d="M25 25 L40 70 L50 45"
          stroke="url(#vnGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
        />
        <path
          d="M50 45 L50 70 L65 25 L75 70"
          stroke="url(#vnGradient2)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
        />
        <circle cx="50" cy="80" r="3" fill="url(#vnGradient)" filter="url(#glow)" />
      </svg>
    </div>
  )
}

function VNLogoText({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-500 ${className}`}
    >
      VN
    </span>
  )
}

// Data
const projects = [
  {
    id: 1,
    title: "Secured Evidence Chain Blockchain",
    description:
      "Blockchain-based web app to securely store and track digital evidence using Ethereum, Solidity, and IPFS. Implements AES/RSA encryption and smart contracts for immutable, auditable logs.",
    tech: ["Ethereum", "Solidity", "IPFS", "React.js", "Web3.js", "Node.js"],
    github: "https://github.com/vinay2522/Hackcult",
    icon: Lock,
    gradient: "from-violet-500 to-purple-600",
    category: "Blockchain",
  },
  {
    id: 2,
    title: "AI-Based Ambulance Dispatch",
    description:
      "Reduced ambulance dispatch delays by 60%+ through ML-driven emergency demand forecasting. Full-stack MERN app with real-time allocation and tracking.",
    tech: ["Python", "scikit-learn", "MERN Stack", "Machine Learning"],
    github: "https://github.com/vinay2522/Temp-mini_project",
    icon: Ambulance,
    gradient: "from-cyan-500 to-blue-600",
    category: "AI/ML",
  },
  {
    id: 3,
    title: "Plant Disease Detection Model",
    description:
      "CNN using TensorFlow/Keras to identify plant diseases from leaf images with high accuracy. Integrated into user-friendly web interface using Flask.",
    tech: ["TensorFlow", "Keras", "Python", "Flask", "CNN"],
    github: "https://github.com/vinay2522/plant_disease",
    icon: Leaf,
    gradient: "from-emerald-500 to-green-600",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Serverless URL Shortener",
    description:
      "Built serverless web application using AWS Lambda, API Gateway, S3, and DynamoDB. Implemented unique short code generator and redirect mechanism.",
    tech: ["AWS Lambda", "API Gateway", "S3", "DynamoDB"],
    github: "#",
    icon: Link2,
    gradient: "from-orange-500 to-amber-600",
    category: "Cloud",
  },
]

const projectNarrations: Record<string, { aliases: string[]; answer: string }> = {
  "secured evidence chain blockchain": {
    aliases: ["blockchain", "block chain", "evidence chain", "secured evidence", "ethereum", "solidity", "ipfs"],
    answer: "The Secured Evidence Chain is a blockchain web app for securely storing and tracking digital evidence. It uses Ethereum and Solidity smart contracts for immutable audit logs, IPFS for distributed storage, and AES and RSA encryption to protect sensitive evidence.",
  },
  "ai-based ambulance dispatch": {
    aliases: ["ambulance", "dispatch", "emergency", "ai ambulance", "ambulance project", "machine learning dispatch"],
    answer: "The AI-Based Ambulance Dispatch system predicts emergency demand and improves ambulance allocation. It reduced dispatch delays by more than 60 percent through machine learning, real-time tracking, and a full-stack MERN application.",
  },
  "plant disease detection model": {
    aliases: ["plant disease", "plant detection", "leaf disease", "crop disease", "tensorflow plant", "keras plant"],
    answer: "The Plant Disease Detection Model uses a convolutional neural network built with TensorFlow and Keras to identify plant diseases from leaf images. Vinay integrated it with a Flask web interface so users can submit images and receive a practical prediction.",
  },
  "serverless url shortener": {
    aliases: ["url shortener", "shortener", "short url", "aws url", "lambda url", "serverless"],
    answer: "The Serverless URL Shortener is an AWS application using Lambda, API Gateway, S3, and DynamoDB. It generates unique short codes, stores the original URLs, and redirects users through a lightweight serverless architecture.",
  },
}

const projectCategories = ["All", "Blockchain", "AI/ML", "Cloud"]

const skills = {
  languages: ["Java", "C", "JavaScript", "HTML", "CSS", "MySQL", "Python"],
  frameworks: ["Node.js", "Express.js", "React.js"],
  databases: ["MySQL", "MongoDB", "DynamoDB"],
  concepts: ["DSA", "OS", "DBMS", "CN", "Cybersecurity", "Software Testing"],
  tools: ["Git", "VS Code", "AWS (Lambda, S3)", "Security Testing Tools"],
}

const experience = [
  {
    title: "Software Engineer 1",
    company: "Nike · CIS (Corporate Information Security)",
    location: "Bangalore, India",
    period: "Aug 13, 2026 – Present",
    description: [
      "Joining Nike as a Software Engineer 1 within the CIS domain, building reliable software for enterprise security operations.",
      "Bringing hands-on experience in Python automation, API integration, infrastructure workflows, and secure engineering practices.",
    ],
    current: true,
  },
  {
    title: "Software Engineering Intern",
    company: "Nike · CIS (Corporate Information Security)",
    location: "Bangalore, India",
    period: "Jan 2026 – Jul 2026",
    description: [
      "Developed and enhanced the PAN-OS Upgrade Automation Platform to standardize firewall upgrades across enterprise-scale Palo Alto environments.",
      "Implemented pre-upgrade validation, health checks, backup verification, post-upgrade validation, monitoring, and reporting to improve upgrade reliability.",
      "Worked with Python, PAN-OS XML APIs, firewall automation workflows, and High Availability (HA) concepts to design safe, scalable upgrade processes.",
      "Contributed to upgrade safety, configuration validation, comparison reporting, and audit-ready documentation while collaborating with experienced security engineers.",
    ],
    current: false,
  },
  {
    title: "Student Intern, Security Development & Testing",
    company: "Nokia",
    location: "Bangalore, India",
    period: "Aug 2025 – Dec 2025",
    description: [
      "Contributed to security development and testing of enterprise-grade CFX-5000 products.",
      "Performed vulnerability analysis, penetration testing, compliance verification, and secure software lifecycle activities.",
      "Supported automation of security validation workflows and strengthened practical cybersecurity engineering skills.",
    ],
    current: false,
  },
]

const education = [
  {
    institution: "Siddaganga Institute of Technology",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Tumkur, India",
    period: "2022 – Jul 2026",
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
    period: "Graduated 2020",
    score: "95.84%",
  },
]

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
]

const certifications = [
  { name: "Data Structures & Algorithms", issuer: "GeeksforGeeks (GFG)" },
  { name: "Full Stack Web Development Bootcamp", issuer: "NullClass" },
  { name: "Java Programming Masterclass", issuer: "Udemy" },
]

const blogPosts = [
  {
    id: 1,
    title: "Building Secure Blockchain Applications",
    excerpt:
      "A deep dive into implementing secure evidence chains using Ethereum, Solidity, and IPFS with proper encryption practices.",
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
    excerpt:
      "Lessons learned from enterprise security work: validation, automation, and reliable compliance workflows.",
    date: "Sep 2024",
    readTime: "10 min read",
    category: "Security",
    gradient: "from-emerald-500 to-green-600",
  },
]

/* code showcase removed */

// The portfolio data above is the single source of truth for the ATS-friendly resume.
function downloadResumePdf() {
  import("jspdf/dist/jspdf.es.min.js").then(({ jsPDF }) => {
    const pdf = new jsPDF({ unit: "pt", format: "a4" })
    const margin = 44
    const pageWidth = 595
    const pageHeight = 842
    const width = pageWidth - margin * 2
    let y = 46
    const ensureRoom = (height = 24) => {
      if (y + height > pageHeight - 48) {
        pdf.addPage()
        y = 46
        pdf.setFont("helvetica", "normal")
        pdf.setFontSize(8)
        pdf.text("VINAY NAIK V  ·  Software Engineer 1", margin, 28)
        pdf.text("ATS Resume", pageWidth - margin - 42, 28)
      }
    }
    const addText = (text: string, size = 10, bold = false, gap = 10) => {
      pdf.setFont("helvetica", bold ? "bold" : "normal")
      pdf.setFontSize(size)
      const lines = pdf.splitTextToSize(text, width)
      const height = lines.length * (size + 3)
      ensureRoom(height + gap)
      pdf.text(lines, margin, y)
      y += height + gap
    }
    const section = (title: string) => {
      ensureRoom(32)
      y += 4
      pdf.setDrawColor(145, 145, 145)
      pdf.line(margin, y, pageWidth - margin, y)
      y += 16
      addText(title.toUpperCase(), 10, true, 5)
    }
    const bullet = (text: string) => addText(`- ${text}`, 9, false, 3)

    addText("VINAY NAIK V", 19, true, 3)
    addText("Software Engineer 1 | Cybersecurity Automation | Full-Stack Engineering", 10, false, 3)
    addText("Bangalore, India | vinay.1si22cs201@gmail.com | github.com/vinay2522 | www.linkedin.com/in/vinay-naik-v-4aa303251", 9, false, 8)
    section("Professional Summary")
    addText("Software Engineer 1 focused on secure automation, enterprise infrastructure, API integration, and reliable software systems. Experienced with Python, PAN-OS XML APIs, firewall workflows, cybersecurity testing, cloud technologies, and full-stack development.", 9, false, 6)
    section("Technical Skills")
    Object.entries(skills).forEach(([category, items]) => addText(`${category}: ${items.join(", ")}`, 9, false, 3))
    section("Professional Experience")
    experience.forEach((exp) => {
      addText(`${exp.title} | ${exp.company}`, 10, true, 2)
      addText(`${exp.period} | ${exp.location}`, 9, false, 3)
      exp.description.forEach(bullet)
      y += 4
    })
    section("Selected Projects")
    projects.forEach((project) => {
      addText(project.title, 10, true, 2)
      bullet(project.description)
      addText(`Technologies: ${project.tech.join(", ")} | ${project.github}`, 8, false, 5)
    })
    section("Education")
    education.forEach((edu) => {
      addText(`${edu.degree} | ${edu.institution}`, 10, true, 2)
      addText(`${edu.period} | ${edu.location} | ${edu.score}`, 9, false, 5)
    })
    section("Achievements")
    achievements.forEach((item) => bullet(`${item.title} - ${item.description} (${item.year}); ${item.venue}`))
    section("Certifications")
    certifications.forEach((item) => bullet(`${item.name} - ${item.issuer}`))
    section("Relevant Links")
    addText("GitHub: https://github.com/vinay2522 | LinkedIn: https://www.linkedin.com/in/vinay-naik-v-4aa303251", 9, false, 4)
    pdf.save("Vinay Naik V Resume.pdf")
  })
}

// Components
function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      <span className="border-r-2 border-current animate-pulse ml-1" />
    </span>
  )
}

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  )
}

function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <VNLogo size="sm" />
            <VNLogoText className="text-xl hidden sm:block" />
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-violet-500" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
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
  )
}

function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="observatory-hero min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 observatory-grid" />
      <div className="absolute inset-x-0 top-24 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <VNLogo size="lg" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground font-mono"><span className="signal-line" />Technical Observatory / 2026</div>
              <p className="text-cyan-400 font-mono text-sm tracking-wider">{"Welcome to Vinay's World"}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <TypewriterText
                  text="Vinay Naik V"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-purple-500"
                />
              </h1>
            </div>

            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer & Security Engineer
            </p>

            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Now joining <span className="text-cyan-400 font-semibold">Nike</span> as a Software Engineer 1 in CIS.
              I build secure automation platforms and scalable software for enterprise environments.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
              >
                View Projects
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-border bg-transparent"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                onClick={downloadResumePdf}
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/vinay2522"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card border border-border hover:border-violet-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:vinay.1si22cs201@gmail.com"
                className="p-2 rounded-full bg-card border border-border hover:border-cyan-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative hero-portrait-frame">
              <div className="absolute -right-8 top-8 hidden w-32 translate-x-full flex-col gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground lg:flex"><span>Signal / 01</span><span className="h-px w-full bg-border" /><span className="text-cyan-300">Secure systems</span><span className="text-violet-300">Human focus</span></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-purple-500 rounded-2xl blur opacity-75 animate-pulse" />
              <div className="relative">
                <img
                  src="/vinay-profile.jpg"
                  alt="Vinay Naik V"
                  className="w-64 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl border-2 border-border"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm font-medium">Nike · Software Engineer 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="dashboard-panel py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                Projects
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in blockchain, AI/ML, and cloud technologies
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={
                  activeFilter === category
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0"
                    : "border-border hover:border-violet-500/50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <Card className="group relative overflow-visible bg-card border-border hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs font-mono border-border">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const skillCategories = [
    { title: "Languages", items: skills.languages, icon: Code2, color: "text-cyan-400" },
    { title: "Frameworks", items: skills.frameworks, icon: Server, color: "text-violet-400" },
    { title: "Databases", items: skills.databases, icon: Database, color: "text-purple-400" },
    { title: "Concepts", items: skills.concepts, icon: Shield, color: "text-emerald-400" },
    { title: "Tools", items: skills.tools, icon: Briefcase, color: "text-orange-400" },
  ]

  return (
    <section id="skills" className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">
                Skills
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I work with</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 100}>
              <Card className="p-6 bg-card border-border hover:border-violet-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                  <h3 className="font-semibold">{category.title}</h3>
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
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                Experience
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-violet-500" />
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full bg-cyan-500 ring-4 ring-background" />

                <Card className="p-6 bg-card border-border hover:border-cyan-500/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
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
  )
}

function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">
                Education
              </span>
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
                        <h3 className="font-semibold">{edu.institution}</h3>
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
  )
}

function AchievementsSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Achievements &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                Certifications
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
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

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
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
  )
}

function BlogSection() {
  return (
    <section id="blog" className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                Articles
              </span>
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

                  <h3 className="font-semibold group-hover:text-violet-400 transition-colors">{post.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

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
  )
}

function CodeSnippetsSection() {
  const [activeSnippet, setActiveSnippet] = useState(0)

  return (
    <section id="code" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Code{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                Showcase
              </span>
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
                className={
                  activeSnippet === index
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0"
                    : "border-border hover:border-violet-500/50"
                }
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
                <span className="text-sm font-mono text-muted-foreground">{codeSnippets[activeSnippet].title}</span>
                <Badge variant="outline" className="text-xs font-mono border-border">
                  {codeSnippets[activeSnippet].language}
                </Badge>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="text-gray-300">{codeSnippets[activeSnippet].code}</code>
                </pre>
              </div>
              <div className="px-4 py-3 bg-[#16161e] border-t border-border">
                <p className="text-sm text-muted-foreground">{codeSnippets[activeSnippet].description}</p>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {"Let's"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                Connect
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {
                "I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology."
              }
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  href="mailto:vinay.1si22cs201@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm group-hover:text-cyan-400 transition-colors break-all">
                      vinay.1si22cs201@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/vinay2522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted transition-colors group"
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

                <a
                  href="https://www.linkedin.com/in/vinay-naik-v-4aa303251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-sm group-hover:text-cyan-400 transition-colors">vinay-naik-v</p>
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
  )
}

function NovaAssistant() {
  const [visible, setVisible] = useState(false)
  const [listening, setListening] = useState(false)
  const [status, setStatus] = useState("Silent standby")
  const [transcript, setTranscript] = useState("NOVA is quiet. Say “activate voice command” to bring the interface forward.")
  const [command, setCommand] = useState("")
  const recognitionRef = useRef<any>(null)
  const continuousRef = useRef(true)
  const visibleRef = useRef(false)
  const restartingRef = useRef(false)
  const supportedRef = useRef(false)
  const statusRef = useRef("Silent standby")
  const listeningRef = useRef(false)

  useEffect(() => { visibleRef.current = visible }, [visible])
  useEffect(() => { statusRef.current = status }, [status])
  useEffect(() => { listeningRef.current = listening }, [listening])

  const speak = (text: string) => {
    setTranscript(text)
    window.speechSynthesis?.cancel()
    if (window.speechSynthesis) {
      const voice = new SpeechSynthesisUtterance(text)
      voice.rate = 0.98
      voice.pitch = 0.86
      window.speechSynthesis.speak(voice)
      setStatus("Responding")
      voice.onend = () => setStatus(visible ? "Listening" : "Silent standby")
    }
  }

  const route = (raw: string) => {
    const text = raw.toLowerCase().trim()
    if (!text) return
    if (text.includes("activate") || text.includes("wake") || text.includes("open voice")) {
      setVisible(true)
      setStatus("Listening")
      speak("NOVA online. Welcome to Vinay's World. Ask me anything about his work, skills, projects, education, achievements, or resume.")
      return
    }
    if (text.includes("standby") || text.includes("close voice") || text.includes("hide assistant")) {
      setVisible(false)
      window.speechSynthesis?.cancel()
      setStatus("Silent standby")
      setTranscript("NOVA is quiet. Say “activate voice command” to bring the interface forward.")
      return
    }
    if (text.includes("light theme") || text.includes("light mode") || text.includes("change theme to light")) {
      localStorage.setItem("portfolio-theme", "light")
      document.documentElement.classList.remove("dark")
      window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: "light" }))
      speak("Light theme enabled.")
      return
    }
    if (text.includes("dark theme") || text.includes("dark mode") || text.includes("change theme to dark")) {
      localStorage.setItem("portfolio-theme", "dark")
      document.documentElement.classList.add("dark")
      window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: "dark" }))
      speak("Dark theme enabled.")
      return
    }
    const projectMatch = Object.entries(projectNarrations).find(([, project]) => project.aliases.some((alias) => text.includes(alias)))
    if (projectMatch) {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
      speak(projectMatch[1].answer)
      return
    }

    const navigation = [
      { words: ["profile", "profile picture", "home", "top", "introduction", "about vinay"], target: "#home", answer: "Opening Vinay's profile and introduction." },
      { words: ["skills", "technical skills", "technologies", "tech stack", "programming"], target: "#skills", answer: "Opening Vinay's technical skills." },
      { words: ["experience", "work experience", "career", "internship", "work history"], target: "#experience", answer: "Opening Vinay's work experience." },
      { words: ["education", "degree", "college", "graduation", "cgpa"], target: "#education", answer: "Opening Vinay's education." },
      { words: ["achievements", "awards", "hackathons", "certifications"], target: "#achievements", answer: "Opening Vinay's achievements and certifications." },
      { words: ["contact", "email", "linkedin", "reach vinay", "get in touch"], target: "#contact", answer: "Opening Vinay's contact details." },
      { words: ["projects", "portfolio projects", "work samples"], target: "#projects", answer: "Opening Vinay's project archive." },
    ]
    const navigationMatch = navigation
      .map((item) => ({ item, score: item.words.reduce((score, word) => score + (text.includes(word) ? (word.includes(" ") ? 4 : 2) : 0), 0) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)[0]?.item

    const answers = [
      { words: ["technical skill", "skills", "technology", "tech stack", "programming"], target: "#skills", answer: "Vinay's technical toolkit spans Python, Java, JavaScript, TypeScript, React, Next.js, Node.js, Solidity, Ethereum, IPFS, AWS, Docker, Git, PostgreSQL, MongoDB, REST APIs, PAN-OS XML APIs, cybersecurity testing, machine learning, and secure automation." },
      { words: ["achievement", "achievements", "award", "hackathon"], target: "#achievements", answer: "Vinay's achievements include hackathon recognition, competitive programming milestones, research and project work, and certifications across cloud, security, and software engineering." },
      { words: ["project", "projects", "built", "portfolio project"], target: "#projects", answer: "Vinay's projects include a blockchain secured evidence chain using Ethereum, Solidity, and IPFS; an AI ambulance dispatch system; plant disease detection; and a serverless URL shortener built on AWS. I can narrate each one if you name it." },
      { words: ["experience", "internship", "career", "work at nike", "work history"], target: "#experience", answer: "Vinay joins Nike as Software Engineer 1 in CIS on August 13, 2026. Before that, he completed a Nike CIS software engineering internship from January to July 2026, building the PAN-OS Upgrade Automation Platform, and worked at Nokia from August to December 2025." },
      { words: ["pan-os", "firewall", "automation platform", "palo alto"], target: "#experience", answer: "The PAN-OS Upgrade Automation Platform standardizes enterprise Palo Alto firewall upgrades. Vinay worked on pre-upgrade validation, health checks, backup verification, post-upgrade validation, monitoring, reporting, HA concepts, Python, and PAN-OS XML APIs." },
      { words: ["education", "graduation", "degree", "college", "cgpa"], target: "#education", answer: "Vinay graduated from Siddaganga Institute of Technology with a Bachelor of Engineering in Computer Science in July 2026, earning an 8.96 CGPA out of 10." },
      { words: ["resume", "cv", "download resume"], target: "#contact", answer: "Vinay's complete ATS-friendly resume is ready to download from the portfolio. I am starting the PDF download now." },
      { words: ["contact", "email", "reach vinay"], target: "#contact", answer: "You can reach Vinay by email at vinay.1si22cs201@gmail.com or through his GitHub and LinkedIn links in the contact section." },
      { words: ["who is vinay", "about vinay", "tell me about"], target: "#home", answer: "Vinay is a Software Engineer 1 focused on secure automation, enterprise infrastructure, API integration, and reliable software systems. Welcome to his technical world." },
    ]
    const normalized = text.replace(/[?!.,]/g, " ").replace(/\s+/g, " ").trim()
  const match = answers
    .map((item) => ({ item, score: item.words.reduce((score, word) => score + (normalized.includes(word) ? (word.includes(" ") ? 4 : 2) : 0), 0) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)[0]?.item
    if (match) {
      document.querySelector(match.target)?.scrollIntoView({ behavior: "smooth" })
      speak(match.answer)
      if (text.includes("resume")) downloadResumePdf()
      return
    }
    if (navigationMatch) {
      document.querySelector(navigationMatch.target)?.scrollIntoView({ behavior: "smooth" })
      speak(navigationMatch.answer)
      return
    }
    speak("I can explain Vinay's individual projects, technical skills, work experience, education, achievements, certifications, contact details, resume, and themes. Try asking about the blockchain project, ambulance dispatch, plant disease model, or URL shortener.")
  }

  const startListening = async () => {
    if (restartingRef.current || !continuousRef.current || listeningRef.current) return
    const Recognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!Recognition) {
      supportedRef.current = false
      setStatus("Voice unavailable")
      setVisible(true)
      setTranscript("This browser does not expose speech recognition. Typed commands still work here.")
      return
    }
    supportedRef.current = true
    try {
      if (navigator.mediaDevices?.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        stream.getTracks().forEach((track) => track.stop())
      }
    } catch {
      setStatus("Microphone permission needed")
      setTranscript("Allow microphone access in your browser, then use the retry control to enable continuous listening.")
      return
    }
    const recognition = new Recognition()
    recognition.lang = "en-US"
    recognition.continuous = true
    recognition.interimResults = false
    recognition.maxAlternatives = 3
    recognition.onstart = () => { restartingRef.current = false; setListening(true); setStatus(visibleRef.current ? "Listening" : "Silent standby") }
    recognition.onresult = (event: any) => {
      const result = event.results[event.results.length - 1]
      const phrase = result?.[0]?.transcript?.trim() || ""
      if (!phrase) return
      const spoken = phrase.toLowerCase()
      const activation = spoken.includes("activate") || spoken.includes("wake") || spoken.includes("nova") || spoken.includes("voice command")
      const standby = spoken.includes("standby") || spoken.includes("close voice") || spoken.includes("hide assistant")
      if (standby || visibleRef.current || activation) route(phrase)
    }
    recognition.onerror = (event: any) => {
      setListening(false)
      if (event?.error === "not-allowed" || event?.error === "service-not-allowed") setStatus("Microphone permission needed")
      else if (event?.error !== "aborted") setStatus("Reconnecting")
    }
    recognition.onend = () => {
      setListening(false)
      recognitionRef.current = null
      if (continuousRef.current && !restartingRef.current) {
        restartingRef.current = true
        window.setTimeout(() => { restartingRef.current = false; startListening() }, 450)
      }
    }
    recognitionRef.current = recognition
    try { recognition.start() } catch { recognitionRef.current = null; restartingRef.current = false }
  }

  useEffect(() => {
    const handleCommand = (event: Event) => route((event as CustomEvent<string>).detail)
    window.addEventListener("nova-command", handleCommand)
    continuousRef.current = true
    const timer = window.setTimeout(() => startListening(), 700)
    return () => { continuousRef.current = false; window.clearTimeout(timer); window.removeEventListener("nova-command", handleCommand); recognitionRef.current?.stop(); window.speechSynthesis?.cancel() }
  }, [])

  return (
    <aside className={`fixed bottom-5 right-5 z-40 ${visible ? "w-[min(390px,calc(100vw-2rem))]" : "w-auto"}`} aria-label="NOVA personal assistant">
      {!visible ? <div className="flex items-center gap-2"><button onClick={() => { setVisible(true); setStatus("Listening"); startListening(); speak("NOVA online. How can I guide you through Vinay's World?") }} className="nova-signal group flex items-center gap-2 rounded-full border border-cyan-400/30 bg-background/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300 backdrop-blur" aria-label="Activate NOVA voice assistant"><span className={`size-2 rounded-full ${listening ? "bg-emerald-400 nova-live-dot" : "bg-cyan-300"}`} />NOVA / {listening ? "listening" : "standby"}</button>{!listening && <button onClick={() => startListening()} className="rounded-full border border-border bg-background/80 px-3 py-2 text-[10px] text-muted-foreground hover:text-foreground">Enable mic</button>}</div> : <div className="rounded-2xl border border-cyan-400/30 bg-background/90 p-4 shadow-[0_0_45px_hsl(var(--primary)/.18)] backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">NOVA / voice interface</p><p className="mt-1 text-sm font-medium">{listening ? "Listening continuously" : status}</p></div><button onClick={() => { setVisible(false); window.speechSynthesis?.cancel() }} className="text-xs text-muted-foreground hover:text-foreground">Standby</button></div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground" aria-live="polite">{transcript}</p>
        {(status === "Microphone permission needed" || status === "Voice unavailable") && <Button variant="outline" size="sm" className="mt-3" onClick={() => startListening()}>Retry microphone</Button>}
        <div className="mt-3 flex gap-2"><input aria-label="Ask NOVA" value={command} onChange={(event) => setCommand(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { route(command); setCommand("") } }} placeholder="Ask about Vinay's world..." className="min-w-0 flex-1 rounded-lg border border-border bg-card px-3 py-2 text-xs outline-none focus:border-cyan-400" /><Button size="sm" onClick={() => { route(command); setCommand("") }}>Ask</Button></div>
        <div className="mt-3 flex flex-wrap gap-2">{["Technical skills", "Achievements", "PAN-OS work", "Change to light theme"].map((item) => <button key={item} onClick={() => route(item)} className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground hover:border-cyan-400 hover:text-cyan-300">{item}</button>)}</div>
        <div className="mt-3 flex items-center justify-between"><button onClick={() => window.speechSynthesis?.cancel()} className="text-[10px] text-muted-foreground underline underline-offset-4">Stop response</button><button onClick={() => { continuousRef.current = false; recognitionRef.current?.stop(); setVisible(false); setStatus("Silent standby") }} className="text-[10px] text-muted-foreground underline underline-offset-4">Mute voice</button></div>
      </div>}
    </aside>
  )
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border">
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
              href="mailto:vinay.1si22cs201@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="command-rail border-b border-border bg-card/40">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">NOVA command rail</span>
            {["Open profile", "Show projects", "Technical skills", "Work experience", "Contact Vinay"].map((command) => <button key={command} onClick={() => window.dispatchEvent(new CustomEvent("nova-command", { detail: command }))} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-cyan-400/60 hover:text-cyan-300">{command}</button>)}
          </div>
        </section>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <NovaAssistant />
    </div>
  )
}
