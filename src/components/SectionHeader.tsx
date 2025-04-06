
import React from 'react';
import { Link } from 'react-router-dom';

interface SectionHeaderProps {
  title: string;
  linkText?: string;
  linkUrl?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  linkText,
  linkUrl
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-bold text-lg uppercase">{title}</h2>
      {linkText && linkUrl && (
        <Link to={linkUrl} className="text-sm text-fitnessGray flex items-center gap-1">
          {linkText}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
