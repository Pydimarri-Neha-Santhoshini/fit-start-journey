
import React from 'react';
import { Link } from 'react-router-dom';
import './SectionHeader.css';

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
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      {linkText && linkUrl && (
        <Link to={linkUrl} className="section-link">
          {linkText}
          <svg xmlns="http://www.w3.org/2000/svg" className="chevron-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
