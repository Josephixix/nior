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
import Best from "@/components/Best";
import Lookbook from "@/components/Lookbook";
import Contact from "@/components/Contact";

const sofia = Sofia_Sans  ({
  variable: "--font-sofia",
  weight: ["400"],
});


const montserrat = Montserrat ({
  variable: "--font-montserrat",
  weight: ["700"],
});



export default function Home() {
  return (
  <>
<Hero/>
  
<About/>

<Featured/>

<Best/>

<Lookbook/>

<Contact/>
    
  </>
  );
}
