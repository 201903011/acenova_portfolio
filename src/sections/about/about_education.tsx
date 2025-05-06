"use client";

import { education } from "@/data/education";
import { FaLinkedin } from "react-icons/fa";
import type { FC } from "react";
import { Timeline } from "flowbite-react";

const AboutEducationSection: FC = function () {
    return (
        <section className=" dark:bg-gray-900 antialiased">
            <div className="bg-gray-50 dark:bg-gray-800 mt-12 lg:mt-16 lg:px-6 sm:py-10 lg:py-10">
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-800 dark:text-white sm:text-4xl pb-10">
                    Education
                </h2>
                <Timeline className="border-0">
                    {education.map((event, index) => {
                        const Icon = event.icon;
                        return (

                            <Timeline.Item key={index} className="relative">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white">
                                        <Icon />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                                {event.school}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                {event.schoollink && (
                                                    <a
                                                        href={event.schoollink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                                                        title="LinkedIn"
                                                    >
                                                        <FaLinkedin className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            {event.degree}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            {event.from} - {event.to}
                                        </p>
                                        <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                                            {event.marks}
                                        </p>
                                    </div>
                                </div>
                                {index < education.length - 1 && (
                                    <div className="absolute left-5 top-12 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                                )}
                            </Timeline.Item>
                        );
                    })}
                </Timeline>
            </div>
        </section>
    );
};

export default AboutEducationSection;
