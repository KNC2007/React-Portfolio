import React from 'react';

const ProjectItem = ({ img, title, githubLink, deployedLink }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt={title} className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl tracking-wider text-black text-center'>{title}</h3>
        <div className='pb-2'>
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>GitHub</p>
          </a>
        </div>
        <div className=''>
          <a href={deployedLink} target='_blank' rel='noopener noreferrer'>
            <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>Deployed Application</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
