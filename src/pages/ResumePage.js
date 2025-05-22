import React, { useState, useEffect } from 'react';
import ParticlesBackground from '../components/layout/ParticlesBackground';
import './ResumePage.css';

const ResumePage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for active cards
  const [activeCards, setActiveCards] = useState({});

  const toggleDetails = (id) => {
    setActiveCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Job data (unchanged)
  const jobs = [
    {
      id: 'job1',
      title: 'Software Developer',
      company: 'Hyperspectral Intelligence Inc',
      location: 'Gibsons, BC, Canada',
      period: 'Aug 2024 – Present',
      responsibilities: [
        'Developed a full-stack Python application for hyperspectral imaging, integrating a responsive GUI (tkinter, Matplotlib) with backend data pipelines, featuring advanced workspace management, real-time spectral visualization, and drillcore analysis.',
        'Optimized critical visualization components resulting in 70-85% overall performance improvement, reducing memory usage by ~65% and increasing UI responsiveness by ~90% when working with large hyperspectral datasets.',
        'Architected scalable systems with multi-tabbed interfaces, file system explorers, and dynamic data caching (EnhancedDataManager), implementing advanced techniques including event throttling, multi-level caching, memory-mapped file access, and asynchronous rendering for scientific workflows.',
      ],
      icon: 'fas fa-code-branch',
    },
    {
      id: 'job2',
      title: 'Data Visualization Specialist',
      company: 'Hyperspectral Intelligence Inc',
      location: 'Gibsons, BC, Canada',
      period: 'Feb 2024 – Jul 2024',
      responsibilities: [
        'Created interactive dashboards with real-time spectral data visualization using Matplotlib and Tableau, incorporating custom Treeview widgets for data exploration and enhancing user decision-making in hyperspectral analysis.',
        'Implemented performance-critical optimizations in visualization components, including throttled event handling, intelligent canvas redrawing, and weakref-based memory management, improving rendering speed by ~75% for large spectral datasets.',
        'Engineered a high-performance spectral plotting system capable of handling multi-gigabyte datasets through innovative caching strategies and memory-mapped file access, enabling smooth real-time interaction with complex geological visualization workflows.',
      ],
      icon: 'fas fa-chart-line',
    },
    {
      id: 'job3',
      title: 'Data Analyst',
      company: 'Finance Department, University of Calgary',
      location: 'Calgary, AB, Canada',
      period: 'May 2023 – Aug 2023',
      responsibilities: [
        'Performed wallet address labeling on Ethereum blockchain data using Julia, developing efficient scripts to categorize and analyze transaction patterns for financial insights.',
        'Conducted web scraping to gather supplementary blockchain data, optimizing data pipelines with Julia for real-time processing and reporting, enhancing stakeholder decision-making.',
      ],
      icon: 'fas fa-chart-pie',
    },
    {
      id: 'job4',
      title: 'Data Analyst',
      company: 'Physics Department, University of Tabriz',
      location: 'Tabriz, Iran',
      period: 'Sep 2014 – Sep 2020',
      responsibilities: [
        'Applied advanced analytical techniques to process experimental physics datasets, leveraging Python scripts for precision data handling and visualization.',
        'Developed technical reports and presentations, utilizing optimized data workflows to communicate actionable insights derived from complex scientific data.',
      ],
      icon: 'fas fa-flask',
    },
  ];

  // Project data
  const projects = [
    {
      id: 'project1',
      title: 'Quantitative Investment Platform',
      description:
        'Developed a JavaScript-based platform for portfolio optimization, risk analysis, and trading strategy backtesting. Implemented Mean-Variance Optimization, Black-Litterman Model, and Hierarchical Risk Parity using PortfolioAllocation.js. Integrated Chart.js for data visualization and Alpha Vantage API for real-time market data, improving data processing efficiency by 30%.',
      link: '/portfolio',
      icon: 'fas fa-briefcase',
    },
  ];

  return (
    <>
      <ParticlesBackground />
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand font-weight-bold" href="/">
            Farnaz Nasehi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ml-auto">
              <a className="nav-link" href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link active" href="/resume" aria-current="page">
                Work Experience
              </a>
              <a className="nav-link" href="/skills">
                Skills
              </a>
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="resume-page">
        {/* Work Experience Section */}
        <section className="resume-section animate__animated animate__fadeInUp">
          <div className="container">
            <h1 className="section-title text-center mb-5">Work Experience</h1>
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                {jobs.slice(0, 2).map((job) => (
                  <div
                    className={`card-item ${activeCards[job.id] ? 'active' : ''}`}
                    onClick={() => toggleDetails(job.id)}
                    key={job.id}
                  >
                    <div className="card-indicator"></div>
                    <i className={job.icon}></i>
                    <h3>{job.title}</h3>
                    <div className={`card-details ${activeCards[job.id] ? 'show' : ''}`}>
                      <p className="text-muted">{job.period}</p>
                      <p>
                        <strong>
                          {job.company}, {job.location}
                        </strong>
                      </p>
                      <ul>
                        {job.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              {/* Right Column */}
              <div className="col-md-6">
                {jobs.slice(2).map((job) => (
                  <div
                    className={`card-item ${activeCards[job.id] ? 'active' : ''}`}
                    onClick={() => toggleDetails(job.id)}
                    key={job.id}
                  >
                    <div className="card-indicator"></div>
                    <i className={job.icon}></i>
                    <h3>{job.title}</h3>
                    <div className={`card-details ${activeCards[job.id] ? 'show' : ''}`}>
                      <p className="text-muted">{job.period}</p>
                      <p>
                        <strong>
                          {job.company}, {job.location}
                        </strong>
                      </p>
                      <ul>
                        {job.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section animate__animated animate__fadeInUp">
          <div className="container">
            <h2 className="section-title text-center mb-5">Key Projects</h2>
            <div className="row">
              {projects.map((project) => (
                <div className="col-md-6 mb-4" key={project.id}>
                  <div className="project-card">
                    <i className={project.icon}></i>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} className="btn btn-outline-light btn-sm">
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section animate__animated animate__fadeInUp">
          <div className="container text-center">
            <h2 className="cta-title">Download My Resume</h2>
            <p className="cta-text">
              Want a detailed overview of my qualifications? Download my resume in PDF format.
            </p>
            <a
              href="/path-to-your-resume.pdf"
              className="btn btn-primary cta-button"
              download
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResumePage;