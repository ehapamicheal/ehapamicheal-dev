"use client";

import { skillsData } from "@/data";
import { motion } from "framer-motion";
import { fadeUp, containerVariants, flipY } from "@/animations";

const MySkills = () => {

  const getSkillColor = (name) => {
    switch (name) {
      case "React.js": return "text-sky-400";
      case "Next.js": return "text-black dark:text-white";
      case "HTML": return "text-orange-500";
      case "CSS": return "text-blue-500";
      case "JavaScript": return "text-yellow-400";
      case "Tailwind CSS": return "text-cyan-400";
      case "TypeScript": return "text-blue-600";
      case "Redux Toolkit": return "text-purple-500";
      case "Git": return "text-orange-600";
      case "GitHub": return "text-black";
      case "Figma": return "text-pink-500";
      case "REST API": return "text-orange-400";
      case "Bitbucket": return "text-blue-700";
      case "Framer Motion": return "text-blue-500";
      case "TanStack Query": return "text-red-500";
      case "Bootstrap": return "text-purple-600";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="py-20 bg-second-bg-color">

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            variants={containerVariants}
            className="px-5 md:px-7 xl:px-14">

            <motion.h2
                variants={fadeUp} 
                className="text-4xl lg:text-5xl text-white font-semibold text-center mb-16">
                My <span className="text-primary">Skills</span>
            </motion.h2>


            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-8">
                {skillsData.map((skill) => {
                    const Icon = skill.icon;
                    const colorClass = getSkillColor(skill.name);

                    return (
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            variants={flipY}
                            key={skill.id} 
                            className="h-full">
                            <div
                            className={`group h-full space-y-4 flex flex-col items-center justify-center p-6 border 
                                bg-white/5 hover:bg-white/10 border-white/5 rounded-2xl
                                hover:border-primary/50 transition-all duration-500 hover:scale-105
                                ${colorClass}`}
                            >
                            <Icon
                                size={48}
                                className="transition-colors duration-300 group-hover:grayscale"
                            />

                            <p className="text-sm font-medium text-white group-hover:text-current transition-colors duration-300 text-center">
                                {skill.name}
                            </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    </div>
  );
};

export default MySkills;
