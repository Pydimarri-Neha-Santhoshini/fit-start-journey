
import React from 'react';
import { Link } from 'react-router-dom';

interface WorkoutCardProps {
  title: string;
  duration: number;
  level: string;
  imageUrl: string;
  link: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  duration,
  level,
  imageUrl,
  link
}) => {
  return (
    <div className="workout-card">
      <img src={imageUrl} alt={title} />
      <div className="workout-card-content">
        <h3 className="font-bold text-white uppercase">{title}</h3>
        <div className="flex items-center gap-2 mt-2 text-fitnessGray text-sm">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration} min</span>
          </div>
          <span>•</span>
          <span>{level}</span>
        </div>
        <div className="mt-3">
          <Link to={link} className="inline-flex items-center gap-1 bg-fitnessRed text-white px-3 py-1 rounded text-sm">
            Start
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <a href="#" className="text-fitnessRed text-sm ml-4">Details</a>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
