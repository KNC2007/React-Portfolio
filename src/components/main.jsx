import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import 'animate.css'
import avatarImage from '../assets/CKT avatar website.png'

const Main = () => {
    return (
        <div id='main' className='aboutMe-container flex flex-wrap items-top justify-center'>
            <style>{'body { background-color: #c8d9ee; }'}</style>
            <div className='text-wrapper md:w-1/2 lg:w-1/2 justify-center'>
                <div className='max-w-[700px] m-auto h-full w-full'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Courtney Kalbach Toland</h1>
                    <h2 className='sm:text-3xl text-2xl pt-4 text-gray-800'>

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Full Stack Developer',
                                1000,
                                'Instructional Technologist',
                                1000,
                                'Coder',
                                1000,
                                'Teacher',
                                1000
                            ]}
                            wrapper="div"
                            speed={50}
                            cursor={true}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div>
                        <p className='sm:text-2xl text-1xl pt-4 text-gray-800'>
                            Innovative Educator with a strong background in designing and delivering technology-integrated professional development sessions for teachers and adult learners. Proven ability to inspire educators to adopt technology, improving engagement and learning outcomes. Recently earned a Certificate in Full Stack Web Development from the University of Pennsylvania Coding Bootcamp, underscoring a commitment to mastering both front-end and back-end technologies. This achievement equips me to design comprehensive web solutions tailored to educational needs, facilitating interactive learning experiences.
                        </p>
                    </div>
                </div>
            </div>
            <div className='avatarPic flex-shrink md:w-1/2 lg:w-1/3'>
                <img id='avatar' className='animate__animated animate__jackInTheBox' src={avatarImage} alt="woman avatar weating sunglasses" />
            </div>
        </div>
    )
}

export default Main