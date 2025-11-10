import React from "react";  // npm i react
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS object => rendered to HTML Element(render)

// JSX - HTML-like or XML-like Syntax
// (JSX) - transpiled before it reaches the JS - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = (<h1 className="head">
//     Namaste React using JSX
//     </h1>
// );


// component inside a component
const Title = () => (
        <h1 className="head" tabIndex="5">
            Namaste React using JSX
        </h1>
    );
// React Functional Component 
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
 
// below is also the altenrative way for the above
const HeadingComponent2 = () => (
    <h1 className="heading">Namaste React Functional Component</h1>
);

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

root.render(<HeadingComponent />);

