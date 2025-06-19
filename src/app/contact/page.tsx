import Navigation from "@/components/navbar";
import ContactFormSection from "@/sections/contact/contact_form_section";
import { Button } from "flowbite-react";

// generate metadata for contact page
export const metadata = {
  title: "Contact | My Portfolio",
  description:
    "Get in touch with me for collaborations, inquiries, or just to say hello!",
  keywords: ["contact", "portfolio", "inquiries", "collaborations"],
  authors: [{ name: "Rahul Gaikwad", url: "https://portfolio.acenova.dev" }],
  creator: "Rahul Gaikwad",
  openGraph: {
    title: "Contact | My Portfolio",
    description:
      "Get in touch with me for collaborations, inquiries, or just to say hello!",
    url: "https://portfolio.acenova.dev/contact",
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | My Portfolio",
    description:
      "Get in touch with me for collaborations, inquiries, or just to say hello!",
    site: "@gkrahul1310",
    creator: "@gkrahul1310",
  },
};

export default function ContactPage() {
  return (
    <section>
      <ContactFormSection />
    </section>
  );
}
