import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SkillsPage.css';

const SkillsPage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Technical Skills
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95, description: "Scientific computing, data analysis, backend development, GUI applications" },
        { name: "JavaScript", level: 90, description: "Modern ES6+, asynchronous programming, functional concepts" },
        { name: "TypeScript", level: 85, description: "Type-safe JavaScript development" },
        { name: "Julia", level: 80, description: "High-performance scientific computing and data analysis" },
        { name: "SQL", level: 85, description: "Complex queries, database optimization, multiple DBMS experience" }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 92, description: "Component architecture, hooks, context API, state management" },
        { name: "Next.js", level: 88, description: "Server-side rendering, static site generation, API routes" },
        { name: "HTML5 & CSS3", level: 90, description: "Semantic markup, responsive design, animations" },
        { name: "Bootstrap", level: 85, description: "Responsive layouts, custom theming, component integration" },
        { name: "Data Visualization", level: 95, description: "Chart.js, D3.js, TensorFlow.js, interactive dashboards" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, description: "RESTful APIs, Express, middleware development" },
        { name: "Python Frameworks", level: 90, description: "Flask, FastAPI, Django for web services" },
        { name: "Database Systems", level: 85, description: "PostgreSQL, MongoDB, SQLite, database optimization" },
        { name: "API Design", level: 90, description: "RESTful principles, OpenAPI/Swagger, versioning" },
        { name: "Authentication", level: 85, description: "JWT, OAuth2, session management" }
      ]
    },
    {
      category: "Data Science & Analysis",
      skills: [
        { name: "NumPy/Pandas", level: 95, description: "Data wrangling, statistical analysis, optimization" },
        { name: "Data Visualization", level: 92, description: "Matplotlib, Seaborn, dashboard design" },
        { name: "Machine Learning", level: 85, description: "Scikit-learn, TensorFlow, predictive modeling" },
        { name: "Statistical Analysis", level: 90, description: "Hypothesis testing, regression, clustering" },
        { name: "ETL Pipelines", level: 88, description: "Data extraction, transformation, loading workflows" }
      ]
    },
    {
      category: "Specialized Domains",
      skills: [
        { name: "Hyperspectral Imaging", level: 95, description: "Spectral data processing, analytical algorithms" },
        { name: "Financial Analytics", level: 88, description: "Time series analysis, portfolio optimization" },
        { name: "Blockchain Technologies", level: 85, description: "Transaction analysis, wallet labeling, data pipelines" },
        { name: "Real-time Systems", level: 90, description: "Event-driven architectures, optimization techniques" },
        { name: "Scientific Computing", level: 92, description: "Numerical methods, algorithm optimization" }
      ]
    }
  ];

  // Tools & Technologies
  const toolsAndTech = [
    {
      name: "Version Control",
      items: ["Git", "GitHub", "GitLab", "Branching strategies"]
    },
    {
      name: "CI/CD",
      items: ["GitHub Actions", "Docker", "Automated testing"]
    },
    {
      name: "Cloud Services",
      items: ["AWS (S3, EC2, Lambda)", "Azure", "Vercel", "Netlify"]
    },
    {
      name: "Dev Tools",
      items: ["VS Code", "Jupyter Notebooks", "Postman", "Chrome DevTools"]
    },
    {
      name: "Collaboration",
      items: ["Agile methodologies", "Jira", "Confluence", "Technical documentation"]
    }
  ];

  // Soft Skills
  const softSkills = [
    {
      icon: "fas fa-users",
      title: "Collaboration",
      description: "Strong team player with experience in cross-functional environments"
    },
    {
      icon: "fas fa-lightbulb",
      title: "Problem Solving",
      description: "Analytical approach to complex technical challenges"
    },
    {
      icon: "fas fa-comments",
      title: "Communication",
      description: "Clear technical communication with both technical and non-technical stakeholders"
    },
    {
      icon: "fas fa-tasks",
      title: "Project Management",
      description: "Experience leading technical projects and coordinating deliverables"
    },
    {
      icon: "fas fa-book",
      title: "Continuous Learning",
      description: "Proactive approach to learning new technologies and methodologies"
    },
    {
      icon: "fas fa-chess",
      title: "Strategic Thinking",
      description: "Ability to foresee technical challenges and plan accordingly"
    }
  ];

  return (
    <div className="skills-page bg-dark text-light">
      <div className="container py-5">
        <h1 className="text-center mb-5">Technical Skills & Expertise</h1>
        
        {/* Technical Skills Section */}
        <section className="mb-5">
          <h2 className="section-title mb-4">Technical Proficiencies</h2>
          <div className="row">
            {technicalSkills.map((category, categoryIndex) => (
              <div className="col-lg-6 mb-4" key={categoryIndex}>
                <div className="skill-category-card p-4">
                  <h3 className="category-title mb-3">{category.category}</h3>
                  {category.skills.map((skill, skillIndex) => (
                    <div className="skill-item mb-3" key={skillIndex}>
                      <div className="d-flex justify-content-between mb-1">
                        <strong>{skill.name}</strong>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="progress">
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{ width: `${skill.level}%` }} 
                          aria-valuenow={skill.level} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small className="text-muted">{skill.description}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Tools & Technologies */}
        <section className="mb-5">
          <h2 className="section-title mb-4">Tools & Technologies</h2>
          <div className="row">
            {toolsAndTech.map((toolCategory, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="tool-category-card p-4">
                  <h3 className="category-title mb-3">{toolCategory.name}</h3>
                  <ul className="tool-list">
                    {toolCategory.items.map((item, itemIndex) => (
                      <li key={itemIndex}><i className="fas fa-check-circle text-success mr-2"></i>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Soft Skills */}
        <section>
          <h2 className="section-title mb-4">Soft Skills</h2>
          <div className="row">
            {softSkills.map((skill, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="soft-skill-card p-4 text-center">
                  <div className="icon-circle mb-3">
                    <i className={`${skill.icon} fa-2x`}></i>
                  </div>
                  <h3 className="h5 mb-2">{skill.title}</h3>
                  <p className="text-muted">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Call to action */}
        <div className="text-center mt-5">
          <p className="lead mb-4">Interested in how I've applied these skills to real-world projects?</p>
          <div>
            <Link to="/portfolio" className="btn btn-primary mr-3">
              <i className="fas fa-laptop-code mr-2"></i>View Projects
            </Link>
            <Link to="/contact" className="btn btn-outline-primary">
              <i className="fas fa-paper-plane mr-2"></i>Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;