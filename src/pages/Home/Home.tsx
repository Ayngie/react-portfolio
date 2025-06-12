import React from 'react';
import './Home.scss';
import Card from '../../components/Cards/Card/Card';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <section id="Home" className="page-section">
    <div className="title-container">
      <h1 className="home-title FED">Front-End Developer</h1>
      <h2 className="home-title PORTFOLIO">Portfolio</h2>
    </div>
    <div className="heart-container">
      <div className="heart" aria-hidden="true"></div>
    </div>
    <Card noArrow>
      <h3>Hi! I'm Angelica!</h3>
      <p>Welcome to my portfolio.</p>
      <p> I'm an Osteopath turned Front End Developer. </p>
      <p>
        After a decade of working in manual medicine, I discovered a new passion
        in Front-End Development. As a child of the 80's who grew up with
        computer games and actual floppy disks, you'd think I would have
        realized my passion much sooner, but it so happens I also had a passion
        for health and medicine.
      </p>
      <p>
        Once I realized, I took a Front-End Developer Degree from{' '}
        <a
          href="https://medieinstitutet.se/utbildningar/front-end-developer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medieinstitutet, Stockholm (opens in new tab)">
          Medieinstitutet, Stockholm
        </a>
        , interned for two periods at{' '}
        <a
          href="https://www.postnord.se/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="PostNord Group IT (opens in new tab)">
          PostNord Group IT
        </a>
        , and now I'm here - ready to create amazing web experiences!
      </p>
      <p>
        Feel free to <Link to="/contact">contact me</Link> regarding programming
        jobs, read more <Link to="/about">about me</Link>, or check out some of
        my favorite <Link to="/projects">projects</Link>.
      </p>
    </Card>
  </section>
);

export default Home;
