import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/project";
import MySkills from "@/sections/my-skills/MySkills";
import Contact from "@/sections/contact/Contact";
import Experience from "@/sections/experience/Experience";
import Services from "@/sections/services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <MySkills />
      <Contact />
    </main>
  );
}
