import React from "react";

import "./TitleParagraph.scss";

function TitleParagraph({ title1, title2, para1, para2, src1, src2 }) {
  return (
    <section className="TitleParagraph">
      <div className="paragraph">
        <h3>{title1 || "Hello"}</h3>
        <p>
          {para1 ||
            `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when`}
        </p>
        <img alt={src1} src={src1 || "https://i.imgur.com/O8MkfhW.png"}></img>
      </div>
      <div className="paragraph">
        <h3>{title2 || "Hello"}</h3>
        <p>
          {para2 ||
            `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when`}
        </p>
        <img alt={src1} src={src2 || "https://i.imgur.com/O8MkfhW.png"}></img>
      </div>
    </section>
  );
}

export default TitleParagraph;
