
import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ percentage }) => {
  // Calculate the stroke dash offset
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg viewBox="0 0 100 100">
        <circle className="progress-bg" cx="50" cy="50" r={radius} />
        <circle 
          className="progress-indicator" 
          cx="50" 
          cy="50" 
          r={radius} 
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="progress-text">
        <div className="progress-value">{percentage}%</div>
        <div className="progress-label">Completion</div>
      </div>
    </div>
  );
};

export default CircularProgress;
