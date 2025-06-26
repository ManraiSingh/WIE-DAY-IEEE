import React, { useState, useEffect } from 'react';
import './Story.css';
import echoImg from './images/echo.png'; // Your Echo bot image
import background from './images/bg2.png'; // Your red-black Cryptic Hunt background

const storyline = [
  "Hello Agent, I'm ECHO 👋",
  "Your mission begins here.",
  "Solve each puzzle to stop Nemora.",
  "Let the cryptic hunt begin!"
];

const EchoStory = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < storyline.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 3000);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div
      className="echo-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="echo-bot-section">
        <img src={echoImg} alt="Echo" className="echo-img" />
        <div className="chat-bubble">
          <p>{storyline[index]}</p>
        </div>
      </div>
    </div>
  );
};

export default EchoStory;
