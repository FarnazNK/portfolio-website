import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-light py-3">
      <div className="container">
        <p className="mb-2">© 2025 Farnaz Nasehi. All rights reserved.</p>
        <div className="social-links mt-2">
          <a
            href="https://linkedin.com/in/farnaz-nasehi"
            className="social-link mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/FarnazNK"
            className="social-link mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="mailto:fnasehikalajahi@gmail.com" 
            className="social-link mx-2" 
            aria-label="Email"
          >
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;