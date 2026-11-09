// ========================= NAVLINKS =========================
export const navLinks = [
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// ========================= STATS =========================
export const stats = [
  { value: "3+", label: "Years building for the web" },
  { value: "7", label: "Teams shipped with" },
  { value: "6+", label: "Featured projects live" },
];

// ========================= SERVICES =========================
import { Pen, Code, Bolt, Plug } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Production-ready web apps with Next.js, React and TypeScript — structured to scale and easy to maintain.",
    icon: Code,
  },
  {
    id: 2,
    title: "Design to Code",
    description:
      "Pixel-perfect, responsive interfaces translated faithfully from Figma, down to spacing and motion.",
    icon: Pen,
  },
  {
    id: 3,
    title: "Performance & Accessibility",
    description:
      "Fast loads, smooth interactions and accessible markup so every user gets a great experience.",
    icon: Bolt,
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Wiring interfaces to REST APIs with TanStack Query and Redux Toolkit for reliable, real-time data.",
    icon: Plug,
  },
] 

import { BsTwitterX } from "react-icons/bs";
import { BiLogoGithub } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";


export const socialLinks = [
  {
    id: 1,
    name: "X (Twitter)",
    icon: <BsTwitterX />,
    url: ExternalLinks.socials.x,
  },
  {
    id: 2,
    name: "GitHub",
    icon: <BiLogoGithub  />,
    url: ExternalLinks.socials.github,
  },
  {
    id: 3,
    name: "Linkedin",
    icon: <LiaLinkedinIn />,
    url: ExternalLinks.socials.linkedin,
  },
]

//========================= PROJECTS DATA =========================
export const projectData = [
  // {
  //   id: ,
  //   name: "",
  //   image: "/images/",
  //   url: "",
  //   technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
  // },
  {
    id: 1,
    name: "Onamini",
    image: "/images/onamini.png",
    url: "https://onamini.com",
    technologies: ["Nextjs", "Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    id: 2,
    name: "nama africa",
    image: "/images/nama.png",
    url: "https://nama.africa",
    technologies: ["Nextjs", "Tailwind css", "framer motion", "figma", "swiperjs"],
  },
  {
    id: 4,
    name: "TradeStack website",
    image: "/images/tradestack-web.png",
    description: "Built for users who want speed, best rates, security, and control without switching apps or worrying about trust.",
    url: "https://usetradestack.com",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    id: 5,
    name: "Bitlily 2.0",
    image: "/images/bitlily-2.png",
    url: "https://bitlily.vercel.app",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Typescript", "Redux", "swiperjs"],
  },
   {
    id: 6,
    name: "Bfree",
    image: "/images/bfree.png",
    url: "https://crypto.bfree.cards",
    technologies: ["html", "Css", "Figma", "javascript"],
  },
  {
    id: 7,
    name: "Bitlily",
    image: "/images/bitlily-5.png",
    url: "https://app.bitlily.io",
    technologies: ["html", "CSS", "javascript"],
  },
  {
    id: 8,
    name: "Love World Uk",
    image: "/images/love-world.png",
    url: "https://lwukzone4.org",
    technologies: ["Nextjs", "Tailwind css", "framer motion", "figma"],
  },
  {
    id: 9,
    name: "Lilly's empire",
    image: "/images/lillys-empire.png",
    url: "https://lillys-empire.vercel.app",
    technologies: ["typescript", "tailwind css", "Next.js", "framer motion", "Redux", "Json server"],
  },
  {
    id: 10,
    name: "Read To Impact",
    image: "/images/read-to-impact.png",
    // description: "Books have the extraordinary ability to transform minds, uplift spirits, and build better communities.",
    // description: "We provide support, and a platform for readers to connect, share, and grow together. At Read to Impact, we focus on several key initiatives to promote reading and literacy.",
    url: "https://read-to-impact.vercel.app",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    id: 11,
    name: "Tvflix Movies",
    image: "/images/tvflix.png",
    url: "https://ehapamicheal.github.io/tvflix",
    technologies: ["html", "CSS", "TMDB api", "javascript"],
  },
  {
    id: 12,
    name: "Gym Lenz",
    image: "/images/gym-lenz.png",
    url: "https://gym-lenz-iota.vercel.app",
    technologies: ["React", "CSS"],
  },
   {
    id: 13,
    name: "Algo Experts",
    image: "/images/algo.png",
    url: "https://algo-experts.vercel.app",
    technologies: ["React", "CSS", "Figma"],
  },
  {
    id: 14,
    name: "GigLedger",
    image: "/images/gigledger.png",
    url: "https://gigledger-omega.vercel.app",
    technologies: ["typescript", "tailwind css", "Next.js", "framer motion", "Swiperjs", "Figma"],
  },
 

  // {
  //   id: 2,
  //   name: "Tvflix Movies",
  //   image: "/images/tvflix-img.png",
  //   description: "",
  //   url: "https://ehapamicheal.github.io/tvflix",
  //   technologies: ["html", "CSS", "Mdnp api", "javascript"],
  // },
  // {
  //   id: 5,
  //   name: "Photography",
  //   image: "/images/photography-img.png",
  //   description: "",
  //   url: "https://ehapamicheal.github.io/photography",
  //   technologies: ["html", "CSS", "javascript"],
  // },
  // {
  //   id: 6,
  //   name: "Social Media",
  //   image: "/images/E-social-img.png",
  //   description: "",
  //   url: "https://ehapamicheal.github.io/E-social",
  //   technologies: ["html", "CSS", "javascript"],
  // },
  // {
  //   id: 8,
  //   name: "Summer Fashion",
  //   image: "/images/Artic-img.png",
  //   description: "",
  //   url: "https://ehapamicheal.github.io/Artic",
  //   technologies: ["html", "CSS", "javascript"],
  // },

  //   id: 4,
  //   name: "",
  //   image: "",
  //   description: "",
  //   url: "",
  // },
]


//  SKILLS DATA
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiFramer,
  SiBitbucket,
  SiReactquery,
  SiPostman
} from "react-icons/si";
import { ExternalLinks } from "./constants/external-links";

export const skillsData = [
  { id: 1, name: "React.js", icon: FaReact },
  { id: 2, name: "Next.js", icon: SiNextdotjs },
  { id: 3, name: "HTML", icon: FaHtml5 },
  { id: 4, name: "CSS", icon: FaCss3Alt },
  { id: 5, name: "JavaScript", icon: FaJs },
  { id: 6, name: "Tailwind CSS", icon: SiTailwindcss },
  { id: 7, name: "TypeScript", icon: SiTypescript },
  { id: 8, name: "Redux Toolkit", icon: SiRedux },
  { id: 9, name: "Git", icon: FaGitAlt },
  { id: 10, name: "GitHub", icon: FaGithub },
  { id: 11, name: "Figma", icon: FaFigma },
  { id: 12, name: "REST API", icon: SiPostman },
  { id: 13, name: "Bitbucket", icon: SiBitbucket },
  { id: 14, name: "Framer Motion", icon: SiFramer },
  { id: 15, name: "TanStack Query", icon: SiReactquery },
  { id: 16, name: "Bootstrap", icon: FaBootstrap },
];


// EXPERICENCE DATA
export const experienceData = [
  {
    id: "halal",
    period: "Nov 2025 - Present",
    role: "Frontend Engineer",
    company: "Halal",
    type: "Full Time",
    description: "Built and maintained scalable, responsive web applications using Next.js and React, delivering user-friendly interfaces and integrating backend APIs and databases.",
    // technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "gemspread-publishing",
    period: "Jun 2025 - Sep 2025",
    role: "Frontend Developer",
    company: "Gemspread Publishing",
    type: "Contract",
    description: "Sole Frontend Developer, responsible for designing and implementing the frontend architecture using Next.js, React, and TypeScript.",
  },
  {
    id: "pdsoft-technologies",
    period: "Sep 2023 – Feb 2025",
    role: "Frontend Developer",
    company: "PDSoft Technologies",
    type: "Full Time",
    description:
      "Ensured the user interface was intuitive and user-friendly by implementing best practices in usability and interaction design.",
  },
  {
    id: "the-qa-school",
    period: "Nov 2024 – May 2025",
    role: "Frontend Developer",
    company: "The QA School",
    type: "Volunteer",
    description: "Designed and developed the entire ReactJS frontend for the HeritageHub web application, creating responsive, visually appealing, and user-friendly interfaces that delivered a seamless user experience aligned with project goals.",
  },
  {
    id: "cyberbuddies-ltd",
    period: "Dec 2023 – Jun 2024",
    role: "Frontend Developer",
    company: "Cyberbuddies Ltd",
    type: "Contract",
    description:
      "Built and enhanced web applications using HTML, CSS, and JavaScript with a focus on responsiveness and clean UI.",
  },
  {
    id: "tech-diversity",
    period: "Dec 2022 – Jul 2023",
    role: "Junior Frontend Developer",
    company: "Tech Diversity",
    type: "Contract",
    description:
      "Collaborated with designers and developers to build responsive websites following industry best practices.",
  },
  {
    id: "top-universe-africa",
    period: "Mar 2021 – Aug 2021",
    role: "Frontend Developer",
    company: "Top Universe Africa",
    type: "Intern",
    description:
      "Participated in code reviews and learned to write maintainable, performant frontend code.",
  },
];


// EDUCATION DATA
export const educationData = [
  {
    id: 1,
    period: "Jan 2021 – 2024",
    title: "Bachelor’s Degree",
    institution: "National Open University of Nigeria",
    description: "Public Administration",
  },
  {
    id: 2,
    period: "2014 – 2016",
    title: "National Diploma",
    institution: "The Polytechnic Ibadan",
    description: "Local Government Administration",
  },
  {
    id: 3,
    period: "2022 – 2023",
    title: "Frontend Bootcamp",
    institution: "InstinctHub",
    description:
      "Hands-on training in modern frontend development, focusing on React, Next.js, and real-world projects.",
  },
];

