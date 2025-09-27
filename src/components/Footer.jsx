import React from "react";
import "./styles/Footer.css";
import ieltsLogo from "../../public/ieltslogo.jpg"


const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={ieltsLogo} alt="IELTS Institute" />
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#enroll">Enroll</a>
        </div>
        <div className="footer-contact">
          <p>Email: contact@ieltsinstitute.com</p>
          <p>Phone: +91 9876543xxx</p>
          <p>Address: Hyderabad , India</p>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2025 IELTS Institute. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
