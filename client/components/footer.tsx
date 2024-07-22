import React from 'react'
import eagel from '../public/eagle.svg'
import Image from 'next/image';
import bg5 from '../public/red-circle-removebg-preview.png'
const bgimg = '/bg-paper-type.png';

const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const Footer = () => {
    return (
        <div className=' flex-flex-col  w-full gap-4'>
            <div className='h-60 w-full flex items-center justify-center'>
                <div className='max-w-[1200px] w-full font-thunder-lc flex justify-between gap-2  text-white'>
                    <div className='flex flex-col gap-3 uppercase '>
                        <span className='text-[60px] justify-center flex'>43</span>
                        <span className='text-3xl opacity-80'>Total shops</span>

                    </div>
                    <div className='flex flex-col gap-3 uppercase '>
                        <span className='text-[60px] justify-center flex'>4</span>
                        <span className='text-3xl opacity-80'>active user shops</span>
                    </div>
                    <div className='flex flex-col gap-3 uppercase '>
                        <span className='text-[60px] justify-center flex'>34</span>
                        <span className='text-3xl opacity-80'>Total shops active</span>
                    </div>
                </div>


            </div>
            <div style={backgroundStyle} className='min-h-[100vh] h-max w-full rounded-tr-[50px] flex pt-9 justify-center rounded-tl-[50px]'>
                <div className='max-w-[1200px] gap-[7rem] w-full flex-col flex '>
                    <div className='flex  gap-20 items-center h-max w-full'>
                        <span className='font-thunder-lc uppercase h-[230px] w-1/2 text-[#211f1e] flex text-[170px] leading-none'>got questions?</span>

                        <div className='flex w-1/2 gap-3'>
                            <div className='rounded-[100px] group bg-[#caf291] relative h-[130px] w-[80%] z-0 shadow-md'>
                                <Image src={eagel} alt='eagle' className='transform transition-transform duration-300 group-hover:-rotate-12 h-[200px] w-[200px] absolute top-[-12%] left-[-65px] z-10' />
                                <div className='flex w-[300px] h-6 overflow-hidden  justify-center items-center border-white absolute left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                                    <div className="relative pt-1 pb-1 group flex justify-center overflow-hidden items-center  w-[295px] text-xl h-8">
                                        <span className="absolute  font-thunder-lc transform translate-y-0 group-hover:translate-y-[-115%] transition-transform opacity-100 duration-500">
                                            shopcorner01@gmail.com
                                        </span>
                                        <span className="absolute  font-thunder-lc transform translate-y-[100%] group-hover:translate-y-[5%] transition-transform duration-500 group-hover:opacity-100">
                                            shopcorner01@gmail.com
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[20%] items-center justify-center '>
                                <Image src={bg5} alt='circle' className='h-[85%] w-[100%] transform transition-transform duration-300 hover:rotate-6' />
                            </div></div>

                    </div>
                    <div className=' flex gap-[3rem] w-full items-center'>
                        <div className='rounded-[100px] border-black border-2 bg-[#e4ddd6] flex items-center justify-center h-[130px]  w-[45%] z-0 shadow-sm '>
                            <div className='rounded-[100px] border-[4px]   h-[92%]  flex items-center justify-center w-[98%]  border-dashed border-[#078c4d] '>
                                <span className='text-3xl text-[#2c2928] font-DM-sans '>+91 9347896654</span>
                            </div>


                        </div>
                        <span className=' flex font-thunder-lc uppercase text-[150px] w-[55%] text-[#211f1e] '>pull the bell</span>

                    </div>
                    <div>
                        <div className="max-w-[1200px] mx-auto p-4">
                            <div className="flex justify-between items-center text-xl">
                                <div className="link">
                                    <div className="link-text relative pt-1 pb-1 group flex justify-center overflow-hidden items-center text-black w-[295px] h-5">
                                        <span className="absolute uppercase font-thunder-lc transform translate-y-0 group-hover:translate-y-[-115%] transition-transform opacity-100 duration-500">
                                            Code by Soumy
                                        </span>
                                        <span className="absolute uppercase font-thunder-lc transform translate-y-[100%] group-hover:translate-y-[5%] transition-transform duration-500 group-hover:opacity-100">
                                            Code by Soumy
                                        </span>
                                    </div>
                                </div>
                                <div className="text-center font-thunder-lc uppercase ">
                                    <h5>© The Town Troopers</h5>
                                </div>
                                <div className="text-center font-thunder-lc uppercase ">
                                    <h5>Term and condition</h5>
                                </div>
                                <div className="text-center font-thunder-lc uppercase ">
                                    <h5>privacy policy</h5>
                                </div>
                                <div className="text-center underline font-thunder-lc uppercase ">
                                    <h5>Twitter</h5>
                                </div>
                                <div className="text-center underline font-thunder-lc uppercase ">
                                    <h5>instagram</h5>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Footer