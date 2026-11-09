"use client";

import Image from "next/image";
import { fadeUp, containerVariants, scaleIn, slideLeft, slideRight } from "@/animations";
import { motion} from "framer-motion";
// import { stats } from "@/data";
import { ExternalLinks } from "@/constants/external-links";
import { ArrowUpRightIcon, DownloadIcon } from "lucide-react";


const Hero = () => {
  return (
   <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
        {/*============= soft grid + glow backdrop =============*/}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-105 w-180 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        />
  
        {/* <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 md:grid-cols-[1.4fr_1fr] md:px-6"> */}
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.4fr_1fr] md:px-6">
          {/*============= LEFT SIDE =============*/}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="overflow-hidden"
          >
            <motion.div
              variants={scaleIn}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </motion.div>
  
            <motion.h1
              variants={slideLeft}
              className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
            >
              Hi, I&apos;m Micheal Ehapa.
              <span className="block text-muted">
                I build interfaces people{" "}
                <span className="text-primary">enjoy</span> using.
              </span>
            </motion.h1>
  
            <motion.p
              variants={slideRight}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              A UX-focused frontend developer with 3+ years of experience turning
              Figma designs into fast, accessible, pixel-perfect web apps with
              Next.js, React and TypeScript.
            </motion.p>
  
            <motion.div 
                variants={fadeUp} 
                className="mt-8 flex flex-wrap gap-3">
                <a href={ExternalLinks.bookCallUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-soft-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-soft-primary active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    Book a call
                    <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                
                <a 
                    href="/pdfs/Ehapa Micheal Cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download 
                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    Download CV
                    <DownloadIcon className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
            </motion.div>
  
            {/* <motion.dl
                variants={scaleIn}
                className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
                >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight md:text-3xl">{s.value}</dd>
                  <dd className="mt-1 text-xs leading-snug text-muted md:text-sm">{s.label}</dd>
                </div>
              ))}
            </motion.dl> */}
          </motion.div>
  
          {/*============= RIGHT SIDE IMAGE =============*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            // className="relative flex items-center lg:items-start justify-center lg:justify-start order-1 lg:order-2 mx-auto w-full max-w-sm"
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-2 md:-inset-3 -z-10 rounded-4xl border border-border bg-surface" />

            {/* Two border lines circling the portrait in opposite directions */}
            {/* <div aria-hidden className="portrait-ring -inset-3 rounded-4xl" /> */}
            <div aria-hidden className="portrait-ring -inset-2 md:-inset-3 rounded-4xl" />

            <div className="relative">
              <div
                aria-hidden
                className="portrait-ring hidden md:block portrait-ring-reverse -inset-1.25 rounded-[calc(1.5rem+5px)]"
              />

              <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
                <Image
                  src="/images/micheal.jpg"
                  alt="Micheal Ehapa"
                  fill
                  priority
                  sizes="(min-width: 768px) 384px, 90vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            {/* <div className="absolute -bottom-5 left-0 md:-left-5 rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-soft backdrop-blur">
              <p className="text-xs text-muted">Currently</p>
              <p className="text-sm font-medium">Frontend Engineer @ Halal</p>
            </div> */}
            <div className="absolute -bottom-5 left-0 md:-left-5 rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-soft backdrop-blur">
            <p className="text-xs text-muted">Focused on</p>
            <p className="text-sm font-medium">
                Crafting modern web experiences
            </p>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default Hero;