import React, { useState } from 'react';
import './FAQPage.css';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [closingIndex, setClosingIndex] = useState(null);

  const questions = [
    {
      question: "What is TDX?",
      answer: [
        "TDX is a community of travelers.",
        "We offer personalized travel planning.",
        "Join us to explore new destinations."
      ],
    },
    {
      question: "How can I join the community?",
      answer: [
        "Click on the Join Now button on the homepage.",
        "Fill out the questionnaire to help us know you better.",
        "Start receiving personalized travel plans."
      ],
    },
    {
      question: "What are the benefits of joining TDX?",
      answer: [
        "Access to exclusive travel deals.",
        "Personalized travel planning.",
        "Connect with like-minded travelers."
      ],
    },
    // Add more questions as needed
  ];

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setClosingIndex(null);
    } else {
      setClosingIndex(activeIndex);
      setTimeout(() => {
        setActiveIndex(index);
        setClosingIndex(null);
      }, 500); // Wait for the closing transition to complete
    }
  };

  return (
    <div className="faq-page">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{item.question}</h3>
              <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>v</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''} ${closingIndex === index ? 'closing' : ''}`}>
              <div className="answer-content">
                {item.answer.map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
