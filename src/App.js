import React from "react";
import NextPrevious from "./components/NextPrevious/NextPrevious";
import Image from "./components/Image/Image";
import TitleImage from "./components/TitleImage/TitleImage";
import TitleParagraph from "./components/TitleParagraph/TitleParagraph";
import Video from "./components/Video/Video";
import Introduction from "./components/Introduction/Introduction";
import Tags from "./components/Tags/Tags";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Tags />
      <Video />
      <TitleParagraph />
      <TitleImage />
      <Image />
      <NextPrevious />
    </div>
  );
}

export default App;
