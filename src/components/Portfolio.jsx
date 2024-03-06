import React from 'react'
import ProjectItem from './ProjectItem'
import weatherImg from '../assets/weather dashboard screenshot.png'
import jateImg from '../assets/JATE text editor.png'
import mapImg from '../assets/MapSS.png'
import cssPortImg from '../assets/portfolio screenshot 1.png'
import streamingImg from '../assets/streaming avail screenshot.png'
import blogImg from '../assets/tech blog homepage.png'

const projects = [
  {
    title:'Weather Dashboard',
    img: weatherImg,
    githubLink: 'https://github.com/KNC2007/WeatherDashboard',
    deployedLink: 'https://knc2007.github.io/WeatherDashboard/'
  },
  {
    title:'JATE Text Editor',
    img: jateImg,
    githubLink: 'https://github.com/KNC2007/Text-Editor',
    deployedLink: 'https://pwa-text-editor-ckt.onrender.com/',
  },
  {
    title: 'Map Journal',
    img: mapImg,
    githubLink: 'https://github.com/OpalSnellneberger/City-Glimpse',
    deployedLink: 'https://city-glimpse-b7a1c6803ac1.herokuapp.com/',
  },
  {
    title: 'HTML & CSS Portfolio',
    img: cssPortImg,
    githubLink: 'https://github.com/KNC2007/portfolio',
    deployedLink: 'https://knc2007.github.io/portfolio/',
  },
  {
    title:'Technology Blog',
    img: blogImg,
    githubLink: 'https://github.com/KNC2007/Tech-Blog',
    deployedLink: 'https://tech-blog-ck-5e5580ca6f4a.herokuapp.com',
  },
  {
    title:'Streaming Availability App',
    img: streamingImg,
    githubLink: 'https://github.com/jeffch19/Find-a-movie',
    deployedLink: 'https://jeffch19.github.io/Find-a-movie/',
  },
];

const Portfolio = () => {
  return (
    <div id='portfolio' className='max-w-[1040px] m-auto md:pl-20 p-5 py-16'>
         <style>{'body { background-color: #c8d9ee; }'}</style>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] pt-10'>Portfolio</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
        </div>
    </div>
  )
}

export default Portfolio