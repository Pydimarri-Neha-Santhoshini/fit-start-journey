
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './WorkoutDayPage.css';

const exercises = [
  { id: 1, name: 'SQUATS', reps: '×16', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 2, name: 'INCLINE PUSH-UPS', reps: '×12', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 3, name: 'MOUNTAIN CLIMBER', time: '00:30', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 4, name: 'RUSSIAN TWIST', reps: '×10', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 5, name: 'REVERSE CRUNCHES', reps: '×12', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 6, name: 'BACKWARD LUNGE WITH FRONT KICK LEFT', reps: '×6', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 7, name: 'BACKWARD LUNGE WITH FRONT KICK RIGHT', reps: '×6', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 8, name: 'CAT COW POSE', time: '00:30', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 9, name: 'PLANK', time: '00:30', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 10, name: 'SQUATS', reps: '×16', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 11, name: 'INCLINE PUSH-UPS', reps: '×10', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 12, name: 'MOUNTAIN CLIMBER', time: '00:30', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 13, name: 'HEEL TOUCH', reps: '×10', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 14, name: 'REVERSE CRUNCHES', reps: '×10', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 15, name: 'BACKWARD LUNGE WITH FRONT KICK LEFT', reps: '×6', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 16, name: 'BACKWARD LUNGE WITH FRONT KICK RIGHT', reps: '×6', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' },
  { id: 17, name: 'COBRA STRETCH', time: '00:30', image: 'public/lovable-uploads/160f73a2-47f3-4b3e-9ef8-2457afb13a92.png' }
];

const WorkoutDayPage = () => {
  const { type, day } = useParams<{ type: string; day: string }>();
  
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
          <h1 className="workout-day-name">Day {day}</h1>
          <p className="workout-day-info">16 Mins • 17 Workouts</p>
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
