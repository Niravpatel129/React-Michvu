import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Introduction from "../../components/Introduction/Introduction";
import Tags from "../../components/Tags/Tags";
import TitleImage from "../../components/TitleImage/TitleImage";
import NextPrevious from "../../components/NextPrevious/NextPrevious";

function Explore() {
  return (
    <React.Fragment>
      <Navbar />
      <Introduction title="Explore" src="https://i.imgur.com/KreI0nR.png" />
      <Tags
        quote="Starting in the summer of 2017, I gained interest in 3D and from there on I started developing my style. Creating things such as abstract 3D objects to creating assets in small projects here and there."
        tag1title="Type"
        tag1titlep="3D Design, Assets"
        tag2title="Tools"
        tag2titlep="Cinema4D, Blender, SparkAR, Adobe Premier"
        tag3title="Timeline"
        tag3titlep="August 2017 - Present Day"
      />

      <TitleImage title="SparkAR" src="https://i.imgur.com/tGqZ3AV.jpg" />
      <TitleImage title=" " video="https://player.vimeo.com/video/384673980" />

      <TitleImage title="Blender" src="https://i.imgur.com/fJX5IV6.png" />
      <TitleImage title="" src="https://i.imgur.com/VD4Koxs.png" />
      <TitleImage title="" src="https://i.imgur.com/dxvG2Df.png" />
      <TitleImage title="" src="https://i.imgur.com/p2ZVJpE.jpg" />
      <TitleImage title="" src="https://i.imgur.com/fvR1Cad.jpg" />

      <TitleImage title="Cinema4D" src="https://i.imgur.com/DxlHgEX.jpg" />
      <TitleImage title="" video="https://player.vimeo.com/video/265523385" />
      <TitleImage title="" src="https://i.imgur.com/OOuCCz3.png" />
      <TitleImage title="" video="https://player.vimeo.com/video/379862200" />
      <TitleImage title="" video="https://i.imgur.com/whoLF6q.mp4" />

      <NextPrevious prev="/storytale" next="/recreation" />
    </React.Fragment>
  );
}

export default Explore;
