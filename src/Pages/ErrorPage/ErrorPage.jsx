import React from 'react';
import errorImg from '../../assets/ErrorImg.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='pb-30'>
            <img className='flex justify-center mx-auto' src={errorImg} alt="" />
        
            <h1 className='font-bold text-6xl text-center'>Oops, page not found!</h1>
            <p className='mt-5 text-center font-semibold text-[#627382]'>The page you are looking for is not available.</p>
            <Link to='/'>
                <button className='btn text-white bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] flex justify-center mx-auto mt-5 px-8 rounded-lg'>Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;