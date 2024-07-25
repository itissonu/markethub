import { BadgePercent } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee';
const bgimg = '/bg-paper-type.png';
const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const colorLightRGB = '242, 237, 233';
const colorLight = `rgba(${colorLightRGB}, 1)`;

const cornerStyles = {
    left: '0px',
    width: '40px',
    height: '40px',
    backgroundColor: 'transparent',
    transform: 'translate(-100%, 0%) rotate(90deg)',
    backgroundImage: `radial-gradient(circle at 100% 100%, transparent 40px, ${colorLight} calc(40px + 0.5px))`,
};
const cornerStylesright = {

    width: '40px',
    height: '40px',
    backgroundColor: 'transparent',
    transform: 'translate(-100%, 0%) rotate(0deg)',
    backgroundImage: `radial-gradient(circle at 100% 100%, transparent 40px, ${colorLight} calc(40px + 0.5px))`,
};
const page = () => {
    return (
        <div style={backgroundStyle} className='w-full overflow-hidden flex flex-col gap-8 justify-center items-center pt-10'>
            <div className=' w-full  flex justify-center items-center flex-col'  >
                <span className='font-serif text-[#201e1d] m-2 text-lg font-semibold'>Wanna buy something !</span>
                <span className='font-thunder-lc text-[#201e1d] text-[100px] uppercase leading-none '>
                    Discover  our
                </span>
                <div className='w-[90%] h-[80vh] relative items-center justify-center flex '>
                    <div className='absolute left-1/2 -translate-x-1/2 top-0 text-[100px] bg-[#f0ebe7] font-thunder-lc rounded-bl-3xl rounded-br-3xl text-[#201e1d] uppercase leading-none p-1 w-60 text-center '> <div style={cornerStyles} className='absolute left-[-64px] flex transparent bg-white/10 h-4 w-4 top-0 '></div>
                        <div style={cornerStylesright} className='absolute right-[-80px] flex transparent bg-white/10 h-4 w-4 top-0 '></div>
                        Menu
                    </div>


                    <Image height={500} width={500} src='/menu.jpg' alt='store image' className='h-full w-full rounded-[40px] shadow-sm ' />

                </div>
            </div>
            <div className=' flex flex-col gap-1 w-full justify-center items-center'>
                <span className=' font-thunder-lc text-[100px] uppercase flex  leading-none'>
                    Discover the  <span className='text-[#ff5c35] ml-2'>taste of </span>
                </span>
                <span className='text-[100px] font-thunder-lc  uppercase flex leading-none'>
                    excellence
                </span>
            </div>
            <div className=' bg-[#ffc719] p-2 '>

                <Marquee speed={50} gradient={false} >
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className='font-thunder-lc text-3xl ml-3 mr-3 uppercase'>
                            the town troops
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className=' max-w-[1350px] w-full items-center justify-center flex gap-8 flex-col'>
                <div className='flex gap-3 w-full'>
                    <div className='w-[65%] flex-col p-8 flex gap-4  '>
                        <div className=' flex border-4 border-black border-b-8 rounded-3xl justify-between  p-4 h-max  items-center  w-full gap-7 '>
                            {/* <div className='h-10 w-10 border-8 border-black shadow-md'>1</div> */}

                            <div className='font-thunder-lc text-[40px] '>
                                <span className='font-thunder-lc text-3xl'>1.</span>chowmin</div>
                            <span className=' font-2xl font-mono'>1 plate X $34 = $34</span>


                            <div className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer active:scale-95 border-b-[10px] hover:bg-[#9bdb7d] bg-[#a5d78d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-40 h-16 items-center justify-center flex ' >
                                add to cart

                            </div>

                        </div>
                        <div className=' flex border-4 border-black border-b-8 rounded-3xl justify-between  p-4 h-max  items-center  w-full gap-7 '>
                            {/* <div className='h-10 w-10 border-8 border-black shadow-md'>1</div> */}

                            <div className='font-thunder-lc text-[40px] '>
                                <span className='font-thunder-lc text-3xl'>1.</span>chowmin</div>
                            <span className=' font-2xl font-mono'>1 plate X $34 = $34</span>


                            <div className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer active:scale-95 border-b-[10px] bg-[#a5d78d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-40 h-16 items-center justify-center flex ' >
                                add to cart

                            </div>

                        </div>
                        <div className=' flex border-4 border-black border-b-8 rounded-3xl justify-between  p-4 h-max  items-center  w-full gap-7 '>
                            {/* <div className='h-10 w-10 border-8 border-black shadow-md'>1</div> */}

                            <div className='font-thunder-lc text-[40px] '>
                                <span className='font-thunder-lc text-3xl'>1.</span>chowmin</div>
                            <span className=' font-2xl font-mono'>1 plate X $34 = $34</span>


                            <div className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer active:scale-95 border-b-[10px] bg-[#a5d78d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-40 h-16 items-center justify-center flex ' >
                                add to cart

                            </div>

                        </div>
                        <div className=' flex border-4 border-black border-b-8 rounded-3xl justify-between  p-4 h-max  items-center  w-full gap-7 '>
                            {/* <div className='h-10 w-10 border-8 border-black shadow-md'>1</div> */}

                            <div className='font-thunder-lc text-[40px] '>
                                <span className='font-thunder-lc text-3xl'>1.</span>chowmin</div>
                            <span className=' font-2xl font-mono'>1 plate X $34 = $34</span>


                            <div className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer active:scale-95 border-b-[10px] bg-[#a5d78d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-40 h-16 items-center justify-center flex ' >
                                add to cart

                            </div>

                        </div>
                    </div>
                    <div className='w-[35%] flex-col flex gap-4'>
                        <span className='font-thunder-lc text-[50px] uppercase flex items-center justify-center leading-0'>menu board <BadgePercent className='size-10 m-2' /></span>
                        <div className='h-96 w-[96%] border-[12px] border-[#ba835c] shadow-inner  flex flex-col bg-[#289f66] p-6 '>
                            <span className=' font-mono '> 1.chowmin </span>
                            <span className=' font-mono '> 2.pakoda (chicken) </span>
                            <span className=' font-mono '> 3. chicken soup </span>
                            <span className=' font-mono '> 4.offer on cold reinks 10% </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default page