
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import './WorkoutDayPage.css';

const WorkoutDayPage = () => {
  const { type, day } = useParams();
  const navigate = useNavigate();
  
  // Workout title based on type parameter
  const getWorkoutTitle = () => {
    switch(type) {
      case 'strength':
        return 'Build muscle & strength';
      case 'weight-loss':
        return 'Lose weight & Keep fit';
      case 'belly-fat':
        return 'Lose belly fat';
      case 'cardio':
        return 'Morning HIT Cardio';
      case 'yoga':
        return 'Yoga for Flexibility';
      default:
        return 'Workout Plan';
    }
  };
  
  return (
    <div className="app-container">
      <div className="workout-day-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <div>
          <h1 className="workout-title">{getWorkoutTitle()}</h1>
          <div className="week-indicator">
            <span className="week-flag">🚩</span>
            <span>Week 1</span>
          </div>
        </div>
      </div>
      
      <div className="workout-days-container">
        <div className="workout-day-item active">
          <div className="day-circle active"></div>
          <div className="day-content">
            <div className="day-card active">
              <h2 className="day-title">Day 1</h2>
              <p className="exercises-count">17 Exercises</p>
              <Link to={`/workout/${type}/day1/exercise`} className="start-button">
                Start
                <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="workout-day-item">
          <div className="day-circle"></div>
          <div className="day-content">
            <div className="day-card">
              <h2 className="day-title">Day 2</h2>
              <p className="exercises-count">17 Exercises</p>
            </div>
          </div>
        </div>
        
        <div className="workout-day-item">
          <div className="day-circle"></div>
          <div className="day-content">
            <div className="day-card">
              <h2 className="day-title">Day 3</h2>
              <p className="exercises-count">21 Exercises</p>
            </div>
          </div>
        </div>
        
        <div className="workout-day-item">
          <div className="day-circle"></div>
          <div className="day-content">
            <div className="day-card">
              <h2 className="day-title">Day 4</h2>
              <p className="exercises-count">Rest</p>
            </div>
          </div>
        </div>
        
        <div className="workout-day-item">
          <div className="day-circle"></div>
          <div className="day-content">
            <div className="day-card">
              <h2 className="day-title">Day 5</h2>
              <p className="exercises-count">19 Exercises</p>
            </div>
          </div>
        </div>
        
        <div className="workout-day-item">
          <div className="day-circle"></div>
          <div className="day-content">
            <div className="day-card">
              <h2 className="day-title">Day 6</h2>
              <p className="exercises-count">19 Exercises</p>
            </div>
          </div>
        </div>
        
        <div className="workout-day-item">
          <div className="day-circle"></div>
          <div className="day-content">
            <div className="day-card">
              <h2 className="day-title">Day 7</h2>
              <p className="exercises-count">Rest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDayPage;
