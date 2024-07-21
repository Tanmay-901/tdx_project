import React, { useState, useEffect } from 'react';
import './TileThree.css';

const TileThree = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState('in');
  const [userData, setUserData] = useState({});

  const questions = [
    "What do we call you?",
    "Where are you based?",
    "What’s your preferred way to travel?",
    "How long before do we notify you for a trip?",
    "What do you like more? Mountain or Beach?",
    "How would you rate your life experience so far on a scale of 10?",
    "What do you think of life based on your experiences?",
    "Almost done! We would like to know who’s [name]?",
    "What are a few of your travel goals we as a community can do?"
  ];

  // const NAME_QUESTION = "What do we call you?";

  useEffect(() => {
    if (showQuestions) {
      setCurrentQuestion(0);
    }
  }, [showQuestions]);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setDirection('out');
      setTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setDirection('in');
        setTransitioning(false);
      }, 300); // Duration should match the CSS transition time
    }
  };

  const handleSubmit = () => {
    console.log(JSON.stringify(userData, null, 2));
    setShowQuestions(false);
  };

  const handleJoinNow = () => {
    setShowQuestions(true);
  };

  const handleInputChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [questions[currentQuestion]]: e.target.value
    }));
  };

  // const name = userData[NAME_QUESTION] || '';

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
          <div className="question-container">
            <div className={`question-slide ${transitioning ? `slide-${direction}` : ''}`}>
              {currentQuestion >= 0 && currentQuestion < questions.length && (
                <div className="question">
                  <h3>{questions[currentQuestion]}</h3>
                  <input
                    type="text"
                    value={userData[questions[currentQuestion]] || ''}
                    onChange={handleInputChange}
                  />
                  {currentQuestion === questions.length - 1 ? (
                    <button className="next-button" onClick={handleSubmit}>Submit</button>
                  ) : (
                    <button className="next-button" onClick={handleNextQuestion}>Next</button>
                  )}
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
