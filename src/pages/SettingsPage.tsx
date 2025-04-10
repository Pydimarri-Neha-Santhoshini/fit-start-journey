
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Moon, Sun } from 'lucide-react';
import './SettingsPage.css';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Settings</h1>
        </div>
        
        <div className="settings-container">
          <div className="settings-section">
            <h2 className="section-title">Profile Information</h2>
            
            <div className="profile-info">
              <div className="profile-image">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
                <button className="edit-image-button">Edit</button>
              </div>
              
              <div className="profile-details">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" value="Alex Johnson" />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Height</label>
                    <div className="input-with-unit">
                      <input type="number" value="175" />
                      <span className="unit">cm</span>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Weight</label>
                    <div className="input-with-unit">
                      <input type="number" value="68" />
                      <span className="unit">kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="settings-section">
            <h2 className="section-title">Fitness Goals</h2>
            
            <div className="goals-container">
              <div className="goal-card active">
                <div className="goal-icon">💪</div>
                <div className="goal-text">Build Muscle</div>
              </div>
              
              <div className="goal-card">
                <div className="goal-icon">🏃</div>
                <div className="goal-text">Lose Weight</div>
              </div>
              
              <div className="goal-card">
                <div className="goal-icon">🧘</div>
                <div className="goal-text">Improve Flexibility</div>
              </div>
              
              <div className="goal-card">
                <div className="goal-icon">❤️</div>
                <div className="goal-text">Heart Health</div>
              </div>
            </div>
          </div>
          
          <div className="settings-section">
            <h2 className="section-title">App Settings</h2>
            
            <div className="theme-toggle">
              <span className="toggle-label">Theme</span>
              <div className="toggle-switch">
                <button 
                  className={`theme-button ${!darkMode ? 'active' : ''}`}
                  onClick={() => setDarkMode(false)}
                >
                  <Sun size={16} />
                  Light
                </button>
                <button 
                  className={`theme-button ${darkMode ? 'active' : ''}`}
                  onClick={() => setDarkMode(true)}
                >
                  <Moon size={16} />
                  Dark
                </button>
              </div>
            </div>
          </div>
          
          <button className="save-settings-button">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
