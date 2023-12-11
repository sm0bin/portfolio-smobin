import About from "../components/shared/About";
import Contact from "../components/shared/Contact";
import Hero from "../components/shared/Hero";
import Skills from "../components/shared/Skills";

const Home = () => {
    return (
        <div className="my-32 space-y-32">
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;