"use client";

import { timelineData } from "@/data/timeline";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import type { FC } from "react";
import { Timeline } from "flowbite-react";

const ExpMainSection: FC = function () {
    return (
        <section className=" dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl  py-12 mx-auto ">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-800 dark:text-white sm:text-4xl">
                        Experience Timeline
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        A journey through my professional experiences and contributions.
                    </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 mt-12 lg:mt-16 lg:px-6 sm:py-16 lg:py-24">
                    <Timeline className="border-0">
                        {timelineData.map((event, index) => (
                            <Timeline.Item key={index} className="relative">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                                {event.company}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                {event.linkedin && (
                                                    <a
                                                        href={event.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                                                        title="LinkedIn"
                                                    >
                                                        <FaLinkedin className="w-5 h-5" />
                                                    </a>
                                                )}
                                                {event.website && (
                                                    <a
                                                        href={event.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-600"
                                                        title="Website"
                                                    >
                                                        <FaGlobe className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            {event.position}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            {event.from} - {event.to}
                                        </p>
                                        <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                                            {event.description}
                                        </p>
                                        {event.workDone && (
                                            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                                {event.workDone.map((work, workIndex) => (
                                                    <li key={workIndex}>{work}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                {index < timelineData.length - 1 && (
                                    <div className="absolute left-5 top-12 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                                )}
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </div>
            </div>
        </section>
    );
};

export default ExpMainSection;
