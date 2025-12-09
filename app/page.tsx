"use client";

import Image from "next/image";
import Link from "next/link";
import { m, motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { i } from "motion/react-client";
import { Sofia_Sans } from "next/font/google";

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



const lookbookImages = [
  { id: 1, img: "/look3.jpg" },
  { id: 2, img: "/look2.jpg" },
  { id: 3, img: "/look4.jpg" },
  { id: 4, img: "/look5.jpg" },
  { id: 5, img: "/look6.jpg" },
  { id: 6, img: "/look7.jpg" },
];

export default function Home() {
  return (
  <>
    
       <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>
    
    
<section className="relative overflow-hidden px-4 sm:px-8 md:px-16 
py-8 lg:px-20 min-h-[80dvh] md:min-h-[99dvh] 
 flex items-center justify-center text-center md:mt-20 lg:mt-0">

  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: "url('/hero.jpg')" }}
  />

  {/* Black gradient overlay */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

  {/* Background blobs */}
  <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none z-20" />
  <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-orange-400/5 blur-3xl pointer-events-none z-20" />

  {/* Text content */}
  <div className="relative z-30 w-full max-w-2xl -translate-y-8 md:-translate-y-12">
    <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 font-bold leading-tight tracking-tighter ${montserrat.className}`}>
      Unisex Outfits{" "} <br />
      <span className="text-black font-extrabold"> 
        trending styles
      </span>
    </h1>

    <p className="text-sm sm:text-lg font-bold text-gray-200 mb-8 ">
      Soft, Cosy Fabrication And Modern Styling.
    </p>

    <Link
      href="/sign-in"
      className="inline-flex items-center justify-center gap-2 rounded-md text-sm 
      font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9
       px-4 py-2 bg-black text-white hover:bg-green-500 focus-visible:ring-4 focus-visible:ring-blue-300"
    >
  shop now 
    </Link>
  </div>
</section></motion.section>

  
{/* --- ABOUT SECTION --- */}
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
  <p
    className={
      "text-2xl md:text-3xl lg:text-5xl mb-3 font-bold tracking-tighter leading-[1.2] text-foreground " +
      montserrat.className
    }
  >
    Global Fashion Collections <br />
    Curated to Inspire Your Style Every Day
  </p>

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



{/* --- FEATURED COLLECTIONS SECTION --- */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
  viewport={{ once: true, amount: 0.2 }}
  className="py-10 bg-gray-200 mt-0"
>
  <div className="container mx-auto px-4">

    {/* Section Title */}
    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 ${montserrat.className}`}>
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

  <motion.section
      className="flex justify-center items-center py-8 px-3 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <h2 className={`${montserrat.className} mt-4 mb-5 text-2xl md:text-4xl font-bold text-center text-black `}>
          Let's Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Form container */}
        <div className="grid md:grid-cols-2 gap-12 bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 md:p-12">
          {/* Form */}
          <form className="space-y-6 text-gray-800 w-full">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full min-h-[100px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2  bg-black hover:bg-green-500 text-white py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                <path d="m21.854 2.147-10.94 10.939"/>
              </svg>
            </button>
          </form>

          {/* Optional Right Content */}
          <div className="hidden md:flex items-center justify-center">
            {/* Add an image, map, or contact info here */}
          </div>
        </div>
      </div>
    </motion.section>
    
  </>
  );
}
