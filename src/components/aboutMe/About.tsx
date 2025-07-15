import React from 'react';
import './About.scss';
import profile from '../../assets/profile.webp';


const About: React.FC = () => (
    <section id="about">
        <div><h2 className='sectionHeader'> 👋 About Me</h2></div>
        <div className='container'>
            <div>
                <span>
                    I'm a <span className='highlight'>results-driven Software Engineer</span> with over <span className='highlight'>7 years of experience</span> in backend and
                    full-stack development, with a strong focus on<span className='highlight'> Java, Spring Boot, Microservices,</span> and <span className='highlight'>distributed systems.</span><br />
                    I've contributed to the success and growth of major enterprise platforms including:<br />
                    <ul>
                        <li className='highlight'>Bank of America (healthcare systems)</li>
                        <li className='highlight'>IBM Automation Platform</li>
                        <li className='highlight'> BlackRock Inc. (investment technology)</li>
                    </ul>
                    I specialize in building <span className='highlight'>high-performance, scalable,</span> and <span className='highlight'> secure applications</span> deployed in modern <span className='highlight'> cloud environments</span> (AWS, Azure).<br />
                    I thrive in <span className='highlight'>agile teams</span> and enjoy leading solutions that deliver real business impact.
                    <br/><br/>
                    My efforts have been consistently recognized through multiple awards,
                    including <span className='highlight'>Outstanding Quarter Performer</span> for exceptional project delivery,
                    <span className='highlight'>Performer of the Business (POTB)</span> for driving impactful business outcomes,
                    the <span className='highlight'>On the Spot Award</span> for swift and effective problem-solving,
                    and the <span className='highlight'>Technical Excellence Award </span>for demonstrating strong technical
                    expertise and innovation across projects.
                </span>
            </div>
            <div>
                <img src={profile} />
            </div>
        </div>
    </section>
);

export default About;
