import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
