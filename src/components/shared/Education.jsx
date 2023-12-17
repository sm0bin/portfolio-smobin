import SectionTitle from "./SectionTitle";

const Education = () => {
    const education = [
        {
            "level": "M. Engineering",
            "school": "Information and Communication Engineering",
            "board": "University of Rajshahi",
            "year": "2021 - Present"
        },
        {
            "level": "B.Sc. Engineering",
            "school": "Information and Communication Engineering",
            "board": "University of Rajshahi",
            "year": "2017 - 2021"
        },
        {
            "level": "HSC",
            "school": "Gopinathpur Collage",
            "board": "Cumilla",
            "year": "2015 - 2017"
        },
        {
            "level": "SSC",
            "school": "Mogra High School",
            "board": "Cumilla",
            "year": "2013 - 2015"
        }
    ]


    return (
        <section id="education">
            <SectionTitle title='My Education' subTitle="Education"></SectionTitle>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {
                    education.map((edu, index) => (
                        <li key={index}>
                            <hr />
                            <div className="timeline-middle text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className={`${index % 2 === 0 ? 'timeline-end' : 'timeline-start md:text-end'} pb-10`}>
                                <time className="font-mono italic">{edu.year}</time>
                                <div className="text-lg text-secondary font-bold">{edu.level}</div>
                                <div className="text-xl font-semibold">{edu.school}</div>
                                <div className="text-lg font-medium">{edu.board}</div>
                            </div>
                            {index < education.length - 1 && <hr />}
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Education;