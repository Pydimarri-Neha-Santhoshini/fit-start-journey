
import React from 'react';
import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/ProgressBar';
import './ProgressPage.css';

const ProgressPage = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Progress Tracking</h1>
        </div>
        
        <div className="progress-container">
          <div className="progress-grid">
            <ProgressBar
              percentage={62}
              label="WORKOUT COMPLETION"
              value="5/8"
              subtitle="Goal"
            />
            <ProgressBar
              percentage={36}
              label="CALORIE GOAL"
              value="1260 / 3500"
              subtitle="kcal"
            />
            <ProgressBar
              percentage={82}
              label="WATER INTAKE"
              value="5/6"
              subtitle="Liters"
            />
            <ProgressBar
              percentage={45}
              label="STEPS"
              value="6,754 / 15,000"
              subtitle="Daily"
            />
            <ProgressBar
              percentage={70}
              label="SLEEP QUALITY"
              value="7h 30m"
              subtitle="Average"
            />
            <ProgressBar
              percentage={90}
              label="MEALS TRACKED"
              value="9/10"
              subtitle="Weekly"
            />
          </div>
          
          <div className="report-button-container">
            <button className="report-button">
              Generate Full Report
              <svg xmlns="http://www.w3.org/2000/svg" className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
