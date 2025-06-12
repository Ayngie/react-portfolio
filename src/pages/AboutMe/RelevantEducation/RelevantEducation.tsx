import React from 'react';
import Card from '../../../components/Cards/Card/Card';
import SubCard from '../../../components/Cards/SubCard/SubCard';

const RelevantEducation: React.FC = () => (
  <Card id="education">
    <h2>Relevant education</h2>
    <SubCard>
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
          aria-label="Jensen Komvux (opens in new tab)">
          Jensen Komvux,
        </a>
        (2020-2020).
      </p>
    </SubCard>
  </Card>
);

export default RelevantEducation;
