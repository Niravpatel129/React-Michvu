import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction";
import Tags from "../../components/Tags/Tags";
import Video from "../../components/Video/Video";
import TitleParagraph from "../../components/TitleParagraph/TitleParagraph";
import TitleImage from "../../components/TitleImage/TitleImage";
import Image from "../../components/Image/Image";
import NextPrevious from "../../components/NextPrevious/NextPrevious";

function StoryTale() {
  return (
    <React.Fragment>
      <Navbar />
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
      <Video src="https://player.vimeo.com/video/355413664" />
      <TitleParagraph
        title1="Voice Recognition"
        title2="Augmented Reality (AR)"
        para1="Allows for the parents to be apart of the story experience with their child. Dictation can also help kids who struggle with reading and writing."
        para2="There is a narrative potential in using AR to tell stories. Rather than having stories take shape in a book, the story is instead placed in their own space.        "
        src1=""
        src2=""
      />
      <TitleImage title="wolf" src="https://i.imgur.com/roYINFS.png" />
      <TitleImage title="" src="https://i.imgur.com/roYINFS.png" />
      <Image src="https://i.imgur.com/N22JYTh.png" />
      <NextPrevious prev="/storytale" next="/recreation" />
    </React.Fragment>
  );
}

export default StoryTale;
