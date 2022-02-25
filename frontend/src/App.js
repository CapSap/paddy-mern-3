import React from "react";
import ReactDOM from "react-dom";
import Entry from "./components/Entry";
import UserSetter from "./components/UserSetter";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Entry />
      {/* <UserSetter /> */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
