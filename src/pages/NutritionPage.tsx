
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import './NutritionPage.css';

const meals = [
  {
    id: 1,
    name: 'Vegetable Frittata with Fruit Salad',
    calories: 512,
    time: '25 MIN',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 2,
    name: 'Chia Seeds with Cottage Cheese',
    calories: 380,
    time: '15 MIN',
    image: 'https://plus.unsplash.com/premium_photo-1663840345058-2a0ac2450894?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const NutritionPage = () => {
  const [activeTab, setActiveTab] = useState('breakfast');
  
  return (
    <div className="app-container">
      <Navbar />
      <div className="nutrition-page">
        <div className="nutrition-header">
          <h1 className="nutrition-title">MEALS</h1>
          
          <div className="nutrition-filters">
            <div className="nutrition-plan-selector">
              <span className="nutrition-plan-name">Pescatarian</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <h2 className="nutrition-subtitle">MEAL PLAN</h2>
          </div>
          
          <div className="nutrition-actions">
            <button className="nutrition-action-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="action-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            <button className="nutrition-action-button favorite">
              <svg xmlns="http://www.w3.org/2000/svg" className="action-icon" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="meal-tabs">
          <button 
            className={`meal-tab ${activeTab === 'breakfast' ? 'active' : ''}`}
            onClick={() => setActiveTab('breakfast')}
          >
            Breakfast
          </button>
          <button 
            className={`meal-tab ${activeTab === 'lunch' ? 'active' : ''}`}
            onClick={() => setActiveTab('lunch')}
          >
            Lunch
          </button>
          <button 
            className={`meal-tab ${activeTab === 'dinner' ? 'active' : ''}`}
            onClick={() => setActiveTab('dinner')}
          >
            Dinner
          </button>
          <button 
            className={`meal-tab ${activeTab === 'snack' ? 'active' : ''}`}
            onClick={() => setActiveTab('snack')}
          >
            Snack
          </button>
        </div>
        
        <div className="meals-list">
          {meals.map(meal => (
            <div key={meal.id} className="meal-item">
              <div className="meal-image-container">
                <img src={meal.image} alt={meal.name} className="meal-image" />
              </div>
              <div className="meal-details">
                <h3 className="meal-name">{meal.name}</h3>
                <p className="meal-info">{meal.calories} KCAL • {meal.time}</p>
              </div>
              <button className="meal-favorite">
                <svg xmlns="http://www.w3.org/2000/svg" className="heart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
