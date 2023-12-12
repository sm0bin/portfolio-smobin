import About from "../components/shared/About";
import Contact from "../components/shared/Contact";
import Education from "../components/shared/Education";
import Hero from "../components/shared/Hero";
import Projects from "../components/shared/Projects";
import Skills from "../components/shared/Skills";

const Home = () => {
    return (
        <div className="my-32 space-y-32">
            <Hero></Hero>
            <Skills></Skills>
            <About></About>
            <Contact></Contact>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Home;