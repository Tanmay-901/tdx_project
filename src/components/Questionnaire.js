import React, { useState } from 'react';
import './Questionnaire.css';

const questions = [
  { question: "What type of scenery do you prefer?", options: ["Mountains", "Beaches", "Forests", "Deserts"] },
  { question: "What activities interest you?", options: ["Hiking", "Swimming", "Bird Watching", "Camping"] },
  { question: "Preferred climate?", options: ["Tropical", "Temperate", "Cold", "Arid"] },
  { question: "Accommodation preference?", options: ["Hotels", "Camping", "Hostels", "Cabins"] },
  { question: "Travel duration?", options: ["Weekend", "1 Week", "2 Weeks", "1 Month"] },
];

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill([]));

  const handleChange = (option, questionIndex) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      if (newAnswers[questionIndex].includes(option)) {
        newAnswers[questionIndex] = newAnswers[questionIndex].filter(item => item !== option);
      } else {
        newAnswers[questionIndex] = [...newAnswers[questionIndex], option];
      }
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log('User Selections:', answers);
      // Handle form submission logic here
    }
  };

  return (
    <div className="questionnaire">
      <div className="question">
        <legend>{questions[currentQuestion].question}</legend>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="option">
              <input
                type="checkbox"
                checked={answers[currentQuestion].includes(option)}
                onChange={() => handleChange(option, currentQuestion)}
              />
              {option}
            </label>
          ))}
        </div>
        <button onClick={handleNext}>
          {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
