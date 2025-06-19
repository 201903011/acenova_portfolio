import ExpMainSection from "@/sections/experience/exp_main";

// generate metadata for the experience page
export const metadata = {
  title: "Experience | My Portfolio",
  description:
    "Explore my professional journey, showcasing my roles, responsibilities, and achievements in various organizations.",
  keywords: ["experience", "portfolio", "professional journey", "career"],
  authors: [{ name: "Rahul Gaikwad", url: "https://portfolio.acenova.dev" }],
  creator: "Rahul Gaikwad",
  openGraph: {
    title: "Experience | My Portfolio",
    description:
      "Explore my professional journey, showcasing my roles, responsibilities, and achievements in various organizations.",
    url: "https://portfolio.acenova.dev/experience",
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio Experience",
    description:
      "Explore my professional journey, showcasing my roles, responsibilities, and achievements in various organizations.",
    site: "@gkrahul1310",
    creator: "@gkrahul1310",
  },
};

export default function ExperiencePage() {
  return <ExpMainSection />;
}
