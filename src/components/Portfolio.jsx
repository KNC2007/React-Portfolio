import React from 'react'
import ProjectItem from './ProjectItem'
import weatherImg from '../assets/weather dashboard screenshot.png'
import jateImg from '../assets/JATE text editor.png'
import mapImg from '../assets/MapSS.png'
import cssPortImg from '../assets/portfolio screenshot 1.png'
import streamingImg from '../assets/streaming avail screenshot.png'
import blogImg from '../assets/tech blog homepage.png'

const links = [
  {
    githubWeather: 'https://github.com/KNC2007/WeatherDashboard',
    deployedWeather: 'https://knc2007.github.io/WeatherDashboard/'
  },
];

const Portfolio = () => {
  return (
    <div id='portfolio' className='max-w-[1040px] m-auto md:pl-20 p-5 py-16'>
         <style>{'body { background-color: #c8d9ee; }'}</style>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] pt-10'>Portfolio</h1>
        <p className='text-center py-8'>

        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
<ProjectItem img={weatherImg} title='Weather Dashboard' href='https://github.com/KNC2007/WeatherDashboard'/>
<ProjectItem img={jateImg} title='JATE Text Editor'/>
<ProjectItem img={mapImg} title='Map Journal'/>
<ProjectItem img={cssPortImg} title='HTML & CSS Portfolio'/>
<ProjectItem img={blogImg} title='Technology Blog'/>
<ProjectItem img={streamingImg} title='Streaming Availability App'/>
        </div>
    </div>
  )
}

export default Portfolio