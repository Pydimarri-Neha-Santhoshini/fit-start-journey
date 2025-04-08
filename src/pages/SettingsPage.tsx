
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import './SettingsPage.css';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <h1 className="page-title">Settings</h1>
        
        <div className="settings-container">
          <div className="settings-section">
            <h2 className="settings-section-title">Profile Information</h2>
            
            <div className="settings-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-input" defaultValue="Alex Johnson" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" defaultValue="alex.johnson@example.com" />
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label className="form-label">Height</label>
                  <div className="input-with-unit">
                    <input type="number" className="form-input" defaultValue="175" />
                    <span className="input-unit">cm</span>
                  </div>
                </div>
                
                <div className="form-group half">
                  <label className="form-label">Weight</label>
                  <div className="input-with-unit">
                    <input type="number" className="form-input" defaultValue="68" />
                    <span className="input-unit">kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="settings-section">
            <h2 className="settings-section-title">Fitness Goals</h2>
            
            <div className="fitness-goals">
              <div className="fitness-goal-item">
                <input type="checkbox" id="goal1" checked />
                <label htmlFor="goal1">Weight Loss</label>
              </div>
              
              <div className="fitness-goal-item">
                <input type="checkbox" id="goal2" />
                <label htmlFor="goal2">Muscle Gain</label>
              </div>
              
              <div className="fitness-goal-item">
                <input type="checkbox" id="goal3" checked />
                <label htmlFor="goal3">Improve Endurance</label>
              </div>
              
              <div className="fitness-goal-item">
                <input type="checkbox" id="goal4" />
                <label htmlFor="goal4">Improve Flexibility</label>
              </div>
            </div>
          </div>
          
          <div className="settings-section">
            <h2 className="settings-section-title">App Settings</h2>
            
            <div className="app-settings">
              <div className="setting-item">
                <span className="setting-label">Dark Mode</span>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="setting-item">
                <span className="setting-label">Notifications</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="setting-item">
                <span className="setting-label">Workout Reminders</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="settings-actions">
            <button className="save-settings-button">Save Changes</button>
            <button className="logout-button">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
