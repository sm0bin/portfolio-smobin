import Marquee from "react-fast-marquee";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaFigma,
    FaGitAlt,
    FaGithub,
    FaSass
} from "react-icons/fa";
import {
    SiMongodb,
    SiMongoose,
    SiExpress,
    SiAdobexd,
    SiFirebase,
    SiTailwindcss,
    SiBootstrap,
    SiDaisyui,
    SiMui,
    SiNextdotjs,
    SiRedux,
    SiTypescript,
    SiJsonwebtokens,
    SiAxios,
    SiReactquery,
    SiChakraui,
    SiAntdesign,
    // SiShadcnui
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
    // Array of skills with their icons and names
    const skills = [
        // Frontend Technologies
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <IoLogoJavascript />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaSass />, name: "Sass" },

        // CSS Frameworks & UI Libraries
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiBootstrap />, name: "Bootstrap" },
        { icon: <SiDaisyui />, name: "Daisy UI" },
        // { icon: <SiShadcnui />, name: "shadcn/ui" },
        { icon: <SiMui />, name: "Material UI" },
        { icon: <SiChakraui />, name: "Chakra UI" },
        { icon: <SiAntdesign />, name: "Ant Design" },

        // Backend Technologies
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiJsonwebtokens />, name: "JWT" },

        // Database & Cloud
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMongoose />, name: "Mongoose" },
        { icon: <SiFirebase />, name: "Firebase" },

        // Data Fetching & State Management
        { icon: <SiAxios />, name: "Axios" },
        { icon: <SiReactquery />, name: "TanStack Query" },

        // Design & Development Tools
        { icon: <FaFigma />, name: "Figma" },
        { icon: <SiAdobexd />, name: "Adobe XD" },
        { icon: <TbBrandVscode />, name: "VS Code" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
    ];

    return (
        <Marquee
            id='skills'
            className="bg-secondary py-8 md:py-12 text-4xl md:text-7xl text-[#0F3775]"
            pauseOnHover={true}
            delay={0}
            loop={0}
        >
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="relative group mr-20 cursor-pointer"
                >
                    {/* Tech Icon */}
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600">
                        {skill.icon}
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                                    bg-gray-800 text-white text-sm px-3 py-1 rounded-lg 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    whitespace-nowrap z-10 pointer-events-none
                                    before:content-[''] before:absolute before:top-full before:left-1/2 
                                    before:transform before:-translate-x-1/2 before:border-4 
                                    before:border-transparent before:border-t-gray-800">
                        {skill.name}
                    </div>
                </div>
            ))}
        </Marquee>
    );
};

export default Skills;