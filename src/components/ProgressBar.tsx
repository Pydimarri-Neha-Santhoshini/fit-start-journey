
import React from 'react';
import './ProgressBar.css';

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
    <div className="progress-bar-card">
      <div className="progress-bar-header">
        <div className="progress-bar-label">{label}</div>
        <div className="progress-bar-percentage">{percentage}%</div>
      </div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="progress-bar-footer">
        <div className="progress-bar-value">{value}</div>
        <div className="progress-bar-subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
