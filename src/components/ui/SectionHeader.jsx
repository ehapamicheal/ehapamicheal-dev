"use client";

import { fadeUp } from "@/animations";
import { motion } from "framer-motion";

const SectionHeader = ({ index, label, title, description, variants = fadeUp}) => {
  return (
    <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={variants}
        className="mb-12 md:max-w-2xl md:mb-16">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="text-primary">{index}</span>
            <span className="h-px w-8 bg-border" />
            {label}
        </p>
        
        <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            {title}
        </h2>
        
        {description && (
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {description}
            </p>
        )}
    </motion.div>
  )
}

export default SectionHeader;