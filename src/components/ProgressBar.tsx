// components/ProgressBar.tsx
"use client";

import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalTime = (2 + 2) * 60 * 1000; // Total time in milliseconds
    const halfTime = 2 * 60 * 1000; // Time to reach 50%
    
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const time = prevProgress * totalTime / 100;
        const delta = time < halfTime ? 0.5 : 0.1; // Faster increment before halfTime
        return Math.min(prevProgress + delta, 100);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
