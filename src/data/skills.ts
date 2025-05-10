// export const categories = ['Frontend', 'Backend', 'Mobile', 'DevOps', 'Design', 'Soft Skills', 'NewSk'] as const;
// export type Category = (typeof categories)[number];

export const skills: Record<any, { name: string; image: string; level: string }[]> = {
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