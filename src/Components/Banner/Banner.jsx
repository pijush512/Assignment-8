import React from 'react';
import playStoreImg from '../../assets/playStoreImg.png'
import appStoreImg from '../../assets/appStoreImg.png'
import iPhoneImg from '../../assets/Iphone.png'


const Banner = () => {
    return (
        <div>
            <h1 className='mt-12 text-6xl font-bold text-center'>We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p className='mt-5 mb-9 text-center font-semibold text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex justify-center gap-5'>
                <a href="https://play.google.com/store/games?hl=en" target='blank'>
                    <button className='btn px-8'>
                        <img src={playStoreImg} alt="" />
                        Google Play</button>
                </a>
                <a href="https://www.apple.com/app-store/" target='blank'>
                    <button className='btn px-8'>
                        <img src={appStoreImg} alt="" />
                        App Store</button>
                </a>
            </div>
            <div className='flex justify-center mt-10'>
                <img src={iPhoneImg} alt="" />
            </div>
        </div>
    )
};

export default Banner;