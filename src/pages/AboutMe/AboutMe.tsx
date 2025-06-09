import React from 'react';
import headshot from '../../assets/headshot.jpg';
import './AboutMe.scss';

const AboutMe: React.FC = () => (
  <section id="About" className="full-viewport-section">
    <h1>About me</h1>
    <img
      src={headshot}
      alt="AI-generated headshot"
      className="about-headshot"
    />
  </section>
);

export default AboutMe;
