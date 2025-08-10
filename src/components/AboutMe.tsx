import { useEffect, useState } from "react";
import fetcher from "./utils";
import profile from '../assets/profile.webp';

interface TextBlock {
  text: string;
  bold: boolean;
}

interface Award {
  text: string;
  bold: boolean;
  description: string;
}

interface ProfileData {
  summary: TextBlock[];
  contributions: string[];
  specialization: TextBlock[];
  work_style: TextBlock[];
  awards: Award[];
}


const AboutMe : React.FC = () =>{
    const defaultData:ProfileData = {
        summary:[],
        contributions:[],
        specialization:[],
        work_style:[],
        awards:[]
    } 
  const [aboutMe, setAboutMe] = useState<ProfileData>(defaultData);

  const fullUrl = 'https://raw.githubusercontent.com/ravi-kumar-rana0795/my-website-api/refs/heads/main/aboutMe.json';
  useEffect(()=>{
    fetcher<ProfileData>(fullUrl).then(setAboutMe).catch(console.error);
    console.log(aboutMe);
  },[])  
  return (
    <section id="about" className="flex-row px-5 py-10 md:px-20 py-10 ">
        <div className="flex-row"><h2 className='sectionHeader'> 👋 About Me</h2></div>
        <div className='flex flex-col-reverse md:flex-row'>
            <div className="flex flex-col justify-center py-10 mt-5">
                <span>
                    I'm a <span className='font-bold'>results-driven Software Engineer</span> with over <span className='font-bold'>7 years of experience</span> in backend and
                    full-stack development, with a strong focus on<span className='font-bold'> Java, Spring Boot, Microservices,</span> and <span className='font-bold'>distributed systems.</span><br />
                    I've contributed to the success and growth of major enterprise platforms including:<br />
                    <ul className="list-disc pl-5 m-2">
                        <li className='font-bold '>Bank of America (healthcare systems)</li>
                        <li className='font-bold'>IBM Automation Platform</li>
                        <li className='font-bold'> BlackRock Inc. (investment technology)</li>
                    </ul>
                    I specialize in building <span className='font-bold'>high-performance, scalable,</span> and <span className='font-bold'> secure applications</span> deployed in modern <span className='font-bold'> cloud environments</span> (AWS, Azure).<br />
                    I thrive in <span className='font-bold'>agile teams</span> and enjoy leading solutions that deliver real business impact.
                    <br/><br/>
                    My efforts have been consistently recognized through multiple awards,
                    including <span className='font-bold'>Outstanding Quarter Performer</span> for exceptional project delivery,
                    <span className='font-bold'>Performer of the Business (POTB)</span> for driving impactful business outcomes,
                    the <span className='font-bold'>On the Spot Award</span> for swift and effective problem-solving,
                    and the <span className='font-bold'>Technical Excellence Award </span>for demonstrating strong technical
                    expertise and innovation across projects.
                </span>
            </div>
            <div className="flex flex-col justify-center p-[0_10px] mt-5 md:mt-5">
                <img src={profile} className="w-[80%] border border-[#7a94db] rounded-full mx-auto md:w-[100%]" style={{boxShadow: '0px 0px 5px 5px'}}/>
            </div>
        </div>
    </section>
  );
}

export default AboutMe;