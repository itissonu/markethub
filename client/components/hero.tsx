import React from 'react'
const bgimg = '/bg-paper-type.png';
import logo from '../public/sticker-peace .png'
import Image from 'next/image';
const Hero = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div>
            <div style={backgroundStyle} className='h-screen w-full justify-center flex  '>
                <div className='flex flex-col max-w-[1200px] w-full  items-center pt-10'>
                    <div className='flex justify-between items-center w-full '>
                        <span className='font-thunder-lc uppercase flex text-[180px] text-[#21211fe0]'>let's change</span>
                        <div className='h-[8rem] w-1/3 border-1 justify-between items-center flex p-2 outline-none bg-[#c7ed90] border-[#c7ed90] rounded-[100px]'>
                            <div>
                                fast food
                            </div>
                            <div>
                                <Image src={logo} alt='logo' className='h-14 w-10'/>
                                
                            </div>
                        </div>

                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero