import { Instagram, Linkedin, MessageCircle, Twitter } from 'lucide-react'
import React from 'react'


const Header = () => {

    return (
        <div>
            <div className=' fixed top-0 left-0 bg-[#232120] h-[3.5rem] right-0 bottom-0 overflow-hidden z-1'></div>
            <div className='flex justify-center items-center'>
                <div className=' w-full max-w-[1200px] h-650 z-[2] items-center pt-1  flex justify-between hover:cursor-pointer'>
                    <div className='flex gap-2 text-white '>
                        <div className='flex h-5 w-6 overflow-hidden relative  justify-center items-center '>
                            <div className="relative pt-1 pb-1 group flex justify-center overflow-hidden h-full w-[50px] items-center  text-white">
                                <Linkedin className='h-4 w-4 absolute  transform translate-y-0  group-hover:translate-y-[-115%] transition-transform opacity-100 duration-400' />
                                <Linkedin className='h-4 w-4 absolute transform  translate-y-[110%]  group-hover:translate-y-[5%]  transition-transform duration-400  group-hover:opacity-100' />
                            </div>

                        </div>
                        <div className='flex h-5 w-6 overflow-hidden relative  justify-center items-center '>
                            <div className="relative pt-1 pb-1 group flex justify-center overflow-hidden h-full w-[50px] items-center  text-white">
                                <MessageCircle className='h-4 w-4 absolute  transform translate-y-0  group-hover:translate-y-[-115%] transition-transform opacity-100 duration-400' />
                                <MessageCircle className='h-4 w-4 absolute transform  translate-y-[110%]  group-hover:translate-y-[5%]  transition-transform duration-400  group-hover:opacity-100' />
                            </div>

                        </div>


                    </div>

                    <div className='flex w-[300px] h-6  overflow-hidden relative  justify-center items-center border-white'>
                        <div className="relative pt-1 pb-1 group flex justify-center overflow-hidden  items-center  text-white w-[295px] h-5">

                            <span className="absolute uppercase font-thunder-lc transform translate-y-0  group-hover:translate-y-[-115%] transition-transform opacity-100 duration-500">The most frequently asked question</span>
                            <span className="absolute uppercase font-thunder-lc transform  translate-y-[100%]  group-hover:translate-y-[5%]  transition-transform duration-500  group-hover:opacity-100    ">The most frequently asked question</span>

                        </div>
                    </div>

                    {/* <div>
                        <span className='font-thunder-lc uppercase  text-white '>The most frequently asked question</span>
                    </div> */}


                </div>
            </div>
        </div>
    )
}

export default Header