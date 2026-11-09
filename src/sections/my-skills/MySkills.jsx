"use client";

import { skillsData } from "@/data";
import { scaleUp } from "@/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import HorizontalSlider from "@/components/ui/HorizontalSlider";
import clsx from "clsx";

const MySkills = () => {

  const getSkillColor = (name) => {
    switch (name) {
      case "React.js": return "text-sky-400";
      case "Next.js": return "text-white";
      case "HTML": return "text-orange-500";
      case "CSS": return "text-blue-500";
      case "JavaScript": return "text-yellow-400";
      case "Tailwind CSS": return "text-cyan-400";
      case "TypeScript": return "text-blue-600";
      case "Redux Toolkit": return "text-purple-500";
      case "Git": return "text-orange-600";
      case "GitHub": return "text-white";
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
    <section id="skills" className="py-24 md:py-32 px-4 md:px-6">
        <div className="responsive_container lg:w-[90%]">
            {/*============= Header =============*/}
            <SectionHeader
                index="04"
                label="Skills & tools"
                title="The stack I reach for."
                description="Hover or touch to pause, then drag, swipe or scroll sideways to explore."
                variants={scaleUp}
            />

            {/*============= SLiders =============*/}
            <div className="space-y-10">
                <HorizontalSlider
                    items={skillsData}
                    duration={35}
                    renderItem={(item) => (
                        <div className="group flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 shadow-soft-sm transition-all duration-300 hover:border-primary/40 hover:bg-background hover:shadow-soft">
                            <span className="flex size-10 items-center justify-center rounded-xl bg-background ring-1 ring-border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                            <item.icon className={clsx("size-5", getSkillColor(item.name))} />
                            </span>
                            <h3 className="text-foreground text-sm capitalize tracking-widest">
                                {item.name}
                            </h3>
                        </div>
                    )}
                /> 

                <HorizontalSlider
                    items={skillsData}
                    reverse
                    duration={40}
                    renderItem={(item) => (
                        <div className="group flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 shadow-soft-sm transition-all duration-300 hover:border-primary/40 hover:bg-background hover:shadow-soft">
                            <span className="flex size-10 items-center justify-center rounded-xl bg-background ring-1 ring-border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                            <item.icon className={clsx("size-5", getSkillColor(item.name))} />
                            </span>
                            <h3 className="text-foreground text-sm capitalize tracking-widest">
                                {item.name}
                            </h3>
                        </div>
                    )}
                /> 
            </div>
        </div>
    </section>
  );
};

export default MySkills;
