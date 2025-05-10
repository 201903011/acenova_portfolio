"use client";

import Navigation from '@/components/navbar';
import { useState } from 'react';
import { Button, Card, Dropdown } from 'flowbite-react';
import { skills } from '@/data/skills'; // Import only skills

// Define the type for the keys of the skills object
type SkillCategory = keyof typeof skills;

export default function SkillsPage() {
    const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);

    // Dynamically derive categories from the keys of the skills object
    const categories = Object.keys(skills) as SkillCategory[];

    // Filter skills based on the selected category
    const filteredSkills = selectedCategory ? skills[selectedCategory] : Object.values(skills).flat();

    return (
        <section className="p-8">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Skills & Expertise
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                The tools and technologies I work with daily
            </p>
            <p className="mt-4 mb-12 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                I am constantly updating my skill set to stay current with industry trends. Here are the tools I use in my work.
            </p>

            {/* Dropdown for selecting categories */}
            <div className="mb-8">
                <Dropdown label={selectedCategory || 'Select Category'} color="gray">
                    {categories.map((category) => (
                        <Dropdown.Item
                            key={category}
                            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        >
                            {category}
                        </Dropdown.Item>
                    ))}
                </Dropdown>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredSkills.map((skill, index) => (
                    <Card key={index}>
                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-12 w-auto object-contain"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/stripe.svg"
                                alt="Stripe logo"
                            />
                            <p className="mt-2.5 text-base text-gray-700 dark:text-gray-300">
                                {skill.level}
                            </p>
                            <div className="mt-5">
                                <Button color="gray" className="font-bold leading-tight text-gray-700 dark:text-gray-400" outline>
                                    {skill.name}
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
