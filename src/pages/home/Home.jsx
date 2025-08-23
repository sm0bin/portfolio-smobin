import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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