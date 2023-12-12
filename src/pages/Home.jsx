import About from "../components/shared/About";
import Contact from "../components/shared/Contact";
import Hero from "../components/shared/Hero";
import Skills from "../components/shared/Skills";

const Home = () => {
    return (
        <div className="my-32 space-y-32">
            <Hero></Hero>
            <Skills></Skills>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;