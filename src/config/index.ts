import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sukkamit Sinarpa — Backend, QA & Full-Stack Developer",
  author: "Sukkamit Sinarpa",
  description:
    "Backend Developer with expertise in Node.js, NestJS, and the MERN stack. Experienced in building RESTful APIs and conducting QA testing.",
  lang: "en",
  siteLogo: "https://github.com/sukkamit.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/sukkamit" },
    { text: "Github", href: "https://github.com/sukkamit" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sukkamit Sinarpa",
    specialty: "Backend | QA | Full Stack",
    summary:
      "Backend Developer with expertise in Node.js, NestJS, and the MERN stack. Experienced in building RESTful APIs, designing databases, and conducting QA testing to deliver scalable and efficient enterprise applications.",
    email: "sukkamit.sin@gmail.com",
  },
  experience: [
    {
      company: "Ministry of Public Health",
      position: "Backend Developer (Intern)",
      startDate: "June 2025", 
      endDate: "November 2025", 
      summary: [
        "Completed a comprehensive 6-month internship program (ITDS397 & ITDS499).",
        "Developed the backend system for the corporate equipment management project.",
        "Designed and implemented RESTful APIs for the Equipment Borrowing & Distribution Module and Inspection & Maintenance Module.",
        "Architected database schemas (Entity) and developed Controllers and Services to handle complex business logic.",
        "Utilized Node.js, NestJS, and database management tools to ensure system stability and performance.",
      ],
    },
    {
      company: "FREEDOMVERSE CO., LTD.",
      position: "Quality Assurance (QA) Intern",
      startDate: "June 2024",
      endDate: "July 2024",
      summary: [
        "Conducted manual testing and created comprehensive test cases to ensure software quality and reliability.",
        "Developed automated test scripts using Robot Framework and Selenium for UI and integration testing.",
      ],
    },
  ],
  projects: [
    {
      name: "MU Clubbie (Admin System)",
      summary: "Developed the Full-Stack Admin Dashboard for a club management system in a 3-person team. (Demo: popartr81+123@gmail.com | Pass: 12345678)",
      linkPreview: "https://admin-muclubbie.onrender.com/login",
      linkSource: "#", 
      image: "/mu-clubbie.png", 
    },
    {
      name: "Mobile Application Development",
      summary: "Designed the UI using Figma and developed the mobile application front-end using the Flutter framework.",
      linkPreview: "https://www.figma.com/proto/18kWMark7LIbucyYm2470w/Project-Mobile-App?node-id=144-323&p=f&t=RufLFvmPXh46MAIz-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=259%3A770",
      linkSource: "https://github.com/Chonthichaa1/Project-Mobile-App",
      image: "/mobile-app.png",
    },
  ],
  about: {
    description: `
      I am a recent graduate with a Bachelor of Science in Digital Science and Technology (DST) from Mahidol University. I specialize in Backend Development, Quality Assurance (QA), and Full-Stack Engineering. 
      
      My technical toolkit includes Node.js, NestJS, React.js, and MongoDB, alongside automated testing frameworks like Robot Framework and Selenium. I am passionate about creating efficient enterprise systems and ensuring high software quality through rigorous testing methodologies.
    `,
    image: "https://github.com/sukkamit.png",
  },
};