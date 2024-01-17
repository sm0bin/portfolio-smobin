import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import touristGuideImage from "../../assets/images/Tourist-Guide.png";
import tuitionMasterImage from "../../assets/images/Tuition-Master.png";
import qualityCravingImage from "../../assets/images/Quality-Craving.png";
import corpfestImage from "../../assets/images/Corpfest.png";

const Projects = () => {
    const projectList = [
        {
            name: "Tourist Guide",
            thumbnail: touristGuideImage,
            code: "https://github.com/sm0bin/tourist-guide",
            website: "https://tourist-guide-sm.web.app",
        },
        {
            name: "Tuition Master",
            thumbnail: tuitionMasterImage,
            code: "https://github.com/sm0bin/tuition-master",
            website: "https://tuition-master-sm.web.app",
        },
        {
            name: "Quality Cravings",
            thumbnail: qualityCravingImage,
            code: "https://github.com/sm0bin/quality-cravings",
            website: "https://quality-cravings.web.app"
        },
        {
            name: "Corpfest",
            thumbnail: corpfestImage,
            code: "https://github.com/sm0bin/corpfest",
            website: "https://corpfest-d370d.web.app",
        }
    ];

    return (
        <section id="projects">
            <SectionTitle title='My Projects' subTitle="Projects"></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    projectList.map((project, index) => (
                        <div key={index} className="card border border-secondary">

                            <div className="card-body p-5">
                                <img className="rounded-md" src={project.thumbnail} alt={project.name} />
                                <h2 className="font-bold text-2xl mb-2 mt-3">{project.name}</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <Link to={project.code} target="_blank" className="btn btn-secondary btn-outline">Code </Link>
                                    <Link to={project.website} target="_blank" className="btn btn-secondary">Website </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default Projects;