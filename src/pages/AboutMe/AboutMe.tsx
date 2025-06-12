import React from 'react';
import './AboutMe.scss';
import headshot from '../../assets/headshot.jpg';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import TechnicalSkills from '../../components/TechnicalSkills/TechnicalSkills';
import RelevantEducation from '../../components/RelevantEducation/RelevantEducation';

const AboutMe: React.FC = () => (
  <section id="About" className="page-section" aria-labelledby="about-heading">
    <h1 id="about-heading">About me</h1>
    <figure>
      <img
        src={headshot}
        alt="AI-generated portrait of Angelica Reuterswärd"
        className="about-headshot"
      />
      <blockquote>
        <p>"Front-End Developer with Full-Stack ambitions!"</p>
      </blockquote>
      <figcaption>
        Angelica Reuterswärd, Developer at heart since 2020
      </figcaption>
    </figure>

    <WorkExperience />
    <TechnicalSkills />
    <RelevantEducation />
  </section>
);

export default AboutMe;
