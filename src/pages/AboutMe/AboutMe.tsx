import React from 'react';
import './AboutMe.scss';
import headshot from '../../assets/headshot.jpg';
import Card from '../../components/Card/Card';

const AboutMe: React.FC = () => (
  <section id="About" className="page-section">
    <Card>
      {' '}
      <h1>About me</h1>
      <img
        src={headshot}
        alt="AI-generated headshot"
        className="about-headshot"
      />
    </Card>
  </section>
);

export default AboutMe;
