import { FC } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const AppFooter: FC = function () {
    const socialLinks = [
        // { href: "#", icon: FaFacebook, label: "Facebook" },
        { href: "https://www.instagram.com/acenova_111/", icon: FaInstagram, label: "Instagram" },
        { href: "https://x.com/gkrahul1310", icon: FaTwitter, label: "Twitter" },
        { href: "https://www.linkedin.com/in/rahul-gaikwad-28b9461bb/", icon: FaLinkedin, label: "GitHub" },
        { href: "https://github.com/201903011", icon: FaGithub, label: "GitHub" },
        { href: "https://medium.com/@rahulkishorgaikwad", icon: FaMedium, label: "Dribbble" },
    ];

    return (
        <>
            <div className="text-center pt-12 pb-12">
                <a
                    href="/"
                    className="mb-5 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    Acenova Portfolio
                </a>
                <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
                    © 2021-2022&nbsp;
                    <a href="/" className="hover:underline">
                        Acenova Portfolio
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="mt-5 flex justify-center space-x-5">
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon; // Dynamically render the icon
                        return (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                    aria-label={link.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default AppFooter;
