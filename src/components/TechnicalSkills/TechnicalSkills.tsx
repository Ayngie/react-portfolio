import React from 'react';
import Card from '../Cards/Card/Card';
import SubCard from '../Cards/SubCard/SubCard';
import Skills from './Skills/Skills';

const TechnicalSkills: React.FC = () => (
  <Card id="technical-skills">
    <h2>Technical skills</h2>
    <SubCard>
      <Skills />
    </SubCard>
  </Card>
);

export default TechnicalSkills;
