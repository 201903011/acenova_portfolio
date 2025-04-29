import ViewLink from "@/components/common/view_link";
import { projects } from "@/data/homepage";
import type { FC } from "react";

const HomeProjects: FC = function () {

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                <div className="mb-8 max-w-screen-md lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Projects I have worked on
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
                        Here are some of the projects I have worked on. I am always eager to learn and improve my skills.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                    {projects.map((project, index) => (

                        <div key={index}>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                                <svg
                                    className="h-5 w-5 text-primary-600 items-center justify-center dark:text-primary-300 lg:h-6 lg:w-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <project.icon />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">{project.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                        </div>
                    ))}
                </div>
                <ViewLink href="/projects" text="See all projects" padding=" mt-12" />
            </div>
        </section>
    );
};

export default HomeProjects;
