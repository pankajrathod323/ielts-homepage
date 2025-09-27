import React from "react";
import "./styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Master IELTS & Achieve Your Dream Score</h1>
        <p>Expert guidance, mock tests, AI band predictions, and speaking practice under one roof.</p>
        <a href="#enroll" className="btn-hero">Get Started</a>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="Students studying for IELTS" />
      </div>
    </section>
  );
};

export default Hero;
