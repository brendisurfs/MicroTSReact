import ReactDom from "react-dom";
import React from "react";

const App = () => {
  return (
    <div>
      <h1>Mini React-Typescript Template</h1>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
