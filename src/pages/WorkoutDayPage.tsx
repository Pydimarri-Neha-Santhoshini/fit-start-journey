
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './WorkoutDayPage.css';

// Define exercise images mapped to exercise names
const exerciseImages = {
  'SQUATS': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png',
  'INCLINE PUSH-UPS': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png',
  'MOUNTAIN CLIMBER': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png',
  'RUSSIAN TWIST': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png',
  'REVERSE CRUNCHES': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png',
  'BACKWARD LUNGE WITH FRONT KICK LEFT': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png',
  'BACKWARD LUNGE WITH FRONT KICK RIGHT': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png',
  'CAT COW POSE': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png',
  'PLANK': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png',
  'HEEL TOUCH': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png',
  'COBRA STRETCH': 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png'
};

const exercises = [
  { id: 1, name: 'SQUATS', reps: '×16', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 2, name: 'INCLINE PUSH-UPS', reps: '×12', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 3, name: 'MOUNTAIN CLIMBER', time: '00:30', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 4, name: 'RUSSIAN TWIST', reps: '×10', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 5, name: 'REVERSE CRUNCHES', reps: '×12', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 6, name: 'BACKWARD LUNGE WITH FRONT KICK LEFT', reps: '×6', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 7, name: 'BACKWARD LUNGE WITH FRONT KICK RIGHT', reps: '×6', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 8, name: 'CAT COW POSE', time: '00:30', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 9, name: 'PLANK', time: '00:30', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 10, name: 'SQUATS', reps: '×16', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 11, name: 'INCLINE PUSH-UPS', reps: '×10', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 12, name: 'MOUNTAIN CLIMBER', time: '00:30', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 13, name: 'HEEL TOUCH', reps: '×10', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 14, name: 'REVERSE CRUNCHES', reps: '×10', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 15, name: 'BACKWARD LUNGE WITH FRONT KICK LEFT', reps: '×6', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 16, name: 'BACKWARD LUNGE WITH FRONT KICK RIGHT', reps: '×6', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' },
  { id: 17, name: 'COBRA STRETCH', time: '00:30', image: 'public/lovable-uploads/402a202a-b428-475f-bbe2-1cee021426c7.png' }
];

const WorkoutDayPage = () => {
  const { type, day } = useParams<{ type: string; day: string }>();
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="workout-day-page">
      <div className="workout-day-header">
        <div className="workout-header-top">
          <div className="workout-time">12:27</div>
          <div className="workout-icons">
            <span className="workout-icon">⚡</span>
            <span className="workout-icon">📶</span>
            <span className="workout-icon">🔋</span>
          </div>
        </div>
        
        <div className="workout-title-container">
          <button onClick={handleGoBack} className="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="workout-day-name">Day {day}</h1>
          <p className="workout-day-info">16 Mins • 17 Workouts</p>
          <div className="comments-container">
            <span className="comments-link">Comments Questions</span>
          </div>
        </div>
      </div>
      
      <div className="workout-sections">
        <div className="workout-section">
          <div className="workout-section-header">
            <h2 className="workout-section-title">Instruction</h2>
            <div className="dropdown-indicator">▼</div>
          </div>
        </div>
        
        <div className="workout-section">
          <div className="workout-section-header">
            <h2 className="workout-section-title">Workout Settings</h2>
            <p className="workout-section-subtitle">Sound & Music & Timer</p>
            <div className="dropdown-indicator">▶</div>
          </div>
        </div>
        
        <div className="workout-section exercises-section">
          <div className="workout-section-header">
            <h2 className="workout-section-title">Exercises</h2>
            <button className="edit-button">Edit</button>
          </div>
          
          <div className="exercises-list">
            {exercises.map(exercise => (
              <div key={exercise.id} className="exercise-item">
                <div className="exercise-image">
                  <img 
                    src={exercise.image} 
                    alt={exercise.name} 
                  />
                </div>
                <div className="exercise-details">
                  <h3 className="exercise-name">{exercise.name}</h3>
                  <p className="exercise-count">{exercise.reps || exercise.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="workout-footer">
        <button className="start-workout-button">
          Start with warm ups
        </button>
      </div>
    </div>
  );
};

export default WorkoutDayPage;
