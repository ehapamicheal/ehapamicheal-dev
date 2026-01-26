"use client";


import { useState } from "react";
import { fadeUp, containerVariants, scaleIn, slideLeft, slideRight,  zoomInUp, zoomIn, zoomInRight, bounceIn } from "@/animations";
import { motion} from "framer-motion";
import { socialLinks } from "@/data";
import { LuSend } from "react-icons/lu";
import toast from "react-hot-toast";
import { IoLocationOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";


const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    // FORM SPREE
    const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            } else {
            toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Formspree error:", error);
            toast.error("Failed to send message.");
        } finally {
            setIsSubmitting(false);
        }
    };


    // CHECK if inputs are field beofre button is enabled
    const isFormValid =
        formData.name?.trim() &&
        formData.email?.trim() &&
        formData.message?.trim();




  return (
   <div className="relative bg-bg-color py-20">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
        </div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}} 
            variants={containerVariants}
            className="relative z-10 px-5 md:px-7 xl:px-14 overflow-hidden">
            {/*============ HEADER ============*/}
            <div className="text-center mb-16 space-y-6">
                <motion.div 
                    variants={zoomInUp}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                    <FiMessageSquare className="text-base text-primary" />
                    <h4 className="text-sm text-primary font-medium tracking-wider uppercase">Get In Touch</h4>
                </motion.div>

                <div className="space-y-4">
                    <motion.h2
                        variants={fadeUp} 
                        className="text-4xl lg:text-5xl text-white font-semibold leading-tight">Let's <span className="text-primary">Work</span> Together</motion.h2>
                    <motion.p 
                        variants={scaleIn}
                        className="text-base ms:text-lg text-white/60 font-normal w-full max-w-2xl mx-auto">
                        Have a project in mind? let's dicuss how we can bring your ideas to life.
                    </motion.p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 overflow-hidden">
                <motion.div 
                    variants={slideLeft}
                    className="h-full">
                    <div className="bg-white/5 border h-full border-white/10 hover:border-primary/30 transition-all duration-300 rounded-2xl py-8 px-4 xl:px-8">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="">
                                <label htmlFor="name" className="text-sm ms:text-base block mb-2 font-medium text-white/80">
                                    Name
                                </label>
                                <input type="text" 
                                    name="name" 
                                    id="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-normal placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                                />
                            </div>

                            <div className="">
                                <label htmlFor="email" className="text-sm ms:text-base block mb-2 font-medium text-white/80">
                                    Email
                                </label>
                                <input type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-normal placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                                />
                            </div>

                            <div className="">
                                <label htmlFor="message" className="text-sm ms:text-base block mb-2 font-medium text-white/80">
                                    Message
                                </label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell me about your project"
                                    className="w-full px-4 py-3 bg-white/5 resize-none border border-white/10 rounded-xl text-white font-normal placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                                />
                            </div>

                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    disabled={!isFormValid || isSubmitting}
                                    className={`rounded-[15px] px-8 py-4 w-full group flex items-center justify-center font-semibold text-lg md:text-xl text-white transition-all duration-300 ${
                                        !isFormValid
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-linear-to-r from-primary/10 to-primary hover:bg-primary/15 text-white hover:shadow-2xl hover:shadow-primary/30 cursor-pointer"
                                        
                                    }`}
                                    >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                        Sending
                                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Send Message
                                            <LuSend className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </button>

                            </div>
                        </form>
                    </div>
                </motion.div>
               
                {/*============ CONTACT INFO ============*/}
                <div 
                    className="space-y-8">
                    <div className="space-y-4">
                            <motion.h3
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{amount: 0.2}} 
                             className="text-2xl md:text-3xl font-semibold text-white">Let's Connect</motion.h3>
                            <motion.p 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{amount: 0.2}}
                                variants={zoomIn}
                                className="text-base md:text-lg font-normal text-white/60 leading-relaxed">
                             I'm always open to dicussing new projects, creative ideas, or opportunities to be part of your vision, Feel free to reach out!
                            </motion.p>
                    </div>

                    <div className="space-y-4">
                        {/*============ EMAIL ============*/}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            variants={slideRight}
                            className="">
                            <div className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/30 transition-all duration-500">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl">
                                        <MdOutlineEmail className="text-base text-primary" />
                                    </div>

                                    <div className="space-y-1 flex-1">
                                        <p className="text-sm text-white/60 font-normal">Email</p>
                                        <a href="mailto:ehapamicheal@gmail.com" className="text-white break-all whitespace-normal hover:text-primary transition-colors duration-300 font-medium">
                                            ehapamicheal@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                        

                        {/*============ LOCATION ============*/}
                        <motion.div
                            initial="hidden"
                                whileInView="visible"
                                viewport={{amount: 0.2}} 
                            variants={zoomInRight}
                            className="">
                            <div className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/30 transition-all duration-500">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl">
                                        <IoLocationOutline  className="text-base text-primary" />
                                    </div>

                                    <div className="space-y-1 flex-1">
                                        <p className="text-sm text-white/60 font-normal">Location</p>
                                        <p className="text-white transition-colors duration-300 font-medium">Ibadan, Nigeria</p>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                            </div>
                        </motion.div> 
                       
                    </div>

                    {/*============ CONNECT WITH ME ============*/}
                    <div className="space-y-4">
                        <motion.p 
                            variants={bounceIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            className="text-sm text-white/60 font-normal">Connect with me</motion.p>

                        <div className="flex gap-3">
                            {socialLinks.map((link) => (
                                <motion.div 
                                    variants={fadeUp}
                                    key={link.id}
                                    className="">

                                    <a href={link.url} className="flex items-center justify-center w-13 h-13 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 hover:scale-110 transition-transform duration-700 group" target="_blank" rel="noopener noreferrer" >
                                        <span className="text-xl text-white/60 group-hover:text-primary transition-colors">{link.icon}</span>
                                    </a>

                                    
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
   </div>
  )
}

export default Contact;