import React from 'react';
import type { ReactNode } from 'react';
import './SubCard.scss';

interface SubCardProps {
  children: ReactNode;
  className?: string;
}

const SubCard: React.FC<SubCardProps> = ({ children, className = '' }) => (
  <article className={`sub-card ${className}`}>{children}</article>
);

export default SubCard;
