import React from "react";
import Home from "container/Home";
import { Global } from "@emotion/react";
import { reset } from "./style/global";

function App() {
  return (
    <div className="App">
      <Global styles={reset} />
      <Home />
    </div>
  );
}

export default App;
