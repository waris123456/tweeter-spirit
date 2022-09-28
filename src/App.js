import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Twittes from "./components/Twittes";
import Trends from "./components/Trends";

function App() {
  return (
    <div className="twitter">
      <Sidebar />
      <Twittes />
      <Trends />
    </div>
  );
}

export default App;
