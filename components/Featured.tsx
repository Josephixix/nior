"use client";


import { m, motion } from "framer-motion";



export default function Featured() {
  return (
    
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
  viewport={{ once: true, amount: 0.2 }}
  id="featured"
  className="py-10 bg-gray-200 mt-0"
>
  <div className="container mx-auto px-4">

    {/* Section Title */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
      Features Collections
    </h2>

    {/* Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* Card 1 */}
      <div className="group cursor-pointer">
        <div className="w-full h-56 bg-white rounded-xl overflow-hidden flex items-center justify-center">
          <span className="text-gray-400">
            <img src="/mens.jpg" alt="Men's Collection" />
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold">Men’s Collection</h3>
        <p className="text-sm text-gray-500">Explore the latest fits</p>
      </div>

      {/* Card 2 */}
      <div className="group cursor-pointer">
        <div className="w-full h-56 bg-white rounded-xl overflow-hidden flex items-center justify-center">
          <span className="text-gray-400"> <img src="/womens.jpg" alt="Women's Collection" /></span>
        </div>
        <h3 className="mt-4 text-lg font-semibold">Women’s Collection</h3>
        <p className="text-sm text-gray-500">Fresh styles for every vibe</p>
      </div>

      {/* Card 3 */}
      <div className="group cursor-pointer">
        <div className="w-full h-56 bg-white rounded-xl overflow-hidden flex items-center justify-center">
          <span className="text-gray-400"> <img src="/ess3.jpg" alt="Men's Collection" /></span>
        </div>
        <h3 className="mt-4 text-lg font-semibold">Streetwear Drops</h3>
        <p className="text-sm text-gray-500">Bold pieces, new releases</p>
      </div>

      {/* Card 4 */}
      <div className="group cursor-pointer">
        <div className="w-full h-56 bg-white rounded-xl overflow-hidden flex items-center justify-center">
          <span className="text-gray-400"> <img src="/ess2.jpg" alt="Men's Collection" /></span>
        </div>
        <h3 className="mt-4 text-lg font-semibold">Essentials</h3>
        <p className="text-sm text-gray-500">Everyday basics you’ll love</p>
      </div>

    </div>
  </div>
</motion.section>

  )}