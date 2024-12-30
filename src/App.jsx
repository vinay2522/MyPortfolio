import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { trackVisit } from './services/visitorService';
import AdminDashboard from './components/AdminDashboard';
import AdminSetup from './components/AdminSetup';

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import styles
import './App.css';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      delay: 50,
    });

    // Track visit only if not already tracked in this session
    if (!sessionStorage.getItem('visitLogged')) {
      trackVisit();
      sessionStorage.setItem('visitLogged', 'true');
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin-setup" element={<AdminSetup />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div className="min-h-screen bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </div>
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
