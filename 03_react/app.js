import React from "react";  // npm i react
import ReactDOM from "react-dom/client";

// react elemnt inside react element
const elem = <span>React Element</span>;

const title = () => (
        <h1 className="head" tabIndex="5">
            {elem}
            Namaste React using JSX
        </h1>
    );

    // assume the api exist
const data = AudioParam.getdata;



// title is a react elemnt --- normal js variable
// const title = () => (
//         <h1 className="head" tabIndex="5">
//             Namaste React using JSX
//         </h1>
//     );

// React Functional Component 
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
// root.render(title);

        /* any js expression inside {} */
