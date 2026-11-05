"use client";

import { zoomCard } from "@/animations";
import { motion } from "framer-motion";
import { services } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-6">
        <div className="responsive_container lg:w-[90%]">
            <SectionHeader
              index="01"
              label="What I do"
              title="Thoughtful frontends, from design file to deployment."
              description="I partner with designers and teams to ship interfaces that look sharp, feel smooth and perform well."
            />
    
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {services.map((s, i) => (
                    <motion.article 
                        initial="hidden"
                        whileInView="visible"
                        variants={zoomCard}
                        custom={i}
                        className=""
                        key={s.id}
                        >
                        <div className="group relative h-full rounded-3xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-background hover:shadow-soft-lg">
                            <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                                <s.icon className="size-5" />
                            </div>

                            <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services;