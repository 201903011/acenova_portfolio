"use client";

import { navLinks } from "@/data/navlink";
import { Button, DarkThemeToggle, Navbar, } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Navigation: FC = function () {

    const pathname = usePathname();

    return (
        <header>
            <Navbar fluid>
                <Navbar.Brand href="/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        AceNova Portfolio
                    </span>
                </Navbar.Brand>
                <div className="flex items-center gap-3 lg:order-2">
                    <DarkThemeToggle />
                    <Navbar.Toggle theme={{ icon: "h-5 w-5 shrink-0" }} />
                </div>
                <Navbar.Collapse
                    theme={{
                        list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium",
                    }}
                    className="lg:order-1"
                >
                    {Object.values(navLinks).map(({ name, href }) => (
                        <Navbar.Link
                            key={href}
                            href={href}
                            active={pathname === href}
                            className="rounded-lg"
                        >
                            {name}
                        </Navbar.Link>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}


export default Navigation;