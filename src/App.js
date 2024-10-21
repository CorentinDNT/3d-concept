import React from "react";
import Tracker from "./utils/tracker";
import HomeSection from "./views/homeSection";
import Shpere from "./components/3d/shpere";

function App() {
  return (
    <div className="App">
      <Tracker />
      <HomeSection />
      <Shpere />
    </div>
  );
}

export default App;
