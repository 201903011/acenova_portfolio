import { FaChartLine, FaCloud, FaEnvelope, FaIndustry, FaLaptop, FaPhoneAlt, FaReact } from "react-icons/fa";
import { FaMagnifyingGlassChart, FaMobileScreen } from "react-icons/fa6";



export const heroData = {
    name: "Robert Downey",
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
    lightImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg",
    darkImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg",
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
            "Plan it, create it, launch it. Collaborate seamlessly with the entire organization and hit your marketing goals every month.",
        icon: FaChartLine,
    },
    {
        title: "Motilal Oswal",
        description:
            "Protect your organization, devices, and stay compliant with structured workflows and custom permissions tailored for you.",
        icon: FaMagnifyingGlassChart,
    },
    {
        title: "BioFuels Junction",
        description:
            "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to get started quickly.",
        icon: FaIndustry,
    }


];


export const contactItems = [
    {
        icon: FaEnvelope,
        title: "Email us:",
        value: "hello@flowbite.com",
        href: "mailto:hello@flowbite.com",
    },
    {
        icon: FaPhoneAlt,
        title: "Call us:",
        value: "+91 98765 98765",
        href: "tel:+919876576543",
    },
];