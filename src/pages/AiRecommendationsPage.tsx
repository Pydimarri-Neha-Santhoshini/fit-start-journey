
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Zap, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import './AiRecommendationsPage.css';

const AiRecommendationsPage = () => {
  const [selectedPreference, setSelectedPreference] = useState<string | null>(null);
  const [askingQuestion, setAskingQuestion] = useState(false);
  const [question, setQuestion] = useState('');
  
  const preferences = [
    { id: 'weight-loss', title: 'Weight Loss', icon: '⚖️' },
    { id: 'muscle-gain', title: 'Muscle Gain', icon: '💪' },
    { id: 'nutrition', title: 'Nutrition', icon: '🥗' },
    { id: 'fitness-plan', title: 'Fitness Plan', icon: '📋' },
  ];
  
  const recommendations = [
    {
      title: "Add more protein to your diet",
      description: "Based on your goals and current diet, increasing protein intake can help build muscle and support recovery.",
      tips: ["Aim for 1.6-2.2g of protein per kg of bodyweight", "Include protein in every meal", "Consider a post-workout protein shake"]
    },
    {
      title: "Optimize your workout split",
      description: "Your current workout routine could be improved for better muscle growth and recovery.",
      tips: ["Try a push/pull/legs split", "Ensure at least 48 hours of rest for muscle groups", "Include progressive overload in your routine"]
    },
    {
      title: "Improve your sleep quality",
      description: "Quality sleep is essential for muscle recovery and overall health.",
      tips: ["Aim for 7-9 hours of sleep each night", "Avoid screen time 1 hour before bed", "Create a consistent sleep schedule"]
    }
  ];
  
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">AI Recommendations</h1>
          <p className="page-subtitle">Get personalized advice based on your fitness data</p>
        </div>
        
        <div className="ai-container">
          <div className="ai-card">
            <div className="ai-header">
              <Zap className="ai-icon" color="#ea384c" />
              <h2 className="ai-title">Personalized Recommendations</h2>
            </div>
            
            <div className="preferences-grid">
              {preferences.map((pref) => (
                <div 
                  key={pref.id}
                  className={`preference-card ${selectedPreference === pref.id ? 'active' : ''}`}
                  onClick={() => setSelectedPreference(pref.id)}
                >
                  <div className="preference-icon">{pref.icon}</div>
                  <div className="preference-title">{pref.title}</div>
                </div>
              ))}
            </div>
            
            <button className="generate-button">
              Generate Recommendations
              <ArrowRight size={18} />
            </button>
          </div>
          
          {askingQuestion ? (
            <div className="ai-card">
              <div className="ai-header">
                <Sparkles className="ai-icon" color="#ea384c" />
                <h2 className="ai-title">Ask Me Anything</h2>
              </div>
              
              <div className="question-input-container">
                <textarea 
                  className="question-input"
                  placeholder="Ask a fitness, nutrition, or wellness question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <button className="ask-button">Ask</button>
              </div>
              
              <button className="toggle-mode-button" onClick={() => setAskingQuestion(false)}>
                View Recommendations Instead
              </button>
            </div>
          ) : (
            <div className="ai-card">
              <div className="ai-header">
                <Sparkles className="ai-icon" color="#ea384c" />
                <h2 className="ai-title">Your AI Recommendations</h2>
              </div>
              
              <div className="recommendations-list">
                {recommendations.map((rec, index) => (
                  <div className="recommendation-item" key={index}>
                    <div className="recommendation-header">
                      <h3 className="recommendation-title">{rec.title}</h3>
                      <ChevronDown size={20} />
                    </div>
                    <p className="recommendation-description">{rec.description}</p>
                    <div className="recommendation-tips">
                      <h4 className="tips-title">Tips:</h4>
                      <ul className="tips-list">
                        {rec.tips.map((tip, tipIndex) => (
                          <li key={tipIndex}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="toggle-mode-button" onClick={() => setAskingQuestion(true)}>
                Ask a Specific Question Instead
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiRecommendationsPage;
