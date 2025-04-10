
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Settings } from 'lucide-react';
import './ExercisePage.css';

const ExercisePage = () => {
  const { type, day } = useParams();
  const navigate = useNavigate();
  
  const exercises = [
    { name: "SQUATS", reps: "x16", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "INCLINE PUSH-UPS", reps: "x12", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "MOUNTAIN CLIMBER", duration: "00:30", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "RUSSIAN TWIST", reps: "x10", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "REVERSE CRUNCHES", reps: "x12", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "BACKWARD LUNGE WITH FRONT KICK LEFT", reps: "x6", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "BACKWARD LUNGE WITH FRONT KICK RIGHT", reps: "x6", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "CAT COW POSE", duration: "00:30", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "PLANK", duration: "00:30", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "SQUATS", reps: "x16", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "INCLINE PUSH-UPS", reps: "x10", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "MOUNTAIN CLIMBER", duration: "00:30", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "HEEL TOUCH", reps: "x10", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "REVERSE CRUNCHES", reps: "x10", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "BACKWARD LUNGE WITH FRONT KICK LEFT", reps: "x6", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "BACKWARD LUNGE WITH FRONT KICK RIGHT", reps: "x6", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
    { name: "COBRA STRETCH", duration: "00:30", image: "/lovable-uploads/6f78635f-4e8f-402a-9200-70b2c5968796.png" },
  ];
  
  return (
    <div className="app-container">
      <div className="exercise-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <h1 className="exercise-title">Day 1</h1>
        <p className="exercise-subtitle">16 Mins • 17 Workouts</p>
      </div>
      
      <div className="exercise-sections">
        <div className="exercise-section">
          <div className="section-header">
            <h2 className="section-title">Instruction</h2>
            <ChevronDown />
          </div>
        </div>
        
        <div className="exercise-section">
          <div className="section-header">
            <h2 className="section-title">Workout Settings</h2>
            <div className="section-subtitle">Sound & Music & Timer</div>
            <Settings className="section-icon" />
          </div>
        </div>
        
        <div className="exercise-section">
          <div className="section-header exercises-header">
            <h2 className="section-title">Exercises</h2>
            <button className="edit-button">Edit</button>
          </div>
          
          <div className="exercises-list">
            {exercises.map((exercise, index) => (
              <div className="exercise-item" key={index}>
                <img src={exercise.image} alt={exercise.name} className="exercise-image" />
                <div className="exercise-content">
                  <h3 className="exercise-name">{exercise.name}</h3>
                  <p className="exercise-info">{exercise.reps || exercise.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="exercise-action">
        <button className="start-workout-button">
          Start with warm ups
        </button>
      </div>
    </div>
  );
};

export default ExercisePage;
