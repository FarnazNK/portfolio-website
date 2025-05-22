import React, { useState, useEffect } from 'react';
import ParticlesBackground from '../components/layout/ParticlesBackground';
import './ContactPage.css';

const ContactPage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact cards data
  const contactMethods = [
    {
      id: 1,
      icon: 'fab fa-linkedin',
      iconColor: '#0e76a8',
      title: 'LinkedIn',
      description: 'Connect professionally',
      subtext: 'View my experience and network',
      action: 'https://www.linkedin.com/in/farnaz-nasehi/',
      isExternalLink: true
    },
    {
      id: 2,
      icon: 'fab fa-github',
      iconColor: '#6e5494',
      title: 'GitHub',
      description: 'View my projects',
      subtext: 'See my code and contributions',
      action: 'https://github.com/FarnazNK',
      isExternalLink: true
    },
    {
      id: 3,
      icon: 'fas fa-envelope',
      iconColor: '#ff4b5c',
      title: 'Email Me',
      description: 'fnasehikalajahi@gmail.com',
      subtext: '',
      action: 'mailto:fnasehikalajahi@gmail.com',
      isExternalLink: false,
      button: {
        text: 'Send Email',
        className: 'btn btn-outline-light mt-2'
      }
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <ParticlesBackground />
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand font-weight-bold" href="/">Farnaz Nasehi</a>
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
              <a className="nav-link" href="/about" aria-label="About">About</a>
              <a className="nav-link" href="/resume" aria-label="Work Experience">Work Experience</a>
              <a className="nav-link" href="/skills" aria-label="Skills">Skills</a>
              <a className="nav-link" href="/portfolio" aria-label="Portfolio">Portfolio</a>
              <a className="nav-link active" href="/contact" aria-label="Contact" aria-current="page">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Padding to prevent content overlap with fixed navbar */}
      <div style={{ paddingTop: '80px' }}></div>
      
      <section id="contact" className="contact-section" style={{ position: 'relative', zIndex: 2, padding: '80px 0' }}>
        <div className="container text-center">
          <h1 className="mb-5 section-title animate__animated animate__fadeInDown">Get in Touch</h1>
          <p className="lead text-light mb-5 animate__animated animate__fadeInUp">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <div className="row">
            {contactMethods.map((method, index) => (
              <div 
                className="col-md-4 mb-4 animate__animated animate__fadeInLeft" 
                data-wow-delay={`${0.2 * index}s`}
                key={method.id}
              >
                <div 
                  className="contact-card shadow p-4 rounded" 
                  onClick={() => method.isExternalLink && window.open(method.action, '_blank')}
                  style={{ cursor: method.isExternalLink ? 'pointer' : 'default' }}
                >
                  <i className={`${method.icon} fa-3x mb-3`} style={{ color: method.iconColor }}></i>
                  <h3>{method.title}</h3>
                  <p className="text-light">{method.description}</p>
                  {method.subtext && <small className="text-muted">{method.subtext}</small>}
                  {method.button && (
                    <a href={method.action} className={method.button.className}>
                      {method.button.text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto animate__animated animate__fadeInUp" data-wow-delay="0.8s">
              <div className="card shadow bg-dark text-light">
                <div className="card-header bg-primary text-white">
                  <h4 className="mb-0">Send Me a Message</h4>
                </div>
                <div className="card-body">
                  {formSubmitted ? (
                    <div className="text-center py-5">
                      <i className="fas fa-check-circle fa-5x text-success mb-3"></i>
                      <h3>Message Sent!</h3>
                      <p className="lead">Thank you for reaching out. I'll respond to your message shortly.</p>
                    </div>
                  ) : (
                    <form id="contactForm" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="name">Your Name</label>
                          <input 
                            type="text" 
                            className="form-control bg-dark text-light border-secondary" 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="email">Your Email</label>
                          <input 
                            type="email" 
                            className="form-control bg-dark text-light border-secondary" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="subject">Subject</label>
                        <input 
                          type="text" 
                          className="form-control bg-dark text-light border-secondary" 
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message">Message</label>
                        <textarea 
                          className="form-control bg-dark text-light border-secondary" 
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5" 
                          required
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane mr-2"></i> Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="row mt-5">
            <div className="col-md-12 animate__animated animate__fadeIn" data-wow-delay="1s">
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <h3 className="mb-4">
                    <i className="fas fa-map-marker-alt mr-2" style={{ color: '#ff4b5c' }}></i> Location
                  </h3>
                  <p className="lead">Calgary, Alberta, Canada</p>
                  <p>Open to remote work opportunities worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;