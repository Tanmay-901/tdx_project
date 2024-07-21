import React, { useState } from 'react';
import './FAQPage.css';

const FAQPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqSections = [
    {
      title: "What is the membership fee for?",
      questions: [
        {
          question: "What is TDX?",
          answer: `TDX is a community of travelers.
We offer personalized travel planning.
Join us to explore new destinations.`
        },
        {
          question: "How do I know if I qualify for the membership?",
          answer: `You qualify if you are passionate about travel and open to personalized travel plans.
We assess based on your interests and travel history.`
        },
        // Add more questions if needed
      ]
    },
    {
      title: "Who are you?",
      questions: [
        {
          question: "How can I join the community?",
          answer: `Click on the Join Now button on the homepage.
Fill out the questionnaire to help us know you better.
Start receiving personalized travel plans.`
        },
        {
          question: "What are the membership benefits?",
          answer: `Access to exclusive travel deals.
Personalized travel planning.
Connect with like-minded travelers.`
        },
        // Add more questions if needed
      ]
    },
    {
      title: "Who are we?",
      questions: [
        {
          question: "What are the benefits of joining TDX?",
          answer: `Access to exclusive travel deals.
Personalized travel planning.
Connect with like-minded travelers.`
        },
        // Add more questions if needed
      ]
    },
    {
      title: "How do we do it?",
      questions: [
        {
          question: "What’s our process?",
          answer: `We start with understanding your preferences.
Our experts curate travel plans tailored to your needs.
You receive detailed itineraries and support throughout your trip.`
        },
        // Add more questions if needed
      ]
    }
  ];

  const handleSectionClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
    setActiveQuestion(null); // Reset active question when switching sections
  };

  const handleQuestionClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className={`faq-page ${activeSection !== null ? 'expanded' : ''}`}>
      {activeSection === null ? (
        <div className="faq-grid">
          {faqSections.map((section, index) => (
            <div
              key={index}
              className="faq-window"
              onClick={() => handleSectionClick(index)}
            >
              <h3>{section.title}</h3>
              <span className="arrow">&#9662;</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="faq-content">
          <div className="faq-content-inner">
            <h2>{faqSections[activeSection].title}</h2>
            {faqSections[activeSection].questions.map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => handleQuestionClick(index)}>
                  <h3>{item.question}</h3>
                  <span className={`arrow ${activeQuestion === index ? 'open' : ''}`}>v</span>
                </div>
                <div className={`faq-answer ${activeQuestion === index ? 'active' : ''}`}>
                  <div className="answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
            <button className="back-button" onClick={() => setActiveSection(null)}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQPage;
