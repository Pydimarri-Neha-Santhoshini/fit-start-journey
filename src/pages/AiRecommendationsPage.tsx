
import React from 'react';
import Navbar from '@/components/Navbar';
import './AiRecommendationsPage.css';

const AiRecommendationsPage = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <h1 className="page-title ai-title">AI Recommendations</h1>
        
        <div className="ai-form">
          <div className="form-group">
            <label className="form-label">Fitness Goals:</label>
            <input type="text" className="form-input" placeholder="Weight loss, Muscle Gain..." />
          </div>
          
          <div className="form-group">
            <label className="form-label">Workout Intensity:</label>
            <div className="intensity-options">
              <label className="intensity-option">
                <input type="radio" name="intensity" value="low" /> Low
              </label>
              <label className="intensity-option active">
                <input type="radio" name="intensity" value="medium" checked /> Medium
              </label>
              <label className="intensity-option">
                <input type="radio" name="intensity" value="high" /> High
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Dietary Restrictions:</label>
            <input type="text" className="form-input" placeholder="Lactose intolerance, Vegan..." />
          </div>
          
          <div className="form-group">
            <label className="form-label">Equipment Available:</label>
            <select className="form-select">
              <option value="">Select Option</option>
              <option value="none">No Equipment</option>
              <option value="basic">Basic Home Equipment</option>
              <option value="gym">Full Gym Access</option>
            </select>
          </div>
          
          <button className="recommendations-button">GET RECOMMENDATIONS</button>
        </div>
        
        <div className="recommendations-container">
          <h2 className="recommendations-heading">Meal Plan</h2>
          <div className="meal-plan-grid">
            <div className="meal-plan-item">
              <h3 className="meal-plan-title">Breakfast</h3>
              <ul className="meal-plan-list">
                <li>Fruit Juices</li>
                <li>Eggs</li>
                <li>Toast</li>
                <li>Oats</li>
              </ul>
            </div>
            <div className="meal-plan-item">
              <h3 className="meal-plan-title">Lunch</h3>
              <ul className="meal-plan-list">
                <li>Salad</li>
                <li>Roti</li>
                <li>Rice</li>
                <li>Soups</li>
              </ul>
            </div>
            <div className="meal-plan-item">
              <h3 className="meal-plan-title">Dinner</h3>
              <ul className="meal-plan-list">
                <li>Chapati</li>
                <li>Fruit Juices</li>
              </ul>
            </div>
          </div>
          
          <button className="meal-swap-button">MEAL SWAP</button>
          
          <h2 className="recommendations-heading">WorkOut Plan</h2>
          <div className="workout-plan-grid">
            <div className="workout-plan-item">
              <ul className="workout-plan-list">
                <li>Warm Up - 10 min</li>
                <li>Planks - 10 min, 20</li>
                <li>Pushups - 20 min, 10</li>
              </ul>
              <p className="workout-difficulty">Difficulty - Medium</p>
            </div>
            <div className="workout-plan-item">
              <ul className="workout-plan-list">
                <li>Warm Up - 10 min</li>
                <li>Dumbbells - 5 min, 10</li>
                <li>Bicycle crunch - 10 min, 10</li>
              </ul>
              <p className="workout-difficulty">Difficulty - Easy</p>
            </div>
          </div>
          
          <div className="action-buttons">
            <button className="save-plan-button">SAVE PLAN</button>
            <button className="regenerate-button">REGENERATE RECOMMENDATIONS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiRecommendationsPage;
