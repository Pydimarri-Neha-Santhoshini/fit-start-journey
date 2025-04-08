
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { toast } from "@/components/ui/use-toast";
import './AiRecommendationsPage.css';

const AiRecommendationsPage = () => {
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [intensity, setIntensity] = useState('medium');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [equipment, setEquipment] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  
  const handleGetRecommendations = () => {
    if (!fitnessGoal || !equipment) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setShowRecommendations(true);
    
    // Scroll to recommendations
    setTimeout(() => {
      document.querySelector('.recommendations-container')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };
  
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <h1 className="page-title ai-title">AI Recommendations</h1>
        
        <div className="ai-form">
          <div className="form-group">
            <label className="form-label">Fitness Goals:</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Weight loss, Muscle Gain..." 
              value={fitnessGoal}
              onChange={(e) => setFitnessGoal(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Workout Intensity:</label>
            <div className="intensity-options">
              <label className={`intensity-option ${intensity === 'low' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="intensity" 
                  value="low" 
                  checked={intensity === 'low'} 
                  onChange={() => setIntensity('low')}
                /> 
                Low
              </label>
              <label className={`intensity-option ${intensity === 'medium' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="intensity" 
                  value="medium" 
                  checked={intensity === 'medium'} 
                  onChange={() => setIntensity('medium')}
                /> 
                Medium
              </label>
              <label className={`intensity-option ${intensity === 'high' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="intensity" 
                  value="high" 
                  checked={intensity === 'high'} 
                  onChange={() => setIntensity('high')}
                /> 
                High
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Dietary Restrictions:</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Lactose intolerance, Vegan..." 
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Equipment Available:</label>
            <select 
              className="form-select"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
            >
              <option value="">Select Option</option>
              <option value="none">No Equipment</option>
              <option value="basic">Basic Home Equipment</option>
              <option value="gym">Full Gym Access</option>
            </select>
          </div>
          
          <button 
            className="recommendations-button"
            onClick={handleGetRecommendations}
          >
            GET RECOMMENDATIONS
          </button>
        </div>
        
        {showRecommendations && (
          <div className="recommendations-container">
            <h2 className="recommendations-heading">Meal Plan</h2>
            <div className="meal-plan-grid">
              <div className="meal-plan-item">
                <h3 className="meal-plan-title">Breakfast</h3>
                <ul className="meal-plan-list">
                  <li>Greek Yogurt with Berries (150 kcal)</li>
                  <li>Whole Grain Toast with Avocado (220 kcal)</li>
                  <li>Protein Smoothie with Spinach (180 kcal)</li>
                  <li>Egg White Omelet (160 kcal)</li>
                </ul>
              </div>
              <div className="meal-plan-item">
                <h3 className="meal-plan-title">Lunch</h3>
                <ul className="meal-plan-list">
                  <li>Grilled Chicken Salad (320 kcal)</li>
                  <li>Quinoa Bowl with Vegetables (280 kcal)</li>
                  <li>Lentil Soup with Side Salad (310 kcal)</li>
                  <li>Turkey Wrap with Hummus (290 kcal)</li>
                </ul>
              </div>
              <div className="meal-plan-item">
                <h3 className="meal-plan-title">Dinner</h3>
                <ul className="meal-plan-list">
                  <li>Baked Salmon with Roasted Vegetables (380 kcal)</li>
                  <li>Stir-Fry with Brown Rice (340 kcal)</li>
                  <li>Lean Beef with Sweet Potato (420 kcal)</li>
                  <li>Veggie Burger with Side Salad (310 kcal)</li>
                </ul>
              </div>
            </div>
            
            <button className="meal-swap-button">MEAL SWAP</button>
            
            <h2 className="recommendations-heading">Workout Plan</h2>
            <div className="workout-plan-grid">
              <div className="workout-plan-item">
                <h3 className="workout-plan-day">Day 1 - Lower Body</h3>
                <ul className="workout-plan-list">
                  <li>Warm Up - 10 min</li>
                  <li>Squats - 3 sets × 12 reps</li>
                  <li>Lunges - 3 sets × 10 reps each leg</li>
                  <li>Glute Bridges - 3 sets × 15 reps</li>
                  <li>Calf Raises - 3 sets × 20 reps</li>
                  <li>Cool Down Stretches - 5 min</li>
                </ul>
                <p className="workout-difficulty">Difficulty - {intensity === 'low' ? 'Easy' : intensity === 'medium' ? 'Medium' : 'Hard'}</p>
              </div>
              <div className="workout-plan-item">
                <h3 className="workout-plan-day">Day 2 - Upper Body</h3>
                <ul className="workout-plan-list">
                  <li>Warm Up - 10 min</li>
                  <li>Push-ups - 3 sets × 10 reps</li>
                  <li>Dumbbell Rows - 3 sets × 12 reps</li>
                  <li>Shoulder Press - 3 sets × 10 reps</li>
                  <li>Bicep Curls - 3 sets × 12 reps</li>
                  <li>Tricep Dips - 3 sets × 10 reps</li>
                  <li>Cool Down Stretches - 5 min</li>
                </ul>
                <p className="workout-difficulty">Difficulty - {intensity === 'low' ? 'Easy' : intensity === 'medium' ? 'Medium' : 'Hard'}</p>
              </div>
            </div>
            
            <div className="action-buttons">
              <button className="save-plan-button">SAVE PLAN</button>
              <button 
                className="regenerate-button"
                onClick={() => {
                  toast({
                    title: "Regenerating recommendations",
                    description: "Your new plan is being created."
                  });
                  
                  // Simulate regenerating after a delay
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 1000);
                }}
              >
                REGENERATE RECOMMENDATIONS
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiRecommendationsPage;
