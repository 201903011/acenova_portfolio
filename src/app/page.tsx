import HomeHero from '@/sections/home/home_hero';
import MainHome from '@/sections/home/main_home';
import { Main } from 'next/document';
import Head from 'next/head';

export const metadata = {
    title: 'Home | My App',
    description: 'Welcome to My App - Your ultimate stock research and analysis tool',
    keywords: ["stocks", "research", "UAE market", "investing"],
    authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
    creator: "John Doe",
    openGraph: {
        title: "Home | My App",
        description: "Explore our powerful stock screening tools.",
        url: "https://myapp.com",
        siteName: "My App",
        images: [
            {
                url: "https://myapp.com/og-image.jpg",
                width: 800,
                height: 600,
                alt: "My App Open Graph Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "My App",
        description: "Explore our powerful stock screening tools.",
        site: "@your_twitter_handle",
        creator: "@your_twitter_handle",
        images: ["https://myapp.com/twitter-image.jpg"],
    },
    other: {
        "keywords": "stocks, investment, uae, trading, research",
        "author": "My App Team",
        "copyright": "© 2025 My App Inc.",
        "referrer": "no-referrer-when-downgrade",
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
