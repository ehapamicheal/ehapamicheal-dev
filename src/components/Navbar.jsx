"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data";
import { containerVariants, fadeUp, scaleUp, zoomIn } from "@/animations";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { ArrowUpRightIcon, MenuIcon } from "lucide-react";
import { ExternalLinks } from "@/constants/external-links";
import clsx from "clsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    const sectionIds = ["home", ...navLinks.map(({ id }) => id)];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - window.innerHeight * 0.45) -
              Math.abs(b.boundingClientRect.top - window.innerHeight * 0.45),
          );

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  


  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div 
        className={`relative responsive_container md:w-[93%] flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "border-border bg-background/75 shadow-soft backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
        {/*============= Logo =============*/}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={scaleUp}
          className="">
          <a href="#home"
            aria-label="Home">
            <Image 
              src="/svgs/logo.svg"
              height={32}
              width={32}
              alt="Micheal Ehapa Logo"
              priority
            />
          </a>
        </motion.div>

        {/*============= DESKTOP NAVIGATION =============*/}
        <motion.ul 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="hidden lg:flex flex-row items-center gap-2">
            {navLinks.map((link) => (
              <motion.li 
                variants={zoomIn}
                key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative isolate rounded-full px-3.5 py-1.5 text-sm md:text-base transition-colors ${
                    active === link.id
                      ? "text-foreground"
                      : "text-muted hover:text-primary duration-300"
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-surface ring-1 ring-border"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  {link.label}
                </a>
              </motion.li>
            ))}
        </motion.ul>

        {/*============= MOBILE MENU =============*/}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={ExternalLinks.bookCallUrl}
            target="_blank"
            rel="noreferrer"
            // className=""
            // className={`${btnPrimary} max-sm:hidden`}
            className="group hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-soft-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-soft-primary active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Book a call
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center cursor-pointer justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <IoCloseOutline className="size-4" /> : <MenuIcon className="size-4" />}
          </button>
        </motion.div>

        {/*============= MOBILE NAVIGATION =============*/}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-17 left-0 w-full rounded-3xl border border-border bg-background/95 p-3 shadow-soft-lg backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col px-4 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={clsx("block text-sm transition-colors",
                        active === link.id ? "text-primary" : "hover:text-foreground duration-300 text-muted"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={ExternalLinks.bookCallUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 w-full group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-soft-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-soft-primary active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Book a call
                <ArrowUpRightIcon className="size-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;