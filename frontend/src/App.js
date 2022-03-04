import React from "react";
import ReactDOM from "react-dom";
import Entry from "./components/Entry";
import StoreChooser from "./components/StoreChooser";

function App() {
  return (
    <div>
      <Entry />
      <StoreChooser />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
