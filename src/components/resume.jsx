import React from 'react'
import Timeline from './Timeline';
import ResumeCK from '../assets/Teacher Resume cnk - web.pdf'
import { FaReact, FaJs, FaHtml5, FaCss3, FaGithub, FaNodeJs, FaBootstrap, FaFigma } from 'react-icons/fa';


const history = [
  {
    year: 2024,
    title: 'Instructional Technology Coach',
    duration: '8 years - present',
    details: 'Develop in person and online professional development opportunities for all district staff members. Support Pre-K through twelfth grade teachers in creating blended learning classroom environments.'
  },
  {
    year: 2009,
    title: 'Fourth Grade Inclusive Classroom Teacher',
    duration: '7 years',
    details: 'Fourth grade team leader and member of the Building Leadership Team. Grant writer, recipient, and creator of the 1:1 iPad program in 4th grade. Led the Google Computer Science First after-school program. Co-leader of the PBS (Positive Behavior Supports) Team. Teacher of the Year at Richardson Park Elementary School in 2015.'
  },
];

const education = [
  {
    year: 2024,
    title: 'Full Stack Web Developer Certificate',
    details: 'Developed responsive websites and applications using HTML, CSS, JavaScript, and modern frameworks, along with server-side programming and database management, in preparation to build and deploy comprehensive web solutions from concept to completion.'
  },
  {
    year: 2021,
    title: 'Graduate Certificate in Digital Education',
    details: 'Constructed digital lessons and online learning experiences for teachers and students.'
  },
  {
    year: 2011,
    title: 'Master of Education in Reading',
    details: 'Certified Reading Specialist in Pennsylvania and Delaware. 4.0 GPA.'
  },
  {
    year: 2008,
    title: 'Bachelor of Science in Elementary Education K-6',
    details: 'Major: Elementary Education. Minor: Reading'
  },
];

const proficiencies =[
  {
    icon: <FaReact className='hover:text-white' size={40}/>,
    title: 'React',
  },
  {
    icon: <FaJs className='hover:text-white' size={40}/>,
    title: 'Javascript',
  },
  {
    icon: <FaHtml5 className='hover:text-white' size={40}/>,
    title: 'HTML5',
  },
  {
    icon: <FaCss3 className='hover:text-white' size={40}/>,
    title: 'CSS3',
  },
  {
    icon: <FaGithub className='hover:text-white' size={40}/>,
    title: 'Github',
  },
  {
    icon: <FaNodeJs className='hover:text-white' size={40}/>,
    title: 'NodeJs',
  },
  {
    icon: <FaBootstrap className='hover:text-white' size={40}/>,
    title: 'Bootstrap',
  },
  {
    icon: <FaFigma className='hover:text-white' size={40}/>,
    title: 'Figma',
  },
]


const Resume = () => {
  return (
    <main>
      <style>{'body { background-color: #c8d9ee; }'}</style>
      <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-10 py-16'>
        <h1 className='pt-1 text-4xl font-bold text-center text-[#001b5e]'>
          Resume
        </h1>
        <h2 className='p-6 text-2xl font-bold text-center text-[#001b5e]'>Work History</h2>
        {history.map((item, idx) => (
          <Timeline
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
      <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-10 py-16'>
        <h2 className='pb-6 text-2xl font-bold text-center text-[#001b5e]'>Education</h2>
        {education.map((item, idx) => (
          <Timeline
            key={idx}
            year={item.year}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
      <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-10 py-16'>
        <h2 className='pb-6 text-2xl font-bold text-center text-[#001b5e]'>Proficiencies</h2>
        {proficiencies.map((item, idx) => (
          <Timeline 
            key={idx}
            year={item.icon}
            title={item.title}
          />
        ))}
      </div>
      <div>
      <a className='flex justify-content-center items-center pb-20'
        href={ResumeCK}
        download="ResumeCK"
        target="_blank"
        rel="noreferrer"
      >
        <button className='bg-stone-600 hover:bg-blue-800 text-white font-bold py-2 px-4 border border-blue-800 rounded text-center'>Click here to download my full resume</button>
      </a>
      </div>
    </main>
  )
}

export default Resume