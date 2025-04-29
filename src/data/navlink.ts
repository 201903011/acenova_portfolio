// navLinks.ts
import type { NavLink } from "@/types/navlink"
import { FaFolderOpen, FaUser } from "react-icons/fa";

export const navLinks: Record<string, NavLink> = {
    home: { name: 'Home', href: '/home', icon: FaUser },
    skills: { name: 'Skills', href: '/skills', icon: FaUser },
    projects: { name: 'Projects', href: '/projects', icon: FaUser },
    about: { name: 'About', href: '/about', icon: FaUser },
    experience: { name: 'Experience ', href: '/experience', icon: FaUser },
    contact: { name: 'Contact', href: '/contact', icon: FaUser },
};


export const quickLinks: Record<string, NavLink> = {
    home: { name: 'Home', href: '/home', icon: FaUser },
    skills: { name: 'Skills', href: '/skills', icon: FaFolderOpen },
    projects: { name: 'Projects', href: '/projects', icon: FaFolderOpen },
    about: { name: 'About', href: '/about', icon: FaFolderOpen },
    experience: { name: 'Experience ', href: '/experience', icon: FaFolderOpen },
    contact: { name: 'Contact', href: '/contact', icon: FaFolderOpen },
    home1: { name: 'Home', href: '/home', icon: FaUser },
    skills1: { name: 'Skills', href: '/skills', icon: FaFolderOpen },
    projects1: { name: 'Projects', href: '/projects', icon: FaFolderOpen },
    about1: { name: 'About', href: '/about', icon: FaFolderOpen },
    experience1: { name: 'Experience ', href: '/experience', icon: FaFolderOpen },
    contact1: { name: 'Contact', href: '/contact', icon: FaFolderOpen },
    home2: { name: 'Home', href: '/home', icon: FaUser },
    skills2: { name: 'Skills', href: '/skills', icon: FaFolderOpen },
    projects2: { name: 'Projects', href: '/projects', icon: FaFolderOpen },
    about2: { name: 'About', href: '/about', icon: FaFolderOpen },
    experience2: { name: 'Experience ', href: '/experience', icon: FaFolderOpen },
    contact2W: { name: 'Contact', href: '/contact', icon: FaFolderOpen },
};
