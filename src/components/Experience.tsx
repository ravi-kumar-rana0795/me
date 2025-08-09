import React, { useState } from 'react';
import useIsSmallScreen from './useIsSmallScreen';

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
            assignments: ['Global Library Searvice', 'Accounting Team', 'Global Library Searvice', 'Accounting Team', 'Global Library Searvice', 'Accounting Team', 'Global Library Searvice', 'Accounting Team'],
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
    const isSmall = useIsSmallScreen();

    const onClickHander = (e: React.MouseEvent<HTMLElement>, id: string) => {
        setActive(id);
    }
    return (
        <section id="experience" className='flex-row px-5 py-10 md:px-20 py-10'>
            <div className="flex-row"><h2 className='sectionHeader'>💼 Professional Experience</h2></div>
            <div className={`flex flex-column ${isSmall ? 'flex-wrap' : ''} py-10 mt-5`}>
                {
                    !isSmall && (<div className='w-full md:w-[30%]'>
                        {
                            projects.map((item) => (
                                <div className={`min-w border-2 border-white-200 rounded-lg shadow-md p-2 m-2 hover:bg-[#1f5886a3] shadow-[0px_0px_11px_5px_lightgrey] ${active === item.id ? 'bg-[#1f5886]' : ''}`} key={item.id} onClick={(e) => onClickHander(e, item.id)}>
                                    <span className='font-bold'>{item.role}</span>
                                    <span> {item.company}({item.bussiness}) </span>
                                </div>
                            ))
                        }
                    </div>)
                }

                {
                    !isSmall && projects.filter(e => e.id === active).map((item) => (
                        <div className='w-full md:w-[70%] rounded-lg shadow-md p-4 m-2' style={{ boxShadow: '#d3d3d3 0 0 11px 5px' }} id="experienceContent">
                            <div key={item.id}>
                                <div className='flex flex-column justify-between'>
                                    <span className='font-bold'>{item.role}</span>
                                    <span className='font-bold'>{item.fromDate} - {item.toDate} </span>
                                </div>
                                <div>
                                    <span className='company'>{item.company}</span>
                                </div>
                                <div className='line'></div>
                                <div>
                                    <span className='font-bold'>Details: </span>
                                    <ul className='list-disc pl-5 m-2'>
                                        {
                                            item.tasks.map((task, idx) => (
                                                <li className='list-disc' key={idx}>{task}</li>
                                            ))
                                        }
                                    </ul>

                                </div>
                                <div>
                                    <span className='font-bold'>Projects: </span>
                                    <div className='flex flex-column gap-2 flex-wrap m-2'>

                                        {
                                            item.assignments.map((assignment, idx) => (
                                                <div className='max-w-sm border border-white rounded px-2 py-1' key={idx}>
                                                    {assignment}
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                                <div>
                                    <span className='font-bold'>Technology : </span>
                                    <div className='flex flex-column gap-2 flex-wrap m-2'>
                                        {item.technologys.map((technology, idx) => (
                                            <div className='max-w-sm border border-white rounded px-2 py-1' key={idx}>
                                                {technology}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/* // for small screen */}

                {
                    isSmall && projects.map((item) => (
                        <div className='max-w rounded-lg shadow-md p-4 m-2' style={{ boxShadow: '#d3d3d3 0 0 11px 5px' }} id="experienceContent">
                            <div key={item.id}>
                                <div className='flex flex-column justify-between'>
                                    <span className='font-bold'>{item.role}</span>
                                    <span className='font-bold'>{item.fromDate} - {item.toDate} </span>
                                </div>
                                <div>
                                    <span className='company'>{item.company}</span>
                                </div>
                                <div className='line'></div>
                                <div>
                                    <span className='font-bold'>Details: </span>
                                    <ul className='list-disc pl-5 m-2'>
                                        {
                                            item.tasks.map((task, idx) => (
                                                <li className='list-disc' key={idx}>{task}</li>
                                            ))
                                        }
                                    </ul>

                                </div>
                                <div>
                                    <span className='font-bold'>Projects: </span>
                                    <div className='flex flex-column gap-2 flex-wrap m-2'>

                                        {
                                            item.assignments.map((assignment, idx) => (
                                                <div className='max-w-sm border border-white rounded px-2 py-1' key={idx}>
                                                    {assignment}
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                                <div>
                                    <span className='font-bold'>Technology : </span>
                                    <div className='flex flex-column gap-2 flex-wrap m-2'>
                                        {item.technologys.map((technology, idx) => (
                                            <div className='max-w-sm border border-white rounded px-2 py-1' key={idx}>
                                                {technology}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </section>
    );
};


export default Experience;
