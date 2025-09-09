import React from 'react';
import Card from '../Cards/Card/Card';
import SubCard from '../Cards/SubCard/SubCard';

const RelevantEducation: React.FC = () => (
  <Card id="relevant-education">
    <h2>Relevant education</h2>
    <SubCard>
      <p> Currently studying {' '}
        <a
          href="https://medieinstitutet.se/utbildningar/systemutvecklare-net/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="System Developer education page at Medieinstitutet, Stockholm (opens in new tab)">
          System Developer .Net at Medieinstitutet, 
        </a>{' '}
        (Distans, 2025-2027).
      </p>
      <p>
        Graduated with degree as {' '}
        <a
          href="https://medieinstitutet.se/utbildningar/front-end-developer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Front-End Developer education page at Medieinstitutet, Stockholm (opens in new tab)">
          Front-End Developer at Medieinstitutet,
        </a>{' '}
        (Stockholm, 2022-2024).
      </p>
      <p>
        Programmering 1,{' '}
        <a
          href="https://www.jensenkomvux.se/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Jensen Komvux (opens in new tab)">
          Jensen Komvux,
        </a>{' '}
        (2020-2021).
      </p>
      <p>
        Webbutveckling 1,{' '}
        <a
          href="https://www.jensenkomvux.se/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Jensen Komvux (opens in new tab)">
          Jensen Komvux,
        </a>{' '}
        (2020-2020).
      </p>
    </SubCard>
  </Card>
);

export default RelevantEducation;
