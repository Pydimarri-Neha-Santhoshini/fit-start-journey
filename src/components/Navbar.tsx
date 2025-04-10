
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';
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
        <Link to="/settings" className={path.includes('/settings') ? 'active' : ''}>Settings</Link>
      </div>
      
      <div className="navbar-actions">
        <div className="notification-icon">
          <div className="notification-badge">2</div>
          <Bell className="icon" />
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
