
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import './TrainingPlansPage.css';

const TrainingPlansPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="app-container">
      <div className="training-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <h1 className="training-title">Select Training Plan</h1>
      </div>
      
      <div className="training-plans-container">
        <div className="training-plan-card">
          <div className="difficulty">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="difficulty-bolt active">⚡</span>
            ))}
          </div>
          <h2 className="plan-title">Build muscle & strength</h2>
          <h3 className="plan-day">DAY 1</h3>
          <Link to="/workout/strength/day1" className="plan-button">
            START
            <ChevronRight />
          </Link>
        </div>
        
        <div className="training-plan-card">
          <div className="difficulty">
            {[1].map((i) => (
              <span key={i} className="difficulty-bolt active">⚡</span>
            ))}
            {[2, 3, 4].map((i) => (
              <span key={i} className="difficulty-bolt">⚡</span>
            ))}
          </div>
          <h2 className="plan-title">Lose weight & Keep fit</h2>
          <h3 className="plan-day">DAY 1</h3>
          <Link to="/workout/weight-loss/day1" className="plan-button">
            START
            <ChevronRight />
          </Link>
        </div>
        
        <div className="training-plan-card">
          <div className="difficulty">
            {[1, 2, 3].map((i) => (
              <span key={i} className="difficulty-bolt active">⚡</span>
            ))}
            {[4].map((i) => (
              <span key={i} className="difficulty-bolt">⚡</span>
            ))}
          </div>
          <h2 className="plan-title">Lose belly fat</h2>
          <h3 className="plan-day">DAY 1</h3>
          <Link to="/workout/belly-fat/day1" className="plan-button">
            START
            <ChevronRight />
          </Link>
        </div>
        
        <div className="training-plan-card">
          <div className="difficulty">
            {[1, 2, 3].map((i) => (
              <span key={i} className="difficulty-bolt active">⚡</span>
            ))}
            {[4].map((i) => (
              <span key={i} className="difficulty-bolt">⚡</span>
            ))}
          </div>
          <h2 className="plan-title">Lose belly fat</h2>
          <h3 className="plan-day">DAY 1</h3>
          <Link to="/workout/belly-fat/day1" className="plan-button">
            START
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingPlansPage;
