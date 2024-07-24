import { BadgePercent } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-10  flex-col items-center w-full bg-[#e5e0dd] justify-center'>
      <div className="h-[400px] w-full lg:h-[60vh] relative">
        <div className="absolute top-[30%] lg:top-1/2 z-10 left-[60%] transform -translate-x-1/2 w-[80%] lg:w-2/3">

        </div>
        <Image
         src="/offer.jpg"
          width={500}
          height={200}
          alt="price dashboard"
          className="contrast-50 lg:h-full opacity-80 h-1/2 object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-3 w-full justify-center items-center pt-4">
        <span className="font-thunder-lc leading-none text-[80px] text-black uppercase">
        Unlock Amazing 
          <span className="text-[#fbb2d8] ml-3"> Deals  </span>with Our
        </span>
        <span className="font-thunder-lc items-center text-[60px] leading-none flex text-black uppercase">
         Exclusive Offers!<BadgePercent  className='size-16'/>
        </span>
      </div>
      <div className='w-full max-h-[90vh] h-[90vh] relative items-center justify-center'>
        <Image src='/offer-sec.png' height={200} width={200} alt='' className='absolute left-[10%] top-0 h-[200px] w-[200px]'/>
        <div className='w-[40%] left-[30%]  rounded-2xl bg-white h-[90%] border-[#554b4b] border-4 justify-center  items-center flex absolute bottom-5'>
          <div className="w-[96%] h-[96%] overflow-y-auto p-4 flex gap-3 flex-col border-4 border-[#B43F3F] border-dashed rounded-2xl">
            {[...Array(10)].map((_, index) => (
              <div key={index} className='flex flex-col gap-1 mb-1 border-black border-b-[1px] p-2' >

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