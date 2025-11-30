import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";
import UserContext from "../utils/UserContext";

// class About extends React.Component ---OR
// class based component
class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Loading...",
                title: "",
                about: "",
                bio: "",
                location: "",
                email: "",
                github: "",
                linkedin: "",
            }
        };

        console.log("Parent Constructor")
    }

    async componentDidMount() {
        console.log("Parent Component Did Mount");

        // Fetch data from GitHub mock API
        const data = await fetch("https://raw.githubusercontent.com/Rudrani01/React/refs/heads/main/mock-data/userData.json");
        const json = await data.json();

        this.setState({
            userInfo: json.user,
        });

        console.log("Fetched user data:", json);
    }

 render() {
    console.log("Parent Render");

    const { name, title, tagline, about, bio, location, email, github, linkedin } = this.state.userInfo;

    return (
        <div>
            <h1 className="text-2xl font-bold text-center m-4 p-4">About</h1>
            <div className="p-2 m-2 font-semibold">
                logged-in-user :
                <UserContext.Consumer>
                    {(data) => <h1>{data.loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>

            {/* <h2>This is  React Series</h2> */}
            
            {/* Commented out to avoid duplicate data */}
            {/* <UserClass name={"First"} location={"Dehradun class"} /> */}
            {/* <UserClass name={"Second"} location={" US "} /> */}

            {/* Display data from GitHub API - shown only once */}
            <div className="text-center">
                <h2>Name: {name}</h2>
                <h3>Title: {title}</h3>
                <p>Tagline: {tagline}</p>
                <h3>About My Project:</h3>
                <p>{about}</p>
                <h3>About Me:</h3>
                <p>{bio}</p>
                <h3>Location: {location}</h3>
                <h4>Email: {email}</h4>
                <h4>GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></h4>
                <h4>LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></h4>
            </div>
        </div>
    );
    }
}


// this is the same thing as above
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <UserClass name={"Rudrani Dhomne (classs)"} location={"Dehradun class"} />

//             {/* <User name={"Rudrani Dhomne (function)"} /> */}

//         </div>

//     );
// };

export default About;