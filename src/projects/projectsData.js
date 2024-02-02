import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
    1: {
        title: "E-Commerce WebApp",
        image: projectOne,
        description: (
            <>
            <p>
                write about 
            </p>
            </>
        ),
        github: "https://github.com/krissyweber/React-Frontend",
        githubBackend: "https://github.com/krissyweber/Node-API",
        demo: "https:netlify.com",
    },
    2: {
        title: "Social Media WebApp",
        image: projectTwo,
        description: (
            <>
            <p>
                write about 
            </p>
            </>
        ),
        github: "https://github.com/krissyweber/TwitterMock",
        demo: "https:netlify.com",
    },
    3: {
        title: "Other",
        image: projectThree,
        description: (
            <>
            <p>
                write about 
            </p>
            </>
        ),
        github: "https://github.com",
        demo: "https:netlify.com",
    },
};

export default projects;