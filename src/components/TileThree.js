import React, { useState, useEffect } from 'react';
import './TileThree.css';

const TileThree = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [startTransition, setStartTransition] = useState(false);
  const [userData, setUserData] = useState({});
  const [name, setName] = useState('');

  const questions = [
    "Where are you based?",
    "What’s your preferred way to travel?",
    "How long before do we notify you for a trip?",
    "What do you like more? Mountain or Beach?",
    "How would you rate your life experience so far on a scale of 10?",
    "What do you think of life based on your experiences?",
    "Almost done! We would like to know who’s [name]?",
    "What are a few of your travel goals we as a community can do?"
  ];

  useEffect(() => {
    if (showQuestions) {
      const timer = setTimeout(() => {
        setCurrentQuestion(0);
        setStartTransition(true);
      }, 300); // Delay to allow the initial content to transition out
      return () => clearTimeout(timer);
    }
  }, [showQuestions]);

  const handleNextQuestion = () => {
    // Only proceed to the next question if it's not the last question
    if (currentQuestion < questions.length) {  // Line 22: Fix condition to check correctly
      setCurrentQuestion(currentQuestion+1);
    } else {
      setShowQuestions(false);
      console.log(JSON.stringify(userData, null, 2));
    }
  };

  const handleJoinNow = () => {
    setShowQuestions(true);
  };

  const handleInputChange = (e) => {
    if (currentQuestion === 0) {
      setName(e.target.value);
    } else {
      setUserData((prevData) => ({ ...prevData, [questions[currentQuestion - 3]]: e.target.value }));  // Fix indexing issue here
    }
  };

  return (
    <div className="tile-three">
      <div className="content">
        {!showQuestions && (
          <>
            <h2>Join Our Community</h2>
            <p>Be a part of our amazing journey and explore the world with us.</p>
            <button className="join-button" onClick={handleJoinNow}>
              Join Now
            </button>
          </>
        )}
        {showQuestions && (
          <div className={`question-container ${startTransition ? 'start' : ''}`}>
            <div className="question-slide">
              {currentQuestion === 0 && (
                <div className="question">
                  <h3>What do we call you?</h3>
                  <input type="text" value={name} onChange={handleInputChange} />
                  <button className="next-button" onClick={handleNextQuestion}>Next</button>
                </div>
              )}
              {currentQuestion === 1 && (
                <div className="question">
                  <h3>Hello {name}! We are TDX. Welcome to the Community!</h3>
                  <button className="next-button" onClick={handleNextQuestion}>Next</button>
                </div>
              )}
              {currentQuestion === 2 && (
                <div className="question">
                  <h3>We have curated some questions to know your preferences</h3>
                  <button className="next-button" onClick={handleNextQuestion}>Next</button>
                </div>
              )}
              {currentQuestion >= 3 && (
                <div className="question">
                  <h3>{questions[currentQuestion - 3]}</h3>
                  <input
                    type="text"
                    value={userData[questions[currentQuestion - 3]] || ''}
                    onChange={handleInputChange}
                  />
                  <button className="next-button" onClick={handleNextQuestion}>Next</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TileThree;
