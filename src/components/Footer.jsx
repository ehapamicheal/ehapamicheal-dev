"use client";

import { IoArrowUpOutline } from "react-icons/io5";
import { zoomInLeft, scaleUp } from "@/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {

    const currentYear = new Date().getFullYear();


  return (
    <footer className="border-t border-border px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:justify-between overflow-hidden responsive_container lg:w-[90%]">
            {/* <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                variants={zoomInLeft}
                className="text-white/80 text-sm font-poppins font-medium leading-relaxed">
                &copy; {currentYear} by Micheal Ehapa | All Rights Reserved.
            </motion.p>  */}

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                variants={zoomInLeft}
                className="flex items-center gap-3">
                <div className="shrink-0">
                     <Image 
                        src="/svgs/logo.svg"
                        height={32}
                        width={32}
                        alt="Micheal Ehapa Logo"
                        priority
                    />
                </div>

                <p className="text-muted text-sm font-medium leading-relaxed">&copy; {currentYear} by Micheal Ehapa | All Rights Reserved.</p>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                variants={scaleUp}
                className="">
                <a 
                    href="#home"
                    className="relative inline-flex justify-center items-center p-3 bg-primary border border-primary rounded-xl z-10 overflow-hidden transition-colors duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-background before:-z-10 before:transition-all before:duration-500 hover:before:w-full group"
                >
                    <IoArrowUpOutline className="text-xl animate-bounce text-white transition-colors duration-500 group-hover:text-primary" />
                </a>
            </motion.div>

        </div>
    </footer>
  )
}

export default Footer;