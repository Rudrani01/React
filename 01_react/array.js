/** nestes html in react
 * 
 * <div id="parent">
 *     <div id="child">
 *       <h1>I'm h1 tag</h1>
 *        <h2>I'm h1 tag</h2>    h1 h2 children of child tag
 *       </div>
 * 
 *  <div id="child">
 *       <h1>I'm h1 tag</h1>
 *        <h2>I'm h1 tag</h2>    h1 h2 children of child tag
 *       </div>
 *</div>
 * 
 * ReactElement(Object) => HTML(Browser understands)
 */

const parent = React.createElement("div", {id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
]),
 React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
 ]),
]);

console.log(parent);   // rteurn object

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);