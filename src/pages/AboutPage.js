import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/layout/ParticlesBackground';
import './AboutPage.css';
import profileImage from '../assets/images/me.jpg';

const AboutPage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreStrengths = [
    { icon: 'fas fa-cogs text-primary', text: 'Full-Stack System Architecture' },
    { icon: 'fas fa-chart-line text-success', text: 'Real-Time Data Analytics & Visualization' },
    { icon: 'fas fa-code text-info', text: 'Cross-Platform Development (Web & Desktop)' },
    { icon: 'fas fa-database text-warning', text: 'Complex Data Pipeline Optimization' },
    { icon: 'fas fa-server text-danger', text: 'Scalable Backend Systems' },
    { icon: 'fas fa-palette text-primary', text: 'Responsive Frontend Design' }
  ];

  const technologies = [
    'Python', 'React', 'Next.js', 'TypeScript', 'NumPy', 'Pandas', 'Julia', 
    'TensorFlow', 'SQL', 'Node.js', 'Express', 'Docker'
  ];

  return (
    <>
      <ParticlesBackground />
      <main className="container my-5 pt-5">
        <section className="py-5">
          <div className="row align-items-center">
            {/* Profile Image */}
            <div className="col-md-4 text-center mb-4 mb-md-0 animate__animated animate__fadeInLeft">
              <div className="profile-image-container">
                <img 
                  src={profileImage} 
                  alt="Farnaz Nasehi Profile" 
                  className="rounded-circle shadow-lg profile-img" 
                  style={{ width: '250px', height: '250px', objectFit: 'cover', border: '5px solid #ffffff' }}
                />
                <div className="tech-orbit">
                  <span className="tech-icon python"><i className="fab fa-python"></i></span>
                  <span className="tech-icon react"><i className="fab fa-react"></i></span>
                  <span className="tech-icon js"><i className="fab fa-js"></i></span>
                  <span className="tech-icon database"><i className="fas fa-database"></i></span>
                  <span className="tech-icon blockchain"><i className="fas fa-cubes"></i></span>
                </div>
              </div>
              <div className="location-badge mt-4">
                <i className="fas fa-map-marker-alt mr-2"></i>Calgary, AB, Canada
              </div>
            </div>
            
            {/* About Text */}
            <div className="col-md-8 animate__animated animate__fadeInRight">
              <h1 className="mb-4 text-center text-md-left section-title">About Me</h1>
              <p className="lead">
                I'm <span className="font-weight-bold text-primary">Farnaz Nasehi</span>, a full-stack software developer with over six years of experience architecting end-to-end, scalable solutions across <span className="text-info">hyperspectral imaging</span>, financial analytics, and blockchain ecosystems.
              </p>
              <p>
                As a full-stack expert, I specialize in bridging <span className="text-info">frontend innovation</span> with <span className="text-info">backend robustness</span>, delivering systems that seamlessly integrate intuitive user interfaces with complex data workflows. At Hyperspectral Intelligence Inc., I engineered a sophisticated Python-based application featuring a dynamic GUI (using tkinter and Matplotlib) and optimized backend pipelines for processing spectral libraries and drillcore data. My work demonstrates my ability to handle both responsive client-side interactivity and high-performance server-side data management across multiple platforms.
              </p>
              <p>
                My tech arsenal includes <span className="text-info">Python (tkinter, Matplotlib, NumPy, Pandas)</span> for scientific computing and backend logic, <span className="text-info">Next.js</span>, <span className="text-info">React</span>, and <span className="text-info">TensorFlow.js</span> for modern web development, and Julia for financial data analysis. My expertise spans real-time data visualization, API integrations, cloud deployment, and statistical modeling, enabling me to transform intricate datasets—from hyperspectral imagery to Ethereum blockchain transactions—into actionable, user-friendly solutions that deliver tangible business value.
              </p>
              <p>
                I thrive in complex technical environments where I can architect solutions that balance performance, scalability, and exceptional user experience. My approach combines technical precision with creative problem-solving, allowing me to develop innovative solutions for challenging data-intensive problems.
              </p>
              <div className="row mt-5">
                <div className="col-md-6">
                  <h5 className="font-weight-bold border-bottom pb-2 mb-3 section-subtitle">Core Strengths</h5>
                  <ul className="strength-list">
                    {coreStrengths.map((strength, index) => (
                      <li key={index}>
                        <i className={`${strength.icon} mr-2`}></i> {strength.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5 className="font-weight-bold border-bottom pb-2 mb-3 section-subtitle">Technologies</h5>
                  <div className="tech-cloud">
                    {technologies.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-md-left">
                <Link to="/portfolio" className="btn btn-primary btn-lg mr-2 animate__animated animate__pulse animate__infinite animate__slow">
                  <i className="fas fa-briefcase mr-2"></i>Explore My Projects
                </Link>
                <Link to="/resume" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-file-alt mr-2"></i>View My Resume
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;