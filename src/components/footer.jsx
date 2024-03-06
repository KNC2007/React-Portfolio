import React from 'react';
import { FaLinkedin, FaGithub, FaChalkboardTeacher } from 'react-icons/fa';

const footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-400 sm:px-6 md:px-8 flex items-center justify-center w-screen h-14'>
      <div>
      <div className='flex items-center justify-center space-x-4'>
        <a href='https://www.linkedin.com/in/courtney-kt/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='cursor-pointer hover:text-white' size={30} />
        </a>
        <a href='https://github.com/KNC2007' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='cursor-pointer hover:text-white' size={30} />
        </a>
        <a href='https://de01903704.schoolwires.net/domain/709' target='_blank' rel='noopener noreferrer'>
          <FaChalkboardTeacher className='cursor-pointer hover:text-white' size={30} />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
