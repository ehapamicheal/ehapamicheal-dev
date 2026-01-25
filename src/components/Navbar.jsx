"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data";
import { containerVariants, slideLeft, zoomIn, zoomInLeft } from "@/animations";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          window.scrollY >= offset &&
          window.scrollY < offset + height
        ) {
          setActiveLink(id);
        }
      });

      setIsSticky(window.scrollY > 100);
      setIsOpen(false); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${isSticky
      ? "bg-bg-color/60 backdrop-blur-xl"
      : "bg-bg-color"
    }`}
  >

      <div className="flex items-center justify-between px-6 py-4 lg:px-20 overflow-hidden">
      {/*============= Logo =============*/}
      <motion.div 
         initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        variants={zoomInLeft}
        className="">
        <a href="#home" className="font-semibold flex items-center text-white">
          <span className="text-primary text-[30px] md:text-[35px]">M</span><span className="text-[30px] hidden lg:block md:text-[35px]">icheal.</span>
        </a>
      </motion.div>

      {/*============= DESKTOP NAVIGATION =============*/}
      <div className="hidden lg:flex">
        <motion.ul 
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2}}
          variants={containerVariants}
          className="flex flex-row items-center gap-8">
            {navLinks.map((link) => (
              <motion.li 
                variants={zoomIn}
                key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-lg transition duration-500 ${
                    activeLink === link.id
                      ? "text-primary font-bold"
                      : "text-white hover:text-primary font-semibold"
                  }`}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
      </div>

      {/*============= MOBILE MENU =============*/}
      <div className="lg:hidden">
        <button type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="cursor-pointer w-8 h-8 hover:bg-primary/10 transition-colors duration-300 group rounded-sm flex items-center justify-center"
          onClick={handleOpen}
        >
          {isOpen ? <IoCloseOutline className="text-primary text-2xl group-hover:rotate-90 duration-700 transition-transform inline-flex" /> : <FiMenu className="text-primary text-2xl inline-flex" />}
        </button>
      </div>

      {/*============= MOBILE NAVIGATION =============*/}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
          initial={{ opacity: 0, x: 80,  }}
          animate={{ opacity: 1, x: 0, }}
          exit={{ opacity: 0, x: 80,}}
          transition={{duration: 0.6, ease: "easeInOut"}}
            className="absolute top-25 left-0 w-full z-40 h-screen px-6 lg:hidden"
          >
            <div className="bg-linear-to-r from-bg-color via-black to-bg-color z-50 backdrop-blur-xl border border-primary px-4 py-8 w-full max-w-xl mx-auto rounded-2xl overflow-hidden">
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center gap-6">    
                {navLinks.map((link) => (
                  <motion.li
                    variants={slideLeft}
                     key={link.id}>
                    <a  
                      href={`#${link.id}`}
                      className={`text-base ms:text-lg transition duration-300 ${
                        activeLink === link.id
                          ? "text-primary font-bold"
                          : "text-white hover:text-primary font-semibold" 
                      }`}
                      onClick={handleOpen}
                    >
                      {link.label}
                    </a>
                  </motion.li>     
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        

    
    </div>
    </nav>
  );
};

export default Navbar;
