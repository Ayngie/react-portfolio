import React from 'react';
import type { ReactNode } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Card.scss';

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  noArrow?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  id = '',
  noArrow,
}) => (
  <article id={id} className={`card ${className}`}>
    {children}
    {!noArrow && (
      <a
        href="#top"
        className="card-return-top"
        aria-label="Return to top of page"
        tabIndex={0}>
        <FaArrowUp aria-hidden="true" focusable="false" />
        <span className="visually-hidden">Return to top</span>
      </a>
    )}
  </article>
);

export default Card;
