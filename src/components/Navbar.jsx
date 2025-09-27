import React from "react";
import "./styles/Navbar.css";
import ieltsLogo from "../../public/ieltslogo.jpg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ieltsLogo} alt="IELTS Institute" />
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#enroll" className="btn">Enroll Now</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
