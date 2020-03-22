import React from "react";

import Introduction from "../../components/Introduction/Introduction";
import Tags from "../../components/Tags/Tags";
import Video from "../../components/Video/Video";
import TitleParagraph from "../../components/TitleParagraph/TitleParagraph";
import TitleImage from "../../components/TitleImage/TitleImage";
import NextPrevious from "../../components/NextPrevious/NextPrevious";
import FullWidthImage from "../../components/FullWidthImage/FullWidthImage";

function StoryTale() {
  return (
    <React.Fragment>
      <Introduction title="Storytale" src="https://i.imgur.com/qbEUrTp.png" />
      <Tags
        quote="An interactive and accessible AR experience that actually deepens our engagement with stories."
        tag1title="Type"
        tag1titlep="UI/UX, Product, Interaction, Website, Augmented Reality, Voice Recognition"
        tag2title="Tools"
        tag2titlep="Sketch, Cinema4D, Mixamo,  8thWall, Voice Recognition API, After Effects"
        tag3title="Team Members"
        tag3titlep="Frederick Boyd, Alexie Leroux, Rawa Qadir"
      />
      <TitleParagraph
        title1="Opportunities"
        title2="Collaboration"
        para1={
          <React.Fragment>
            Building an experience that blends analog and digital in a clever
            and meaningful way.
          </React.Fragment>
        }
        para2={
          <React.Fragment>
            Generate a product that encourages families to better connect with
            each other.
          </React.Fragment>
        }
        src1=""
        src2=""
      />
      <Video src="https://player.vimeo.com/video/355413664" />
      <Tags
        quote="Storytelling between parent and child is a fundamental human experience that often carry a deeper message that the child can reflect on later in life."
        tag1title="How"
        tag1titlep={
          <React.Fragment>
            The experience takes place between a parent and their child on a
            tablet. The parent or child selects a story they want to read from
            the story selection page.
            <br></br>
            <br></br>
            The app keeps track of what’s being read and listens for key
            words. When a pre-specified keyword is said (e.g. "cow"), a relevant
            3D model appears in AR to which the users will be able to interact
            with.
            <br></br>
            <br></br>
            Parents or children can then have simple interactions with the 3D
            model. For example, they can tap a cow to hear it "moo".
          </React.Fragment>
        }
      />
      <TitleParagraph
        title1="Voice Recognition"
        title2="Augmented Reality (AR)"
        para1={
          <React.Fragment>
            Allows for the parents to be apart of the story experience with
            their child. Dictation can also help kids who struggle with reading
            and writing.
            <br></br>
            <br></br>
            Below is an example of how voice recogntion is introduced to
            children.
          </React.Fragment>
        }
        para2={
          <React.Fragment>
            There is a narrative potential in using AR to tell stories. Rather
            than having stories take shape in a book, the story is instead
            placed in their own space.
            <br></br>
            <br></br>
            This creates a more realistic and seamless experience by using the
            lens of the device.
          </React.Fragment>
        }
        src1=""
        src2=""
      />
      <TitleImage title="Userflow" src="https://i.imgur.com/ap7HnHv.png" />
      <TitleImage title="Branding" src="https://i.imgur.com/BBhiwTj.png" />
      <TitleImage title="" src="https://i.imgur.com/JtlC5lF.png" />
      <TitleImage title="Visual Design" src="https://i.imgur.com/N22JYTh.png" />

      <Video src="https://player.vimeo.com/video/384106368" />
      <TitleImage
        title="3D Modelling / Character Design / Scene Layout"
        src="https://i.imgur.com/9RGBqjd.png"
      />
      <TitleImage title="" src="https://i.imgur.com/roYINFS.png" />
      <TitleImage title="" src="https://i.imgur.com/t6PHfSS.png" />
      <NextPrevious
        prev="/explore"
        next="/recreation"
        // nextSrc="https://i.imgur.com/N22JYTh.png"
        // prevSrc="https://i.imgur.com/LfgwyBu.png"
      />
    </React.Fragment>
  );
}

export default StoryTale;
