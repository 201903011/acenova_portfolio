import { Button } from "flowbite-react";
import Image from "next/image";
import type { FC } from "react";
import HomeHero from "./home_hero";
import HomeQLink from "./home_qlink";
import HomeAbout from "./home_about";
import HomeSkills from "./home_skills";
import HomeProjects from "./home_projects";
import HomeExperience from "./home_experience";
import HomeContacts from "./home_contacts";


const MainHome: FC = function () {
    return (
        <>
            <HomeHero />
            <HomeQLink />
            <HomeAbout />
            <HomeSkills />
            <HomeProjects />
            <HomeExperience />
            <HomeContacts />
        </>
    );
};

export default MainHome;
