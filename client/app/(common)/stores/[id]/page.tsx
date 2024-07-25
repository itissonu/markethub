"use client"
import QRCodeComponent from '@/components/qrcodecomponent';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useRef } from 'react'
import QRCode from 'qrcode.react';
import { BadgePercent, Clock12, Locate, MapPinnedIcon, MessageCircleCode, Phone, ShoppingBag } from 'lucide-react';
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

  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        const context = canvas.getContext('2d');
        if (context) {
          // Draw additional content
          context.fillStyle = 'black';
          context.font = '16px Arial';
          context.fillText('Store Name: Example Store', 10, canvas.height - 40);
          context.fillText('Visit us at: http://example.com', 10, canvas.height - 20);
        }

        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = 'qrcode.png';
        a.click();
      }
    }
  }

  return (
    <div style={backgroundStyle} className='w-full items-center flex flex-col gap-6 overflow-hidden justify-center pt-11'>
      <div className=' w-full  flex justify-center items-center flex-col'  >
        <span className='font-serif text-[#201e1d] m-2 text-lg font-semibold'>Wanna buy something !</span>
        <span className='font-thunder-lc text-[#201e1d] text-[100px] uppercase leading-none '>
          Discover  our
        </span>
        <div className='w-[90%] h-[80vh] relative items-center justify-center flex '>
          <div className='absolute left-1/2 -translate-x-1/2 top-0 text-[100px] bg-[#f0ebe7] font-thunder-lc rounded-bl-3xl rounded-br-3xl text-[#201e1d] uppercase leading-none p-1 w-60 text-center '> <div style={cornerStyles} className='absolute left-[-64px] flex transparent bg-white/10 h-4 w-4 top-0 '></div>
            <div style={cornerStylesright} className='absolute right-[-80px] flex transparent bg-white/10 h-4 w-4 top-0 '></div>
            Shop
          </div>

          <Image height={200} width={200} src='/CLOSE-removebg-preview.png' alt='store image' className='h-[300px] w-[300px] rounded-[40px] absolute bottom-[-200px] animate-swing  shadow-sm ' />
          <Image height={500} width={500} src='/ai-img7.png' alt='store image' className='h-full w-full rounded-[40px] shadow-sm ' />

        </div>
      </div>
      <div className=' max-w-[1350px] w-full items-center justify-center flex gap-8 flex-col'>
        <div className=' flex gap-3 w-full'>
          <div className='w-[17%] border-r-2 border-black p-4 flex items-center justify-center  flex-col gap-4 '>
            <QRCodeComponent value='http://localhost:3000/stores/3' ref={qrRef} size={180} bgColor="#ffffff" fgColor="#000000" />
            {/* <div className=' w-full items-center justify-center flex'>
              <Button onClick={handleDownload} className=' uppercase '>Download</Button>
            </div> */}
            <div className=' w-full mb-7 mt-7 flex relative'>
              <div onClick={handleDownload} className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer absolute top-[-27px] bg-[#ff671d] left-[18%] uppercase font-thunder-lc text-2xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-[70%] h-16 items-center justify-center flex ' >
                download
                <span className='absolute h-full border-b-[8px] border-[#3d3935] left-0 top-[2px] w-full rounded-[32px]'>
                </span>
              </div>

            </div>
            <span className='text-center text-sm font-ShackletonTest font-bold text-[#3d3935] uppercase '>you can scan this code to get here</span>
          </div>
          <div className=' w-[55%] flex flex-col gap-2 p-4'>
            <div className=' flex gap-4 '>
              <span className=' font-thunder-lc text-2xl uppercase'>shop name :-</span>
              <span className='capitalize font-mono flex items-center justify-center'><ShoppingBag className='size-4 mr-1' />raja coldbar</span>
            </div>
            <div className=' flex gap-4 '>
              <span className=' font-thunder-lc text-2xl uppercase'>category:-</span>
              <span className='capitalize font-mono'> coldbar</span>
            </div>
            <div className=' flex gap-4 '>
              <span className=' font-thunder-lc text-2xl uppercase'>owner name :-</span>
              <span className='capitalize font-mono'>raja mohapatra</span>
            </div>
            <div>
              <div className='flex gap-4'>
                <span className=' font-thunder-lc text-2xl uppercase'>phone number :-</span>
                <span className='flex font-DM-sans items-center justify-center'><Phone className='size-4 mr-1' /> 9876987689</span>
              </div>
              <div className='flex gap-4 '>
                <span className=' font-thunder-lc text-2xl uppercase'>whatsapp number :-</span>
                <span className='flex items-center font-DM-sans justify-center'> <MessageCircleCode className='size-4 mr-1' />789987689</span>
              </div>
            </div>
            <div className=' flex gap-4 '>
              <span className=' font-thunder-lc text-2xl uppercase'>opening time :-</span>
              <span className='capitalize font-mono flex items-center justify-center'><Clock12 className='size-4 mr-1' />  09:30-05:30 </span>
            </div>
            <div className=' flex gap-4 '>
              <span className=' font-thunder-lc text-2xl uppercase'>location :-</span>
              <span className='capitalize font-mono flex items-center justify-center'>  <MapPinnedIcon className='size-4 mr-1' /> front to the union bank of india </span>
            </div>

          </div>
          <div className=' w-[27%] border-l-2 border-black p-3'>
            <span className='font-thunder-lc text-[50px] uppercase flex items-center justify-center leading-0'>offer board <BadgePercent className='size-10 m-2' /></span>
            <div className='h-60 w-[96%] border-[12px] border-[#ba835c] shadow-inner bg-[#289f66] p-2 '>
              <span className=' font-mono '> offer on cold reinks 10% </span>
            </div>
          </div>
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
        <div className='w-full justify-center items-center flex gap-4  flex-col'>
          <Button>menu</Button>
          <div className='w-full'>
            <span className='font-thunder-lc uppercase text-3xl'>Featured product</span>
            <div className="flex flex-wrap gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-[24%]"
                >
                  <Image
                    src='/icecream.jpg'
                    alt=''
                    height={200}
                    width={200}
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                  />
                  <div className=' flex justify-between w-full'>
                    <h3 className="text-lg font-semibold font-mono uppercase mb-2">ice cream</h3>
                    <span className="text-gray-700 flex mb-1"><p className="text-red-500 opacity-85 text-sm font-semibold w-full">(10%)</p>$34</span>
                  </div>

                </div>
              ))}
            </div>
          </div>
          <div className='w-full'>
            <div className='w-full'>
              <span className='font-thunder-lc uppercase p-2 text-3xl'>all products</span>
              <div className="flex flex-wrap gap-4">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white  p-4 border border-gray-200 rounded-3xl shadow-lg flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-[24%]"
                  >
                    <Image
                      src='/ai-img2.png'
                      alt=''
                      height={200}
                      width={200}
                      className="w-full h-40 object-cover mb-4 rounded-lg"
                    />
                    <div className=' flex justify-between w-full'>
                      <h3 className="text-lg font-semibold font-mono uppercase mb-2">ice cream</h3>
                      <span className="text-gray-700 flex mb-1"><p className="text-red-500 opacity-85 text-sm font-semibold w-full">(10%)</p>$34</span>
                    </div>
                    <p className="text-gray-600 font-mono w-full mb-1">Quantity: 1</p>
                    {/* <div className=' w-full mb-7 mt-7 flex relative'>
                      <div  className='z-10 hover:scale-105 transitopn-all duration-500 hover:cursor-pointer absolute top-[-27px] bg-[#a5d78d] left-[18%] uppercase font-thunder-lc text-xl  border-4 text-[#3d3935] border-[#3d3935] rounded-[32px] w-[50%] h-12 items-center justify-center flex ' >
                        buy
                        <span className='absolute h-full border-b-[8px] border-[#3d3935] left-0 top-[2px] w-full rounded-[32px]'>
                        </span>
                      </div>

                    </div> */}
                    <span className=' text-xs text-gray-600 font-ShackletonTest w-full'>product decsfodj jdjfjdjd gjhfjfjf djhdsh</span>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default page