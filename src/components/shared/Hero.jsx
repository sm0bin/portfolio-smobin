import { IoMdCloudDownload } from 'react-icons/io';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import heroImg from '../../assets/pc.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='max-w-xl'>
                <h1 className='font-head text-6xl leading-tight'>Hello,<br /> I am <span className='text-secondary font-head'>Shehjad Mobin</span></h1>
                <h2 className='font-semibold text-3xl'>Full Stack Web Developer</h2>
                <p className='my-4 text-lg'>
                    Full Stack Web Developer specializing in MERN Stack technologies. Dedicated to crafting responsive, visually appealing, and impactful web applications.
                </p>
                <div className='flex gap-4'>
                    <Link className="btn btn-secondary">Resume <IoMdCloudDownload className="text-2xl" /></Link>
                    <Link className="btn btn-secondary">Contact <PiPaperPlaneRightFill className="text-2xl" /></Link>
                </div>
            </div>
            <img className='max-w-lg' src={heroImg} alt="Developer Pc" />
        </div>
    );
};

export default Hero;