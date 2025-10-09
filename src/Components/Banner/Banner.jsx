import React from 'react';
import playStoreImg from '../../assets/playStoreImg.png'
import appStoreImg from '../../assets/appStoreImg.png'
import iPhoneImg from '../../assets/Iphone.png'
import Cards from '../Cards/Cards';


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
            <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] '>
                <h1 className='text-center font-bold py-10 text-4xl text-white'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-around items-center'>
                    <div className='text-white pb-10 flex flex-col items-center justify-center'>
                        <p className='text-xl'><small>Total Downloads</small></p>
                        <h1 className='text-6xl font-bold'>29.6M</h1>
                        <p className='text-xl '><small>21% more than last month</small></p>
                    </div>

                    <div className='text-white pb-10 flex flex-col items-center justify-center'>
                        <p className='text-xl'><small>Total Downloads</small></p>
                        <h1 className='text-6xl font-bold'>29.6M</h1>
                        <p className='text-xl '><small>21% more than last month</small></p>
                    </div>

                    <div className='text-white pb-10 flex flex-col items-center justify-center'>
                        <p className='text-xl'><small>Total Downloads</small></p>
                        <h1 className='text-6xl font-bold'>29.6M</h1>
                        <p className='text-xl '><small>21% more than last month</small></p>
                    </div>
                </div>
            
            </div>
        </div>

      
    )
};

export default Banner;