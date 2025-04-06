
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import StatCard from '@/components/StatCard';
import CircularProgress from '@/components/CircularProgress';
import WorkoutCard from '@/components/WorkoutCard';
import ProgressBar from '@/components/ProgressBar';
import MealCard from '@/components/MealCard';
import SectionHeader from '@/components/SectionHeader';
import GetStartedCard from '@/components/GetStartedCard';
import { Link } from 'react-router-dom';

const Index = () => {
  // Toggle between new user and existing user views
  const [isNewUser, setIsNewUser] = useState(false);

  // Mock data for heart rate icon
  const HeartRateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  // Mock toggle to help with demo
  const toggleUserStatus = () => {
    setIsNewUser(!isNewUser);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* User greeting section */}
      <div className="container mx-auto px-6 py-8 flex-1">
        <div className="flex justify-between items-center mb-1">
          <div>
            <h1 className="text-2xl font-bold">HI, {isNewUser ? "THERE" : "ALEX"}! {isNewUser ? "WELCOME ABOARD!" : "HOPE YOU'RE DOING WELL!"}</h1>
            <p className="text-fitnessGray">
              {isNewUser 
                ? "Let's get started with your fitness journey!" 
                : "Your progress is looking good! Keep up the good work!"}
            </p>
          </div>
          <button 
            onClick={toggleUserStatus} 
            className="px-4 py-2 bg-fitnessCardBg rounded-md text-sm"
          >
            Toggle Demo: {isNewUser ? "New User" : "Existing User"}
          </button>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Today's Summary Section */}
          <div className="lg:col-span-2">
            <SectionHeader title="TODAY'S SUMMARY" />
            
            {isNewUser ? (
              <div className="bg-fitnessCardBg rounded-lg p-6">
                <GetStartedCard 
                  title="Start Tracking Your Progress"
                  type="workout"
                  description="Begin your fitness journey by completing your first workout"
                  linkUrl="/workouts"
                />
              </div>
            ) : (
              <div className="bg-fitnessCardBg rounded-lg p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard
                    title="Steps"
                    value="8,245"
                    subText="Goal: 10,000 remaining"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>}
                  />
                  <StatCard
                    title="Calories Burned"
                    value="385"
                    subText="47% of daily goal"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>}
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
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Weekly Goal Section */}
          <div>
            <SectionHeader title="WEEKLY GOAL" />
            {isNewUser ? (
              <div className="bg-fitnessCardBg rounded-lg p-6 h-[calc(100%-2rem)] flex items-center justify-center">
                <GetStartedCard 
                  title="Set Weekly Goals"
                  type="workout"
                  description="Define your fitness targets for the week"
                  linkUrl="/goals"
                />
              </div>
            ) : (
              <div className="bg-fitnessCardBg rounded-lg p-6 flex flex-col items-center justify-center h-[calc(100%-2rem)]">
                <CircularProgress percentage={60} />
                <p className="text-sm text-fitnessGray mt-4 text-center">
                  You're on track to reach your weekly goal!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Workouts Section */}
        <div className="mt-10">
          <SectionHeader 
            title="GET STARTED WITH A WORKOUT" 
            linkText="View All" 
            linkUrl="/workouts" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="mt-10">
          <SectionHeader 
            title="TRACK YOUR PROGRESS" 
            linkText={isNewUser ? "" : "Full Report"} 
            linkUrl={isNewUser ? "" : "/progress/report"} 
          />
          
          {isNewUser ? (
            <div className="bg-fitnessCardBg rounded-lg p-6">
              <GetStartedCard 
                title="Start Tracking Your Progress"
                type="workout"
                description="Complete workouts to see your progress here"
                linkUrl="/workouts"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          )}
        </div>

        {/* Today's Meals Section */}
        <div className="mt-10 mb-10">
          <SectionHeader 
            title="TODAY'S MEALS" 
            linkText={isNewUser ? "" : "View Plan"} 
            linkUrl={isNewUser ? "" : "/nutrition/plan"} 
          />
          
          {isNewUser ? (
            <div className="bg-fitnessCardBg rounded-lg p-6">
              <GetStartedCard 
                title="Create Your Meal Plan"
                type="meal"
                description="Plan your nutrition to reach your goals faster"
                linkUrl="/nutrition/create"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          )}
          
          {!isNewUser && (
            <div className="mt-6 flex justify-center">
              <Link 
                to="/nutrition/plan" 
                className="bg-fitnessRed text-white rounded-md px-6 py-3 flex items-center gap-2 hover:bg-red-600 transition-colors"
              >
                Plan Your Meals
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
