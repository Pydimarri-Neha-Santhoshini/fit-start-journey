
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar">
      <div className="navbar-logo">THE FITNESS HUB</div>
      
      <div className="navbar-links">
        <Link to="/" className={path === '/' ? 'active' : ''}>Dashboard</Link>
        <Link to="/workouts" className={path.includes('/workout') ? 'active' : ''}>Workouts</Link>
        <Link to="/nutrition" className={path.includes('/nutrition') ? 'active' : ''}>Nutrition</Link>
        <Link to="/progress" className={path.includes('/progress') ? 'active' : ''}>Progress</Link>
        <Link to="/ai-recommendations" className={path.includes('/ai-recommendations') ? 'active' : ''}>AI Recommendations</Link>
        <Link to="/bmi-calculator" className={path.includes('/bmi-calculator') ? 'active' : ''}>BMI Calculator</Link>
        <Link to="/community" className={path.includes('/community') ? 'active' : ''}>Community</Link>
      </div>
      
      <div className="navbar-actions">
        <div className="notification-icon">
          <div className="notification-badge">2</div>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        
        <Link to="/settings" className="profile-icon">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="User profile" 
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
