import React from 'react';
import Card from '../../../components/Cards/Card/Card';
import SubCard from '../../../components/Cards/SubCard/SubCard';
import Skills from '../../../components/Skills/Skills';

const TechnicalSkills: React.FC = () => (
  <Card id="technical-skills">
    <h2>Technical skills</h2>
    <SubCard>
      <Skills />
    </SubCard>
  </Card>
);

export default TechnicalSkills;
