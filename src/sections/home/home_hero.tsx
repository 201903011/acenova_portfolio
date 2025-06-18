import { Button } from "flowbite-react";
import Image from "next/image";
import type { FC } from "react";
import { heroData as data } from "@/data/homepage";
import { socialLinks } from "@/data/socialLinks";

const HomeHero: FC = function () {
  return (
    <section className="bg-white  dark:bg-gray-900">
      <div className="">
        <div className="mb-4 mt-12 flex justify-center lg:hidden">
          <Image
            src={data.avatarSrc}
            alt={data.imageAlt}
            width={100}
            height={600}
            className="rounded-full"
          />
        </div>
        <div className="mx-auto grid lg:min-h-screen max-w-screen-xl px-4 py-16 lg:grid-cols-12 lg:gap-8 lg:py-22  lg:px-10 mb-4">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h4 className="mb-4 max-w-2xl text-2xl text-gray-600 font-bold leading-none tracking-tight dark:text-gray-400 md:text-xl xl:text-2xl">
              Hi, I'm 👋
            </h4>
            <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              {data.name}
            </h1>
            <h3 className="mb-4 max-w-2xl text-xl text-gray-600 font-bold leading-none tracking-tight dark:text-gray-400 md:text-xl xl:text-xl">
              {data.title}
            </h3>
            <p className="mb-6 max-w-2xl text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              {data.description}
            </p>
            <ul className="mt-5 mb-5 flex space-x-5">
              {socialLinks.map((link, index) => {
                const Icon = link.icon; // Dynamically render the icon
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="dark:text-white"
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
            <div className="flex w-fit items-center gap-5">
              <Button
                as="a"
                color="info"
                href="/pdf/rahul_resume.pdf"
                size="lg"
                className="[&>span]:items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <Button color="gray" outline size="lg" href="/contact">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img src={data.avatarSrc} alt={data.imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
