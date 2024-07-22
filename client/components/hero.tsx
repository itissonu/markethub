"use client"
import React, { useEffect, useState } from 'react'
const bgimg = '/bg-paper-type.png';
import logo from '../public/sticker-peace .png'
import heroimg from '../public/beautiful-street-market-sunset.jpg'
import greenlogo from '../public/green-logo.png'
import Image from 'next/image';

const Hero = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
   
    const titleSize = 'clamp(5em, 7.5vw, 7.5em)';
    const borderRadius = `calc(${titleSize} * 0.4)`;
    const colorLightRGB = '242, 237, 233';
    const colorLight = `rgba(${colorLightRGB}, 1)`;

    const cornerStyles = {
        left: '-0px',
        width: borderRadius,
        height: borderRadius,
        backgroundColor: 'transparent',
        transform: 'translate(-100%, 0%) rotate(90deg)',
        backgroundImage: `radial-gradient(circle at 100% 100%, transparent ${borderRadius}, ${colorLight} calc(${borderRadius} + 0.5px))`,
    };
  
    const [scrollY, setScrollY] = useState(0);


    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const rotation = scrollY * 0.1;


    const imageStyle = {
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.2s ease-out',
    };


    return (
        <div>
            <div style={backgroundStyle} className='h-auto w-full justify-center flex  pt-20 flex-col items-center '>
                <div className='flex flex-col max-w-[1200px] w-full  items-center pt-10'>
                    <div className='flex justify-between items-center max-h-max h-[150px]  w-full '>
                        <span className='font-thunder-lc uppercase flex text-[120px] lg:text-[180px] text-[#21211fe0]'>let's change</span>
                        <div className='h-[8rem] w-1/3 border-1 justify-between items-center flex p-10 outline-none bg-[#c7ed90] border-[#c7ed90] rounded-[100px]'>
                            <span className='text-3xl font-thunder-lc font-bold h-max '>
                                Now finding a shop is easy
                            </span>
                            <div>
                                <Image src={logo} alt='logo' className='h-14 w-10 transition-transform duration-1000 hover:animate-tornado' />

                            </div>
                        </div>

                    </div>

                </div>
                <div className='w-full relative mb-14 '>
                    <div style={backgroundStyle} className='absolute right-[4.5rem] flex rounded-bl-3xl rounded-br-3xl  w-[44%] h-[150px] lg:h-[200px] z-2'>
                        <div style={cornerStyles} className='absolute left-[-64px] flex transparent bg-white/10 h-16 w-16 '></div>

                        <span className='font-thunder-lc uppercase flexn lg:h-[200px] text-[120px] lg:text-[180px] text-[#21211fe0] pl-12 pb-9 '>business!</span>
                    </div>
                    <div className='w-full justify-center flex items-center '>
                        <Image src={heroimg} alt='heroimg' className='h-[510px] w-[84%] lg:w-[90%] flex rounded-[50px]' />
                    </div>

                </div>
                <div className='flex max-w-[1225px] w-full '>
                    <div className='w-1/2 flex flex-col items-center justify-center '>
                    <span className='flex text-[50px] font-thunder-lc  '>how it will help you</span>
                        <Image src={greenlogo} style={imageStyle} className='h-[92%] w-[25%]' alt='greenlogo' />
                    </div>
                    <div className='w-1/2'>
                        <span className='text-lg font-thunder-lc text-[#8b8785] '>
                        Welcome to TOWNTROOPS your ultimate local shop directory and offer aggregator. Explore a comprehensive list of shops and businesses in your area, including fast food joints, restaurants, and more. Our platform provides real-time updates on product prices and offers, ensuring you never miss a deal. View detailed shop locations, browse menus, and stay informed about the latest discounts and special offers. Discover and enjoy the best local shopping experience with TOWBRROOPS
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero