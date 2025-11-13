import React from 'react';
import error from '../assets/error page.jpg'

const ErrorPage = () => {
    return (
        <div className='md:mt-10 bg-gray-200'>
            <img className='max-h-[600px] mx-auto' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;