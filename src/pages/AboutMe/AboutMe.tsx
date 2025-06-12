import React from 'react';
import './AboutMe.scss';
import headshot from '../../assets/headshot.jpg';
import Card from '../../components/Card/Card';
import Skills from '../../components/Skills/Skills';

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

    <Card>
      <h2>Work experience</h2>
      <section className="work-experience">
        <h3>
          {' '}
          Web Developer intern at{' '}
          <a
            href="https://www.postnord.se/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PostNord Group IT (opens in new tab)">
            PostNord Group IT
          </a>
        </h3>
        <p>
          Worked in cross-functional, international, agile (SCRUM) DevOps team.
          Participated in both Front-End development of tracking-widget (Vue.js
          + TypeScript) and Back-End Development of new company feature (Java).
          Discussed tricky design solutions and wrote code for two different
          major releases.
        </p>
        <p>
          Took lead on crafting and deploying a new backoffice UI in Next.js +
          TypeScript for major release of new company feature. Demoed the
          working software for 70+ people in a live digital demo.
        </p>
        <p>
          Created an accessible and easy to use Web Component for PostNord's
          design system with Stencil.js + Storybook, publishing to npm.
        </p>
        <p>Stockholm/Solna, Sweden (Jan 2024 - May 2024).</p>
      </section>

      <section className="work-experience">
        <h3>
          {' '}
          Front-End Developer intern at{' '}
          <a
            href="https://www.postnord.se/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PostNord Group IT (opens in new tab)">
            PostNord Group IT
          </a>
        </h3>
        <p>
          Worked in cross-functional agile (SCRUM) CI/CD / DevOps team,
          participating in agile ceremonies (daily stand-ups, JIRA, sprint
          planning & retrospectives, Ways of Working, etc.), and a broad
          tech-stack in a large-scale corporate environment.
        </p>
        <p>
          Participated in refactoring old Angular project into new
          tracking-widget in Vue.js + TypeScript. Contributed with testing in
          Cypress, pull requests and participated in code reviews.
        </p>
        <p>Stockholm/Solna, Sweden (Sep 2023 - Dec 2023).</p>
      </section>

      <section className="work-experience">
        <h3>
          {' '}
          Osteopath D.O. and Sole Proprieter at{' '}
          <a
            href="https://dinosteopat.nu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Din Osteopat (opens in new tab)">
            Din Osteopat A. Reuterswärd
          </a>
        </h3>
        <p>
          I previously ran a private Osteopathic Clinic for over ten years,
          where I learned a lot about running a small business, gained much
          practice on taking a holistic approach to problem-solving, and worked
          with people to help them solve 'bugs' in other systems ;)
        </p>
        <p>
          Besides working with patients, I managed accounting, marketing,
          bookings, and created the clinic homepage.{' '}
        </p>
        <p>Danderyd/Täby, Sweden (Sep 2011 - Aug 2022).</p>
      </section>
    </Card>

    <Card>
      <h2>Technical skills</h2>
      <Skills />
    </Card>

    <Card>
      <h2>Relevant eduation</h2>
      <p>
        Front-End Developer Degree,
        <a
          href="https://medieinstitutet.se/utbildningar/front-end-developer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medieinstitutet, Stockholm (opens in new tab)">
          Medieinstitutet, Stockholm,
        </a>
        (2022-2024).
      </p>
      <p>
        Programmering 1,
        <a
          href="https://www.jensenkomvux.se/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Jensen Komvux (opens in new tab)">
          Jensen Komvux,
        </a>
        (2020-2021).
      </p>
      <p>
        Webbutveckling 1,
        <a
          href="https://www.jensenkomvux.se/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Jensen, Komvux (opens in new tab)">
          Jensen Komvux,
        </a>
        (2020-2020).
      </p>
    </Card>
  </section>
);

export default AboutMe;
