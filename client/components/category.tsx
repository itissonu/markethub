'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
const bgimg = '/grain-bg-black.png';
import fastfood from '../public/modern-fast-food-composition.png'
import pharma from '../public/flat-design-pharmacist-serving-customers.png'
import grocery from '../public/illustrated-people-shopping-groceries.png'
import saloon from '../public/professional-hairdresser-tools-with-copy-space-hand-drawn-sketch-vector-illustration.png'
import coldbar from '../public/facade-bakery-shop.png'
import cloth from '../public/shops-re-opening-soon-concept-illustration.png'
import teastall from '../public/cup-of-tea-and-cookies.png'
import hardware from '../public/hand-drawn-flea-market-concept.png'
import footwear from '../public/interior-design-shoe-store-department-sports-shoes-men-women-new-collection-sneakers-chairs-trying-buyers-fashion-footwear-boutique.png'
import Image from 'next/image';
import bg1 from '../public/circle-1-removebg-preview.png'
import bg2 from '../public/green-circle-removebg-preview.png'
import bg3 from '../public/light-orange-removebg-preview.png'
import bg4 from '../public/light-sky-removebg-preview.png'
import bg5 from '../public/red-circle-removebg-preview.png'
import bg6 from '../public/sky-circle-removebg-preview.png'

const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
const categories = [
    { image: fastfood, name: 'Fast Food', image2: bg1 },
    { image: pharma, name: 'Pharmacy', image2: bg2 },
    { image: grocery, name: 'Grocery', image2: bg3 },
    { image: saloon, name: 'Saloon', image2: bg4 },
    { image: coldbar, name: 'Cold Bar', image2: bg5 },
    { image: cloth, name: 'Clothing', image2: bg6 },
    { image: teastall, name: 'Tea Stall', image2: bg3 },
    { image: hardware, name: 'Hardware', image2: bg4 },
    { image: footwear, name: 'Footwear', image2: bg1 },
];

const Category = () => {
    return (
        <div style={backgroundStyle} className="h-[100vh]  pb-20  pt-20 w-full flex flex-col">
            <div className='w-full h-max items-center justify-center flex flex-col'>
                <span className='text-[60px] h-[63px] font-thunder-lc uppercase text-white'>
                    find your
                </span>
                <div className='h-[87px]'>
                    <span className='text-[60px] font-thunder-lc uppercase text-[#fbb2d9] mr-5'>favourite</span>
                    <span className='text-[60px] font-thunder-lc text-white uppercase'>shop</span>
                </div>

            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="h-full w-full p-4"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="h-[300px] w-full flex flex-col pt-44  items-center justify-center">
                        <div className="flex flex-col hover:cursor-pointer  items-center justify-center  rounded-lg relative p-4 shadow-lg group">
                            <Image src={category.image} alt={category.name} width={250} height={200} className="rounded-full absolute z-20 left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                            <Image src={category.image2} alt={category.name} width={400} height={350} className="rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 group-hover:-rotate-6 " />
                            <button className="bg-[#22201f] rounded-3xl text-white z-20 py-2 px-4 absolute bottom-[-90px] left-1/2 transform -translate-x-1/2 border-2 border-white font-thunder-lc uppercase">{category.name}</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='w-full items-center justify-center pt-6 flex'><div className='w-96 h-[3px] bg-white/10 flex '></div></div>
        </div>
    );
};

export default Category;
