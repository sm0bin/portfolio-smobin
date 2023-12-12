import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const App = () => {
    return (
        <div className="max-w-7xl mx-4 md:mx-8 lg:mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default App;