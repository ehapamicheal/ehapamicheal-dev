"use client";

import Image from "next/image";
import { containerVariants, zoomInLeft, zoomIn } from "@/animations";
import { motion } from "framer-motion";
import { projectData } from "@/data";
import { RiExternalLinkLine } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="py-20 px-5 md:px-7 xl:px-14 bg-second-bg-color">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            variants={containerVariants}
            className="">
            <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                variants={zoomInLeft}
                className="text-3xl md:text-4xl xl:text-[48px] font-semibold text-center leading-relaxed text-white">
                My <span className="text-primary">Projects</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
                {projectData.map((project) => (
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        variants={zoomIn}
                        key={project.id}
                        className="h-full">
                        <div className="h-full flex-col flex group border border-white/10 hover:border-primary/30 bg-white/5 rounded-2xl relative overflow-hidden transition duration-500">
                            <div className="overflow-hidden relative h-47">
                                <Image 
                                    src={project.image}
                                    alt={project.name}
                                    className="object-cover transition-transform group-hover:scale-105 duration-700"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/40 to-transparent opacity-10 group-hover:opacity-90 transition-opacity duration-300" />
                                
                                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                                    <a href={project.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2.5 group/demo relative bg-second-bg-color/80 backdrop-blur-md rounded-lg border border-white/30 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110">
                                        <RiExternalLinkLine className="text-white text-lg" />

                                        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-linear-to-r from-primary/50 via-black/80 to-second-bg-color/80 backdrop-blur-lg pointer-events-none rounded-lg opacity-0 invisible group-hover/demo:opacity-100 group-hover/demo:visible transition-all duration-300 shadow-lg">
                                            <span className="text-white text-xs font-medium whitespace-nowrap">View demo</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="py-6 px-6 space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-white text-lg ms:text-xl capitalize group-hover:text-primary/60 font-semibold leading-relaxed transition-colors duration-300">
                                        {project.name}
                                    </h3>
                                    {/* <p className="text-white/60 text-sm ms:text-base line-clamp-2">
                                        {project.description}
                                    </p> */}
                                </div>

                                <div className="flex items-center flex-wrap gap-3">
                                    {project.technologies.map((tech, i) => (
                                        <span 
                                            key={i}
                                            className="px-3 py-1 text-xs capitalize border border-primary/20 font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors duration-200 rounded-lg">
                                            {tech}
                                        </span>
                                    ))}            
                                </div>
                            </div>
                        </div>    

                    </motion.div>  
                ))}       
            </div>
        </motion.div>
      
    </div>
  )
}

export default Projects;