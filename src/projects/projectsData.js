import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";

const projects = {
    1: {
        title: "E-Commerce Web App",
        image: projectOne,
        description: (
            <>
            <p>
                E-commerce web application where products can be added, edited and deleted. 
            </p>
            </>
        ),
        github: "https://github.com/krissyweber/React-Frontend",
        githubBackend: "https://github.com/krissyweber/Node-API",
        demo: "https:netlify.com",
    },
    2: {
        title: "Social Media Web App",
        image: projectTwo,
        description: (
            <>
            <p>
                Twitter app mock where you can sign-up, unsubscribe, post tweets, edit tweets, and see the posts of all users.
            </p>
            </>
        ),
        github: "https://github.com/krissyweber/TwitterMock",
        demo: "https:netlify.com",
    },
    3: {
        title: "Home Services App",
        image: projectFour,
        description: (
            <>
            <p>
                React Native mobile application to book and view home services in the area. 
            </p>
            </>
        ),
        github: "https://github.com/krissyweber/my-home-services-app",
        demo: "https:netlify.com",
    },
    4: {
        title: "Sales Dashboard",
        image: projectThree,
        description: (
            <>
            <p>
                Interactive dashboard made with excel sheets. 
            </p>
            </>
        ),
        github: "https://docs.google.com/spreadsheets/d/1_nT2T1u5vyTzCTUYNHNB6ehrJGQV1nlXI6FJU0_tGDw/edit#gid=395338838",
        demo: "https:netlify.com",
    },
};


export default projects;