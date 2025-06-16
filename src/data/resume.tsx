import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Chandan H Gunaga",
  initials: "CHG",
  url: "https://chandangunaga.dev", // Update with your actual portfolio URL
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "Director at Mindorigin Technologies, a fintech company empowering growth through tailored financial and marketing solutions. Frontend engineering expert with 4+ years specializing in trading platforms and leading development teams.",
  summary:
    "Director at Mindorigin Technologies, a fintech company focused on empowering growth through tailored financial and marketing solutions. With 4+ years of experience in frontend engineering, I've progressed from developer to technical leader, specializing in building complex trading platforms and scalable web applications. Proven expertise in leading development teams, implementing modern JavaScript frameworks, and translating business requirements into high-performance technical solutions.",
  avatarUrl: "/chandan.png", // Update with your actual avatar path
  skills: [
    "ReactJS",
    "NextJS",
    "Redux",
    "TypeScript",
    "JavaScript",
    "GSAP",
    "ThreeJS",
    "Framer Motion",
    "Tailwind CSS",
    "Material UI",
    "WebSockets",
    "gRPC",
    "RxJS",
    "Blockchain",
    "Solidity",
    "C/C++",
    "SQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chandangunaga1307@gmail.com",
    tel: "+91 7899252504",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/chandangunaga", // Update with actual GitHub URL
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/chandangunaga", // Update with actual LinkedIn URL
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/chandangunaga", // Update with actual X/Twitter URL
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@chandangunaga", // Update with actual YouTube URL
        icon: Icons.youtube,
        navbar: false,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://chandangunaga.dev", // Update with actual portfolio URL
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:chandangunaga1307@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mindorigin Technologies",
      href: "https://mindorigin.com", // Update with actual company URL
      badges: ["Director", "Fintech"],
      location: "Bangalore",
      title: "Director",
      logoUrl: "/mindorigin.png", // Update with actual logo path
      start: "June 2023",
      end: "Present",
      description:
        "Leading a fintech company focused on empowering growth through tailored financial and marketing solutions. Spearheaded development of complex real-time trading applications with comprehensive order management, live market data, and portfolio tracking. Developed 'Enotifiers' email marketing tool serving 10,000+ users with 25% increase in open rates. Built and mentored team of 5+ frontend developers, implementing code quality standards that reduced bundle size by 30% and improved performance scores from 65 to 90.",
    },
    {
      company: "Robosoft Technologies",
      href: "https://robosoftin.com",
      badges: [],
      location: "Udupi",
      title: "Software Engineer (ReactJS Developer)",
      logoUrl: "/robosoft.png", // Update with actual logo path
      start: "August 2022",
      end: "May 2023",
      description:
        "Worked on HP Limited Edition project, identified web-based user interactions and developed UI components using React concepts. Translated designs and wireframes into high-quality code following ReactJS workflows. Completed intensive training in ReactJS and Redux toolkit.",
    },
    {
      company: "Agile Technologies",
      href: "https://agiletech.com", // Update with actual company URL
      badges: ["Intern"],
      location: "Mangalore",
      title: "Student Developer (Part-time)",
      logoUrl: "/agile.png", // Update with actual logo path
      start: "August 2021",
      end: "October 2021",
      description:
        "Built a car showroom website with comprehensive functionalities using ReactJS, JavaScript, and MaterialUI. Created features to enhance user experience while ensuring responsive web design optimized for all devices.",
    },
  ],

  education: [
    {
      school: "A.J Institute of Engineering And Technology",
      href: "https://ajiet.edu.in",
      degree: "Bachelor of Engineering - Information Science and Engineering",
      logoUrl: "/ajiet.png", // Update with actual logo path
      start: "2018",
      end: "2022",
    },
    {
      school: "M.E.S Chaitanya P.U College",
      href: "https://chaitanyacollegesirsi.com", // Update with actual URL
      degree: "Class XII - PCMB (95%)",
      logoUrl: "/chaitanya.png", // Update with actual logo path
      start: "2016",
      end: "2018",
    },
    {
      school: "New English School (E.M)",
      href: "#",
      degree: "Class X (98%)",
      logoUrl: "/nes.png", // Update with actual logo path
      start: "2015",
      end: "2016",
    },
  ],

  projects: [
    {
      title: "Trading Platform",
      href: "#", // Update with actual project URL if available
      dates: "2024 - Present",
      active: true,
      description:
        "Built a comprehensive financial trading platform with real-time data visualization, order management, and portfolio tracking. Implemented WebSocket connections for instant market updates and used Redux for complex state management.",
      technologies: [
        "NextJS",
        "Redux",
        "WebSockets",
        "Tailwind CSS",
        "SASS",
        "RxJS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "#", // Update with actual URL
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "", // Add video URL if available
    },
    {
      title: "Virtual Learn",
      href: "#", // Update with actual project URL if available
      dates: "November 2023",
      active: true,
      description:
        "Web-based platform designed to manage and monitor activities of an online learning platform. Allows administrators to add, edit, delete courses, manage users, monitor progress, and generate reports.",
      technologies: [
        "ReactJS",
        "Redux Toolkit",
        "Material UI",
        "Axios",
        "NPM packages",
      ],
      links: [
        {
          type: "Source",
          href: "#", // Update with GitHub URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Blockchain Investment System",
      href: "#", // Update with actual project URL if available
      dates: "May 2022",
      active: false,
      description:
        "A web application built to solve major problems relating to online fund transfer, providing enhanced security and transparency to users through blockchain technology.",
      technologies: [
        "Blockchain",
        "ReactJS",
        "Ethereum",
        "Solidity",
        "Smart Contracts",
      ],
      links: [
        {
          type: "Source",
          href: "#", // Update with GitHub URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "E-Commerce Site (Amazon Clone)",
      href: "#", // Update with actual project URL if available
      dates: "October 2023",
      active: false,
      description:
        "Web-based e-commerce application replicating Amazon's design and functionalities with login authentication and payment system integration.",
      technologies: [
        "ReactJS",
        "Redux Toolkit",
        "Firebase",
        "Stripe",
        "React Animations",
      ],
      links: [
        {
          type: "Source",
          href: "#", // Update with GitHub URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Image Compression using Huffman Coding",
      href: "#", // Update with actual project URL if available
      dates: "January 2022",
      active: false,
      description:
        "Implementation of Huffman coding greedy algorithm for image compression, demonstrating one of the basic compression methods useful in image and video compression standards.",
      technologies: [
        "Data Structures",
        "Algorithms",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "#", // Update with GitHub URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "IEEE NSD Hackathon 2020",
      dates: "February 2020",
      location: "Canara Engineering College, Mangalore",
      description:
        "Built a conceptual project and worked in a team of 3 to develop an innovative solution in a competitive 24-hour hackathon, beating 30+ teams from across the region.",
      image: "/ieee-hackathon.png", // Update with actual image path
      win: "1st Place Winner",
      links: [],
    },
    {
      title: "Student of the Year Award",
      dates: "2019",
      location: "AJIET, Mangalore",
      description:
        "Awarded the prestigious 'Best Student Award' at AJIET for outstanding academic performance, leadership qualities, and contributions to college activities.",
      image: "/student-award.png", // Update with actual image path
      win: "Best Student Award",
      links: [],
    },
    {
      title: "AAKAR - State Level Techno Cultural Fest",
      dates: "2020, 2022",
      location: "Karnataka, India",
      description:
        "Served as Student Chief Coordinator, managing a team of 25+ volunteers and coordinating technical and cultural events with 2000+ participants, securing 15+ industry sponsors.",
      image: "/aakar-fest.png", // Update with actual image path
      win: "Leadership Role - Chief Coordinator",
      links: [],
    },
    {
      title: "National Level Science Fest 2016",
      dates: "2016",
      location: "Trissur, Kerala",
      description:
        "Recognized for excellence in scientific innovation, advancing from state-level competition to receive Wipro Special Award at the national level. Achieved 1st place in state level competition.",
      image: "/science-fest.png", // Update with actual image path
      win: "Wipro Special Award & State Level 1st Place",
      links: [],
    },
    {
      title: "Sir CV Raman Youth Scientist Award",
      dates: "2016",
      location: "Karnataka, India",
      description:
        "Selected from 200+ candidates for demonstrating exceptional scientific aptitude and research potential at the state level. Honored by multiple organizations for outstanding scientific contributions.",
      image: "/cv-raman-award.png", // Update with actual image path
      win: "State Level Recognition",
      links: [],
    },
    {
      title: "Student Association - President",
      dates: "2019-2020",
      location: "AJIET, Mangalore",
      description:
        "Served as President of Student Association HIEKA, leading student initiatives and representing student interests. Also served as Technical Committee Head, conducting numerous technical and cultural events, soft-skills training, and organizing workshops impacting over 2000 students.",
      image: "/hieka-leadership.png", // Update with actual image path
      win: "President & Technical Committee Head",
      links: [],
    },
  
  ],

  achievements: [
    {
      title: "IEEE NSD Hackathon Winner",
      date: "February 2020",
      description: "Won 1st place among 30+ teams in a 24-hour competitive hackathon at Canara Engineering College, Mangalore."
    },
    {
      title: "Wipro Special Award - National Science Fest",
      date: "2016",
      description: "Recognized for excellence in scientific innovation, advancing from state-level competition to receive special recognition at the national level held at Trissur, Kerala."
    },
    {
      title: "Sir CV Raman Youth Scientist Award",
      date: "2016",
      description: "Selected from 200+ candidates for demonstrating exceptional scientific aptitude and research potential at the state level."
    },
    {
      title: "Student of the Year",
      date: "2019",
      description: "Awarded best student award at AJIET in 2019 for outstanding academic and leadership performance."
    },
  ],

  leadership: [
    {
      title: "President of Student Association HIEKA",
      organization: "AJIET",
      description: "Led student association activities and represented student interests."
    },
    {
      title: "Student Chief Coordinator - AAKAR",
      organization: "State level Techno Cultural Fest",
      dates: "2020, 2022",
      description: "Managed a team of 25+ volunteers and coordinated technical and cultural events with 2000+ participants, securing 15+ industry sponsors."
    },
    {
      title: "Technical Committee Head",
      organization: "AJIET",
      description: "Conducted numerous technical and cultural events, soft-skills training, and organized workshops impacting over 2000 students."
    },
  ],
} as const;