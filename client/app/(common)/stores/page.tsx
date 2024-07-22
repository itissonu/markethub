import { Button } from '@/components/ui/button';
import { Clock5, MapPinned, Scissors, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


const bgimg = '/bg-paper-type.png';
const backgroundStyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};
const page = () => {
  return (
    <div style={backgroundStyle} className='flex- flex-col gap-8' >
      <div className="relative text-center text-white">
        <video
          autoPlay
          loop
          muted
          className="w-full h-[70vh] object-cover"
        >
          <source src="/mrket.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2">
          <input
            type="text"
            placeholder="Search for shops..."
            className="px-4 py-2 text-lg rounded-lg border-none w-72 max-w-full"
          />
        </div>
      </div>
      <div className='mt-7'>
        <div className=' w-full flex justify-center flex-col items-center gap-4-'>
          <span className='font-ShackletonTest uppercase text-center w-full '>come say g'day</span>
          <span className='uppercase font-thunder-lc text-[100px] leading-none flex'>get your <span className='ml-3 text-[#e7acce]'>desired shop</span></span>
          <span className='uppercase font-thunder-lc text-[100px] flex leading-none '>shop now</span>
        </div>
        <div className=' w-full flex flex-col items-center justify-center'>
          <div>
            <Button>sort</Button>
          </div>
          <div className='w-full max-w-[1250px]  flex justify-center items-center flex-wrap gap-3 '>
            <div className='w-[30%] rounded-2xl  overflow-hidden h-[450px] border-4 border-[#3d3935] shadow-sm'>
              <div className='h-[55%] flex flex-col justify-between'>
                <div className=' flex  items-center justify-between p-4'>
                  <div className=' flex gap-1 items-center justify-center'>
                    <span className='uppercase font-bolf font-ShackletonTest text-xs'>rating </span>
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                  </div>
                  <div className='flex flex-col items-center justify-center gap-1'>
                    <span className='h-max w-max p-1 text-xs font-ShackletonTest rounded-md uppercase bg-[#96daea] text-[#3d3935]'>open</span>
                    <span className='font-DM-sans flex items-center justify-center uppercase text-xs text-gray-800'><Clock5 className='size-3 mr-2' />  9.30-05.30</span>
                  </div>
                </div>
                <div className=' flex flex-col  pb-12 '>
                  <span className='font-ShackletonTest text-lg font-bold text-center uppercase'> barber</span>
                  <div className='w-full justify-center flex'>
                    <MapPinned className='text-rose-900' />
                    <span className='font-ShackletonTest text-sm text-[#3d3935]'>polasara, near bus stand beside auto stand</span>
                  </div>
                  <span className='font-thunder-lc uppercase text-center text-2xl text-[#3d3935]'>maa ratani saloon</span>
                </div>
              </div>
              <div className=' h-[55%] border-t-4 relative border-[#3d3935] '>
                <div className=' w-full flex relative'>
                  <div className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer absolute top-[-27px] bg-[#ff671d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-2/3 h-16 items-center justify-center flex ' >
                    click here
                    <span className='absolute h-full border-b-[8px] border-[#3d3935] left-0 top-[2px] w-full rounded-[32px]'>
                    </span>
                  </div>

                </div>
                <div className='rounded-full  bottom-[50px] left-2 h-12 w-12 absolute flex items-center justify-center z-30 bg-white/20'>
                <Scissors />
                </div>
                <Image src='/barber.jpg' height={200} width={200} className='  flex h-full w-full' alt='barber' />
              </div>

            </div>
            <div className='w-[30%] h-[450px] overflow-hidden border-4 rounded-2xl border-[#3d3935] shadow-sm'>
              <div className='h-[55%] flex flex-col justify-between'>
                <div className=' flex  items-center justify-between p-4'>
                  <div className=' flex gap-1 items-center justify-center'>
                    <span className='uppercase font-bolf font-ShackletonTest text-xs'>rating </span>
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                  </div>
                  <div className='flex flex-col items-center justify-center gap-1'>
                    <span className='h-max w-max p-1 text-xs font-ShackletonTest rounded-md uppercase bg-[#96daea] text-[#3d3935]'>open</span>
                    <span className='font-DM-sans flex items-center justify-center uppercase text-xs text-gray-800'><Clock5 className='size-3 mr-2' />  9.30-05.30</span>
                  </div>
                </div>
                <div className=' flex flex-col  pb-12 '>
                <span className='font-ShackletonTest text-lg font-bold text-center uppercase'> fast food</span>
                  <div className='w-full justify-center flex'>
                    <MapPinned />
                    <span className='font-ShackletonTest text-sm text-[#3d3935]'>polasara, near bus stand beside auto stand</span>
                  </div>
                  <span className='font-thunder-lc uppercase text-center text-2xl text-[#3d3935]'>maa ratani saloon</span>
                </div>
              </div>
              <div className=' h-[55%] border-t-4 relative border-[#3d3935] '>
                <div className=' w-full flex relative'>
                  <div className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer absolute top-[-27px] bg-[#ff671d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-2/3 h-16 items-center justify-center flex ' >click here<span className='absolute h-full border-b-[8px] border-[#3d3935] left-0 top-[2px] w-full rounded-[32px]'>
                  </span></div>

                </div>
                <div className='rounded-full hover:bg-white duration-300 transition-all bottom-[50px] left-2 h-12 w-12 absolute flex items-center justify-center z-30 bg-white/20'>
                <Scissors />
                </div>
                <Image src='/fastfood.jpg' height={200} width={200} className='  flex h-full w-full' alt='barber' />
              </div>
            </div>
            <div className='w-[30%] h-[450px] overflow-hidden border-4 rounded-2xl border-[#3d3935] shadow-sm'>
              <div className='h-[55%] flex flex-col justify-between'>
                <div className=' flex  items-center justify-between p-4'>
                  <div className=' flex gap-1 items-center justify-center'>
                    <span className='uppercase font-bolf font-ShackletonTest text-xs'>rating </span>
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                  </div>
                  <div className='flex flex-col items-center justify-center gap-1'>
                    <span className='h-max w-max p-1 text-xs font-ShackletonTest rounded-md uppercase bg-[#96daea] text-[#3d3935]'>open</span>
                    <span className='font-DM-sans flex items-center justify-center uppercase text-xs text-gray-800'><Clock5 className='size-3 mr-2' />  9.30-05.30</span>
                  </div>
                </div>
                <div className=' flex flex-col  pb-12 '>
                  <div className='w-full justify-center flex'>
                    <MapPinned />
                    <span className='font-ShackletonTest text-sm text-[#3d3935]'>polasara, near bus stand beside auto stand</span>
                  </div>
                  <span className='font-thunder-lc uppercase text-center text-2xl text-[#3d3935]'>maa ratani saloon</span>
                </div>
              </div>
              <div className=' h-[55%] border-t-4  border-[#3d3935] '>
                <div className=' w-full flex relative'>
                  <div className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer absolute top-[-27px] bg-[#ff671d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-2/3 h-16 items-center justify-center flex ' >click here<span className='absolute h-full border-b-[8px] border-[#3d3935] left-0 top-[2px] w-full rounded-[32px]'>
                  </span></div>

                </div>
                <Image src='/foodtruck.jpg' height={200} width={200} className='  flex h-full w-full' alt='barber' />
              </div>
            </div>
            <div className='w-[30%] h-[450px] overflow-hidden border-4 rounded-2xl border-[#3d3935] shadow-sm'>
              <div className='h-[55%] flex flex-col justify-between'>
                <div className=' flex  items-center justify-between p-4'>
                  <div className=' flex gap-1 items-center justify-center'>
                    <span className='uppercase font-bolf font-ShackletonTest text-xs'>rating </span>
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                    <Star className=' text-yellow-600 size-3' />
                  </div>
                  <div className='flex flex-col items-center justify-center gap-1'>
                    <span className='h-max w-max p-1 text-xs font-ShackletonTest rounded-md uppercase bg-rose-500 text-[#dcd6d0]'>close</span>
                    <span className='font-DM-sans flex items-center justify-center uppercase text-xs text-gray-800'><Clock5 className='size-3 mr-2' />  9.30-05.30</span>
                  </div>
                </div>
                <div className=' flex flex-col  pb-12 '>
                  <div className='w-full justify-center flex'>
                    <MapPinned />
                    <span className='font-ShackletonTest text-sm text-[#3d3935]'>polasara, near bus stand beside auto stand</span>
                  </div>
                  <span className='font-thunder-lc uppercase text-center text-2xl text-[#3d3935]'>maa ratani saloon</span>
                </div>
              </div>
              <div className=' h-[55%] border-t-4  border-[#3d3935] '>
                <div className=' w-full flex relative'>
                  <div className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer absolute top-[-27px] bg-[#ff671d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-2/3 h-16 items-center justify-center flex ' >click here<span className='absolute h-full border-b-[8px] border-[#3d3935] left-0 top-[2px] w-full rounded-[32px]'>
                  </span></div>

                </div>
                <Image src='/icecream.jpg' height={200} width={200} className='  flex h-full w-full' alt='barber' />
              </div>
            </div>
            <div className='w-[30%] h-[450px] overflow-hidden border-4 rounded-2xl border-[#3d3935]  shadow-sm'>
              <div className='h-[55%]'>

              </div>
              <div className=' h-[55%]  border-t-4  border-[#3d3935]'>
                <div className=' w-full flex relative'>

                  <div className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer absolute top-[-27px] bg-[#ff671d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-2/3 h-16 items-center justify-center flex ' >click here<span className='absolute h-full border-b-[8px] border-[#3d3935] left-0 top-[2px] w-full rounded-[32px]'>
                  </span></div>
                </div>
                <Image src='/pastry.jpg' height={200} width={200} className='  flex h-full w-full' alt='barber' />
              </div>
            </div>
            <div className='w-[30%] h-[450px] overflow-hidden border-4 rounded-2xl border-[#3d3935] shadow-sm'>
              <div className='h-[55%]'>

              </div>
              <div className=' h-[55%] border-t-4  border-[#3d3935]  '>
                <div className=' w-full flex relative'>
                  <div className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer absolute top-[-27px] bg-[#ff671d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-2/3 h-16 items-center justify-center flex ' >click here<span className='absolute h-full border-b-[8px] border-[#3d3935] left-0 top-[2px] w-full rounded-[32px]'>
                  </span></div>

                </div>
                <Image src='/pharma.jpg' height={200} width={200} className='  flex h-full w-full' alt='barber' />
              </div>
            </div>

          </div>


        </div>
      </div>

    </div>

  )
}

export default page