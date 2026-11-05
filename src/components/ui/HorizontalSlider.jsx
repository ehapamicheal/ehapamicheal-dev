"use client";

import { motion } from "framer-motion";
import {cn} from "@/lib/utils";


const HorizontalSlider = ({
    items,
    renderItem,
    reverse = false,
    duration = 30,
    className,
}) => {


    return (
        <div className={cn("relative w-full overflow-hidden",
            className)}>
            <motion.div
                initial={{ x: reverse ? "-50%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-50%" }}
                transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                }}
                className="flex w-max"
            >
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="mx-2 shrink-0"
                    >
                        {renderItem(item, index)}
                    </div>
                ))}
            </motion.div>

            {/* Left fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-linear-to-r from-background to-transparent md:w-10" />

            {/* Right fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-linear-to-l from-background to-transparent md:w-10" />
        </div>
    );
};

export default HorizontalSlider;