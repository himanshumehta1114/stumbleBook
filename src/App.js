import React from "react";
import "./App.css";

import Stumblepane from "./components/stumblepane";
import Time from "./components/time";

const App = () => {
  return (
    <div className="app">
      <div style={{ color: "white", fontSize: "2rem" }}>
        <Time />
      </div>
      <Stumblepane />
    </div>
  );
};

export default App;
