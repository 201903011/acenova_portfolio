import { FaChartLine, FaCloud, FaEnvelope, FaIndustry, FaLaptop, FaPhoneAlt, FaReact } from "react-icons/fa";
import { FaMagnifyingGlassChart, FaMobileScreen } from "react-icons/fa6";



export const heroData = {
    name: "Rahul Gaikwad",
    title: "Full Stack Developer | DevOps | Freelancer | 2yrs+ Experience",
    description:
        "My goal is to explore computer science and engineering thoroughly, aiming to build a career in both DevOps and Development.",
    avatarSrc: "/images/john.png",
    imageAlt: "",
};

export const aboutData = {
    heading: "Let's know something more About me.",
    description:
        "I am a passionate software engineer with a strong background in web development and a keen interest in learning new technologies. I have experience in building scalable applications and enjoy solving complex problems. My goal is to create efficient and user-friendly solutions that make a positive impact.",
    buttonLabel: "About me",
    buttonLink: "/about",
    lightImage: "/svg/aboutme.svg",
    darkImage: "/svg/aboutme.svg",
};

export const skills = [
    {
        title: "DevOps",
        icon: FaCloud,
        description:
            "Skilled in CI/CD, containerization, and cloud infrastructure. I build, deploy, and maintain scalable systems.",
    },
    {
        title: "Mobile Development",
        icon: FaMobileScreen,
        description:
            "Experienced in building cross-platform mobile apps using Flutter, delivering smooth UI and native performance.",
    },
    {
        title: "Backend Development",
        icon: FaLaptop,
        description:
            "Proficient in developing REST APIs and server-side logic with Node.js, Go I focus on scalability and performance.",
    },
    {
        title: "Frontend Development",
        icon: FaReact,
        description:
            "Expertise in building responsive UIs with React and Tailwind CSS, focusing on performance, accessibility, and reusability.",
    },
];

export const projects = [
    {
        title: "AlRamz",
        description:
            "Stock app for UAE market with SpringBoot, CI/CD via Jenkins & Docker, IaC using Terraform, Arabic UI, and Ansible for config management.",
        icon: FaChartLine,
    },
    {
        title: "Motilal Oswal",
        description:
            "Built stock research app with Go & Flutter, CI/CD, Terraform, Docker, CleverTap, theming, OFS, BuyBack, and 2FA for secure access.",
        icon: FaMagnifyingGlassChart,
    },
    {
        title: "BioFuels Junction",
        description:
            "Built supply chain system with Zoho DB sync and role based accessed transaction flows for streamlined supply chain operations.",
        icon: FaIndustry,
    }


];


export const contactItems = [
    {
        icon: FaEnvelope,
        title: "Email us:",
        value: "rahulkishorgaikwad@gmail.com",
        href: "mailto:rahulkishorgaikwad@gmail.com",
    },
    {
        icon: FaPhoneAlt,
        title: "Call us:",
        value: "+91 97028 16011",
        href: "tel:+919702816011",
    },
];