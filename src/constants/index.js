import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Learner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "A Real Estate App",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2025 - July 2025",
    points: [
      "Developed a full-stack Real Estate application using React Native for a smooth and responsive mobile experience.",
      "Integrated Google Authentication for secure and seamless user sign-ups and logins.",
      "Implemented dynamic property listings and personalized user profiles for an interactive browsing experience.",
      "Utilized modern tools and technologies including Expo SDK 52, Appwrite, Tailwind CSS, and TypeScript to ensure scalability, maintainability, and high performance.",
    ],
  },
  {
    title: "GoCart",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2025 - Dec 2025",
    points: [
         "Authentication using Clerk with secure user sessions and role-based access.",
         "Product listing with dynamic categories and detailed product views.",
         "Cart and checkout system supporting COD and Stripe payments.",
         "Address management with add, select, and edit functionality.",
         "Order management with real-time order status tracking.",
         "Stripe payment gateway integration for secure online transactions.",
         "Backend APIs built with Next.js and MongoDB for scalable data handling.",
         "Responsive UI optimized for desktop, tablet, and mobile devices.",
    ],
  },
  {
    title: "Resume Analyzer",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2025 - June 2025",
    points: [
      "Built an AI-powered Resume Analyzer using React, React Router, and Puter.js to streamline candidate-job matching",
      "Implemented secure authentication for seamless user sign-up, login, and session handling.",
      "Integrated resume upload & storage using Puter.js for efficient file management and persistent data storage.Context Awareness Remembers previous messages for better conversation flow.",
      "Developed AI-powered evaluation to analyze resumes, match candidates with job listings, and provide personalized insights.",
      "Generated custom feedback & ATS-friendly scores for each job application using smart AI-driven evaluation techniques.",
      "Designed a clean, reusable, and responsive UI for an intuitive user experience with optimized state management in React.",
    ],
  },
  {
    title: "Admin Dashboard",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Theming & Customization Light/Dark mode, custom UI themes.",
      "Responsive Navigation Sidebar and top bar for easy access.",
      "Dynamic Tables Sorting, filtering, pagination, and CRUD operations.",
      "Charts & Analytics – Interactive data visualization with Recharts/Chart.js.",
      "Calendar & Scheduling Event management with daily, weekly, and monthly views.",
      "Kanban Board Drag-and-drop task management system.",
      "User Authentication Login, role-based access control (Admin, User).",
      "Notifications & Alerts Real-time updates and toast messages.",
      "Settings & Preferences Custom layouts, language support.",
      "Deployment & Optimization Hosted on Vercel/Netlify, PWA-ready.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Harsh was an absolute pleasure! He delivered a stunning, high-performance website that perfectly aligned with our brand vision. His attention to detail and creativity truly exceeded our expectations.",
    name: "Reecha Yadav",
    designation: "SDE",
    company: "Reecha Farms",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Harsh is a highly skilled developer who genuinely cares about client success. He took the time to understand our needs, offered innovative solutions, and ensured our product was delivered on time with exceptional quality.",
    name: "Reshav",
    designation: "SDE",
    company: "JSR",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Harsh optimized our website, our performance and engagement skyrocketed! We experienced a 50% increase in traffic, improved user experience, and faster load times. His expertise made a huge difference for our organization.",
    name: "Asha Lata",
    company: "Asha Lata Viklang Vikas Kendra",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GoCart",
    description:
      "GoCart is a full-stack e-commerce web application that allows users to browse products, manage carts, add delivery addresses, and place orders using Cash on Delivery or Stripe payments, with secure authentication and a responsive user experience.",   
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "red-text-gradient",
      },
    ],
    image: GoCartimg,
    source_code_link: "https://gocart-27ci.onrender.com/",
  },
  
  {
    name: "Career AI",
    description:
      "A full-stack career guidance platform built with **React** for the frontend, **Node.js + Express** for the backend, and **MySQL** (phpMyAdmin) as the database. It includes user authentication with **Clerk**, course enrollment features, admin content management, AI-powered roadmap generation, a career comparison tool, and a user dashboard to track personalized progress.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://career-ai-web.onrender.com/",
  },
  {
    name: "Resume Analyzer",
    description:
      "Build an AI-powered Resume Analyzer with React, React Router, and Puter.js! Implement seamless auth, upload and store resumes, and match candidates to jobs using smart AI evaluations. Get custom feedback and ATS scores tailored to each listing—all wrapped in a clean, reusable UI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://resume-analyzer-one.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
