"use client";

import Image from "next/image";
import { m, motion } from "framer-motion";



export default function About() {
  return (
    
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className="px-3 md:px-12 lg:px-24 py-20 h-auto md:h-auto lg:h-auto"
>
  {/* Section Header */}
  <div>
    <h2 className="text-lg font-bold mb-4 text-gray-500">
      About Nior Fits
    </h2>
  </div>

  {/* Main Heading */}
  <h3
    className={
      "text-2xl md:text-3xl lg:text-5xl mb-3 font-bold tracking-tighter leading-[1.2] text-foreground "
    }
  >
    Global Fashion Collections <br />
    Curated to Inspire Your Style Every Day
  </h3>

  {/* Content */}
  <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
    <p className="text-[12px] md:text-sm max-w-3xl md:max-w-xl py-2 text-gray-600">
      We bring you timeless and trend-setting pieces crafted with care and designed to
      elevate your wardrobe. From everyday essentials to standout looks, our fashion is
      made to help you express your style with confidence.
    </p>
  </div>

  {/* Image */}
  <div className="py-6">
    <Image
      src="/herp3.jpg"
      alt="Fashion Image"
      width={1200}
      height={904}
      className="object-cover object-center rounded-xl shadow-lg h-64 md:h-[65vh] w-full"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
    />
  </div>
</motion.section>

  )}