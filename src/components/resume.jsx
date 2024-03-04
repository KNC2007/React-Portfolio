import React from 'react'
import Timeline from './Timeline';


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
    year: 2001,
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


const Resume = () => {
  return (
    <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Resume
      </h1>
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
  )
}

export default Resume