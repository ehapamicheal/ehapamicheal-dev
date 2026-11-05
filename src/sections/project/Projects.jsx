"use client";

import { zoomIn } from "@/animations";
import { motion } from "framer-motion";
import { projectData } from "@/data";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

const INITIAL_COUNT = 6;

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);

    const displayedProjects = showAllProjects ? projectData : projectData.slice(0, INITIAL_COUNT);

    const handleShowMore = () => {
        if (showAllProjects) {
            setShowAllProjects(false);

            requestAnimationFrame(() => {
            const button = document.getElementById("show-more-projects");

            button?.scrollIntoView({
                behavior: "instant",
                // behavior: "smooth",
                block: "center",
            });
            });

            return;
        }

        setShowAllProjects(true);
    };

  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-6">
        <div 
            className="responsive_container lg:w-[90%]">
            <SectionHeader
                index="02"
                label="Selected work"
                title="Projects I've designed, built and shipped."
                description="A selection of products and marketing sites, built with care for detail and motion."
            />

            <div className="grid md:grid-cols-2 gap-6">
                {displayedProjects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} /> 
                ))}       
            </div>
            

            {/*============ Show more and less Button  ============ */}
            {projectData.length > INITIAL_COUNT && (
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={zoomIn}
                    viewport={{ amount: 0.2 }}
                    className="mt-10 flex justify-center">
                    <button
                        type="button"
                        id="show-more-projects"
                        onClick={handleShowMore}
                        className="group inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:text-primary/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        {showAllProjects ? "Show Less" : "Show More"}
                    </button>
                </motion.div>
            )}

        </div>
      
    </section>
  )
}

export default Projects;