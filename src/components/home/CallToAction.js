import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section id="cta" className="py-5 text-center bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="mb-4 animate__animated animate__pulse animate__infinite animate__slow">Let's Work Together</h2>
            <p className="lead mb-4">Looking for a developer who can bridge frontend innovation with backend robustness?</p>
            <Link to="/contact" className="btn btn-primary btn-lg px-5">
              <i className="fas fa-paper-plane mr-2"></i> Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;