import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => (
  <div className="loader-container">
    <div className="loader-line">
      <span className="loader-text">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>Loading&nbsp;</span>
        ))}
      </span>
    </div>
  </div>
);

export default Loader;
