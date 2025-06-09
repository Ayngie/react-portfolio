import React from 'react';
import './Home.scss';

const Home: React.FC = () => (
  <section id="Home" className="full-viewport-section">
    <h1>Front-End Developer</h1>
    <h2>Portfolio</h2>
    <div className="heart-container">
      <div className="heart" aria-label="Animated heart"></div>
    </div>
  </section>
);

export default Home;
