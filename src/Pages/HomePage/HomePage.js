import React from "react";

import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomePageItem from "../../components/HomePageItem/HomePageItem";
import Tags from "../../components/Tags/Tags";
import HomePageTitle from "../../components/HomePageTitle/HomePageTitle";

function HomePage() {
  return (
    <React.Fragment>
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
        link=""
      />
      <HomePageItem
        src="https://trello-attachments.s3.amazonaws.com/5d94e7988d8b535c5af5e9b5/5e3b54b7193f7f284c2d554f/a4574587c0310301f58f075d6b39f79b/Thumbnail-5.png"
        tag1="Website Design"
        tag2="UI/UX"
        tag3="Product"
        title="Amazon Homepage Redesign"
        para="A one week design challenge to redesign the home page of Amazon. Here is my research, analysis, and execution of my attempt.        "
        btnSrc="https://trello-attachments.s3.amazonaws.com/5d94e7988d8b535c5af5e9b5/5e3b54b7193f7f284c2d554f/0627ca47bafe6acb85b4ee11ea8c80e7/InquireToView.svg"
        link=""
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
              <a href="https://drive.google.com/file/d/1h47ZcWo8N78tYkuXL9y66NwlphaSRguV/view?fbclid=IwAR0u7WAGwn1hIb2OwZZE4Ic2MJV3BX0ROc8YT4ED_UGzG26Th9H2G5EqQss">
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
        noborder
      />
    </React.Fragment>
  );
}

export default HomePage;
