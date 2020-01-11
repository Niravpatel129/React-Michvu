import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import StoryTale from "./Pages/StoryTale/StoryTale";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/storytale" exact component={StoryTale} />
      </BrowserRouter>
    </div>
  );
}

export default App;
