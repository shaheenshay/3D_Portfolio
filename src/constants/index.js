import { meta, shopify, starbucks, quizent } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mysql,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    laravel,
    php,
    vue,  
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    netflix,
    disneyplus,
    jsearch,
    linux
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },    
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },       
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },    
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "Php",
        type: "Backend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
    {
        imageUrl: vue,
        name: "Vue",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },  
    {
        imageUrl: linux,
        name: "Linux",
        type: "Operating System",
    },  
];

export const experiences = [
    {
        title: "Junior System Administrator",
        company_name: "Quizent Technology",
        icon: quizent,
        iconBg: "#accbe1",
        date: "October 2022 - Present",
        points: [
            "Installing and configuring LAMP Stack in Linux.",
            "Maintaining and monitoring Linux servers.",
            "Administrating Linux servers with WHM/Cpanel."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shaheenshay',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shaheen-ahad-074a8b21b/',
    }
];

export const projects = [
    {
        iconUrl: netflix,
        theme: 'btn-back-black',
        name: 'NetFlix Clone App',
        description: 'Built a clone of Netflix, allowing users to see all the latest and trending movies and shows.',
        link: 'https://github.com/shaheenshay/netflix-clone',
    },
    {
        iconUrl: disneyplus,
        theme: 'btn-back-blue',
        name: 'DisneyPlus Clone App',
        description: 'Built a clone of DisneyPlus, allowing users to see all the latest and trending movies and shows.',
        link: 'https://github.com/shaheenshay/Disneyplus-clone',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Renting App',
        description: 'Designed and built a web app for renting and comparing cars rates available on the market, streamlining the car renting process.',
        link: 'https://github.com/shaheenshay/Vroom-App',
    },
    {
        iconUrl: jsearch,
        theme: 'btn-back-pink',
        name: 'Jsearch App',
        description: 'Developed a mobile application for searching jobs. Connect with top employers and discover your next professional journey in job portal.',
        link: 'https://github.com/shaheenshay/JsearchApp',
    },    
];