import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomePageItem from "../../components/HomePageItem/HomePageItem";
import HomeConclusion from "../../components/HomeConclusion/HomeConclusion";

function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <HomeAbout />
      <HomePageItem />
      <HomeConclusion />
    </React.Fragment>
  );
}

export default HomePage;
