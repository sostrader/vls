// components/DelayedButton.tsx
"use client";
import './progressbar.css';
import React, { useState, useEffect } from 'react';

const ProgressBar = ({ isPlaying }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (isPlaying) {
     
        const totalTime = 8 * 60 * 1000; // 4 minutos no total
        const halfTime = 1 * 60 * 1000; // Metade em 2 minutos
    
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const time = prevProgress * totalTime / 100;
          const delta = time < halfTime ? 0.5 : 0.1; // Faster increment before halfTime
          return Math.min(prevProgress + delta, 100);
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
