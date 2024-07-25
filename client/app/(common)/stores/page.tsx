import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock5, MapPinned, Scissors, Search, Star } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import Marquee from 'react-fast-marquee';


const bgimg = '/bg-paper-type.png';
const backgroundStyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};
const page = () => {
  return (
    <div style={backgroundStyle} className='flex overflow-hidden flex-col gap-8 pb-10 ' >
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
        <div className="absolute flex gap-4  w-[80%] top-2/3 left-1/2 transform -translate-x-1/2">
          <Select>
            <SelectTrigger className=" border-4 h-[100px] hover:bg-black w-[280px] p-2 flex justify-center items-center uppercase font-ShackletonTest text-xl bg-black/5 text-center  border-[#ffc719]">
              <SelectValue placeholder="select city" />
            </SelectTrigger>
            <SelectContent className='font-thunder-lc uppercase text-lg'>
              <SelectItem value="light" className='font-thunder-lc uppercase '>polasara</SelectItem>
              <SelectItem value="dark">k.s.nagar</SelectItem>
              <SelectItem value="system">buguda</SelectItem>
            </SelectContent>
          </Select>


          <div className=' p-2  group hover:bg-[#ffc719] transparent border-4 shadow-md w-[85%] h-[96px] border-[#ffc719] rounded-sm flex justify-center items-center'>
            <Search className='size-8 text-[#ffc719] group-hover:text-black' />
            <Input
              type="text"
              placeholder="Search for shops name..."
              className="px-4 py-2 text-2xl uppercase outline-none transparent group-hover:bg-[#ffc719] group-hover:text-black placeholder:text-white bg-black/5  text-white font-ShackletonTest  rounded-lg border-none w-full max-w-full"
            />
            <button className="relative inline-block px-6 py-3 h-[90%] w-40 text-black bg-white  rounded overflow-hidden ">
              <span className="relative group-hover:text-white font-ShackletonTest uppercase z-10">search</span>
              <div className="absolute inset-0 bg-black transition-transform duration-300 ease-out transform -translate-y-full group-hover:translate-y-0"></div>
            </button>
          </div>

        </div>
      </div>
      <div className='mt-7'>
        <div className=' w-full flex justify-center flex-col items-center gap-4-'>
          <span className='font-ShackletonTest uppercase text-center w-full '>come say g'day </span>
          <span className='uppercase font-thunder-lc text-[100px] leading-none flex'>get your <span className='ml-3 text-[#e7acce]'>desired shop</span></span>
          <span className='uppercase font-thunder-lc text-[100px] flex leading-none '>shop now</span>
        </div>
        <div className=' w-full flex flex-col gap-7 items-center justify-center'>
          <div>
            <Button className='transition-colors transition-bg transition-filter duration-200 ease-in-out text-white bg-black hover:bg-white filter hover:brightness-125' style={{
              transition: 'color .25s cubic-bezier(.165,.84,.44,1), background-color .25s cubic-bezier(.4,0,.2,1), filter .25s cubic-bezier(.4,0,.2,1)',
            }} >sort</Button>
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
          <div className='w-full max-w-[1250px]  flex justify-center items-center flex-wrap gap-3 '>
            <div className='w-[30%] rounded-2xl group  overflow-hidden h-[450px] border-4 border-[#3d3935] shadow-sm'>
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
                  <Link href='/stores/1'>
                    <div className="z-10 hover:scale-105 transition-all duration-500 hover:cursor-pointer active:scale-95 absolute top-[-27px] bg-[#ff671d] left-[18%] uppercase font-thunder-lc text-2xl border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-2/3 h-16 items-center justify-center flex">
                      click here
                      <span className="absolute h-full border-b-[8px] border-[#3d3935] left-0 top-[2px] w-full rounded-[32px]"></span>
                    </div>
                  </Link>


                </div>
                <div className='rounded-full  bottom-[50px] left-2 h-12 w-12 absolute flex items-center justify-center z-30 bg-white/20'>
                  <Scissors />
                </div>
                <Image src='/barber.jpg' height={200} width={200} className='active:scale-95  hover:scale-105 transition-all duration-500 flex h-full w-full hover:cursor-pointer' alt='barber' />
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