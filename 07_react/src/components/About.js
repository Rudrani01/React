import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";
import UserContext from "../utils/UserContext";
import { data } from "autoprefixer";

// class About extends React.Component ---OR
// class based component
class About extends Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

 render() {
    console.log("Parent Render");
    return (
        <div>
            <h1>About</h1>
            <div>
                loggedInUser User
                <UserContext.Consumer>
                    {(data) => <h1>{data.loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>

            <h2>This is Namaste React Web Series</h2>
            <UserClass name={"First"} location={"Dehradun class"} />
            <UserClass name={"Second"} location={" US "} />
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
//             <UserClass name={"Akshay Saini (classs)"} location={"Dehradun class"} />

//             {/* <User name={"Akshay Saini (function)"} /> */}

//         </div>

//     );
// };

export default About;