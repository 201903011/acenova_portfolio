import Navigation from "@/components/navbar";
import HomeHero from "@/sections/home/home_hero";
import MainHome from "@/sections/home/main_home";
import { Button } from "flowbite-react";
import Head from "next/head";

export const metadata = {
  title: "Home | My Portfolio",
  description:
    "Hi am Rahul Gaikwad, a DevOps Engineer, Full Stack Developer, and Web Developer.",
  keywords: [
    "resume",
    "devops engineer",
    "full stack developer",
    "web developer",
    "software engineer",
    "portfolio",
    "projects",
    "skills",
  ],
  authors: [{ name: "Rahul Gaikwad", url: "https://portfolio.acenova.dev" }],
  creator: "Rahul Gaikwad",
  openGraph: {
    title: "Home | My Portfolio",
    description:
      "Hi am Rahul Gaikwad, a DevOps Engineer, Full Stack Developer, and Web Developer.",
    url: "https://portfolio.acenova.dev",
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description:
      "Hi am Rahul Gaikwad, a DevOps Engineer, Full Stack Developer, and Web Developer.",
    site: "@gkrahul1310",
    creator: "@gkrahul1310",
  },
  other: {
    keywords: "stocks, investment, uae, trading, research",
    author: "My Portfolio Team",
    copyright: "© 2025 My Portfolio Inc.",
    referrer: "no-referrer-when-downgrade",
    "x-ua-compatible": "IE=edge",
  },
};

export default function HomePage() {
  return (
    <>
      <MainHome />
    </>
  );
}
