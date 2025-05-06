import Navigation from '@/components/navbar';
import AboutEducationSection from '@/sections/about/about_education';
import AboutHeroSection from '@/sections/about/about_hero';
import { Button } from 'flowbite-react';

export default function AboutPage() {
    return (
        <section className="">
            <AboutHeroSection />
            <AboutEducationSection />
        </section>
    );
}
