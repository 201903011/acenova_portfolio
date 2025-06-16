// export const categories = ['Frontend', 'Backend', 'Mobile', 'DevOps', 'Design', 'Soft Skills', 'NewSk'] as const;
// export type Category = (typeof categories)[number];

export const skills: Record<any, { name: string; image: string; level: string }[]> = {
    DevOps: [
        { name: 'Docker', image: '/images/skills/icn-react-native.png', level: 'Intermediate' },
        { name: 'Kubernetes', image: '/images/skills/icn-react-native.png', level: 'Beginner' },
        { name: 'Azure', image: '/images/skills/icn-react-native.png', level: 'Intermediate' },
        { name: 'CI/CD', image: '/images/skills/icn-react-native.png', level: 'Intermediate' },
        { name: 'Terraform', image: '/images/skills/icn-react-native.png', level: 'Beginner' },
    ],
    Backend: [
        { name: 'Node.js', image: '/images/skills/icn-react-native.png', level: 'Intermediate' },
        { name: 'Express', image: '/images/skills/icn-react-native.png', level: 'Intermediate' },
        { name: 'Python', image: '/images/skills/icn-react-native.png', level: 'Advanced' },
        { name: 'Django', image: '/images/skills/icn-react-native.png', level: 'Intermediate' },
        { name: 'SQL', image: '/images/skills/icn-react-native.png', level: 'Advanced' },
    ],
     Mobile: [
        { name: 'React Native', image: '/images/skills/icn-react-native.png', level: 'Intermediate' },
        { name: 'Flutter', image: '/images/skills/icn-react-native.png', level: 'Beginner' },
        { name: 'Swift', image: '/images/skills/icn-react-native.png', level: 'Beginner' },
        { name: 'Kotlin', image: '/images/skills/icn-react-native.png', level: 'Beginner' },
    ],
    Frontend: [
        { name: 'React', image: '/images/skills/icn-react-native.png', level: 'Advanced', },
        { name: 'Next.js', image: '/images/skills/icn-react-native.png', level: 'Intermediate' },
        { name: 'HTML', image: '/images/skills/icn-react-native.png', level: 'Advanced' },
        { name: 'CSS', image: '/images/skills/icn-react-native.png', level: 'Advanced' },
        { name: 'JavaScript', image: '/images/skills/icn-react-native.png', level: 'Advanced' },
    ],
    Design: [
        { name: 'Figma', image: '/images/skills/icn-react-native.png', level: 'Intermediate' },
    ],
    'Soft Skills': [
        { name: 'Communication', image: '/images/skills/icn-react-native.png', level: 'Advanced' },
        { name: 'Problem Solving', image: '/images/skills/icn-react-native.png', level: 'Advanced' },
        { name: 'Teamwork', image: '/images/skills/icn-react-native.png', level: 'Advanced' },
        { name: 'Adaptability', image: '/images/skills/icn-react-native.png', level: 'Advanced' },
    ],


};