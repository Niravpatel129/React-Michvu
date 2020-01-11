import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomePageItem from "../../components/HomePageItem/HomePageItem";
import Tags from "../../components/Tags/Tags";

function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeAbout />
      <HomePageItem />
      <Tags
        quote={
          <>
            I focus on product design, experiences, and visual design. Am
            currently seeking internships or possible design positions.
            <br></br>
            <br></br>
            <div style={{ fontSize: "14px" }}>
              Let’s talk at{" "}
              <a href="mailto:mivuuuu@gmail.com">mivuuuu@gmail.com!</a>{" "}
              <br></br>Click here for my{" "}
              <a href="https://drive.google.com/file/d/1kGu9YrdSUKSB6lp-6dzNtc3qrpg_0Mx3/view?fbclid=IwAR39A4UXcA6StUG9Q_rJ9LPXdjkkV7pMPxje9M3UgRyvEAyId-zgwFvH9XM">
                resume
              </a>
            </div>
          </>
        }
        tag1title="Education"
        tag1titlep={
          <>
            York University & <br></br>Sheridan College Joint <br></br>Program
            in Design
            <br></br>
            <br></br>
            Bachelor of Design with<br></br> Honours (BDes)<br></br>
            <br></br> Fall 2014 - Fall 2019
          </>
        }
        tag2title="ELSEWHERE"
        tag2titlep={
          <>
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
          </>
        }
      />
    </React.Fragment>
  );
}

export default HomePage;
