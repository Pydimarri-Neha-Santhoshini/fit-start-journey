
import React from 'react';
import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import { Link } from 'react-router-dom';
import './WorkoutsPage.css';

const workouts = [
  {
    id: 'build-muscle',
    title: 'Build muscle & strength',
    image: 'public/lovable-uploads/a6fe7e2f-eda7-4618-acb1-8014fed003ae.png',
    difficulty: 4
  },
  {
    id: 'lose-weight',
    title: 'Lose weight & Keep fit',
    image: 'public/lovable-uploads/d85aca03-c211-400e-945f-9253bce8fbdc.png',
    difficulty: 3
  },
  {
    id: 'lose-belly-fat',
    title: 'Lose belly fat',
    image: 'public/lovable-uploads/4be80c65-f892-48ec-9764-1459eecce77e.png',
    difficulty: 3
  },
  {
    id: 'cardio',
    title: 'Cardio Training',
    image: 'public/lovable-uploads/52a505a2-31ec-4a02-b170-27bec0f6008d.png',
    difficulty: 3
  }
];

const WorkoutsPage = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Select Training Plan</h1>
        </div>
        
        <div className="workouts-list">
          {workouts.map(workout => (
            <div key={workout.id} className="workout-plan-card">
              <div className="difficulty-indicator">
                {Array(5).fill(0).map((_, i) => (
                  <span 
                    key={i} 
                    className={`difficulty-icon ${i < workout.difficulty ? 'active' : ''}`}
                  >
                    ⚡
                  </span>
                ))}
              </div>
              
              <div className="workout-plan-content">
                <img src={workout.image} alt={workout.title} className="workout-plan-image" />
                <div className="workout-plan-info">
                  <h3 className="workout-plan-title">{workout.title}</h3>
                  <h2 className="workout-plan-day">DAY 1</h2>
                </div>
              </div>
              
              <Link to={`/workout/${workout.id}`} className="workout-plan-button">
                START
                <svg xmlns="http://www.w3.org/2000/svg" className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutsPage;
