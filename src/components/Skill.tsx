import React from 'react';
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGitAlt, faJira, faReact } from '@fortawesome/free-brands-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons/faMicrochip';
import { faCode, faLeaf, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons/faAccusoft';
import SkillCard from './SkillCard';

type skillType = {
  name: string;
  logo: IconDefinition
}

const skills: skillType[] = [
  { name: 'OOP', logo: faJava },
  { name: 'Core Java', logo: faJava },
  { name: 'Advanced Java', logo: faJava },
  { name: 'Multithread & Concurrency', logo: faJava },
  { name: 'Collection Framework', logo: faJava },
  { name: 'Executor Framework', logo: faJava },
  { name: 'Spring Core', logo: faJava },
  { name: 'Spring MVC', logo: faJava },
  { name: 'Spring Boot', logo: faLeaf },
  { name: 'Spring Data JPA', logo: faLeaf },
  { name: 'Spring Security', logo: faLeaf },
  { name: 'Spring AOP', logo: faLeaf },
  { name: 'Spring Async', logo: faLeaf },
  { name: 'Spring JDBC & Transaction', logo: faLeaf },
  { name: 'Spring Cloud', logo: faLeaf },
  { name: 'Microservices Architecture', logo: faMicrochip },
  { name: 'Distributed Systems', logo: faLeaf },
  { name: 'Design Pattern', logo: faLeaf },
  { name: 'Rabbit MQ', logo: faLeaf },
  { name: 'Kafka', logo: faLeaf },
  { name: 'RDMS', logo: faReact },
  { name: 'MySQL', logo: faReact },
  { name: 'Oracle DB', logo: faReact },

  { name: 'Docker', logo: faLeaf },
  { name: 'Kubernetes', logo: faLeaf },
  { name: 'AWS', logo: faLeaf },
  { name: 'Azure', logo: faLeaf },
  { name: 'HTML', logo: faReact },
  { name: 'CSS', logo: faReact },
  { name: 'Bootstrap', logo: faReact },
  { name: 'Java Script', logo: faLeaf },
  { name: 'Ajax', logo: faLeaf },
  { name: 'Type Script', logo: faCode },
  { name: 'ReactJS', logo: faReact },
  { name: 'Elasticsearch', logo: faSearch },
  { name: 'AEM', logo: faAccusoft },
  { name: 'Git', logo: faGitAlt },
  { name: 'Jira', logo: faJira },
  { name: 'DevOps', logo: faReact },
  { name: 'CI/CD Pipeline', logo: faReact },


];

const Skill: React.FC = () => (
  <section id="skills" className='flex-row px-5 py-10 md:px-20 py-10'>
    <div className="flex-row">
      <h2 className='sectionHeader'>🧠 Skills</h2>
    </div>
    <div className="grid  py-10 mt-5">
      {skills.map((skill) => (
          <SkillCard icon={skill.logo} skillName={skill.name} />
      ))}
    </div>
  </section>
);

export default Skill;
