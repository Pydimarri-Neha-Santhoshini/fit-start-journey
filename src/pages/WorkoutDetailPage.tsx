
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './WorkoutDetailPage.css';

const workoutDays = [
  {
    day: 1,
    exercises: 17,
    isActive: true
  },
  {
    day: 2,
    exercises: 17,
    isActive: false
  },
  {
    day: 3,
    exercises: 21,
    isActive: false
  },
  {
    day: 4,
    exercises: 0,
    isRest: true,
    isActive: false
  },
  {
    day: 5,
    exercises: 19,
    isActive: false
  },
  {
    day: 6,
    exercises: 19,
    isActive: false
  },
  {
    day: 7,
    exercises: 20,
    isActive: false
  }
];

const WorkoutDetailPage = () => {
  const { type } = useParams<{ type: string }>();
  const formattedType = type?.replace(/-/g, ' ');
  
  return (
    <div className="workout-detail-page">
      <div className="workout-detail-header">
        <Link to="/workouts" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="back-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        
        <div className="workout-detail-title">
          <h2 className="workout-name">Build muscle &</h2>
          <h2 className="workout-name">strength</h2>
        </div>
      </div>
      
      <div className="workout-week-section">
        <div className="workout-week-header">
          <div className="workout-week-flag">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff4d6d" viewBox="0 0 24 24">
              <path d="M4 24h-2v-24h2v24zm18-16l-16-6v12l16-6z"/>
            </svg>
          </div>
          <h3 className="workout-week-title">Week 1</h3>
        </div>
        
        <div className="workout-days-list">
          {workoutDays.map(day => (
            <Link 
              key={day.day} 
              to={`/workout/${type}/${day.day}`} 
              className={`workout-day-item ${day.isActive ? 'active' : ''}`}
            >
              <div className="workout-day-dot"></div>
              <div className="workout-day-content">
                <h3 className="workout-day-title">Day {day.day}</h3>
                <p className="workout-day-info">
                  {day.isRest ? 'Rest' : `${day.exercises} Exercises`}
                </p>
              </div>
              
              {day.isActive && (
                <div className="workout-day-action">
                  <span className="workout-day-action-text">Start</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="workout-day-action-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              
              {day.isRest && (
                <div className="workout-day-rest-icon">
                  ☕
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;
