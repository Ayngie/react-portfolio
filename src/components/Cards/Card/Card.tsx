import React from 'react';
import type { ReactNode } from 'react';
import './Card.scss';

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <article className={`card ${className}`}>{children}</article>
);

export default Card;
