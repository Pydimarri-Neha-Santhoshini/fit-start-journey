
import React from 'react';

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  // Calculate the stroke dash offset
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress flex items-center justify-center relative">
      <svg viewBox="0 0 100 100">
        <circle className="bg" cx="50" cy="50" r={radius} />
        <circle 
          className="progress" 
          cx="50" 
          cy="50" 
          r={radius} 
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-bold">{percentage}%</div>
        <div className="text-xs text-fitnessGray">Completion</div>
      </div>
    </div>
  );
};

export default CircularProgress;
