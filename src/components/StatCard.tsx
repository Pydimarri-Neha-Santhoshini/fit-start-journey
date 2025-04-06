
import React from 'react';

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
      <div className="flex justify-between items-start">
        <div className="text-fitnessGray text-sm">{title}</div>
        {icon && <div className="text-fitnessRed">{icon}</div>}
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-fitnessGray">{subText}</div>
    </div>
  );
};

export default StatCard;
