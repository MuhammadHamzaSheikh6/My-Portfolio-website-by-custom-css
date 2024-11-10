'use client';
import "./skill.css";
import Image from 'next/image';
import { useState } from 'react';

interface Skill {
  logo: string;
  name: string;
  description: string;
}

const SkillCard: React.FC<Skill> = ({ logo, name, description }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="skill-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Front of the card (Logo) */}
      <div className={`skill-card-content ${isHovered ? 'skill-card-rotate-y' : ''}`}>
        <Image className="skill-logo" src={logo} alt="Logo" width={150} height={150} />
      </div>

      {/* Back of the card (Text) */}
      <div className={`skill-card-back ${isHovered ? '' : 'skill-card-rotate-y'}`}>
        <p className="skill-name">{name}</p>
        <p className="skill-description">{description}</p>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontEndSkills: Skill[] = [
    { logo: '/logo/html.png', name: 'HTML', description: 'Building structured, semantic, and accessible web content.' },
    { logo: '/logo/css.png', name: 'CSS', description: 'Designing responsive and visually appealing web layouts.' },
    { logo: '/logo/js.png', name: 'JavaScript', description: 'Creating interactive and dynamic web experiences.' },
    { logo: '/logo/ts.png', name: 'TypeScript', description: 'Writing maintainable, scalable code with type safety.' },
  ];

  const frameworksAndLibraries: Skill[] = [
    { logo: '/logo/Next.js.png', name: 'Next.js', description: 'Developing high-performance, SEO-optimized web applications.' },
    { logo: '/logo/Tailwind CSS.png', name: 'Tailwind CSS', description: 'Efficiently styling responsive, modern UI components.' },
  ];

  const tools: Skill[] = [
    { logo: '/logo/Figma.png', name: 'Figma', description: 'Turning design concepts into pixel-perfect web interfaces.' },
    { logo: '/logo/Git.png', name: 'Git', description: 'Managing version control and collaboration in software development.' },
  ];

  return (
    <div id="skill" className="skill-container">
      <h3 className="skill-header">Skills</h3>
      <span className="custom-line"></span>
      
      {/* Front-End Development Section */}
      <div className="skill-section">
        <h2 className="skill-title">Front-End Development</h2>
        <div className="flex-center">
          {frontEndSkills.map((skill, index) => (
            <SkillCard key={index} logo={skill.logo} name={skill.name} description={skill.description} />
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries Section */}
      <div className="skill-section">
        <h2 className="skill-title">Frameworks & Libraries</h2>
        <div className="flex-center">
          {frameworksAndLibraries.map((skill, index) => (
            <SkillCard key={index} logo={skill.logo} name={skill.name} description={skill.description} />
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="skill-section">
        <h2 className="skill-title">Tools</h2>
        <div className="flex-center">
          {tools.map((skill, index) => (
            <SkillCard key={index} logo={skill.logo} name={skill.name} description={skill.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
