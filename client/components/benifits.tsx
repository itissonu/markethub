import { CircleCheck, CircleCheckBig, Drum } from 'lucide-react';
import React from 'react'

const bgimg = '/grain-bg-black.png';
import shop from '../public/SHOP-KEEPER-removebg-preview.png'
import Image from 'next/image';
import { Button } from './ui/button';
const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const Benifits = () => {
    return (
        <div style={backgroundStyle} className=' w-full justify-center items-center flex flex-col'>
            <div className=' w-full items-center justify-center text-white flex flex-col uppercase font-thunder-lc text-[60px]'>
                <span className='flex'><span className='text-[#c9f190] mr-4'>benifits</span> of using</span>
                <span> town troops</span>
            </div>
            <div className='max-w-[1200px] w-full flex gap-5 items-center justify-center  '>

                <div className='w-1/2 relative h-[95vh]'>
                    <Image src={shop} alt='shop' className='h-1/4 w-1/4 absolute right-[-116px] top-[-60px] z-10' />
                    <div className='h-[90%]   w-[95%] p-2 border-black border-2 bg-[#efeae6] items-center justify-center rounded-2xl shadow-md'>
                        <div className='h-[99%]  border-[#51a67a]  w-[99%] p-6 items-center border-2  border-dashed  justify-center rounded-2xl '>

                            <div className='w-[100%]   items-center  justify-center flex-col border-black  flex gap-2 p-1 group hover:bg-gray-200 font-mono '>

                                <div className='text-[40px] font-thunder-lc uppercase'>regular user</div>
                                <div className='flex flex-col gap-2  items-center justify-center w-full '>
                                    <span className='text-lg font-bold uppercase flex justify-center  items-center gap-3 '>
                                        <CircleCheckBig className='text-green-600' /> Shop Search and Browsing
                                    </span>
                                    <span className='text-xs flex w-[90%] items-center justify-center '>
                                        Users can search for shops by name, category, location, or products,Users can browse shops categorized by type (e.g., grocery, pharmacy, clothing).
                                    </span>


                                </div>
                                <div className='flex flex-col gap-2 items-center justify-center w-full   '>
                                    <span className='uppercase font-bold text-lg flex gap-2 items-center'>
                                        <CircleCheckBig className='text-green-600' /> Shop Listings
                                    </span>
                                    <span className=' text-xs w-[85%] items-center justify-center '>
                                        Detailed Shop Pages: Each shop page includes information like address, contact details, hours of operation, and a description.
                                        Product Listings: Users can view products listed by each shop, including prices and availability.
                                    </span>


                                </div>
                                <div className='flex flex-col gap-2 items-center justify-center w-full  '>
                                    <span className='uppercase text-lg font-bold items-center flex gap-2 '>
                                        <CircleCheckBig className='text-green-600' /> Notifications and Updates
                                    </span>
                                    <span className=' text-xs w-[85%] items-center justify-center '>
                                        Price Updates: Users receive notifications about price changes for products they're interested in.
                                        Offer Alerts: Users get notifications about special offers, discounts, and promotions from shops they follow.
                                    </span>


                                </div>
                                <div className='flex flex-col gap-2 items-center justify-center w-full   '>
                                    <span className='uppercase font-bold text-lg flex gap-2 items-center'>
                                        <CircleCheckBig className='text-green-600' /> Shop Listings
                                    </span>
                                    <span className=' text-xs w-[85%] items-center justify-center '>
                                        Detailed Shop Pages: Each shop page includes information like address, contact details, hours of operation, and a description.
                                        Product Listings: Users can view products listed by each shop, including prices and availability.
                                    </span>


                                </div>
                                <div className='flex flex-col gap-2 items-center justify-center w-full  '>
                                    <span className='uppercase flex items-center gap-2 font-bold text-lg'>
                                        <CircleCheckBig className='text-green-600' />   Reviews and Ratings
                                    </span>
                                    <span className=' text-xs w-[85%] items-center justify-center '>
                                        Shop Reviews: Users can read and write reviews for shops.
                                        Product Ratings: Users can rate and review products they’ve purchased.
                                    </span>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-[90vh]'>
                    <div className='h-[90%]   w-[95%] p-2 border-black border-2 bg-[#efeae6] items-center justify-center rounded-2xl shadow-md'>
                        <div className='h-[99%]  border-[#c33535]  w-[99%] p-6 items-center border-2  border-dashed  justify-center rounded-2xl '>

                            <div className='w-[100%]  border-b-[1px] items-center  justify-center flex-col border-black  flex gap-2 p-6 group hover:bg-gray-200 font-mono '>


                                <div className='flex flex-col gap-2 w-full justify-center  items-center  '>
                                    <span className='text-lg font-bold uppercase flex items-center gap-2'>
                                        <Drum className='text-red-600' /> Shop Search and Browsing
                                    </span>
                                    <span className='text-xs flex w-[85%] items-center justify-center '>
                                        Users can search for shops by name, category, location, or products,Users can browse shops categorized by type (e.g., grocery, pharmacy, clothing).
                                    </span>


                                </div>
                                <div className='flex flex-col gap-2 items-center justify-center w-full  '>
                                    <span className='uppercase font-bold text-lg flex items-center gap-2'>
                                        <Drum className='text-red-600' /> Shop Listings
                                    </span>
                                    <span className=' text-xs w-[85%] items-center justify-center '>
                                        Detailed Shop Pages: Each shop page includes information like address, contact details, hours of operation, and a description.
                                        Product Listings: Users can view products listed by each shop, including prices and availability.
                                    </span>


                                </div>
                                <div className='flex flex-col gap-2 items-center justify-center w-full  '>
                                    <span className='uppercase text-lg font-bold items-center gap-2 flex '>
                                        <Drum className='text-red-600' /> Notifications and Updates
                                    </span>
                                    <span className=' text-xs w-[85%] items-center justify-center '>
                                        Price Updates: Users receive notifications about price changes for products they're interested in.
                                        Offer Alerts: Users get notifications about special offers, discounts, and promotions from shops they follow.
                                    </span>


                                </div>
                                <div className='flex flex-col gap-2 items-center justify-center w-full  '>
                                    <span className='uppercase  font-bold text-lg items-center flex gap-2'>
                                        <Drum className='text-red-600' /> Reviews and Ratings
                                    </span>
                                    <span className=' text-xs w-[85%] items-center justify-center '>
                                        Shop Reviews: Users can read and write reviews for shops.
                                        Product Ratings: Users can rate and review products they’ve purchased.
                                    </span>

                                </div>
                                <div className='flex  items-center justify-center w-full  '>
                                    <Button className="bg-[#22201f] rounded-3xl  z-20 py-2 px-4  border-white font-DM-sans uppercase">shop setup</Button>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benifits