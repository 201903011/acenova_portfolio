import SkillsMain from "@/sections/skills/skills_main";

// generate metadata for skills page
export const metadata = {
  title: "Skills | My Portfolio",
  description:
    "Explore my skills and expertise in various technologies and tools.",
  keywords: [
    "skills",
    "portfolio",
    "devops engineer",
    "full stack developer",
    "web developer",
    "technologies",
    "tools",
  ],
  authors: [{ name: "Rahul Gaikwad", url: "https://portfolio.acenova.dev" }],
  creator: "Rahul Gaikwad",
  openGraph: {
    title: "Skills | My Portfolio",
    description:
      "Explore my skills and expertise in various technologies and tools.",
    url: "https://portfolio.acenova.dev/skills",
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | My Portfolio",
    description:
      "Explore my skills and expertise in various technologies and tools.",
    site: "@gkrahul1310",
    creator: "@gkrahul1310",
  },
};

export default function SkillsPage() {
  return (
    <section className="p-8">
      <SkillsMain />
    </section>
  );
}
