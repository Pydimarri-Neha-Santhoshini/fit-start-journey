
import React from 'react';
import { Link } from 'react-router-dom';

const GetStartedCard = ({
  title,
  type,
  description,
  linkUrl
}) => {
  return (
    <div className="bg-fitnessCardBg p-6 rounded-lg flex flex-col items-center justify-center text-center gap-3 h-full">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${type === 'workout' ? 'bg-fitnessRed/10' : 'bg-green-500/10'}`}>
        {type === 'workout' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fitnessRed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-fitnessGray text-sm">{description}</p>
      <Link to={linkUrl} className={`mt-3 inline-flex items-center gap-1 px-4 py-2 rounded text-white ${type === 'workout' ? 'bg-fitnessRed' : 'bg-green-500'}`}>
        Get Started
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default GetStartedCard;
