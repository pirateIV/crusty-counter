"use client";

import Navbar from "@/partials/Navbar";
import {
   Combobox,
   ComboboxButton,
   ComboboxInput,
   ComboboxOption,
   ComboboxOptions,
   Tab,
   TabGroup,
   TabList,
} from "@headlessui/react";
import {
   Cake,
   Check,
   ChevronDown,
   Clipboard,
   ClockIcon,
   Coffee,
   CookingPot,
   Croissant,
   Donut,
   PencilLine,
   Sandwich,
   Search,
   Soup,
} from "lucide-react";
import clsx from "clsx";
import React, { JSX, useState } from "react";
import DashedGradient from "@/components/DashedGradient";
import foodItems from "@/data/items";
import Image from "next/image";

const foodTypes: {
   type: FoodType;
   count: number;
   icon: JSX.Element | string;
}[] = [
   { type: "All Menu", count: 110, icon: <Soup /> },
   { type: "Bread", count: 20, icon: "" },
   { type: "Beverages", count: 20, icon: <Coffee /> },
   { type: "Cakes", count: 20, icon: <Cake /> },
   { type: "Donuts", count: 20, icon: <Donut /> },
   { type: "Pastries", count: 20, icon: <Croissant /> },
   { type: "Sandwich", count: 20, icon: <Sandwich /> },
   { type: "Tart", count: 20, icon: "" },
];

const people = [
   { id: 1, name: "Tom Cook" },
   { id: 2, name: "Wade Cooper" },
   { id: 3, name: "Tanya Fox" },
   { id: 4, name: "Arlene Mccoy" },
   { id: 5, name: "Devon Webb" },
];

type FoodType =
   | "All Menu"
   | "Bread"
   | "Beverages"
   | "Cakes"
   | "Donuts"
   | "Pastries"
   | "Sandwich"
   | "Tart";

type Theme = Record<FoodType, string>;

function updateFoodTypeDescTheme(type: FoodType) {
   const themes: Theme = {
      "All Menu": "",
      Bread: "text-blue-500 bg-blue-50",
      Beverages: "text-stone-500 bg-stone-50",
      Cakes: "text-pink-500 bg-pink-50",
      Donuts: "text-blue-500 bg-blue-50",
      Pastries: "text-green-500 bg-green-50",
      Sandwich: "text-orange-500 bg-orange-50",
      Tart: "text-fuchsia-500 bg-fuchsia-50",
   };

   return themes[type];
}

export default function Home() {
   const [query, setQuery] = useState("");
   const [selected, setSelected] = useState(people[1]);

   const filteredPeople =
      query === ""
         ? people
         : people.filter((person) => {
              return person.name.toLowerCase().includes(query.toLowerCase());
           });

   return (
      <div className="grid grid-cols-10 gap-3 p-2.5 h-screen">
         <div className="col-span-6 space-y-3 h-full overflow-y-auto scroll">
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
                        className="peer ps-5 py-3 pe-2 w-full rounded-full -outline-offset-2 outline-[var(--royal-blue)]"
                        placeholder="Search something sweet on your customer's mind..."
                     />
                     <button className="absolute inset-y-1/2 -translate-y-1/2 size-10 end-1 p-2.5 text-gray-600 bg-gray-100 transition-colors rounded-full peer-focus:text-[var(--royal-blue)] peer-focus:bg-gray-200">
                        <Search size="18" />
                     </button>
                  </search>
               </form>
            </section>

            <div className="grid grid-cols-4 gap-2.5">
               {foodItems.map((foodItem, index) => (
                  <React.Fragment key={index}>
                     {foodItem.items.map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl p-2">
                           <div className="h-32 w-full bg-gray-100 rounded-xl ">
                              <Image src={null} className="border-none" alt="" />
                           </div>
                           <div className="my-2">
                              <h5 className="font-semibold">{item.name}</h5>
                           </div>
                           <div className="flex items-center justify-between">
                              <span
                                 className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${updateFoodTypeDescTheme(
                                    foodItem.type
                                 )}`}
                              >
                                 {foodItem.type}
                              </span>
                              <span className="font-semibold">
                                 ${item.price}
                              </span>
                           </div>
                        </div>
                     ))}
                  </React.Fragment>
               ))}
            </div>
         </div>

         <div className="col-span-4 bg-white h-full rounded-2xl dark:bg-slate-800">
            <header className="p-2">
               <div className="flex items-center justify-between font-medium">
                  <span className="p-2 bg-stone-100 text-stone-400 rounded-full">
                     <Clipboard size="17" />
                  </span>
                  <div>
                     <h5 className="text-gray-600">Customer's name</h5>
                     <p className="text-gray-500 text-sm">
                        Order Number <span>#000</span>
                     </p>
                  </div>
                  <span className="p-2 bg-stone-100 text-stone-400 rounded-full">
                     <PencilLine size="17" />
                  </span>
               </div>
            </header>

            <div className="mx-auto w-52 mt-3">
               <Combobox
                  value={selected}
                  onChange={(value) => setSelected(value)}
                  onClose={() => setQuery("")}
               >
                  <div className="relative">
                     <ComboboxInput
                        className={clsx(
                           "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-slate-800",
                           "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-slate-800/25"
                        )}
                        displayValue={(person) => person?.name}
                        onChange={(event) => setQuery(event.target.value)}
                     />
                     <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                        <ChevronDown className="size-4 fill-slate-800/60 group-data-[hover]:fill-slate-800" />
                     </ComboboxButton>
                  </div>

                  <ComboboxOptions
                     anchor="bottom"
                     transition
                     className={clsx(
                        "w-[var(--input-width)] rounded-xl border border-stone-800/5 bg-stone-800/85 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                        "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                     )}
                  >
                     {filteredPeople.map((person) => (
                        <ComboboxOption
                           key={person.id}
                           value={person}
                           className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-slate-800/10"
                        >
                           <Check className="invisible size-4 fill-slate-800 group-data-[selected]:visible" />
                           <div className="text-sm/6 text-white">
                              {person.name}
                           </div>
                        </ComboboxOption>
                     ))}
                  </ComboboxOptions>
               </Combobox>
            </div>

            {/* Selected Items */}
            <div className="bg-stone-100 mt-3">
               <div className="py-10 text-center text-gray-500 border-b border-dashed border-stone-500">
                  <p className="cursor-none pointer-events-none">
                     No Item Selected
                  </p>
               </div>
            </div>
            <div className="min-h-56 bg-stone-50 overflow-auto"></div>
            <section className="bg-gradient-to-b from-white via-stone-100">
               <table className="block p-2 pb-4 space-y-1">
                  <tbody>
                     <tr className="text-gray-600 *:font-medium">
                        <th className="w-4/5 text-start">Subtotal</th>
                        <td className="w-20">$</td>
                        <td>0.00</td>
                     </tr>
                     <tr className="text-sm text-gray-500 *:font-normal">
                        <th className="w-4/5 text-start">Tax 10%</th>
                        <td className="w-20">$</td>
                        <td>0.00</td>
                     </tr>
                     <tr aria-hidden="true">
                        <DashedGradient />
                     </tr>
                     <tr className="*:font-semibold">
                        <th className="w-4/5 text-start">TOTAL</th>
                        <td className="w-20">$</td>
                        <td>0.00</td>
                     </tr>
                  </tbody>
               </table>
            </section>
            <section>
               <div className="flex items-center *:flex-1 gap-3 my-1.5 p-2">
                  <button className="p-3 bg-gray-100 rounded-full">
                     Add Promo or Voucher
                  </button>
                  <button className="p-3 border-2 border-slate-800 rounded-full">
                     Payment Method
                  </button>
               </div>

               <div>
                  <button className="w-full py-4 bg-[var(--royal-blue)] text-white hover:bg-opacity-45">
                     Place Order
                  </button>
               </div>
            </section>
         </div>
      </div>
   );
}
