import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";

const App = () => {
    return (
        <div className="max-w-7xl mx-4 md:mx-8 lg:mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default App;