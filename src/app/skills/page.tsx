"use client";

import Navigation from '@/components/navbar';
import { useState } from 'react';
import { Button, Card, Dropdown } from 'flowbite-react';

export default function SkillsPage() {
    // Define the type for categories
    const categories = ['Frontend', 'Backend', 'Mobile', 'DevOps', 'Design', 'Soft Skills'] as const;
    type Category = (typeof categories)[number];

    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const skills: Record<Category, { name: string; image: string; level: string }[]> = {
        Frontend: [
            { name: 'React', image: '/images/react.png', level: 'Advanced' },
            { name: 'Next.js', image: '/images/nextjs.png', level: 'Intermediate' },
            { name: 'HTML', image: '/images/html.png', level: 'Advanced' },
            { name: 'CSS', image: '/images/css.png', level: 'Advanced' },
            { name: 'JavaScript', image: '/images/javascript.png', level: 'Advanced' },
        ],
        Backend: [
            { name: 'Node.js', image: '/images/nodejs.png', level: 'Intermediate' },
            { name: 'Express', image: '/images/express.png', level: 'Intermediate' },
            { name: 'Python', image: '/images/python.png', level: 'Advanced' },
            { name: 'Django', image: '/images/django.png', level: 'Intermediate' },
            { name: 'SQL', image: '/images/sql.png', level: 'Advanced' },
        ],
        Mobile: [
            { name: 'React Native', image: '/images/react-native.png', level: 'Intermediate' },
            { name: 'Flutter', image: '/images/flutter.png', level: 'Beginner' },
            { name: 'Swift', image: '/images/swift.png', level: 'Beginner' },
            { name: 'Kotlin', image: '/images/kotlin.png', level: 'Beginner' },
        ],
        DevOps: [
            { name: 'Docker', image: '/images/docker.png', level: 'Intermediate' },
            { name: 'Kubernetes', image: '/images/kubernetes.png', level: 'Beginner' },
            { name: 'Azure', image: '/images/azure.png', level: 'Intermediate' },
            { name: 'CI/CD', image: '/images/cicd.png', level: 'Intermediate' },
            { name: 'Terraform', image: '/images/terraform.png', level: 'Beginner' },
        ],
        Design: [
            { name: 'Figma', image: '/images/figma.png', level: 'Intermediate' },
            { name: 'Adobe XD', image: '/images/adobe-xd.png', level: 'Beginner' },
            { name: 'Sketch', image: '/images/sketch.png', level: 'Beginner' },
        ],
        'Soft Skills': [
            { name: 'Communication', image: '/images/communication.png', level: 'Advanced' },
            { name: 'Problem Solving', image: '/images/problem-solving.png', level: 'Advanced' },
            { name: 'Teamwork', image: '/images/teamwork.png', level: 'Advanced' },
            { name: 'Adaptability', image: '/images/adaptability.png', level: 'Advanced' },
        ],
    };

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
                    // <div
                    //     key={index}
                    //     className="p-4 border rounded shadow text-center bg-white hover:bg-gray-100 flex flex-col items-center"
                    // >
                    //     <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-2" />
                    //     <span className="font-bold">{skill.name}</span>
                    //     <span className="text-sm text-gray-500">{skill.level}</span>
                    // </div>
                ))}
            </div>
        </section>
    );
}
