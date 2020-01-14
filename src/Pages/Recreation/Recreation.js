import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction";
import Tags from "../../components/Tags/Tags";
import TitleParagraph from "../../components/TitleParagraph/TitleParagraph";
import TitleImage from "../../components/TitleImage/TitleImage";
import NextPrevious from "../../components/NextPrevious/NextPrevious";
import TitleVideo from "../../components/TitleVideo/TitleVideo";

function Recreation() {
  return (
    <React.Fragment>
      <Navbar />
      <Introduction title="Recreation" src="https://i.imgur.com/995WUZV.png" />
      <Tags
        quote="How can I help parents find the perfect program for their child? "
        tag1title="Type"
        tag1titlep="UI/UX, Product, Desktop & Mobile Design"
        tag2title="Tools"
        tag2titlep="Sketch and Invision Studio"
        tag3title="Timeline"
        tag3titlep="January 2019 - January 2020"
      />
      <TitleParagraph
        title1="Personal Goals"
        title2="Design Goals"
        para1={
          <React.Fragment>
            My first goal is to learn to conduct and analyze user research on my
            own. To which then sort said research and design flowcharts,
            wireframes and the final product from it.
          </React.Fragment>
        }
        para2={
          <React.Fragment>
            Design goals for this redesign is redefining the user experience of
            Guelph’s recreational website. Design an anti-human experience in
            the website. To create trust and functionality through this product.
          </React.Fragment>
        }
        src1=""
        src2=""
      />
      <TitleImage title="Current Site" src="https://i.imgur.com/zwcd32C.png" />
      <TitleImage title="" src="https://i.imgur.com/VggYYg9.png" />
      <TitleParagraph
        title1="The Problem"
        title2="Addressing the Current Architecture"
        para1={
          <React.Fragment>
            The platform is in need of a new visual design and a reorganized
            information architecture as the current one is insufficient.
            <br></br>
            <br></br>
            The current platform is outdated and simply lacks showing the
            important information, whereas the pamphlet provides important
            information. Therefore, most customers will use the pamphlet or do
            most business over the phone and in person.
            <br></br>
            <br></br>
            However, pamphlets are outdated as most classes would get canceled
            if there isn’t enough participants.
          </React.Fragment>
        }
        para2={
          <React.Fragment>
            To better understand the current information architecture of
            guelph.ca page, I mapped out their current platform and its content.
            <br></br>
            <br></br>
            After mapping out the content, I myself, was struggling to
            accomplish simple tasks as the user journey becomes more complicated
            screen after screen.
            <br></br>
            <br></br>
            Therefore, I was able to formulate what I was seeking for in my user
            interviews.
          </React.Fragment>
        }
      />
      <TitleImage
        title="Current Site Walkthrough"
        src="https://i.imgur.com/ZtqD4d9.png"
      />
      <Tags
        quote="I couldn’t understand anything
on the recreation site such as the information on their classes - schedules, how much it cost, any of that - and I gave up on that and decided to go to the YMCA instead. - Interviewee"
        tag1title="Search Feature"
        tag1titlep={
          <React.Fragment>
            I was really inspired by online booking for hotels and flights
            filtering system, such as AirBnB, when researching for competitive
            companies. With such a large content base, this could possibly be
            implemented in other cities as well, I decided to adopt their
            landing page filtering system.
            <br></br>
            <br></br>
            This new filtering system allows for parents/and or adults to have a
            feature that they are comfortable in using (Example: Expedia.ca has
            a high demographic adults between the ages of 25-54 that uses their
            site).
          </React.Fragment>
        }
      />
      <TitleImage title="Branding" src="https://i.imgur.com/LfgwyBu.png" />
      <TitleVideo
        title="Mobile"
        src1="https://i.imgur.com/QOBfmYq.mp4"
        src2="https://i.imgur.com/kGadxyO.mp4"
      />
      <TitleImage title="Desktop" video="https://i.imgur.com/oKoMvie.mp4" />
      <TitleImage title="" src="https://i.imgur.com/IykAHRp.png" />
      <TitleImage title="" src="https://i.imgur.com/7Hk8Dg3.jpg" />
      <NextPrevious prev="/storytale" next="/recreation" />
    </React.Fragment>
  );
}

export default Recreation;
