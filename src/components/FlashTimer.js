// src/components/FlashTimer.js
import React, { useState, useEffect } from 'react';

const FlashTimer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0; // Stop timer when it reaches 0
        }
        return prevTime - 1; // Decrement the time left
      });
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  // Format time left into HH:MM:SS
  const formatTimeLeft = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flash-timer">
      <h2>Flash Sale Ends In:</h2>
      <p>{formatTimeLeft(timeLeft)}</p>
    </div>
  );
};

export default FlashTimer;
