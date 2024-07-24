import React, { useState, useEffect } from 'react';
import './FAQPage.css';

// Utility function to convert text with links to React elements
const renderAnswerText = (text) => {
  // Regular expression to find markdown-like links
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  // Split text by links
  while ((match = regex.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index));
    parts.push(<a key={match.index} href={match[2]}>{match[1]}</a>);
    lastIndex = regex.lastIndex;
  }

  // Push remaining text
  parts.push(text.slice(lastIndex));

  return <>{parts}</>;
};

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [closingIndex, setClosingIndex] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('/faqs.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching the FAQs:', error);
      }
    };

    fetchFAQs();
  }, []);

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
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{item.question}</h3>
              <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>v</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''} ${closingIndex === index ? 'closing' : ''}`}>
              <div className="answer-content">
                <ul>
                  {item.answer.map((point, i) => (
                    <li key={i}>{renderAnswerText(point)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
