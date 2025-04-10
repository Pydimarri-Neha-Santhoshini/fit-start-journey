
import React from 'react';
import Navbar from '@/components/Navbar';
import './CommunityPage.css';

const CommunityPage = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <h1 className="page-title">Community</h1>
        
        <div className="community-container">
          <div className="coming-soon">
            <svg xmlns="http://www.w3.org/2000/svg" className="coming-soon-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h2 className="coming-soon-title">Community Features Coming Soon!</h2>
            <p className="coming-soon-text">We're working on building an amazing community experience for fitness enthusiasts like you. Stay tuned for updates!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
