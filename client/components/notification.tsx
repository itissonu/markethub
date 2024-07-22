import Image from 'next/image';
import React from 'react'
import notifimg from '../public/notif.jpg'
import { TrendingDown, TrendingUp } from 'lucide-react';
const bgimg = '/bg-paper-type.png';
const Notification = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={backgroundStyle} className='w-full flex flex-col gap-4 items-center justify-center pt-8 rounded-bl-[40px] rounded-br-[40px]' >
            <div className='flex w-[1200px] items-center justify-between'>
                <div className=' w-96 border-black border-dashed border-2'></div>
                <span className='text-[50px] font-thunder-lc uppercase font-bold text-[#222020]'>Notifications</span>
                <div className=' w-96 border-black border-dashed border-2'></div>
            </div>
            <div className='max-w-[1200px] w-full gap-11 flex '>

                <div className='flex w-1/2'>
                    <div className='h-[90%]   w-[80%] p-2 border-black border-2  items-center justify-center rounded-2xl shadow-md'>
                        <div className='h-[99%]  border-[#51a67a]  w-[99%] p-6 items-center border-4  border-dashed  justify-center rounded-2xl '>

                            <div className='w-[90%] h-14 border-b-[1px] items-center justify-between border-black  flex gap-2 p-1 group hover:bg-gray-200 '>

                                <span className='flex uppercase font-thunder-lc group-hover:scale-125 transition-all '>Momo</span>

                                <div className='flex items-center group-hover:scale-125 transition-all'>
                                    <span className='capitalize font-thunder-lc text-sm'>
                                        Tiffin store
                                    </span>
                                    <span className='capitalize font-thunder-lc text-sm  '>
                                        (Price Increased)
                                    </span>
                                    

                                </div>
                                <div className='flex  items-center font-thunder-lc text group-hover:scale-125 transition-all'>
                                    <span className='flex'>$54</span>
                                    <span className='text-xl flex'>/</span>
                                    <span className='opacity-55 flex line-through'>$67</span>
                                    <TrendingDown className='text-red-800 group-hover:scale-125 transition-all ' />
                                </div>
                                <span className=' text-xs font-thunder-lc'>9.30 pm</span>
                            </div>
                            <div className='w-[90%] h-14 border-b-[1px] items-center justify-between border-black  flex gap-2 p-1 '>

                                <span className='flex uppercase font-thunder-lc  '>Momo</span>

                                <div className='flex items-center'>
                                    <span className='capitalize font-thunder-lc text-sm'>
                                        Tiffin store
                                    </span>
                                    <span className='capitalize font-thunder-lc text-sm  '>
                                        (Price decreased)
                                    </span>
                                   

                                </div>
                                <div className='flex  items-center font-thunder-lc text'>
                                    <span className='flex'>$54</span>
                                    <span className='text-xl flex'>/</span>
                                    <span className='opacity-55 flex line-through'>$45</span>
                                    <TrendingUp className='text-green-600' />
                                </div>
                                <span className=' text-xs font-thunder-lc'>9.30 pm</span>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <Image src={notifimg} alt='notifiaction' className='h-full hover:scale-75 transition-all w-full rounded-full' />
                </div>
            </div>

        </div>
    )
}

export default Notification