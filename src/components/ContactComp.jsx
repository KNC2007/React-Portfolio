import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function ContactComp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'subject') {
            setSubject(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const errors = {};
        if (!name.trim()) {
            errors.name = 'Name is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            errors.email = 'Invalid email format';
        }
        if (!subject.trim()) {
            errors.subject = 'Subject is required';
        }
        if (!message.trim()) {
            errors.message = 'Message is required';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
    };

    return (
        <div id='Contact' className='max-w-[1040px] m-auto md:pl-20 p-5 py-16'>
            <style>{'body { background-color: #c8d9ee; }'}</style>
            <h1 className='pt-10 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
            <form onSubmit={handleFormSubmit}>
                <div className='flex flex-col py-2'>
                    <label className='text-lg py-2'>Name: </label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type="text"
                        name='name'
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Name"
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-lg py-2'>Email: </label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-lg py-2'>Subject: </label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                    />
                    {errors.subject && <p className="error-text">{errors.subject}</p>}
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-lg py-2 flex flex-col'>Message: </label>
                    <textarea
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        name="message"
                        id="message"
                        rows="10"
                        value={message}
                        onChange={handleInputChange}
                        placeholder="Message"
                    ></textarea>
                    {errors.message && <p className="error-text">{errors.message}</p>}
                </div>
                <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg' type="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactComp;
