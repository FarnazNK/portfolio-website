import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectHighlights.css';

const ProjectHighlights = () => {
  const projects = [
    {
      id: 1,
      title: 'Hyperspectral Data Analyzer',
      description: 'A Python desktop application for analyzing complex spectral data with 70-85% improved performance over traditional solutions.',
      icon: 'fas fa-chart-area',
      technologies: ['Python', 'TKinter', 'NumPy', 'Matplotlib']
    },
    {
      id: 2,
      title: 'Blockchain Analytics Dashboard',
      description: 'Real-time Ethereum blockchain data analyzer with wallet labeling and transaction pattern recognition capabilities.',
      icon: 'fas fa-cubes',
      technologies: ['Julia', 'SQL', 'Web Scraping', 'Data Pipelines']
    },
    {
      id: 3,
      title: 'Interactive Data Analytics Tool',
      description: 'Web-based application for advanced data visualization and analysis featuring interactive dashboards and ML predictions.',
      icon: 'fas fa-brain',
      technologies: ['JavaScript', 'Chart.js', 'TensorFlow.js', 'Bootstrap']
    }
  ];
  
  return (
    <section id="highlights" className="py-5 bg-gradient">
      <div className="container">
        <h2 className="text-center mb-5">Featured Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div 
              className="col-lg-4 mb-4" 
              data-aos="fade-up" 
              data-aos-delay={100 + (index * 200)} 
              key={project.id}
            >
              <div className="card h-100 bg-dark text-light border-0 shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="project-icon mr-3">
                      <i className={`${project.icon} fa-2x text-primary`}></i>
                    </div>
                    <h3 className="h5 mb-0">{project.title}</h3>
                  </div>
                  <p className="card-text">{project.description}</p>
                  <div className="tech-tags mt-3">
                    {project.technologies.map((tech, idx) => (
                      <span className="tech-tag" key={idx}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-dark border-0 text-right">
                  <Link to="/portfolio" className="btn btn-sm btn-outline-primary">
                    Learn More <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;