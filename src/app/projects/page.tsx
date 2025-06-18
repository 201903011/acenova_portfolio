import Navigation from '@/components/navbar';
import { Button, Tooltip } from 'flowbite-react';
import { projects } from '@/data/projects'; // Import the projects array
import Link from 'next/link'; // Import Link for navigation
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function ProjectPage() {
    return (
        <section className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-12 lg:py-12">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        My Work
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        I have worked on a variety of projects, each with its own unique challenges and solutions. Here are some of my most notable works.
                    </p>
                </div>
                <div className="mt-12 space-y-16 sm:mt-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24"
                        >
                            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                <img
                                    className="object-cover rounded-lg shadow-lg dark:hidden"
                                    style={{ width: "320px", height: "256px" }}
                                    src={project.imageLight}
                                    alt={project.title}
                                />
                                <img
                                    className="object-cover rounded-lg shadow-lg dark:block hidden"
                                    style={{ width: "320px", height: "256px" }}
                                    src={project.imageDark}
                                    alt={project.title}
                                />
                            </div>
                            <div
                                className={`w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl ${index % 2 === 1 ? "lg:order-1" : ""
                                    }`}
                            >
                                <div className="space-y-3">
                                    <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                                        {project.title}
                                    </h3>
                                    <Link
                                        href={`/projects/${index + 1}`} // Dynamic link to project details
                                        title={project.title}
                                        className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        View Details
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 ml-2.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                        </svg>
                                    </Link>
                                    <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Tooltip key={techIndex} content={tech.name}>
                                            <img
                                                className="object-contain w-auto h-8"
                                                src={tech.icon}
                                                alt={tech.name}
                                            />
                                        </Tooltip>
                                    ))}
                                </div>
                                <Link href={`/projects/${project.id}`}>
                                    <Button className="mt-4" >
                                        View Project
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
