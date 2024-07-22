import Link from 'next/link';
import React from 'react'
const bgimg = '/bg-paper-type.png';
import logo from '../public/Your_paragraph_text-removebg-preview.png'
import Image from 'next/image';
import { Store } from 'lucide-react';
const Navbar = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={backgroundStyle} className="sticky top-0 left-0 w-full h-[5.5rem] z-50 rounded-tl-[40px] flex-col justify-center items-center  flex rounded-tr-[40px] " >
            <div className='max-w-[1200px] h-[90%] w-full  justify-center items-center m-0'>
                <div className=' items-center justify-between flex w-full h-[75%] mt-4  '>
                    <ul className='flex gap-24 overflow-hidden relative w-[600px] h-2/3 '>
                        <li className='uppercase group font-thunder-lc text-3xl relative  h-full text-black'>
                            <Link href='/stores' className='h-max w-max flex absolute transform translate-y-0  group-hover:translate-y-[-115%] transition-transform opacity-100 duration-700'><Store/> stores </Link>
                            <Link href='/stores' className='h-max w-max flex absolute transform  translate-y-[105%]  group-hover:translate-y-[5%]  transition-transform duration-700  group-hover:opacity-100'>stores</Link>
                        </li>
                        

                        <li className='uppercase group font-thunder-lc text-3xl relative  h-full text-black'>
                            <Link href='/notifications' className='h-max w-max flex absolute transform translate-y-0  group-hover:translate-y-[-115%] transition-transform opacity-100 duration-700'>notification</Link>
                            <Link href='/notifications'  className='h-max w-max flex absolute transform  translate-y-[105%]  group-hover:translate-y-[5%]  transition-transform duration-700  group-hover:opacity-100'>notification</Link>
                        </li>
                    </ul>
                    <div className='absolute left-[39%] h-max hover:cursor-pointer top-[-80px]'>
                      <Link href='/' className=''><Image src={logo} alt='logo' className='h-[40%] w-[50%]  transform transition-transform duration-300 hover:-rotate-6' /></Link>  
                    </div>
                    <ul className='flex gap-[7.5rem] overflow-hidden items-center justify-between relative w-[400px] h-2/3 '>
                        <li className='uppercase group font-thunder-lc text-3xl relative  h-full text-black'>
                            <Link href='/offers' className='h-max w-max flex absolute transform translate-y-0  group-hover:translate-y-[-115%] transition-transform opacity-100 duration-700'>offers%</Link>
                            <Link href='/offers' className='h-max w-max flex absolute transform  translate-y-[105%]  group-hover:translate-y-[5%]  transition-transform duration-700  group-hover:opacity-100'>offers%</Link>
                        </li>

                        <li className='uppercase group font-thunder-lc text-3xl relative  h-full text-black'>
                            <Link href='/' className='h-max w-max flex absolute transform translate-y-0  group-hover:translate-y-[-115%] transition-transform opacity-100 duration-700'>contact</Link>
                            <Link href='/' className='h-max w-max flex absolute transform  translate-y-[105%]  group-hover:translate-y-[5%]  transition-transform duration-700  group-hover:opacity-100'>contact</Link>
                        </li>
                        <li className='uppercase group font-thunder-lc text-3xl relative  h-full text-black border-black border-2 w-28 bg-[#fcb2d9] rounded-2xl '>
                            <Link href='/' className='h-max w-max flex absolute transform translate-y-0  group-hover:translate-y-[-115%] transition-transform left-[23%] top-[2px] opacity-100 duration-700'>signup</Link>
                            <Link href='/' className='h-max w-max flex absolute transform left-1/4 top-1  translate-y-[105%]  group-hover:translate-y-[5%]  transition-transform duration-700  group-hover:opacity-100'>signup</Link>
                        </li>
                    </ul>

                </div>
                

            </div>
            <div className='w-full pl-10 pr-10'>
                    <span className='border-2 flex w-full border-black'></span>
                </div>
        </div>
    )
}

export default Navbar