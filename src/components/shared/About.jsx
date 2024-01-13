import image from '../../assets/images/mobin-long.jpg';
import { IoMdCloudDownload } from 'react-icons/io';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import Points from './Points';
import { HiBadgeCheck } from "react-icons/hi";
import { PiCertificateFill } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section id='about'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img className="rounded-lg w-full h-[740px] object-cover object-top" src={image} alt="Profile Image" />

                <div className=''>
                    <div>
                        <h4 className="font-medium text-xl mb-1">About Me</h4>
                        <h2 className="font-head text-5xl text-secondary mb-6">I can Transform Your Ideas into Reality</h2>
                    </div>
                    {/* <SectionTitle title='I can Transform Your Ideas into Reality' subTitle='About Me'></SectionTitle> */}
                    <p className="text-lg mb-12">Welcome to my digital space! I'm Shehjad Mobin, a dedicated full-stack developer with a deep passion for crafting seamless and innovative web experiences. With a robust skill set encompassing front-end and back-end technologies, I bring ideas to life through clean code, creative problem-solving, and a user-centric approach. Explore my portfolio to witness the fusion of technology and creativity that drives my commitment to building exceptional digital solutions.</p>


                    <div className="grid grid-cols-2 gap-8 mb-12">
                        <Points icon={HiBadgeCheck} field='12+' value='Complete Project' />
                        <Points icon={PiCertificateFill} field='Certified' value='Web Developer' />
                    </div>

                    <div className='grid grid-cols-2 gap-8 mb-12 font-medium text-lg'>
                        <div><FiCheckCircle className='inline-block mr-2 text-2xl text-secondary' />Full Stack Web Developer</div>
                        <div><FiCheckCircle className='inline-block mr-2 text-2xl text-secondary' />Responsive & Clean Design</div>
                        <div><FiCheckCircle className='inline-block mr-2 text-2xl text-secondary' />MERN Stack Developer</div>
                        <div><FiCheckCircle className='inline-block mr-2 text-2xl text-secondary' />React FrontEnd Developer</div>
                    </div>





                    <div className='flex gap-4'>
                        <a href='/Shehjad-Mobin-Resume.pdf' className="btn btn-secondary btn-outline" download>Resume <IoMdCloudDownload className="text-2xl" /></a>
                        <Link to='contact' className="btn btn-secondary">Contact <PiPaperPlaneRightFill className="text-2xl" /></Link>
                    </div>

                </div>
            </div>


        </section>
    );
};

export default About;