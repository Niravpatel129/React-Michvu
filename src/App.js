import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import StoryTale from "./Pages/StoryTale/StoryTale";
import Recreation from "./Pages/Recreation/Recreation";

import ScrollToTop from "react-router-scroll-top";
import Explore from "./Pages/Explore/Explore";

import "./App.scss";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Route path="/" exact component={HomePage} />
          <Route path="/storytale" exact component={StoryTale} />
          <Route path="/recreation" exact component={Recreation} />
          <Route path="/explore" exact component={Explore} />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
