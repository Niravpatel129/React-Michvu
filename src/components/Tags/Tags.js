import React from "react";
import "./Tags.scss";
import ScrollAnimation from "react-animate-on-scroll";

function Tags({
  quote,
  tag1title,
  tag1titlep,
  tag2title,
  tag2titlep,
  tag3title,
  tag3titlep
}) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="Tags">
        <p className="quote">
          {quote ||
            `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s`}
        </p>
        <div className="types">
          <div>
            <h3 className="type">{tag1title || "FILL"}</h3>
            <p>
              {tag1titlep ||
                `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s`}
            </p>
          </div>
          {tag2titlep && (
            <div>
              <h3 className="type">{tag2title || "FILL"}</h3>
              <p>
                {tag2titlep ||
                  `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s`}
              </p>
            </div>
          )}

          {tag3title && (
            <div>
              <h3 className="type">{tag3title || "FILL"}</h3>
              <p>
                {tag3titlep ||
                  `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s`}
              </p>
            </div>
          )}
        </div>
      </section>{" "}
    </ScrollAnimation>
  );
}

export default Tags;
