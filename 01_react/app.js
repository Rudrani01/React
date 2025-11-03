  // React code
 const heading = React.createElement(
    "h1", 
    { id: "heading", xyz: "abc" }, // attributes
     "Hello World from React!"  // this is children
);

console.log(heading); // returns object


 // here all the DOM manipulation is done; creating root and rendering is done
// all the react code will run in root
 const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
