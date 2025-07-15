import React, { useState, type MouseEventHandler } from 'react';
import './Experience.scss';

type ProjectDetails = {
  id: string;
  role: string;
  fromDate: string;
  toDate: string;
  company: string;
  bussiness: string;
  tasks: string[];
  assignments: string[];
  technologys: string[];
}
const Experience: React.FC = () => {
  const projects: ProjectDetails[] = [
    {
      id: '12',
      role: 'Java Full Stack Developer',
      fromDate: 'Jul, 2024',
      toDate: 'Present',
      company: 'Black Rock Inc.',
      bussiness: 'Investment technology',
      tasks: ['Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms'
      ],
      assignments: ['Global Library Searvice', 'Accounting Team'],
      technologys: ['Java', 'Spring Boot']
    },
    {
      id: '13',
      role: 'Java Full Stack Developer',
      fromDate: 'Jul, 2022',
      toDate: 'jul, 2024',
      company: 'IBM Automation',
      bussiness: 'Investment technology',
      tasks: ['Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms'
      ],
      assignments: ['Global Library Searvice', 'Accounting Team'],
      technologys: ['Java', 'Spring Boot']
    },
    {
      id: '14',
      role: 'Java Full Stack Developer',
      fromDate: 'Jul, 2020',
      toDate: 'Jul, 2022',
      company: 'Bank Of America.',
      bussiness: 'Investment technology',
      tasks: ['Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms'
      ],
      assignments: ['Global Library Searvice', 'Accounting Team'],
      technologys: ['Java', 'Spring Boot']
    },
    {
      id: '15',
      role: 'Java Full Stack Developer',
      fromDate: 'Jul, 2018',
      toDate: 'Jul, 2022',
      company: 'TCS Ignite.',
      bussiness: 'Investment technology',
      tasks: ['Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms',
        'Designed and developed scalable microservices and RESTful APIs for high-traffic, multi-region web platforms'
      ],
      assignments: ['Global Library Searvice', 'Accounting Team'],
      technologys: ['Java', 'Spring Boot']
    }
  ]

  const [active, setActive] = useState(projects[0].id);

  const onClickHander = (e:React.MouseEvent<HTMLLIElement>,id:string) =>{
    setActive(id);
  }
  return (
    <section id="experience">
      <div><h2 className='sectionHeader'>💼 Professional Experience</h2></div>
      <div className='container'>
        <div className='left'>
          <ul>
            {
              projects.map((item, idex) => (
                <li className={`${active === item.id ? 'active' : ''} card`} key={item.id} onClick={ (e)=> onClickHander(e,item.id)}>
                  <span className='role'>{item.role}</span>
                  <span> {item.company}({item.bussiness}) </span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='right' id="experienceContent">
          {
            projects.filter(e => e.id === active).map((item, idex) => (
              <div key={item.id}>
                <div className='title'>
                  <span className='role'>{item.role}</span>
                  <span className='role'>{item.fromDate} - {item.toDate} </span>
                </div>
                <div>
                  <span className='company'>{item.company}</span>
                </div>
                <div className='line'></div>
                <div>
                  <span className='role'>Details: </span>
                  <ul>
                    {
                      item.tasks.map((task, idx) => (
                        <li key={idx}>{task}</li>
                      ))
                    }
                  </ul>

                </div>
                <div>
                  <span className='role'>Projects: </span>
                  <div className='projects'>
                    <ul>
                      {
                        item.assignments.map((assignment, idx) => (
                          <li className='card' key={idx}>
                            {assignment}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div>
                  <span className='role'>Technology : </span>
                  <div className='projects'>
                    <ul>
                      {item.technologys.map((technology,idx) => (
                        <li className='card' key={idx}>
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  );
};


export default Experience;
