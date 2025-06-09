import React from 'react';
import './Home.scss';

const Home: React.FC = () => (
  <section id="Home" className="full-viewport-section home-section">
    <div className="title-container">
      <h1 className="home-title FED">Front-End Developer</h1>
      <h2 className="home-title PORTFOLIO">Portfolio</h2>
    </div>
    <div className="heart-container">
      <div className="heart" aria-label="Animated heart"></div>
    </div>
  </section>
);

export default Home;
