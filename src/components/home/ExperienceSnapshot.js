// src/components/home/ExperienceSnapshot.js
import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceSnapshot = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Hyperspectral Intelligence Inc',
      period: 'Aug 2024 – Present',
      description: 'Developing full-stack Python applications for hyperspectral imaging with optimized data pipelines and responsive GUIs.',
      highlights: [
        'Achieved 70-85% performance improvement',
        'Reduced memory usage by ~65%',
        'Implemented multi-tabbed interfaces with real-time visualization'
      ]
    },
    {
      title: 'Data Visualization Specialist',
      company: 'Hyperspectral Intelligence Inc',
      period: 'Feb 2024 – July 2024',
      description: 'Created interactive dashboards with real-time spectral data visualization, enhancing decision-making in hyperspectral analysis.',
      highlights: [
        'Improved rendering speed by ~75%',
        'Implemented throttled event handling',
        'Engineered high-performance plotting systems'
      ]
    }
  ];

  return (
    <section className="experience-snapshot">
      <div className="container">
        <h2 className="text-center mb-5 animate__animated animate__fadeIn">Recent Experience</h2>
        
        <div className="row">
          {experiences.map((exp, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div 
                className="experience-item animate__animated animate__fadeInUp" 
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="period">
                  <i className="far fa-calendar-alt mr-2"></i>{exp.period}
                </p>
                <p>{exp.description}</p>
                <ul className="highlights-list">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4 animate__animated animate__fadeInUp animate__delay-1s">
          <Link to="/resume" className="btn btn-outline-light">
            <i className="fas fa-briefcase mr-2"></i>View Full Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSnapshot;