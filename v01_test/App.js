import React from "./core/React.js";
const textEl = React.createTextNode("app");
const App = React.createElement(
  "div",
  { id: "app" },
  "hello! ",
  "min-react-",
  textEl
);
export default App;