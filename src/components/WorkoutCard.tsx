
import React from 'react';
import { Link } from 'react-router-dom';
import './WorkoutCard.css';

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
      <div className="workout-image-container">
        <img src={imageUrl} alt={title} className="workout-image" />
      </div>
      <div className="workout-content">
        <h3 className="workout-title">{title}</h3>
        <div className="workout-details">
          <div className="workout-duration">
            <svg xmlns="http://www.w3.org/2000/svg" className="duration-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration} min</span>
          </div>
          <span className="workout-separator">•</span>
          <span className="workout-level">{level}</span>
        </div>
        <div className="workout-actions">
          <Link to={link} className="start-button">
            Start
            <svg xmlns="http://www.w3.org/2000/svg" className="chevron-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to={`${link}/details`} className="details-link">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
