import React from 'react'

const ContactComp = () => {
    return (
        <div id='Contact' className='max-w-[1040px] m-auto md:pl-20 p-5 py-16'>
            <style>{'body { background-color: #c8d9ee; }'}</style>
            <h1 className='pt-10 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
            <form action="https://getform.io/f/lajnzgva" method='POST' encType='multipart/form-data'>
                <div className='flex flex-col py-2'>
                        <label className='text-lg py-2'>Name: </label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-lg py-2'>Email: </label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email" />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-lg py-2'>Subject: </label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject" />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-lg py-2 flex flex-col'>Message: </label>
                   <textarea className='border-2 rounded-lg p-3 flex border-gray-300' name="message" id="message" rows="10"></textarea>
                </div>
                <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                    Send Message
                </button>


            </form>
        </div>
    )
}

export default ContactComp