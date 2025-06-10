import React from 'react';
import './AboutMe.scss';
import headshot from '../../assets/headshot.jpg';

const AboutMe: React.FC = () => (
  <section id="About" className="page-section">
    <h1>About me</h1>
    <img
      src={headshot}
      alt="AI-generated headshot"
      className="about-headshot"
    />
  </section>
);

export default AboutMe;
