import React from "react";
import ReactDOM from "react-dom";
import Entry from "./components/Entry";

function App() {
  return (
    <div>
      <Entry />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
