import React from 'react'
import eagel from '../public/eagle.svg'
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
            <div style={backgroundStyle} className='h-96 w-full rounded-tr-[50px] rounded-tl-[50px]'>

            </div>
        </div>
    )
}


export default Footer