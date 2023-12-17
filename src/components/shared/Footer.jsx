import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaBehance, FaDribbble } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {

    const navLinksWithPath = [
        { title: "Home", path: "hero" },
        { title: "About", path: "about" },
        { title: "Contact", path: "contact" },
        { title: "Education", path: "education" },
        { title: "Projects", path: "projects" }

    ]

    const socialLinks = [
        { icon: <FaGithub />, link: 'https://github.com/sm0bin' },
        { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/sm0bin/' },
        { icon: <FaFacebook />, link: 'https://www.facebook.com/m00bin/' },
        { icon: <FaBehance />, link: 'https://www.behance.net/smobin' },
        { icon: <FaDribbble />, link: 'https://dribbble.com/smobin' }
    ]

    const navLinks = navLinksWithPath.map((link) => {
        return (
            <LinkScroll
                key={link.path}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                // onSetActive={handleSetActive}
                to={link.path}>{link.title}</LinkScroll>
        )
    })

    return (
        <footer>

            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    {/* <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> */}
                    <h2 className="font-head text-4xl text-secondary">Shehjad Mobin</h2>
                    <p className="text-lg">Empowering Digital Experiences Through Innovative Solutions</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Graphic Design</a>
                    <a className="link link-hover">UI/UX Design</a>
                    <a className="link link-hover">Frontend Development</a>
                    <a className="link link-hover">Full Stack Development</a>
                </nav>
                <nav>
                    <header className="footer-title">Quick Links</header>
                    {navLinks}
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>


            <div className="footer items-center p-4 bg-neutral ">
                <aside className="items-center grid-flow-col">
                    <img src="/sm-frame-alt.svg" alt="Shehjad Mobin Icon" />
                    <p>Copyright © <span className="font-head text-secondary">Shehjad Mobin</span> 2023 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
                    {
                        socialLinks.map((link, index) => (
                            <Link key={index} className="text-xl hover:text-secondary duration-300" to={link.link} target="_blank">{link.icon}</Link>
                        ))
                    }
                </nav>
            </div>
        </footer >
    );
};

export default Footer;