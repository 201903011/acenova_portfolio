import { Button } from "flowbite-react";
import { FC } from "react";
import { FaArrowRight, FaUser, FaTools } from "react-icons/fa";
import { aboutData } from "../../data/about_data";

const AboutHeroSection: FC = function () {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl gap-8 px-4 py-8 lg:py-16 xl:grid xl:grid-cols-12">
                <div className="col-span-8">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        {aboutData.title}
                    </h1>
                    <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                        {aboutData.description}
                    </p>
                    <div className="items-center gap-16 sm:flex">
                        <div className="mb-8 text-gray-500 dark:text-gray-400 sm:mb-0">
                            <FaUser className="mb-3 h-7 w-7" />
                            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                                {aboutData.journey.title}
                            </h2>
                            <p className="mb-4 font-light">
                                {aboutData.journey.content}
                            </p>
                            <Button href={aboutData.journey.buttonLink} className="w-fit">
                                {aboutData.journey.buttonText}
                                <FaArrowRight className="-mr-1 ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                            <FaTools className="mb-3 h-7 w-7" />
                            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                                {aboutData.expertise.title}
                            </h2>
                            <p className="mb-4 font-light">
                                {aboutData.expertise.content}
                            </p>
                            <Button href={aboutData.expertise.buttonLink} color="gray" outline className="w-fit">
                                {aboutData.expertise.buttonText}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 top-0 hidden h-full w-1/3 xl:block">
                    <img
                        className="h-full w-full object-cover"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/conference-speaker.jpg"
                        alt="About Me"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;
