
import React from 'react';

interface ProgressBarProps {
  percentage: number;
  label: string;
  value: string;
  subtitle: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  label,
  value,
  subtitle
}) => {
  return (
    <div className="bg-fitnessCardBg p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="font-medium">{label}</div>
        <div className="text-fitnessRed">{percentage}%</div>
      </div>
      <div className="progress-bar mb-2">
        <div 
          className="progress-bar-inner" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm">
        <div>{value}</div>
        <div className="text-fitnessGray">{subtitle}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
