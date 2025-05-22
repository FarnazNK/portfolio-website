import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand font-weight-bold" to="/">
          Farnaz Nasehi
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
              to="/"
            >
              Home
            </Link>
            <Link 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
              to="/about"
            >
              About
            </Link>
            <Link 
              className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`} 
              to="/resume"
            >
              Work Experience
            </Link>
            <Link 
              className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`} 
              to="/skills"
            >
              Skills
            </Link>
            <Link 
              className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} 
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;