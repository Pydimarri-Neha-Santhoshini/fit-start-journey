
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import './NutritionPage.css';

const meals = [
  {
    id: 1,
    name: 'Vegetable Frittata with Fruit Salad',
    calories: 512,
    time: '25 MIN',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80',
    ingredients: ['Eggs', 'Bell peppers', 'Spinach', 'Onions', 'Mixed fruits']
  },
  {
    id: 2,
    name: 'Chia Seeds with Cottage Cheese',
    calories: 380,
    time: '15 MIN',
    image: 'https://plus.unsplash.com/premium_photo-1663840345058-2a0ac2450894?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: ['Chia seeds', 'Cottage cheese', 'Honey', 'Berries']
  },
  {
    id: 3,
    name: 'Grilled Chicken Salad with Avocado',
    calories: 450,
    time: '20 MIN',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    ingredients: ['Chicken breast', 'Mixed greens', 'Avocado', 'Cherry tomatoes', 'Cucumber']
  },
  {
    id: 4,
    name: 'Quinoa Bowl with Roasted Vegetables',
    calories: 420,
    time: '30 MIN',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    ingredients: ['Quinoa', 'Sweet potato', 'Broccoli', 'Chickpeas', 'Tahini dressing']
  }
];

const NutritionPage = () => {
  const [activeTab, setActiveTab] = useState('breakfast');
  const [selectedMeal, setSelectedMeal] = useState<number | null>(null);
  
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
              <div className="meal-actions">
                <button 
                  className="meal-view-button"
                  onClick={() => setSelectedMeal(selectedMeal === meal.id ? null : meal.id)}
                >
                  {selectedMeal === meal.id ? 'Hide' : 'View'}
                </button>
                <button className="meal-favorite">
                  <svg xmlns="http://www.w3.org/2000/svg" className="heart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              {selectedMeal === meal.id && (
                <div className="meal-expanded">
                  <h4 className="ingredients-title">Ingredients:</h4>
                  <ul className="ingredients-list">
                    {meal.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <div className="meal-buttons">
                    <button className="meal-button add-to-plan">Add to Plan</button>
                    <button className="meal-button get-recipe">Get Full Recipe</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="nutrition-footer">
          <button className="create-meal-button">
            <span>CREATE CUSTOM MEAL</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="plus-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
