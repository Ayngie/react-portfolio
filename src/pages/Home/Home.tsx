import React from 'react';
import './Home.scss';
import Card from '../../components/Card/Card';

const Home: React.FC = () => (
  <section id="Home" className="home-section">
    <div className="title-container">
      <h1 className="home-title FED">Front-End Developer</h1>
      <h2 className="home-title PORTFOLIO">Portfolio</h2>
    </div>
    <div className="heart-container">
      <div className="heart" aria-label="Animated heart"></div>
    </div>
    <Card>
      <h3>Hi! I'm Angelica!</h3>
      <p>Welcome to my portfolio.</p>
    </Card>
  </section>
);

export default Home;
