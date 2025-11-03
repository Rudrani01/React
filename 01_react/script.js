/** nestes html in react
 * 
 * <div id="parent">
 *     <div id="child">
 *       <h1>I'm h1 tag</h1>
 *        <h2>I'm h1 tag</h2>    h1 h2 children of child tag
 *       </div>
 *</div>
 * 
 * ReactElement(Object) => HTML(Browser understands)
 */

 // nested structures inside react
 
 const parent = React.createElement(
    "div",  // 1 => what type of tag it is
    { id: "parent" },   // 2 => object 
    React.createElement(
        "div",
        { id: "child" },
        // array of children
        [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
    )
 );

 console.log(parent);   // rteurn object

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);