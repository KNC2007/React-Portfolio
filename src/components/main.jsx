import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const main = () => {
    return (
        <div id='main'>
            <style>{'body { background-color: #c8d9ee; }'}</style>
            <div className='w-full h-screen absolute top-0 left-0'>
                <img className=' object-right flex' src="../src/assets/CKT avatar website.png" alt="woman avatar weating sunglasses" />
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Courtney Kalbach Toland</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>

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
                        <h3 className='flex sm:text-2xl text-1xl pt-4 text-gray-800'>
                            Innovative Educator with a strong background in designing and delivering technology-integrated professional development sessions for teachers and adult learners. Proven ability to inspire educators to adopt technology, improving engagement and learning outcomes. Recently earned a Certificate in Full Stack Web Development from the University of Pennsylvania Coding Bootcamp, underscoring a commitment to mastering both front-end and back-end technologies. This achievement equips me to design comprehensive web solutions tailored to educational needs, facilitating interactive learning experiences.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default main