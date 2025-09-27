import React from "react";
import "./styles/Features.css";

const features = [
  {
    icon: "fas fa-microphone",
    title: "Speaking Practice",
    desc: "Interactive speaking sessions to improve fluency and confidence."
  },
  {
    icon: "fas fa-pencil-alt",
    title: "Mock Tests",
    desc: "Real exam-like mock tests to track your progress."
  },
  {
    icon: "fas fa-robot",
    title: "AI Band Score",
    desc: "Get AI-based band score predictions instantly."
  },
  {
    icon: "fas fa-book",
    title: "Study Materials",
    desc: "Curated resources for all IELTS modules."
  }
];

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Our Key Features</h2>
      <div className="feature-cards">
        {features.map((f, idx) => (
          <div className="card" key={idx}>
            <i className={f.icon}></i>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
