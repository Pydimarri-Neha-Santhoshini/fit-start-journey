
import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  title: string;
  isActive?: boolean;
  link: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, isActive = false, link }) => {
  return (
    <Link to={link} className={`nav-item ${isActive ? 'active' : ''}`}>
      {title}
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black py-4 px-6 flex justify-between items-center">
      <div className="text-white font-bold text-xl">THE FITNESS HUB</div>
      
      <div className="flex items-center gap-2">
        <NavItem title="Dashboard" isActive={true} link="/" />
        <NavItem title="Workouts" link="/workouts" />
        <NavItem title="Nutrition" link="/nutrition" />
        <NavItem title="Progress" link="/progress" />
        <NavItem title="Community" link="/community" />
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="bg-fitnessRed text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
            2
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        
        <div className="h-8 w-8 rounded-full bg-white overflow-hidden">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="User profile" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
