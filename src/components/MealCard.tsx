
import React from 'react';

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
    <div className="bg-fitnessCardBg p-4 rounded-lg flex items-center gap-4">
      <div className="w-16 h-16 rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <div className="text-sm text-fitnessGray">
          {calories} kcal • {protein}g protein
        </div>
      </div>
      <div className="text-right text-sm text-fitnessGray">
        {time}
      </div>
    </div>
  );
};

export default MealCard;
