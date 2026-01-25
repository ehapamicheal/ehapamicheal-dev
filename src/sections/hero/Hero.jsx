"use client";

import Image from "next/image";
import { fadeUp, containerVariants, flipX, flipY, bounceInUp } from "@/animations";
import { motion} from "framer-motion";
import { socialLinks } from "@/data";


const Hero = () => {
  return (
    <div className="px-5 md:px-7 xl:px-14 pb-10 font-poppins w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/*============ LEFT SIDE ============*/}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                className="order-2 lg:order-1">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <motion.h1 
                            variants={fadeUp}
                            className="inline-block font-bold text-3xl md:text-5xl leading-relaxed text-white">Hi, I'm <span>Micheal Ehapa</span>
                        </motion.h1>

                        <motion.div 
                         variants={bounceInUp}
                            className="relative w-65 md:w-78 overflow-hidden">
                            <h3 className="typewriter-text text-2xl md:text-3xl">Frontend Developer</h3>
                        </motion.div>
                    </div>

                    <motion.p 
                        variants={fadeUp}
                        className="text-sm ms:text-base font-normal text-white leading-relaxed">
                        A UX-focused frontend developer with 3+ years of experience building responsive, user centric web applications. Skilled at translating Figma designs into pixel-perfect, functional interfaces, I collaborate closely with designers and teams to ensure accessibility, performance optimization, and seamless user experiences. I write clean, maintainable code and continuously adopt modern tools to enhance my development workflow.
                    </motion.p>
               </div>

                {/*  */}
                {/*============ LET'S TALK AND DOWNLOAD ============ */}
                <div className="relative pt-8 flex flex-col ms:flex-row gap-4 ms:gap-8 lg:w-148">
                    {/*============ LET'S TALK ============ */}
                    <motion.div
                        variants={fadeUp}
                        className="w-full">
                        <a
                            href="https://wa.me/2347061288017"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex w-full items-center justify-center px-4 py-4 bg-primary border-2 border-primary rounded-xl text-base md:text-lg font-semibold tracking-[1.6px] text-bg-color overflow-hidden z-10 transition-colors duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-bg-color before:-z-10 before:transition-all before:duration-500 hover:text-primary hover:before:w-full"
                        >
                            Let’s talk
                        </a>
                    </motion.div>

                    {/*============ DOWNLOAD CV  ============ */}
                    <motion.div className="w-full"
                        variants={fadeUp}>
                        <a
                            href="/pdfs/Ehapa Micheal Cv.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex w-full items-center justify-center px-4 py-4 bg-transparent border-2 border-primary rounded-xl text-base md:text-lg font-semibold tracking-[1.6px] text-primary overflow-hidden z-10 transition-colors duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary before:-z-10 before:transition-all before:duration-500 hover:text-bg-color hover:before:w-full"
                        >
                            Download CV
                        </a>
                    </motion.div>
                </div>

                {/*============ SOCIAL LINKS ============ */}
                <div className="flex gap-4 pt-8">
                    {socialLinks.map((link) => (
                        <motion.div
                        key={link.id}
                        variants={flipX}
                        >
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="relative inline-flex items-center justify-center w-10 h-10 border-2 border-primary rounded-full text-lg text-primary overflow-hidden z-10 transition-colors duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary before:-z-10 before:transition-all before:duration-500 hover:text-bg-color hover:before:w-full">
                            {link.icon}
                        </a>
                        </motion.div>
                    ))}
                </div>

           </motion.div>

            {/*============ Right SIDE ============ */}
            <div className="relative flex items-center lg:items-start justify-center lg:justify-end order-1 lg:order-2">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={flipY}
                    className="w-60 h-60 lg:w-90 lg:h-90 overflow-hidden relative rounded-full border-3 border-second-bg-color">
                    <Image 
                        src="/images/micheal.jpg" 
                        alt="Micheal Ehapa"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top"
                    />


                    {/*============ CIRCLE SPINNER ============ */}
                    <span
                        className="animate_circle absolute top-1/2 left-1/2 w-full h-full rounded-full border-t-3 border-b-3 border-t-second-bg-color border-b-second-bg-color border-l-3 border-r-3 border-r-primary border-l-primary"
                    />
                </motion.div>
            </div>
        </div>
   </div>
  )
}

export default Hero;