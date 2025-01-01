import Navbar from "@/partials/Navbar";
import { interVar } from "./layout";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import {
   Cake,
   ClockIcon,
   Coffee,
   CookingPot,
   Croissant,
   Donut,
   Sandwich,
   Search,
   Soup,
} from "lucide-react";

const foodTypes = [
   { type: "All Menu", count: 110, icon: <Soup /> },
   { type: "Bread", count: 20, icon: "" },
   { type: "Beverages", count: 20, icon: <Coffee /> },
   { type: "Cakes", count: 20, icon: <Cake /> },
   { type: "Donuts", count: 20, icon: <Donut /> },
   { type: "Pastries", count: 20, icon: <Croissant /> },
   { type: "Sandwich", count: 20, icon: <Sandwich /> },
   { type: "Tart", count: 20, icon: "" },
];

export default function Home() {
   return (
      <div className="grid grid-cols-10 gap-3 p-2.5">
         <div className="col-span-6 space-y-3">
            <Navbar />

            <section className="food-list">
               <TabGroup>
                  <TabList
                     className="flex items-center gap-x-3 pb-2 overflow-x-auto scroll"
                     style={{ scrollbarColor: "transparent" }}
                  >
                     {foodTypes.map(({ type, count, icon }, index) => (
                        <Tab
                           key={index}
                           className="group min-w-32 bg-white p-2 border-2 border-transparent rounded-xl outline-none data-[selected]:border-[var(--royal-blue)] dark:bg-slate-800"
                        >
                           <div className="flex items-center justify-center size-10 p-0.5 bg-stone-100 rounded-full transition duration-300 group-data-[selected]:bg-[var(--royal-blue)] dark:[&:not(group-data-[selected])]:bg-opacity-10">
                              <span className="text-stone-400 dark:text-stone-200 group-data-[selected]:text-white">
                                 {icon || <CookingPot />}
                              </span>
                           </div>

                           <div className="mt-7 text-start">
                              <h5 className="font-semibold">{type}</h5>
                              <p className="font-medium text-gray-500">
                                 {count} items
                              </p>
                           </div>
                        </Tab>
                     ))}
                  </TabList>
               </TabGroup>
            </section>

            <section>
               <form action="">
                  <search className="relative w-full">
                     <input
                        type="text"
                        className="peer ps-5 py-3 pe-2 w-full rounded-full"
                        placeholder="Search something sweet on your mind..."
                     />
                     <button className="absolute inset-y-1/2 -translate-y-1/2 size-10 end-1.5 p-2.5 text-gray-600 bg-gray-100 transition-colors rounded-full peer-focus:text-[var(--royal-blue)] peer-focus:bg-gray-200">
                        <Search size="18" />
                     </button>
                  </search>
               </form>
            </section>
         </div>

         <div className="col-span-4 bg-white h-full rounded-2xl dark:bg-slate-800"></div>
      </div>
   );
}
