import React, { useState } from 'react';
import './Questionnaire.css';

const question = {
  question: "What type of scenery do you prefer?",
  options: ["Mountains", "Beaches", "Forests", "Deserts"]
};

const Questionnaire = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (option) => {
    setSelectedOptions(prev => {
      if (prev.includes(option)) {
        return prev.filter(item => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleSubmit = () => {
    console.log('Selected options:', selectedOptions);
  };

  return (
    <div className="questionnaire">
      <legend>{question.question}</legend>
      <div className="options">
        {question.options.map((option, index) => (
          <label key={index} className="option">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Questionnaire;
