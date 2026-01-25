"use client";

import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/project";
import MySkills from "@/sections/my-skills/MySkills";
import Contact from "@/sections/contact/Contact";
import Experience from "@/sections/experience/Experience";

export default function Home() {
  return (
    <main className="pt-20 mt-10">
      <section id="home" className="scroll-mt-32"><Hero /></section>
      <section id="projects" className="scroll-mt-20"><Projects /></section>
      <section id="experience" className="scroll-mt-20"><Experience /></section>
      <section id="skills" className="scroll-mt-20"><MySkills /></section>
      <section id="contact" className="scroll-mt-20"><Contact /></section>
    </main>
  );
}
