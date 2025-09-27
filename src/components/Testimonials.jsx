import React from "react";
import "./styles/Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    feedback: "The mock tests and speaking sessions helped me improve my band score from 6.5 to 8.0!",
    image: "https://picsum.photos/id/237/200/200"
  },
  {
    name: "Rohan Verma",
    feedback: "AI Band Score predictions are amazing! I could track my progress accurately.",
    image: "https://picsum.photos/id/238/200/200"
  },
  {
    name: "Ananya Singh",
    feedback: "Excellent guidance and study materials. I felt confident on exam day!",
    image: "https://picsum.photos/id/239/200/200"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <img src={t.image} alt={t.name} />
            <p>"{t.feedback}"</p>
            <h4>{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
