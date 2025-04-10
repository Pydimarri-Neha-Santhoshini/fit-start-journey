
import React from 'react';
import './ExerciseItem.css';

interface ExerciseItemProps {
  name: string;
  image: string;
  reps?: string;
  duration?: string;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ name, image, reps, duration }) => {
  return (
    <div className="exercise-item">
      <img src={image} alt={name} className="exercise-image" />
      <div className="exercise-content">
        <h3 className="exercise-name">{name}</h3>
        <p className="exercise-info">{reps || duration}</p>
      </div>
    </div>
  );
};

export default ExerciseItem;
