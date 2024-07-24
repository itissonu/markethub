import { Flame, History, LandPlot, Send, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-10  flex-col items-center w-full bg-[#e5e0dd] justify-center'>
      <div className="h-[400px] w-full lg:h-[60vh] relative">
        <div className="absolute top-[30%] lg:top-1/2 z-10 left-[60%] transform -translate-x-1/2 w-[80%] lg:w-2/3">
          {/* <span
            className="uppercase font-thunder-lc leading-none text-[#fbb12a] text-[40px] lg:text-[150px]"
            style={{
              textShadow:
                '#21211f 0px 0px 3px, #9ca3af 0px 0px 10px, #21211f 0px 0px 15px',
            }}
          >
            notification
          </span> */}
        </div>
        <Image
         
          src="/notification-img.jpg"
          width={500}
          height={200}
          alt="price dashboard"
          className="contrast-50 lg:h-full opacity-80 h-1/2 object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-3 w-full justify-center items-center pt-4">
        <span className="font-thunder-lc leading-none text-[80px] text-black uppercase">
          Stay Informed Get the
          <span className="text-[#fbb2d8] ml-3"> Latest Notifications </span>
        </span>
        <span className="font-thunder-lc text-[60px] leading-none text-black uppercase">
          and Updates Here
        </span>
      </div>
      <div className='w-full max-h-[90vh] h-[90vh] relative items-center justify-center'>
        <div className='w-[40%] left-[30%] rounded-2xl bg-white h-[90%] border-[#554b4b] border-4 justify-center  items-center flex absolute bottom-5'>
          <div className="w-[96%] h-[96%] overflow-y-auto p-4 flex gap-3 flex-col border-4 border-[#B43F3F] border-dashed rounded-2xl">
            {[...Array(10)].map((_, index) => (
              <div key={index} className='flex flex-col gap-1 mb-1 border-black border-b-[1px] p-2' >
                <div className='flex justify-between items-center'>
                  <span className=' uppercase text-2xl font-mono flex items-center justify-center'><LandPlot className='text-green-400' />paris bakery</span>
                  <div className='flex  items-center font-thunder-lc text'>
                    <span className='flex'>$54</span>
                    <span className='text-xl flex'>/</span>
                    <span className='opacity-55 flex line-through'>$45</span>
                    <TrendingUp className='text-green-600' />
                  </div>
                </div>
                <div className='flex justify-between items-center' >
                  <span className='font-mono text-xl '>product(Chow min)</span>
                  <div className=' flex gap-3 items-center justify-center'>

                    <span className='uppercase items-center flex font-thunder-lc text-red-700'><Flame className='text-red-700 size-4' /> new</span>

                    <span className='  font-thunder-lc items-center justify-center flex'><History className='opacity-75 size-5' />9.30 pm</span>
                  </div>
                </div>
                <span className='font-mono text flex items-center gap-2'>
                  <Send />MSG:- product price changed
                </span>
              </div>
            ))}

          </div>
        </div>
        <div className='h-1/4'>

        </div>
        <div className='h-[75%] flex flex-col bg-[#038a4a]'>


        </div>

      </div>
    </div>
  )
}

export default page