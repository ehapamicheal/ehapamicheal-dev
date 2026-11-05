"use client";


import { fadeUp, containerVariants, slideRight, zoomCard, slideLeft } from "@/animations";
import { motion} from "framer-motion";
import { experienceData, educationData } from "@/data";
import EducationCard from "@/components/ui/EducationCard";
import SectionHeader from '@/components/ui/SectionHeader';

const Experience = () => {


  return (
    <section id="experience" className="border-y border-border bg-surface py-24 md:py-32">
        <div className="px-4 md:px-6 responsive_container lg:w-[90%]">
            {/*============= HEADER =============*/}
            <div className="overflow-hidden">
                <SectionHeader
                    index="03"
                    label="Experience"
                    title="Where I've been building."
                    description="Roles across startups, agencies and product teams — from intern to sole frontend developer."
                    variants={slideLeft}
                />
            </div>

            {/*============= EXPERIENCE =============*/}
            <ol className="border-t border-border">
                {experienceData.map((job) => (
                    <motion.li
                        key={job.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        variants={fadeUp}
                        className="group grid gap-2 border-b border-border py-7 transition-colors duration-300 md:grid-cols-[200px_1fr_auto] md:gap-8 md:px-4 md:hover:bg-background"
                        >        
                        <p className="font-mono text-xs text-muted md:pt-1">{job.period}</p>

                        <div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                {job.role}{" "}
                                <span className="text-muted transition-colors duration-300 group-hover:text-primary">
                                · {job.company}
                                </span>
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                                {job.description}
                            </p>
                        </div>

                        <span className="h-fit w-fit rounded-full border border-border bg-background px-3 py-1 text-xs text-muted">
                            {job.type}
                        </span>
                    </motion.li>
                ))}
            </ol>

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
                    className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    <span className="text-primary">03.1</span>
                    <span className="h-px w-8 bg-border" />
                    Education
                </motion.h3>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-10 gap-4">
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
            
        </div>
    </section>
  )
}

export default Experience;