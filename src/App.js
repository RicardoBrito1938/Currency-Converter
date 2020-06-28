import React from "react";
import "bootstrap-css-only";
import "./App.css";
import Header from "./components/Header";
import Conversor from "./components/Conversor";

function App() {
  return (
    <div className="App">
      <Header />
      <Conversor />
    </div>
  );
}

export default App;
