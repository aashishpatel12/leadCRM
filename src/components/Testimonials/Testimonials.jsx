import React, { useState } from "react";
import "./TestimonialSection.css";
import img1 from "../../assets/Avatar Users@2x.png";
import img2 from "../../assets/Avatar Users.png";
import img3 from "../../assets/Avatar Users@2x.png";
import ball from "../../assets/Ball.png";
import { FaStar } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      name: "David Fincher",
      platform: "On Capterra",
      avatar: img1,
    },
    {
      id: 2,
      text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
      name: "Lillian Williams",
      platform: "On Capterra",
      avatar: img2,
    },
    {
      id: 3,
      text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      name: "Michael",
      platform: "On Capterra",
      avatar: img3,
    },
    {
      id: 4,
      text: "Outstanding service and incredible results! LeadCRM has transformed how we manage our customer relationships. The interface is intuitive and the features are exactly what we needed.",
      name: "Sarah Johnson",
      platform: "On Capterra",
      avatar: img1,
    },
    {
      id: 5,
      text: "Best CRM solution we've tried! The automation features save us hours every week. Customer support responds quickly and actually solves problems.",
      name: "James Miller",
      platform: "On Capterra",
      avatar: img2,
    },
    {
      id: 6,
      text: "Highly recommend LeadCRM! Easy to use, powerful features, and great value for money. Our team adoption was seamless.",
      name: "Emily Davis",
      platform: "On Capterra",
      avatar: img3,
    },
  ];

  const getCardsPerView = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const cardsPerView = getCardsPerView();

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(testimonials.length - cardsPerView, 0) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - cardsPerView ? 0 : prev + 1
    );
  };

  React.useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCurrentIndex((prev) => {
        const maxStart = Math.max(testimonials.length - newCardsPerView, 0);
        return prev > maxStart ? maxStart : prev;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [testimonials.length]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  while (visibleTestimonials.length < cardsPerView) {
    visibleTestimonials.push(null);
  }

  return (
    <div className="testimonial-container">
      <div className="decorative-circle"></div>
      {/* <img src={ball} className="decorative-circle"/> */}

      <div className="testimonial-header">
        <h2>What people are saying about LeadCRM</h2>
        <div className="navigation-buttons">
          <button
            className="nav-btn-t prev-btn"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="nav-btn-t next-btn"
            onClick={handleNext}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <div className="testimonial-cards">
        {visibleTestimonials.map((testimonial, idx) =>
          testimonial ? (
            <div key={testimonial.id} className="testimonial-card">
              <div className="card-content">
                <p className="testimonial-text">"{testimonial.text}"</p>

                <div className="rating">
                  <span className="logo-icon">
</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                      <FaStar />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="testimonial-footer">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="avatar"
                />
                <div className="user-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.platform}</p>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={`empty-${idx}`}
              className="testimonial-card empty-card"
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
