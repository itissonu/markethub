import React from 'react'
import Marquee from 'react-fast-marquee';

import img1 from '../public/ai-img1.png';
import img2 from '../public/ai-img2.png';
import img3 from '../public/ai-img3.png';
import img4 from '../public/ai-img4.png';
import img5 from '../public/ai-img5.png';
import img6 from '../public/ai-img6.png';
import img7 from '../public/ai-img7.png';
import img8 from '../public/ai-img8.png';
import img9 from '../public/ai-img-9.png';
import Image from 'next/image';
import star from '../public/star-removebg.png'
const bgimg = '/bg-paper-type.png';
const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};


const Marquees = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img4];

    return (
        <div style={backgroundStyle} className='rounded-[70px] min-h-[100vh] pt-40 pb-28 justify-center h-full '>
            <div className='w-full h-full '>
                <Marquee speed={50} gradient={false} >
                    {images.map((image, index) => (
                        <div key={index} style={{ padding: '0 20px' }}>
                            <Image
                                src={image}
                                alt={`Image ${index + 1}`}
                                width={index % 2 === 0 ? 400 : 250}
                                height={index % 2 === 0 ? 550 : 350}
                                className={`rounded-lg ${index % 2 === 0 ? 'large-image' : 'small-image'} hover:opacity-60 transition-all hover:border-white hover-border-2`}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className=' h-max w-full flex items-center justify-center relative '>
                <div className='flex flex-col absolute eft-1/2 top-1/2 -translate-x-[4%] -translate-y-1/2 transform transition-transform z-30'>
                    <span className='font-thunder-lc text-[60px] uppercase'>
                        Important message
                    </span>
                    <div className='w-full font-thunder-lc flex items-center justify-center'>
                        <span className=' flex w-72 text-lg'> Please always do check the notification board and offer dashboard,shopkeeper always changes product prices</span>
                       
                    </div>
                </div>
                <Image src={star} alt='star' className='h-2/3 w-2/3 flex items-center justify-center' />

            </div>
            <div className='w-full items-center justify-center flex flex-col pt-10'>
                <span className='text-[50px] font-thunder-lc  uppercase '>popular shop for you</span>
                <div className='w-full flex gap-4 p-3'>
                    <div className='w-1/3 h-[400px] rounded-3xl border-2 border-black  flex flex-col items-center shadow-md'>
                        <Image src={img3} alt='img' className='w-full h-2/3 rounded-tl-3xl rounded-tr-3xl' />
                        <div className='flex flex-col items-center justify-center w-2/3'>
                            <span className='font-thunder-lc uppercase text-[50px]'>Shop name</span>
                            <span className='text-xl font-thunder-lc'>Shop description this will come from the database</span>
                        </div>
                    </div>
                    <div className='w-1/3 h-[400px] rounded-3xl border-2 border-black  flex flex-col items-center shadow-md'>
                        <Image src={img7} alt='img' className='w-full h-2/3 rounded-tl-3xl rounded-tr-3xl' />
                        <div className='flex flex-col items-center justify-center w-2/3'>
                            <span className='font-thunder-lc uppercase text-[50px]'>Shop name</span>
                            <span className='text-xl font-thunder-lc'>Shop description this will come from the database</span>
                        </div>
                    </div>
                    <div className='w-1/3 h-[400px] rounded-3xl border-2 border-black  flex flex-col items-center shadow-md'>
                        <Image src={img6} alt='img' className='w-full h-2/3 rounded-tl-3xl rounded-tr-3xl' />
                        <div className='flex flex-col items-center justify-center w-2/3'>
                            <span className='font-thunder-lc uppercase text-[50px]'>Shop name</span>
                            <span className='text-xl font-thunder-lc'>Shop description this will come from the database</span>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Marquees