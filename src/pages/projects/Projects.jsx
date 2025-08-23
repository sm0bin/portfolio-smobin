import ProjectCard from "../../components/ProjectCard";
import SectionTitle from "../../components/SectionTitle";

const Projects = () => {
    const projectList = [
        {
            name: "Tourist Guide",
            thumbnail: "/projects/Tourist-Guide.png",
            code: "https://github.com/sm0bin/tourist-guide",
            website: "https://tourist-guide-sm.web.app",
            technology: ["React", "Node.js", "Express", "MongoDB"],
            description: "A web application that provides information about tourist attractions. Tour booking and management features are included.",
            features: [
                "User authentication and authorization.",
                "Booking system for tours.",
                "Admin panel for managing tours and users.",
                "Tour Guides can create and manage their own profiles."
            ]
        },
        // {
        //     name: "Tuition Master",
        //     thumbnail: "./projects/Tuition-Master.png",
        //     code: "https://github.com/sm0bin/tuition-master",
        //     website: "https://tuition-master-sm.web.app",
        // },
        // {
        //     name: "Quality Cravings",
        //     thumbnail: "./projects/Quality-Craving.png",
        //     code: "https://github.com/sm0bin/quality-cravings",
        //     website: "https://quality-cravings.web.app"
        // },
        // {
        //     name: "Corpfest",
        //     thumbnail: "./projects/Corpfest.png",
        //     code: "https://github.com/sm0bin/corpfest",
        //     website: "https://corpfest-d370d.web.app",
        // }
    ];

    return (
        <section id="projects" className="max-w-7xl mx-4 md:mx-8 lg:mx-auto pt-20 min-h-screen">
            <SectionTitle title='My Projects' subTitle="Projects"></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    projectList.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))
                }
            </div>

        </section>
    );
};

export default Projects;