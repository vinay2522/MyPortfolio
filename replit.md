# Vinay Naik V - Portfolio Website

## Overview
A stunning, dark-themed portfolio website showcasing Vinay Naik V's work as a Full-Stack Developer and Security Engineer. Features a custom VN logo, theme toggle (dark/light), and modern design with smooth animations.

## Current State
- **Status**: MVP Complete
- **Last Updated**: November 2024

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend**: Express.js (minimal - serving static assets)
- **Styling**: Custom dark theme with cyan/violet gradient accents
- **Animations**: CSS animations + Intersection Observer for scroll reveals

## Key Features
1. **Custom VN Logo** - Animated SVG logo with gradient colors
2. **Theme Toggle** - Dark/Light mode with localStorage persistence
3. **Hero Section** - Typing animation, professional photo, floating badges
4. **Projects Showcase** - 4 featured projects with tech stack badges
5. **Skills Section** - Categorized by Languages, Frameworks, Databases, etc.
6. **Experience Timeline** - Nokia internship with visual timeline
7. **Education Cards** - Institution details with GPA/scores
8. **Achievements & Certifications** - Hackathon wins and certificates
9. **Contact Section** - Email, phone, GitHub, location

## Project Structure
\`\`\`
client/
  src/
    components/
      ThemeProvider.tsx    # Dark/Light theme context
      VNLogo.tsx           # Custom animated VN logo
      ui/                  # Shadcn components
    pages/
      Portfolio.tsx        # Main portfolio page with all sections
    App.tsx                # Root component with routing
    index.css              # Theme variables and utilities
  public/
    vinay-photo.jpg        # Profile photo
\`\`\`

## User Preferences
- Dark theme as default
- Gradient accents: Cyan (#06b6d4) to Violet (#8b5cf6) to Purple (#a855f7)
- Font: Inter (body), Space Grotesk (headings), JetBrains Mono (code)
- Smooth scroll animations
- Responsive design for all devices

## Architecture Decisions
- Single-page application with smooth scroll navigation
- In-memory data (no database needed for static portfolio)
- Theme preference stored in localStorage
- CSS-based animations for performance

## Running the Project
\`\`\`bash
npm run dev
\`\`\`
The application runs on port 5000.
