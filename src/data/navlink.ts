// navLinks.ts
import type { NavLink } from "@/types/navlink"

export const navLinks: Record<string, NavLink> = {
    home: { name: 'Home', href: '/home' },
    about: { name: 'About', href: '/about' },
    services: { name: 'Services', href: '/services' },
    contact: { name: 'Contact', href: '/contact' },
};
