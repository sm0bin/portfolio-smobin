import { Link } from "react-router-dom";
// {
//             name: "Tourist Guide",
//             thumbnail: "./projects/Tourist-Guide.png",
//             code: "https://github.com/sm0bin/tourist-guide",
//             website: "https://tourist-guide-sm.web.app",
//             technology: ["React", "Node.js", "Express", "MongoDB"],
//             description: "A web application that provides information about tourist attractions. Tour booking and management features are included.",
//             features: [
//                 "User authentication and authorization.",
//                 "Booking system for tours.",
//                 "Admin panel for managing tours and users.",
//                 "Tour Guides can create and manage their own profiles."
//             ]
//         },
const ProjectCard = ({ project }) => {
    const { thumbnail, name, code, website } = project;
    return (
        <div className="card border border-secondary">

            <div className="card-body p-5">
                <img className="rounded-md h-52" src="a.jpg" alt={name} />
                <h2 className="font-bold text-2xl mb-2 mt-3">{name}</h2>
                <div className="grid grid-cols-2 gap-4">
                    <Link to={code} target="_blank" className="btn btn-secondary btn-outline">Code </Link>
                    <Link to={website} target="_blank" className="btn btn-secondary">Website </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;