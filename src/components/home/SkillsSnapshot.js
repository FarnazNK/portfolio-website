import React from 'react';
import { Link } from 'react-router-dom';
import './SkillsSnapshot.css';

const SkillsSnapshot = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Full-Stack Development",
      description: "Developing end-to-end solutions with modern frontend frameworks and robust backend architectures.",
      icon: "fas fa-laptop-code",
      skills: "Python, React, Next.js",
      proficiency: 92
    },
    {
      id: 2,
      title: "Data Visualization",
      description: "Creating interactive and insightful data visualizations for complex scientific and financial data.",
      icon: "fas fa-chart-bar",
      skills: "Matplotlib, Chart.js, TensorFlow.js",
      proficiency: 90
    },
    {
      id: 3,
      title: "System Architecture",
      description: "Designing scalable, high-performance systems with optimized workflows and data pipelines.",
      icon: "fas fa-cogs",
      skills: "System Design, Data Pipelines, API Integration",
      proficiency: 88
    }
  ];
  
  return (
    <section id="skills-snapshot" className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-center mb-5">Technical Expertise</h2>
        <div className="row text-center">
          {skillCategories.map((category, index) => (
            <div 
              className="col-md-4 mb-4" 
              data-aos="fade-up" 
              data-aos-delay={100 + (index * 200)} 
              key={category.id}
            >
              <div className="skill-category p-4">
                <i className={`${category.icon} fa-3x mb-3 text-primary`}></i>
                <h3 className="h4 mb-3">{category.title}</h3>
                <p className="text-muted">{category.description}</p>
                <div className="progress-wrapper mt-4">
                  <small className="text-uppercase">{category.skills}</small>
                  <div className="progress mt-2 bg-secondary">
                    <div 
                      className="progress-bar bg-primary" 
                      style={{ width: `${category.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/skills" className="btn btn-outline-primary btn-lg">
            <i className="fas fa-list-check mr-2"></i> View All Skills
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsSnapshot;