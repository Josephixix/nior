"use client";

import Image from "next/image";
import Link from "next/link";
import { m, motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { i } from "motion/react-client";
import { Sofia_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";

const sofia = Sofia_Sans  ({
  variable: "--font-sofia",
  weight: ["400"],
});


const montserrat = Montserrat ({
  variable: "--font-montserrat",
  weight: ["700"],
});

const lookbookImages = [
  { id: 1, img: "/look3.jpg" },
  { id: 2, img: "/look2.jpg" },
  { id: 3, img: "/look4.jpg" },
  { id: 4, img: "/look5.jpg" },
  { id: 5, img: "/look6.jpg" },
  { id: 6, img: "/look7.jpg" },
];


export default function Lookbook() {
  return (
      <motion.section
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: true, amount: 0.2 }}
         className="px-4 md:px-12 lg:px-24 py-16"
       >
         {/* Header */}
         <div className="mb-10">
           <h2 className="text-lg font-bold text-muted-foreground">Lookbook</h2>
           <h3 className="text-2xl md:text-4xl font-bold mt-2">
             Real Style. Real Moments.
           </h3>
           <p className="text-gray-500 mt-2 max-w-lg">
             Explore how our community wears our pieces, showcasing
             authentic styles for every occasion.
           </p>
         </div>
   
         {/* Mobile — Horizontal Scroll */}
         <div className="md:hidden flex gap-4 overflow-x-auto hide-scrollbar pb-4">
           {lookbookImages.map((item) => (
             <motion.div
               key={item.id}
               whileHover={{ scale: 1.03 }}
               className="relative min-w-[75%] h-64 rounded-xl overflow-hidden"
             >
               <Image
                 src={item.img}
                 alt="Lookbook image"
                 fill
                 className="object-cover"
               />
             </motion.div>
           ))}
         </div>
   
         {/* Desktop — Masonry Grid */}
         <div className="hidden md:block">
           <div className="columns-2 lg:columns-3 gap-4 space-y-4">
             {lookbookImages.map((item) => (
               <motion.div
                 key={item.id}
                 whileHover={{ scale: 1.02 }}
                 className="relative w-full rounded-xl overflow-hidden"
               >
                 <Image
                   src={item.img}
                   alt="Lookbook image"
                   width={600}
                   height={800}
                   className="w-full h-auto object-cover rounded-xl"
                 />
               </motion.div>
             ))}
           </div>
         </div>
       </motion.section>

  )}