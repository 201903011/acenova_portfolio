import { FaAndroid, FaChrome, FaAppStoreIos, FaGithub } from "react-icons/fa";

export const projects = [
  {
    id: 0,
    title: "Multi Disaster Recovery Project",
    description:
      "This project implements a multi-cloud disaster recovery solution where the application runs primarily on AWS and automatically fails over to Azure during outages. AWS Route 53 handles DNS-level failover using health checks to ensure high availability. Infrastructure is provisioned using Terraform, configured with Ansible, and deployed via Jenkins for full automation. This setup ensures minimal downtime, uninterrupted service, and robust disaster recovery across both cloud platforms.",
    link: "",
    imageLight: "/images/projects/projects-cloud-capstone.png",
    imageDark: "/images/projects/projects-cloud-capstone.png",
    startDate: "July 2024",
    endDate: "Jan 2025",
    technologies: [
      { name: "Express.js", icon: "/images/skills/icn-express-js.png" },
      { name: "Go", icon: "/images/skills/icn-go.png" },
    ],
    platformLinks: [
      {
        name: "Github",
        icon: FaGithub,
        href: "https://github.com/201903011/disaster_recovery_project",
      },
    ],
    features: [
      "Deploy solution in AWS and Azure via loadbalancer",
      "Setup Infra and site to site vpn between aws vpc and azure vnet so host machine can configure both machines present in aws and azure",
      "Setup ansible for configuration management",
      "Setup Jenkins For deploy latest code of azure and aws machine via ansible",
      "Implement failover policies in AWS route53 which redirect aws traffic to azure for disaster recovery",
    ],
  },
  {
    id: 1,
    title: "BiofuelsJunctions SCM App",
    description:
      "A platform for bond trading with real-time exchange data. Implemented backend APIs and exchange order modules supporting market and limit order types.",
    link: "",
    imageLight: "/images/projects/projects-bjpl.png",
    imageDark: "/images/projects/projects-bjpl.png",
    startDate: "July 2024",
    endDate: "Jan 2025",
    technologies: [
      { name: "Express.js", icon: "/images/skills/icn-express-js.png" },
      { name: "Go", icon: "/images/skills/icn-go.png" },
    ],
    platformLinks: [
      {
        name: "Android",
        icon: FaAndroid,
        href: "https://play.google.com/store/apps/details?id=com.onfield.app",
      },
      { name: "Web", icon: FaChrome, href: "https://admin.bf-junction.in" },
    ],
    features: [
      "Designed and implemented DevOps infrastructure on AWS, streamlining deployment, monitoring, and scalability of services.",
      "Built role-based transaction flows using Express.js and MySQL, enabling dynamic workflows for operations such as Sales Orders and Purchase Orders.",
      "Integrated with Zoho to import/export supply chain transactions, automating data sync and improving operational efficiency.",
      "Ensured secure, modular, and scalable backend architecture for supply chain and transaction management systems.",
    ],
  },
  {
    id: 2,
    title: "BondBazaar",
    description:
      "A platform for bond trading with real-time exchange data. Implemented backend APIs and exchange order modules supporting market and limit order types.",
    link: "",
    imageLight: "/images/projects/projects-bondbazar.png",
    imageDark: "/images/projects/projects-bondbazar.png",
    startDate: "July 2024",
    endDate: "Jan 2025",
    technologies: [
      { name: "Express.js", icon: "/images/skills/icn-express-js.png" },
      { name: "Go", icon: "/images/skills/icn-go.png" },
    ],
    platformLinks: [
      {
        name: "Android",
        icon: FaAndroid,
        href: "https://play.google.com/store/apps/details?id=com.bond_bazaar",
      },
      {
        name: "iOS",
        icon: FaAppStoreIos,
        href: "https://apps.apple.com/in/app/bondbazaar/id6467102700",
      },
      { name: "Web", icon: FaChrome, href: "https://www.bondbazaar.com/" },
    ],
    features: [
      "Designed and implemented backend APIs for the homepage using Express.js and Go, ensuring responsive and scalable service delivery.",
      "Integrated third-party APIs to fetch and display real-time bond exchange data, improving user access to market information.",
      "Developed the Exchange Order Module supporting both market and limit order types, enabling users to place and manage bond orders efficiently.",
    ],
  },
  {
    id: 3,
    title: "AlRamz",
    description:
      "A stock application tailored for the UAE market with SpringBoot APIs for watchlist management and screener capabilities.",
    link: "https://www.alramz.ae/",
    imageLight: "/images/projects/projects-alramz.png",
    imageDark: "/images/projects/projects-alramz.png",
    startDate: "Jan 2024",
    endDate: "June 2024",
    technologies: [
      { name: "SpringBoot", icon: "/images/skills/icn-spring-boot.png" },
      { name: "Docker", icon: "/images/skills/icn-docker.png" },
      { name: "Terraform", icon: "/images/skills/icn-terraform.png" },
      { name: "Azure", icon: "/images/skills/icn-azure.png" },
      { name: "Ansible", icon: "/images/skills/icn-ansible.png" },
    ],
    platformLinks: [
      {
        name: "Android",
        icon: FaAndroid,
        href: "https://play.google.com/store/apps/details?id=com.alramz.alramz&pcampaignid=web_share",
      },
      {
        name: "iOS",
        icon: FaAppStoreIos,
        href: "https://apps.apple.com/app/alramz-capital/id6448725085",
      },
      { name: "Web", icon: FaChrome, href: "https://www.alramz.ae/" },
    ],
    features: [
      "Developed and deployed a stock application tailored for the UAE market, integrating SpringBoot APIs for watchlist management.",
      "Automated CI/CD pipelines using Jenkins and Docker for continuous deployment, ensuring efficient rollouts of features like the Screener module, which filters and sorts stocks based on specific criteria.",
      "Implemented Infrastructure as Code with Terraform to provision cloud resources on AWS and Azure, enhancing scalability and reliability.",
      "Integrated localization with dynamic Arabic UI adjustments, automating configuration management using Ansible to ensure consistent deployment across environments.",
    ],
  },
  {
    id: 4,
    title: "Research360, Supperapp, MO trader",
    description:
      "A comprehensive research application for the stock market featuring Go APIs and Flutter-based modules for market analysis.",
    link: "",
    imageLight: "/images/projects/projects-mosl.png",
    imageDark: "/images/projects/projects-mosl.png",
    startDate: "Feb 2023",
    endDate: "Dec 2023",
    technologies: [
      { name: "Go", icon: "/images/skills/icn-go.png" },
      { name: "Flutter", icon: "/images/skills/icn-flutter.png" },
      { name: "Terraform", icon: "/images/skills/icn-terraform.png" },
      { name: "Docker", icon: "/images/skills/icn-docker.png" },
      { name: "Kubernetes", icon: "/images/skills/icn-kubernetes.png" },
      { name: "CleverTap", icon: "/images/skills/icn-clevertap.png" },
    ],
    platformLinks: [
      {
        name: "Android",
        icon: FaAndroid,
        href: "https://play.google.com/store/apps/details?id=com.mosl.research360app",
      },
      {
        name: "iOS",
        icon: FaAppStoreIos,
        href: "https://apps.apple.com/in/app/research-360/id1633206960",
      },
      { name: "Web", icon: FaChrome, href: "https://www.research360.in/" },
    ],
    features: [
      "Developed and deployed a research application for the stock market with Go APIs and a Flutter-based Screener Module.",
      "Automated CI/CD pipelines for seamless deployment of features like Multi-Screener and watchlist modules with advanced filtering and heatmap visualization.",
      "Leveraged Terraform to provision cloud infrastructure, enhancing the application's scalability and reliability.",
      "Integrated CleverTap for notifications and implemented an extensive theming system across the app using Docker and Kubernetes.",
      "Engineered OFS (Offer For Sale) and BuyBack modules, and introduced 2FA on iOS and Android by automating Activity Lifecycle modifications.",
    ],
  },
  {
    id: 5,
    title: "Knowzaa.io",
    description:
      "An advanced Library Management System built with MERN Stack and microservices architecture, deployed on Azure with Docker containers.",
    link: "",
    imageLight: "/images/projects/projects-knowza.png",
    imageDark: "/images/projects/projects-knowza.png",
    startDate: "June 2022",
    endDate: "March 2023",
    technologies: [
      { name: "MongoDB", icon: "/images/skills/icn-mongodb.png" },
      { name: "Express.js", icon: "/images/skills/icn-express-js.png" },
      { name: "React", icon: "/images/skills/icn-react-native.png" },
      { name: "Node.js", icon: "/images/skills/icn-nodejs.png" },
      { name: "Docker", icon: "/images/skills/icn-docker.png" },
      { name: "Azure", icon: "/images/skills/icn-azure.png" },
      { name: "Material UI", icon: "/images/skills/icn-mui.png" },
      { name: "Redux", icon: "/images/skills/icn-redux.png" },
    ],
    platformLinks: [
      {
        name: "Github",
        icon: FaGithub,
        href: "https://github.com/VVB2/Library_Management_System.git",
      },
      {
        name: "Web",
        icon: FaChrome,
        href: "https://github.com/201903011/client-main.git",
      },
    ],
    features: [
      "Engineered and deployed an advanced Library Management System using the MERN Stack, with a microservices architecture built on Express.js.",
      "Containerized services with Docker and deployed on Azure for scalable and efficient operations.",
      "Leveraged Material UI for frontend theming and integrated Redux for state management.",
      "Implemented JWT authentication across admin and user microservices, ensuring secure access control.",
      "Automated web scraping to generate datasets and retrieve book images, enhancing database accuracy.",
      "Published a related research paper in the IRJET Journal, showcasing innovative approaches in library management systems.",
    ],
  },
];
