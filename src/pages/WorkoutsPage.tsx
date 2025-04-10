
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import WorkoutCard from '@/components/WorkoutCard';
import SectionHeader from '@/components/SectionHeader';
import './WorkoutsPage.css';

const WorkoutsPage = () => {
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Workouts</h1>
        </div>
        
        <div className="workouts-section">
          <SectionHeader 
            title="RECOMMENDED FOR YOU" 
            linkText="View All" 
            linkUrl="/workouts/recommended" 
          />
          
          <div className="workouts-grid">
            <WorkoutCard
              title="MORNING HIT CARDIO"
              duration={20}
              level="Beginner"
              imageUrl="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              link="/workout/cardio"
            />
            
            <WorkoutCard
              title="FULL BODY STRENGTH"
              duration={30}
              level="Intermediate"
              imageUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              link="/workout/strength"
            />
            
            <WorkoutCard
              title="YOGA FOR FLEXIBILITY"
              duration={20}
              level="All Levels"
              imageUrl="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80"
              link="/workout/yoga"
            />
          </div>
        </div>
        
        <div className="training-plans-section">
          <SectionHeader 
            title="TRAINING PLANS" 
            linkText="View All" 
            linkUrl="/workout/strength/plans" 
          />
          
          <div className="plans-grid">
            <div className="plan-card">
              <div className="plan-image">
                <img src="public/lovable-uploads/d46f3a34-57cd-4838-b0a7-8178e63888e6.png" alt="Build Muscle" />
              </div>
              <div className="plan-content">
                <h3 className="plan-title">Build Muscle & Strength</h3>
                <p className="plan-description">8-week program to build muscle mass</p>
                <Link to="/workout/strength/plans" className="view-plan-button">View Plan</Link>
              </div>
            </div>
            
            <div className="plan-card">
              <div className="plan-image">
                <img src="public/lovable-uploads/57448d3c-bee9-4ed1-8b99-6fe6dbe6e7e9.png" alt="Weight Loss" />
              </div>
              <div className="plan-content">
                <h3 className="plan-title">Weight Loss Challenge</h3>
                <p className="plan-description">12-week program for losing weight</p>
                <Link to="/workout/weight-loss/plans" className="view-plan-button">View Plan</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="categories-section">
          <SectionHeader 
            title="WORKOUT CATEGORIES" 
            linkText="" 
            linkUrl="" 
          />
          
          <div className="categories-grid">
            <Link to="/workout/strength" className="category-card">
              <div className="category-icon">💪</div>
              <div className="category-title">Strength</div>
            </Link>
            
            <Link to="/workout/cardio" className="category-card">
              <div className="category-icon">🏃</div>
              <div className="category-title">Cardio</div>
            </Link>
            
            <Link to="/workout/yoga" className="category-card">
              <div className="category-icon">🧘</div>
              <div className="category-title">Yoga</div>
            </Link>
            
            <Link to="/workout/stretching" className="category-card">
              <div className="category-icon">🤸</div>
              <div className="category-title">Stretching</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutsPage;
