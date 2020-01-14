import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomePageItem from "../../components/HomePageItem/HomePageItem";
import Tags from "../../components/Tags/Tags";
import HomePageTitle from "../../components/HomePageTitle/HomePageTitle";

function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <HomePageTitle
        src="https://i.imgur.com/jDR5lvL.png"
        src2="https://i.imgur.com/tJCBMOi.png"
      />
      <HomeAbout />
      <HomePageItem
        src="https://i.imgur.com/NyCrCWJ.jpg"
        tag1="Augmented Reality"
        tag2="Voice Recognition"
        tag3="Website"
        title="StoryTale"
        para="An interactive and accessible AR website experience that actually deepens our engagement with stories."
        btnSrc="https://i.imgur.com/wiKHpYE.png"
        link="/storytale"
      />

      <HomePageItem
        src="https://i.imgur.com/8XbJhKm.png"
        tag1="Website"
        tag2="UI/UX"
        tag3="Product"
        title="Recreation"
        para="Redesigning a recreational platform for my hometown. A deep dive into its UI/UX."
        btnSrc="https://i.imgur.com/wiKHpYE.png"
        link="/recreation"
      />

      <HomePageItem
        src="https://i.imgur.com/PzrxWpt.png"
        tag1="Visual Design"
        tag2="Blender"
        tag3="Cinema4D"
        title="3D Exploration"
        para="A series of images and animations that pushed my ability to learn programs such as Cinema4d and Blender."
        btnSrc="https://i.imgur.com/wiKHpYE.png"
        link="/explore"
      />

      <HomePageItem
        src="https://i.imgur.com/8ImupKW.jpg"
        tag1="App Design"
        tag2="UI/UX"
        tag3="Product"
        title="Google Travel"
        para="An exploration where I explore an interface where users are able to utilize different types of assets in one app."
        btnSrc="https://i.imgur.com/DaBZTjf.png"
        link="/storytale"
      />
      <Tags
        quote={
          <React.Fragment>
            I focus on product design, experiences, and visual design. Am
            currently seeking internships or possible design positions.
            <br></br>
            <br></br>
            <span style={{ fontSize: "14px" }}>
              Let’s talk at{" "}
              <a href="mailto:mivuuuu@gmail.com">mivuuuu@gmail.com!</a>{" "}
              <br></br>Click here for my{" "}
              <a href="https://drive.google.com/file/d/1kGu9YrdSUKSB6lp-6dzNtc3qrpg_0Mx3/view?fbclid=IwAR39A4UXcA6StUG9Q_rJ9LPXdjkkV7pMPxje9M3UgRyvEAyId-zgwFvH9XM">
                resume
              </a>
            </span>
          </React.Fragment>
        }
        tag1title="Education"
        tag1titlep={
          <React.Fragment>
            York University & <br></br>Sheridan College Joint <br></br>Program
            in Design
            <br></br>
            <br></br>
            Bachelor of Design with<br></br> Honours (BDes)<br></br>
            <br></br> Fall 2014 - Fall 2019
          </React.Fragment>
        }
        tag2title="ELSEWHERE"
        tag2titlep={
          <React.Fragment>
            <a href="https://www.instagram.com/m_cih/">Instagram</a>
            <br></br>
            <a href="https://www.linkedin.com/in/michelle-vu-062953139/">
              LinkedIn
            </a>
            <br></br>
            <a href="https://dribbble.com/mivuu">Dribbble</a>
            <br></br>
            <a href="https://www.behance.net/michellevuu">Behance</a>
            <br></br>
          </React.Fragment>
        }
        id="contact"
      />
    </React.Fragment>
  );
}

export default HomePage;
