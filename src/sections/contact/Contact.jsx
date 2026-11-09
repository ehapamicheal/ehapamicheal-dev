"use client";


import { useState } from "react";
import { slideLeft, slideRight, zoomInRight } from "@/animations";
import { motion} from "framer-motion";
import { socialLinks } from "@/data";
import { LuSend } from "react-icons/lu";
import toast from "react-hot-toast";
import { IoLocationOutline } from "react-icons/io5";
import SectionHeader from '@/components/ui/SectionHeader';
import { ExternalLinks } from "@/constants/external-links";
import { ArrowRightIcon, MailIcon, } from "lucide-react";
import clsx from "clsx";



const field = "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/10";

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
    <section id="contact" className="py-24 md:py-32">
        <div
            className="px-4 md:px-6 responsive_container lg:w-[90%]">
            {/*============ HEADER ============*/}
            <SectionHeader
                index="05"
                label="Contact"
                title="Let's build something great together."
                description="Have a project in mind or an opportunity to share? I'm always open to new ideas."
                variants={zoomInRight}
            />

            <div className="grid gap-6 md:grid-cols-[1fr_1.3fr] overflow-hidden">
                {/*============ Contact ============*/}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2}} 
                    variants={slideLeft}
                    className="flex flex-col gap-4 order-2 md:order-1">
                    <a
                        href={ExternalLinks.bookCallUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative overflow-hidden rounded-3xl bg-primary p-7 text-white transition duration-500"
                    >
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                        <p className="text-sm text-white/70">Prefer to talk?</p>
                        <p className="mt-2 text-2xl font-semibold tracking-tight">Book a call</p>
                        <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                        Schedule a 30-min call
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </a>
    
                    <div className="rounded-3xl border border-border bg-surface p-7">
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-center gap-3">
                                <MailIcon className="h-4 w-4 text-muted" />
                                <a 
                                    href={`mailto:${ExternalLinks.email}`}
                                    target="_blank"
                                    rel="noreferrer noopener" 
                                    className="transition-colors hover:text-primary">
                                    {ExternalLinks.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <IoLocationOutline className="h-4 w-4 text-muted" />
                                Nigeria
                            </li>
                        </ul>
                        
                        <div className="mt-7 flex gap-2 border-t border-border pt-6">
                            {socialLinks.map((link) => (
                                <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={link.name}
                                className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:scale-110 duration-700 hover:border-primary/50 hover:text-primary"
                                >
                                 <span className="size-4">
                                    {link.icon}
                                 </span>

                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div >
                            
                {/*============ Form ============*/}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2}} 
                    variants={slideRight}
                    className="order-1 md:order-2">
                    <form onSubmit={handleSubmit}
                        className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface py-7 px-4 md:px-7">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="grid gap-2 text-sm font-medium">
                                <label htmlFor="name">
                                    Name
                                </label>

                                <input 
                                    name="name"
                                    type="text"
                                    id="name"
                                    value={formData.name} 
                                    onChange={handleChange}
                                    required 
                                    placeholder="Your name" 
                                    className={field} 
                                />
                            </div>

                            <div className="grid gap-2 text-sm font-medium min-w-0">
                                <label htmlFor="email">
                                    Email
                                </label>

                                <input 
                                    name="email"
                                    type="email" 
                                    id="email"
                                    value={formData.email} 
                                    onChange={handleChange}
                                    required 
                                    placeholder="jane@company.com"
                                    className={field} 
                                />
                            </div>
                        </div>

                        <div className="grid flex-1 gap-0.5 text-sm font-medium">
                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                name="message" 
                                id="message" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                placeholder="Tell me about your project…"
                                className={`${field} resize-none`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className={clsx("group inline-flex items-center text-sm text-white font-medium justify-center self-start gap-2 whitespace-nowrap rounded-full px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5",
                                !isFormValid
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-primary hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-soft-primary cursor-pointer "
                                 )}
                            >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                Sending
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Send Message
                                    <LuSend className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 size-4" />
                                </span>
                            )}
                        </button>
                    </form>
                </motion.div >
            </div>
        </div>
   </section>
  )
}

export default Contact;