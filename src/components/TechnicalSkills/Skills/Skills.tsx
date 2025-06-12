import React from 'react';
import './Skills.scss';
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
  FaBootstrap,
  FaDatabase,
  FaFigma,
  FaCodepen,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiStencil,
  SiStorybook,
  SiJest,
  SiCypress,
  SiVite,
  SiMongodb,
  SiGraphql,
  SiPostman,
  SiSass,
  SiStyledcomponents,
  SiSwagger,
  SiExpress,
  SiI18Next,
} from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';
import { BsKanban } from 'react-icons/bs';
import { MdDesignServices } from 'react-icons/md';

const skills = [
  // Languages
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'SCSS', icon: <SiSass /> },

  // Frameworks & Libraries
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Vue.js', icon: <FaVuejs /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Stencil.js', icon: <SiStencil /> },
  { name: 'Storybook', icon: <SiStorybook /> },
  { name: 'Styled Components', icon: <SiStyledcomponents /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },

  // Databases & APIs
  { name: 'REST-Api', icon: <SiSwagger /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'SQL', icon: <TbSql /> },
  { name: 'NoSQL', icon: <FaDatabase /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'SwaggerHub', icon: <SiSwagger /> },

  // Tools & Platforms
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'BitBucket', icon: <FaBitbucket /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'CodePen.io', icon: <FaCodepen /> },
  { name: 'Figma', icon: <FaFigma /> },

  // Testing
  { name: 'Jest', icon: <SiJest /> },
  { name: 'Cypress', icon: <SiCypress /> },

  // Internationalization & Design
  { name: 'i18n', icon: <SiI18Next /> },
  { name: 'UI/UX', icon: <MdDesignServices /> },

  // Workflow & Methodologies
  { name: 'Jira', icon: <BsKanban /> },
  { name: 'SCRUM', icon: <DiScrum /> },
  { name: 'CI/CD', icon: <SiVite /> }, // Placeholder
  { name: 'Agile Development', icon: <BsKanban /> },

  // Build Tools
  { name: 'Vite', icon: <SiVite /> },
];

const Skills: React.FC = () => (
  <ul className="skills-list">
    {skills.map((skill) => (
      <li key={skill.name} className="skill">
        <span className="skill-icon" aria-hidden="true">
          {skill.icon}
        </span>
        <span className="skill-label">{skill.name}</span>
      </li>
    ))}
  </ul>
);

export default Skills;
