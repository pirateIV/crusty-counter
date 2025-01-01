"use client";

import React, { useState } from "react";

import {
   CalendarDays,
   Clock8,
   Croissant,
   Dot,
   Menu,
   Minus,
   Power,
} from "lucide-react";
import useTime from "@/hooks/useTime";

const Navbar = () => {
   const { currentTime, date } = useTime();

   const [isOrderOpen, setIsOrderOpen] = useState(false);

   return (
      <header>
         <div className="h-12 flex items-center justify-between text-sm *:h-full">
            <div className="flex items-center *:flex *:items-center gap-x-5 *:h-full">
               <div className="bg-white rounded-full size-12 dark:bg-gray-800">
                  <button className="size-full flex items-center justify-center p-2 text-slate-600 rounded-full">
                     <Menu />
                  </button>
               </div>

               <div className="p-2 pe-4 gap-x-4 bg-white font-semibold rounded-full dark:bg-gray-800">
                  <span className="p-2 bg-blue-100 text-[var(--royal-blue)] rounded-full dark:bg-opacity-15">
                     <CalendarDays size="16" />
                  </span>
                  <span>{date}</span>
               </div>

               <span className="text-gray-400 dark:text-slate-600">
                  <Minus />
               </span>

               <div className="p-2 pe-4 bg-white rounded-full dark:bg-gray-800">
                  <span className="p-2 bg-blue-100 text-[var(--royal-blue)] rounded-full dark:bg-opacity-15">
                     <Clock8 size="16" className="rotate-45" />
                  </span>
                  <div>
                     <time dateTime="07:59" className="ms-5 me-2 font-semibold">
                        {currentTime}
                     </time>
                     <span className="text-gray-600 dark:text-slate-300">
                        AM
                     </span>
                  </div>
               </div>
            </div>

            <div>
               <button className="group flex items-center p-2 bg-white text-[var(--elf-green)] dark:text-green-600 rounded-full hover:text-red-600 dark:bg-slate-800">
                  <span>
                     <Dot size="28" className="stroke-[6]" />
                  </span>
                  <span className="font-semibold">Open Order</span>
                  {/* <span className="font-semibold">Close Order</span> */}
                  <span className="p-2 ms-5 bg-green-100 rounded-full dark:bg-opacity-15 dark:group-hover:bg-opacity-15">
                     {/* <span className="p-2 ms-5 bg-red-100 rounded-full group-hover:bg-red-200 dark:bg-opacity-15 dark:group-hover:bg-opacity-15"> */}
                     <Power size="16" />
                  </span>
               </button>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
