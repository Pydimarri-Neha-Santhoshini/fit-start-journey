
import React from 'react';
import './StatCard.css';

interface StatCardProps {
  title: string;
  value: string;
  subText: string;
  color?: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  subText,
  color = "red",
  icon
}) => {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div className="stat-card-title">{title}</div>
        {icon && <div className="stat-card-icon">{icon}</div>}
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-subtext">{subText}</div>
    </div>
  );
};

export default StatCard;
