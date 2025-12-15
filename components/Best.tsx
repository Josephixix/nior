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

const bestSellers = [
  {
    id: 1,
    name: "Signature Oversize Tee",
    price: "$35",
    img: "/over.jpg",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Essential Cargo Pants",
    price: "$55",
    img: "/pant2.jpg",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Urban Street Hoodie",
    price: "$60",
    img: "/hod.jpg",
    tag: "Hot",
  },
  {
    id: 4,
    name: "Premium Denim Jacket",
    price: "$70",
    img: "/hod2.jpg",
    tag: "Best Seller",
  },
  {
    id: 5,
    name: "Classic Straight Jeans",
    price: "$50",
    img: "/hod4.jpg",
  },
  {
    id: 6,
    name: "Silk Collar Shirt",
    price: "$45",
    img: "/hod3.jpg",
  },
];


export default function Best() {
  return (
     <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="px-4 md:px-12 lg:px-24 py-16"
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-sm font-bold text-muted-foreground mb-2">Top Picks</h2>
            <h3 className="text-2xl md:text-4xl font-bold">Best Sellers</h3>
            <p className="text-gray-500 mt-2">
              Shop the most loved styles trending and guaranteed to sell out fast.
            </p>
          </div>
    
          {/* Mobile Carousel */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
            {bestSellers.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="min-w-[70%] bg-white rounded-xl shadow-sm border p-3 flex-shrink-0"
              >
                <div className="relative w-full h-44 rounded-lg overflow-hidden mb-3">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                </div>
    
                {item.tag && (
                  <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
    
                <h4 className="font-semibold mt-2">{item.name}</h4>
                <p className="text-gray-600">{item.price}</p>
    
                <button className="mt-3 w-full bg-black text-white py-2 rounded-lg text-sm">
                  Shop Now
                </button>
              </motion.div>
            ))}
          </div>
    
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {bestSellers.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm border p-4"
              >
                <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                </div>
    
                {item.tag && (
                  <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
    
                <h4 className="font-semibold mt-2">{item.name}</h4>
                <p className="text-gray-600">{item.price}</p>
    
                <button className="mt-3 w-full bg-black hover:bg-green-500 text-white py-2 rounded-lg text-sm">
                  Shop Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

  )}