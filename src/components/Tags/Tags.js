import React, { useRef, useEffect } from "react";
import "./Tags.scss";
import ScrollAnimation from "react-animate-on-scroll";

function Tags({
  quote,
  tag1title,
  tag1titlep,
  tag2title,
  tag2titlep,
  tag3title,
  tag3titlep,
  id,
  noborder
}) {
  const h3Ref1 = useRef(null);
  const h3Ref2 = useRef(null);
  const h3Ref3 = useRef(null);

  useEffect(() => {
    if (noborder === true) {
      h3Ref1.current.style.border = "none";
      h3Ref2.current.style.border = "none";
    }
  }, [noborder]);
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="Tags" id={id}>
        <p className="quote">
          {quote ||
            `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s`}
        </p>

        <div className="types">
          <div>
            <h3 ref={h3Ref1} className="type">
              {tag1title || "FILL"}
            </h3>

            <p>
              {tag1titlep ||
                `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s`}
            </p>
          </div>
          {tag2titlep && (
            <div>
              <h3 ref={h3Ref2} className="type">
                {tag2title || "FILL"}
              </h3>

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
              <h3 ref={h3Ref3} className="type">
                {tag3title || "FILL"}
              </h3>

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
