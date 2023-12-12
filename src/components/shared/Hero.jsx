import { IoMdCloudDownload } from 'react-icons/io';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import heroImg from '../../assets/pc.svg';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row gap-12 items-center justify-between' id='hero'>
            <div className='max-w-xl'>
                <h1 className='font-head text-6xl leading-tight'>Hello,<br /> I am <span className='text-secondary font-head'>Shehjad Mobin</span></h1>
                <h2 className='font-semibold text-3xl'>Full Stack Web Developer</h2>
                <p className='my-4 text-lg'>
                    Full Stack Web Developer specializing in MERN Stack technologies. Dedicated to crafting responsive, visually appealing, and impactful web applications.
                </p>
                <div className='flex gap-4'>
                    <a href='/Shehjad-Mobin-Resume.pdf' className="btn btn-secondary btn-outline" download>Resume <IoMdCloudDownload className="text-2xl" /></a>
                    <Link to='contact' className="btn btn-secondary">Contact <PiPaperPlaneRightFill className="text-2xl" /></Link>
                </div>
            </div>
            <img className='md:max-w-xs lg:max-w-lg' src={heroImg} alt="Developer Pc" />
        </div>
    );
};

export default Hero;