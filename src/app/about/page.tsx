import Navigation from "@/components/navbar";
import AboutEducationSection from "@/sections/about/about_education";
import AboutHeroSection from "@/sections/about/about_hero";
import { Button } from "flowbite-react";

// generate metadata for about page
export const metadata = {
  title: "About | My Portfolio",
  description:
    "Learn more about me, my background, and my journey as a DevOps Engineer, Full Stack Developer, and Web Developer.",
  keywords: [
    "about",
    "portfolio",
    "devops engineer",
    "full stack developer",
    "web developer",
  ],
  authors: [{ name: "Rahul Gaikwad", url: "https://portfolio.acenova.dev" }],
  creator: "Rahul Gaikwad",
  openGraph: {
    title: "About | My Portfolio",
    description:
      "Learn more about me, my background, and my journey as a DevOps Engineer, Full Stack Developer, and Web Developer.",
    url: "https://portfolio.acenova.dev/about",
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | My Portfolio",
    description:
      "Learn more about me, my background, and my journey as a DevOps Engineer, Full Stack Developer, and Web Developer.",
    site: "@gkrahul1310",
    creator: "@gkrahul1310",
  },
};

export default function AboutPage() {
  return (
    <section className="">
      <AboutHeroSection />
      <AboutEducationSection />
    </section>
  );
}
