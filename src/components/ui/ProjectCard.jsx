"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import { scaleUp } from "@/animations";


const ProjectCard = ({project, index = 0}) => {

  return (
    <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={scaleUp}>
        <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-3xl border border-border bg-surface p-3 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-soft-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
            <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(420px_circle_at_var(--x)_var(--y),var(--primary-soft),transparent_45%)]"
            />
    
            {/*============= Image =============*/}
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-background">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    priority
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-soft transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                </span>
            </div>
    
             {/*============= Name And Technology =============*/}
            <div className="relative z-20 px-2 pt-5 pb-2">
                <div>
                    <h3 className="text-lg font-semibold tracking-tight capitalize transition-colors duration-300 group-hover:text-primary">
                    {project.name}
                    </h3>
                </div>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies?.map((t) => (
                    <li
                        key={t}
                        className="rounded-full capitalize border border-border bg-background hover:bg-primary/5 px-2.5 py-1 text-[11px] text-muted"
                    >
                        {t}
                    </li>
                    ))}
                </ul>
            </div>
        </a>
    </motion.article>
  )
}

export default ProjectCard;