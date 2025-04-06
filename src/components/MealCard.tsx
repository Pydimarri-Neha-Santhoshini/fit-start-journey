
import React from 'react';
import './MealCard.css';

interface MealCardProps {
  title: string;
  calories: number;
  protein: number;
  time: string;
  imageUrl: string;
}

const MealCard: React.FC<MealCardProps> = ({
  title,
  calories,
  protein,
  time,
  imageUrl
}) => {
  return (
    <div className="meal-card">
      <div className="meal-image-container">
        <img src={imageUrl} alt={title} className="meal-image" />
      </div>
      <div className="meal-content">
        <h3 className="meal-title">{title}</h3>
        <div className="meal-nutrients">
          {calories} kcal • {protein}g protein
        </div>
      </div>
      <div className="meal-time">
        {time}
      </div>
    </div>
  );
};

export default MealCard;
