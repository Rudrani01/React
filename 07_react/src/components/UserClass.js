import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     count: 0,
        //     count2: 2,
        // };

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "htp://dummy-photo.com"
            },
        };
        console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount");

        // API Call
        const data = await fetch("https://api.github.com/users/Rudrani01");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will unmount")
    }

    render() {
        // const { name, location } = this.props;
        // const {count} = this.state;

        console.log(this.props.name + "Child Render");


        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                {/* <h1>Count: {count} </h1>
                <button onClick={() => {
                    // Never directly update your state variable
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,

                    })
                }}
                >
                    Count Increase
                </button> */}
                <img src="{avatar_url}"></img>
                <h2>Name: {name} </h2>
                <h3>Location: {location} </h3>
                <h4>Contact: @rudrani</h4>
            </div>
        );
    }
}

export default UserClass;


/* 
    Parent Constructor
    FirstChild Render

    SecondChild Constructor
    SecondChild Render

    <DOM UPDATED - IN STABLE BATH>
    FirstChild Component Did Mount
    SecondChild Component Did Mount

*/