import { notFound } from 'next/navigation';
import { Tooltip } from 'flowbite-react';
import { projects } from '@/data/projects';
import { FaAndroid, FaChrome, FaAppStoreIos } from 'react-icons/fa';

export default async function ProjectDetailsPage({ params }: { params: { id: string } }) {
    const projectId = parseInt(params.id, 10);
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return notFound();
    }

    return (
        <section className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-12 lg:py-12">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        {project.title}
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        {project.description}
                    </p>

                </div>
                <div className="mt-12 flex justify-center">
                    <img
                        className="object-cover w-full max-w-2xl h-64 rounded-xl shadow-lg dark:hidden"
                        src={project.imageLight}
                        alt={project.title}
                    />
                    <img
                        className="object-cover w-full max-w-2xl h-64 rounded-xl shadow-lg dark:block hidden"
                        src={project.imageDark}
                        alt={project.title}
                    />
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technologies Used</h3>
                    <div className="flex items-center gap-4 mt-4">
                        {project.technologies.map((tech, index) => (
                            <Tooltip key={index} content={tech.name}>
                                <img
                                    className="object-contain w-12 h-12"
                                    src={tech.icon}
                                    alt={tech.name}
                                />
                            </Tooltip>
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Available On</h3>
                    <div className="flex items-center gap-4 mt-4">
                        {project.platformLinks.map((platform, index) => {
                            const Icon = platform.icon;
                            return (
                            <a
                                key={index}
                                href={platform.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform "
                                title={`Open ${platform.name}`}
                            >
                               {Icon && typeof Icon === "function" ? <Icon className='w-10 h-10'/> : null}

                            </a>
                        );
                        })}
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl dark:text-white">{project.title} | {project.startDate} - {project.endDate}</h3>
                    <ul className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
                        {project.features.map((feature, index) => (
                            <li key={index} className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}