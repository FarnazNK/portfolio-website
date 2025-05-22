import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    "Full-Stack Developer", 
    "Software Engineer", 
    "Data Visualization Specialist", 
    "Python Expert", 
    "React Developer"
  ];
  
  useEffect(() => {
    const title = titles[currentIndex];
    const typingSpeed = 100; // ms
    const deletingSpeed = 50; // ms
    const pauseTime = 2000; // ms
    
    // Type or delete one character
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(title.substring(0, displayText.length + 1));
        
        // If fully typed, pause and then start deleting
        if (displayText.length === title.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        setDisplayText(title.substring(0, displayText.length - 1));
        
        // If fully deleted, move to next title
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, titles]);
  
  const scrollToHighlights = () => {
    document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="profile-section text-center text-light d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="mt-4 display-4 animate__animated animate__fadeInDown">
              Hi, I'm <span style={{ color: '#6dcfe7' }} className="animate__animated animate__heartBeat animate__delay-1s">Farnaz Nasehi</span>
            </h1>
            <h2 className="text-light mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              {displayText}
              <span className="typing-cursor">|</span>
            </h2>
            <p className="lead text-white-50 mb-4 animate__animated animate__fadeInUp animate__delay-2s">
              Specializing in hyperspectral imaging, financial analytics, and building modern web applications
              with expertise in Python, React, and data visualization.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="skill-icons mb-4 d-flex justify-content-center flex-wrap">
                  <i className="fab fa-python mx-2 skill-icon"></i>
                  <i className="fab fa-react mx-2 skill-icon"></i>
                  <i className="fab fa-js-square mx-2 skill-icon"></i>
                  <i className="fas fa-database mx-2 skill-icon"></i>
                  <i className="fas fa-chart-line mx-2 skill-icon"></i>
                  <i className="fas fa-cubes mx-2 skill-icon"></i>
                </div>
              </div>
            </div>
                
            <div className="mt-5 animate__animated animate__fadeInUp animate__delay-3s">
              <Link to="/about" className="btn btn-primary btn-lg mx-2 mb-2">
                <i className="fas fa-user mr-2"></i> About Me
              </Link>
              <Link to="/portfolio" className="btn btn-outline-primary btn-lg mx-2 mb-2">
                <i className="fas fa-laptop-code mr-2"></i> See My Work
              </Link>
            </div>
            
            <div className="scroll-indicator mt-5 animate__animated animate__fadeIn animate__delay-4s" onClick={scrollToHighlights}>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;