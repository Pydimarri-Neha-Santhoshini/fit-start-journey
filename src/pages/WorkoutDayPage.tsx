
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './WorkoutDayPage.css';

const exercises = [
  { id: 1, name: 'SQUATS', reps: '×16' },
  { id: 2, name: 'INCLINE PUSH-UPS', reps: '×12' },
  { id: 3, name: 'MOUNTAIN CLIMBER', time: '00:30' },
  { id: 4, name: 'RUSSIAN TWIST', reps: '×10' },
  { id: 5, name: 'REVERSE CRUNCHES', reps: '×12' },
  { id: 6, name: 'BACKWARD LUNGE WITH FRONT KICK LEFT', reps: '×6' },
  { id: 7, name: 'BACKWARD LUNGE WITH FRONT KICK RIGHT', reps: '×6' },
  { id: 8, name: 'CAT COW POSE', time: '00:30' },
  { id: 9, name: 'PLANK', time: '00:30' },
  { id: 10, name: 'SQUATS', reps: '×16' },
  { id: 11, name: 'INCLINE PUSH-UPS', reps: '×10' },
  { id: 12, name: 'MOUNTAIN CLIMBER', time: '00:30' },
  { id: 13, name: 'HEEL TOUCH', reps: '×10' },
  { id: 14, name: 'REVERSE CRUNCHES', reps: '×10' },
  { id: 15, name: 'BACKWARD LUNGE WITH FRONT KICK LEFT', reps: '×6' },
  { id: 16, name: 'BACKWARD LUNGE WITH FRONT KICK RIGHT', reps: '×6' },
  { id: 17, name: 'COBRA STRETCH', time: '00:30' }
];

const WorkoutDayPage = () => {
  const { type, day } = useParams<{ type: string; day: string }>();
  
  return (
    <div className="workout-day-page">
      <div className="workout-day-header">
        <Link to={`/workout/${type}`} className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="back-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        
        <div className="workout-day-info">
          <h2 className="workout-day-title">Day {day}</h2>
          <p className="workout-day-subtitle">16 Mins • 17 Workouts</p>
        </div>
      </div>
      
      <div className="workout-day-sections">
        <div className="workout-day-section">
          <div className="workout-day-section-header">
            <h3 className="workout-day-section-title">Instruction</h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="section-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        <div className="workout-day-section">
          <div className="workout-day-section-header">
            <h3 className="workout-day-section-title">Workout Settings</h3>
            <div className="workout-day-section-subtitle">Sound & Music & Timer</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="section-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        <div className="workout-day-section exercises-section">
          <div className="workout-day-section-header">
            <h3 className="workout-day-section-title">Exercises</h3>
            <button className="edit-button">Edit</button>
          </div>
          
          <div className="exercises-list">
            {exercises.map(exercise => (
              <div key={exercise.id} className="exercise-item">
                <div className="exercise-image-container">
                  <img 
                    src={`public/lovable-uploads/4e795cae-d283-4a83-bed2-d1116dce286d.png`} 
                    alt={exercise.name} 
                    className="exercise-image" 
                  />
                </div>
                <div className="exercise-content">
                  <h4 className="exercise-name">{exercise.name}</h4>
                  <p className="exercise-detail">{exercise.reps || exercise.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="workout-day-footer">
        <button className="start-workout-button">
          Start with warm ups
        </button>
      </div>
    </div>
  );
};

export default WorkoutDayPage;
