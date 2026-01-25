"use client";

import { IoArrowUpOutline } from "react-icons/io5";
import { zoomInLeft, fadeUp } from "@/animations";
import { motion } from "framer-motion";

const Footer = () => {

    const currentYear = new Date().getFullYear();


  return (
    <footer className="flex flex-col md:flex-row justify-center items-center gap-4 py-8 px-5 md:px-7 xl:px-14 md:justify-between bg-second-bg-color overflow-hidden">
        <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            variants={zoomInLeft}
            className="text-white/80 text-center text-base md:text-lg font-poppins font-medium leading-relaxed">
            &copy; {currentYear} by Ehapa | All Rights Reserved.
        </motion.p> 

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            variants={fadeUp}
            className="">
            <a 
                href="#home"
                className="relative inline-flex justify-center items-center p-3 bg-primary border border-primary rounded-xl z-10 overflow-hidden transition-colors duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-second-bg-color before:-z-10 before:transition-all before:duration-500 hover:before:w-full group"
            >
                <IoArrowUpOutline className="text-xl animate-bounce text-bg-color transition-colors duration-500 group-hover:text-primary" />
            </a>
        </motion.div>

    </footer>
  )
}

export default Footer;