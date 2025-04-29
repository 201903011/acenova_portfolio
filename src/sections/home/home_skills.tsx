"use client";

import ViewLink from "@/components/common/view_link";
import SkillCard from "@/components/home/skill_card";
import { skills } from "@/data/homepage";
import type { FC } from "react";
import { FaCloud, FaLaptop, FaReact } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";

const HomeSkills: FC = function () {


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Ooff!! My Skills
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
                        Here are some of the skills I have acquired over the years. I am always eager to learn and improve my skills.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            icon={skill.icon}
                            description={skill.description}
                        />
                    ))}
                </div>
                <ViewLink href="/skills" text="View All Skills" />
            </div>
        </section>
    );
};

export default HomeSkills;
