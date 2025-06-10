import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Professor, Computer Science Department",
      company: "Siddaganga Institute of Technology",
      content: "Vinay is an exceptional student with a strong grasp of both theoretical concepts and practical implementation. His work on the AI-Integrated Ambulance Booking System demonstrates his ability to solve real-world problems using cutting-edge technology.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Team Lead",
      company: "Hackkshetra 2024",
      content: "Working with Vinay during the hackathon was incredible. His blockchain expertise and leadership skills helped our team secure 3rd place. He has a unique ability to break down complex problems and find innovative solutions.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Arjun Patel",
      role: "Full Stack Developer",
      company: "Tech Startup",
      content: "Vinay's portfolio projects showcase his versatility as a developer. His plant disease detection system using machine learning is particularly impressive. He's definitely someone to watch in the tech space.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Project Mentor",
      company: "Innovation Lab",
      content: "Vinay consistently delivers high-quality work and shows great attention to detail. His ability to learn new technologies quickly and apply them effectively is remarkable. A true asset to any development team.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-tertiary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">
          What People Say
        </h2>

        <div className="relative mt-12">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-lg bg-primary p-8 md:p-12 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Profile Image */}
                <div className="mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-secondary/20"
                  />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-textSecondary leading-relaxed mb-6 max-w-4xl mx-auto">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <h4 className="text-xl font-bold text-textPrimary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-secondary font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-textSecondary text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-tertiary border border-textSecondary/20 text-textSecondary hover:text-secondary hover:border-secondary/50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-tertiary border border-textSecondary/20 text-textSecondary hover:text-secondary hover:border-secondary/50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-secondary'
                    : 'bg-textSecondary/30 hover:bg-textSecondary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <p className="text-textSecondary text-sm">
            {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
