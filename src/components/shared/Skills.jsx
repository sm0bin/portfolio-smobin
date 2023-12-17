import Marquee from "react-fast-marquee";
import { FaReact, FaNode, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaSass } from "react-icons/fa";
import { SiMongodb, SiMongoose, SiExpress, SiAdobexd, SiFirebase, SiTailwindcss, SiBootstrap, SiDaisyui, SiMui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
    return (
        <Marquee id='skills' className="bg-secondary py-8 md:py-12 text-4xl md:text-7xl text-[#0F3775]" pauseOnHover={true} delay={0} loop={0}>
            {/* <div className="bg-secondary py-8 text-4xl flex"> */}
            <FaReact className="mr-20" />
            <FaNodeJs className="mr-20" />
            <SiExpress className="mr-20" />
            <SiMongodb className="mr-20" />
            <SiMongoose className="mr-20" />
            {/* <SiMongoose className="mr-20" /> */}
            <SiFirebase className="mr-20" />
            <SiTailwindcss className="mr-20" />
            <SiDaisyui className="mr-20" />
            <SiBootstrap className="mr-20" />
            <SiMui className="mr-20" />
            <FaNode className="mr-20" />
            <FaHtml5 className="mr-20" />
            <FaCss3Alt className="mr-20" />
            <FaSass className="mr-20" />
            <IoLogoJavascript className="mr-20" />
            <FaFigma className="mr-20" />
            <SiAdobexd className="mr-20" />
            <TbBrandVscode className="mr-20" />
            <FaGitAlt className="mr-20" />
            <FaGithub className="mr-20" />

            {/* </div> */}
        </Marquee>
    );
};

export default Skills;