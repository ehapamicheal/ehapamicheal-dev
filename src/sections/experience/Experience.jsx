"use client";


import { fadeUp, containerVariants, slideRight,  zoomIn, zoomCard } from "@/animations";
import { motion} from "framer-motion";
import { experienceData, educationData } from "@/data";
import EducationCard from "@/components/ui/EducationCard";

const Experience = () => {


  return (
    <div className="py-20 bg-bg-color">
    
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            variants={containerVariants}
            className="px-5 md:px-7 xl:px-14">


            <div className="text-center mb-9 overflow-hidden">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2}}
                    variants={zoomIn} 
                    className="text-4xl lg:text-5xl text-white font-semibold mb-16">
                    My <span className="text-primary">Journey</span>
                </motion.h2>


                <motion.h3 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2}}
                    variants={slideRight}
                    className="text-2xl font-semibold text-white">
                    Experience
                </motion.h3>
            </div>

            {/*============= EXPERIENCE =============*/}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                variants={containerVariants}
                className="relative">
                <motion.div 
                    //  initial="hidden"
                    // whileInView="visible"
                    // viewport={{amount: 0.2}}
                    // variants={containerVariants}
                    className="grid md:grid-cols-2 gap-8 md:gap-8">
                    {experienceData.map((item, index) => (
                        <motion.div
                        key={item.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        variants={fadeUp}
                        className="relative h-full"
                        >
                        {/* Timeline circle on the left border of each card */}
                        <div className="absolute -left-2 top-8 z-10">
                            <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-6 h-6 rounded-full bg-primary border-4 border-gray-2/80 shadow-lg shadow-primary/50"
                            />
                        </div>
        
                        {/* Content card */}
                        <div className="h-full">
                            <div className="h-full group border-l-4 border-l-primary border-r border-t border-b border-white/10 hover:border-primary/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/10">
                            {/* Top border accent */}
                            <div className="h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="p-6 md:p-8 space-y-4">
                                {/* Period badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-primary text-sm font-medium">{item.period}</span>
                                </div>
        
                                {/* Role and company */}
                                <div className="space-y-2">
                                <h3 className="text-white text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                                    {item.role}
                                </h3>
                                <div className="flex flex-col ms:flex-row ms:items-center gap-3 text-slate-300">
                                    <span className="font-semibold">{item.company}</span>
                                    <span className="text-slate-500 hidden ms:block">•</span>
                                    <span className="px-2 py-1 w-fit bg-slate-800/50 rounded-lg text-sm border border-primary/20">{item.type}</span>
                                </div>
                                </div>
        
                                {/* Description */}
                                <p className="text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
        
                                {/* Technologies */}
                                {/* <div className="flex flex-wrap gap-2 pt-2">
                                {item.technologies.map((tech, i) => (
                                    <span
                                    key={i}
                                    className="px-3 py-1.5 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/30 rounded-lg text-sm text-slate-300 hover:text-cyan-400 transition-all duration-300"
                                    >
                                    {tech}
                                    </span>
                                ))}
                                </div> */}
                            </div>
                            </div>
                        </div>
                        </motion.div>
                    ))}
                </motion.div>
            
                        
            </motion.div>

            {/*============= EDUCATION =============*/}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                variants={containerVariants}
                className="mt-20 pt-8 overflow-hidden">
                <motion.h3 
                        initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2}}
                    variants={slideRight}
                    className="text-2xl font-semibold text-center text-white">
                    Education
                </motion.h3>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-10 gap-4 md:gap-8">
                    {educationData.map((item, i) => (
                        <motion.article 
                            key={item.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            variants={zoomCard}
                            custom={i}>
                            <EducationCard
                                period={item.period}
                                title={item.title}
                                subtitle={item.institution}
                                description={item.description}
                            />
                        </motion.article>
                    ))}
                </div>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Experience;