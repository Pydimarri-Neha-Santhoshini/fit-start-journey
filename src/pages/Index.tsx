
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import StatCard from '@/components/StatCard';
import CircularProgress from '@/components/CircularProgress';
import WorkoutCard from '@/components/WorkoutCard';
import ProgressBar from '@/components/ProgressBar';
import MealCard from '@/components/MealCard';
import SectionHeader from '@/components/SectionHeader';
import './Index.css';

const Index = () => {
  // For heart rate icon
  const HeartRateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  // For tracking icon
  const TrackingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );

  return (
    <div className="app-container">
      <Navbar />
      
      {/* User greeting section */}
      <div className="main-content">
        <div className="greeting-section">
          <div>
            <h1 className="greeting-title">HI, ALEX! HOPE YOU'RE DOING WELL!</h1>
            <p className="greeting-subtitle">Your progress is looking good! Keep up the good work!</p>
          </div>
        </div>

        {/* Main content grid */}
        <div className="dashboard-grid">
          {/* Today's Summary Section */}
          <div className="summary-section">
            <SectionHeader title="TODAY'S SUMMARY" />
            <div className="summary-container">
              <div className="stats-grid">
                <StatCard
                  title="Steps"
                  value="8,245"
                  subText="Goal: 10,000 remaining"
                  icon={<TrackingIcon />}
                />
                <StatCard
                  title="Calories Burned"
                  value="385"
                  subText="47% of daily goal"
                  icon={<TrackingIcon />}
                />
                <StatCard
                  title="Heart Rate"
                  value="88 BPM"
                  subText="Resting"
                  icon={<HeartRateIcon />}
                />
                <StatCard
                  title="Workouts"
                  value="2/5"
                  subText="This week"
                  icon={<TrackingIcon />}
                />
              </div>
            </div>
          </div>

          {/* Weekly Goal Section */}
          <div className="goal-section">
            <SectionHeader title="WEEKLY GOAL" />
            <div className="goal-container">
              <CircularProgress percentage={60} />
              <p className="goal-text">You're on track to reach your weekly goal!</p>
            </div>
          </div>
        </div>

        {/* Workouts Section */}
        <div className="workouts-section">
          <SectionHeader 
            title="GET STARTED WITH A WORKOUT" 
            linkText="View All" 
            linkUrl="/workouts" 
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

        {/* Progress Tracking Section */}
        <div className="progress-section">
          <SectionHeader 
            title="TRACK YOUR PROGRESS" 
            linkText="Full Report" 
            linkUrl="/progress" 
          />
          <div className="progress-grid">
            <ProgressBar
              percentage={62}
              label="WORKOUT COMPLETION"
              value="5/8"
              subtitle="Goal"
            />
            <ProgressBar
              percentage={36}
              label="CALORIE GOAL"
              value="1260 / 3500"
              subtitle="kcal"
            />
            <ProgressBar
              percentage={82}
              label="WATER INTAKE"
              value="5/6"
              subtitle="Liters"
            />
          </div>
        </div>

        {/* Today's Meals Section */}
        <div className="meals-section">
          <SectionHeader 
            title="TODAY'S MEALS" 
            linkText="View Plan" 
            linkUrl="/nutrition" 
          />
          <div className="meals-grid">
            <MealCard
              title="PROTEIN OATMEAL"
              calories={320}
              protein={24}
              time="Breakfast"
              imageUrl="https://images.unsplash.com/photo-1584278860047-22db9ff82bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
            <MealCard
              title="GRILLED CHICKEN SALAD"
              calories={420}
              protein={35}
              time="Lunch"
              imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80"
            />
            <MealCard
              title="PROTEIN SMOOTHIE"
              calories={280}
              protein={32}
              time="Snack"
              imageUrl="https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            />
            <MealCard
              title="SALMON & VEGETABLES"
              calories={520}
              protein={42}
              time="Dinner"
              imageUrl="https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80"
            />
          </div>
          
          <div className="meal-plan-button-container">
            <Link to="/nutrition" className="meal-plan-button">
              Plan Your Meals
              <svg xmlns="http://www.w3.org/2000/svg" className="plus-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
