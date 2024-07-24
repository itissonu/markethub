import Image from 'next/image';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Info, Soup } from 'lucide-react';

const Page = () => {
  return (
    <div className="flex gap-10 pb-12 flex-col items-center w-full justify-center">
      <div className="h-[400px] w-full lg:h-[60vh] relative">
        <div className="absolute top-[30%] lg:top-1/2 z-10 left-[60%] transform -translate-x-1/2 w-[80%] lg:w-2/3">
          <span
            className="uppercase font-thunder-lc leading-none text-[#fbb12a] text-[40px] lg:text-[150px]"
            style={{
              textShadow:
                '0 0 3px rgba(255, 0, 0, 0.7), 0 0 10px rgba(255, 0, 0, 0.7), 0 0 15px rgba(255, 0, 0, 0.7)',
            }}
          >
            price dashboard
          </span>
        </div>
        <Image
          src="/price-dashboard.jpg"
          width={500}
          height={200}
          alt="price dashboard"
          className="contrast-50 lg:h-full opacity-80 h-1/2 object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-3 w-full justify-center items-center pt-4">
        <span className="font-thunder-lc leading-none text-[100px] text-black uppercase">
          Discover Our
          <span className="text-[#c5fa7a] ml-3">Competitive </span>
        </span>
        <span className="font-thunder-lc text-[100px] leading-none text-black uppercase">
          Pricing Plans
        </span>
      </div>

      <div className="w-full max-w-[1200px] h-[70vh] flex-col gap-7 flex items-center justify-center">
        <div className="w-full justify-center flex gap-3 items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="p-2 text-2xl bg-white text-black border-4 border-yellow-400 hover:scale-105 active:scale-95 hover:bg-yellow-400 transition-all duration-300 hover:text-black font-thunder-lc uppercase">
                  compare price
                </span>
              </TooltipTrigger>
              <TooltipContent className="bg-black/90 flex items-center outline-none shadow-none justify-center gap-3">
                <Info className="size-6 text-white" />
                <span className="text-xs font-ShackletonTest text-white">
                  here you can compare a price of a product
                </span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="w-full h-full flex gap-2">
          <div className="flex w-1/3 h-full flex-col gap-3">
            <Select>
              <SelectTrigger className="w-[280px] h-16 font-ShackletonTest uppercase text-white bg-black/80">
                <SelectValue placeholder="select shop" />
              </SelectTrigger>
              <SelectContent className="uppercase font-ShackletonTest">
                <SelectItem value="light">Bangalore bakery</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm font-mono font-semibold text-[#3d3935]">
              *if you want to have a filtered search than select the desired
              shop name to find out
            </span>
            <span className="text-sm font-mono font-semibold text-[#3d3935]">
              * Also you can <u className="m-2">compare price</u>compare price
              of product by clicking compare price
            </span>
          </div>
          <div className="flex w-2/3 h-full">
            <div className="w-full h-full shadow-md border-4 border-b-8 flex items-center justify-center relative border-[#6d2307] rounded-[30px]">
              <div className="w-[98%] h-[98%] overflow-y-auto p-4 flex gap-3 flex-col border-4 border-green-400 border-dashed rounded-2xl">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="flex gap-2 h-14 justify-between items-center font-mono uppercase border-b-[1px] border-gray-400 shadow-md"
                  >
                    <Image
                      src="/fastfood.jpg"
                      height={50}
                      width={50}
                      alt=""
                      className="h-12 w-12 rounded-full"
                    />
                    <span>chowmin</span>
                    <span className="flex gap-2">
                      friends fast food
                      <Soup />
                    </span>
                    <span>1 x plate</span>
                    <span>$45</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
