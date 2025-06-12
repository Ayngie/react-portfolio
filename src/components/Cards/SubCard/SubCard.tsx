import React from 'react';
import type { ReactNode } from 'react';
import './SubCard.scss';

interface SubCardProps {
  children: ReactNode;
  className?: string;
}

const SubCard: React.FC<SubCardProps> = ({ children, className = '' }) => (
  <section className={`sub-card ${className}`}>{children}</section>
);

export default SubCard;
