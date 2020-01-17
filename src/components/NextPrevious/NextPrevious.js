import React, { useRef, useEffect } from "react";

import "./NextPrevious.scss";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import { TweenLite } from "gsap";

function NextPrevious({ next, prev, nextSrc, prevSrc }) {
  const cursorRef = useRef();

  useEffect(() => {
    cursorRef.current.style.backgroundImage = `url(${nextSrc})`;
  }, [nextSrc]);

  const handleMouseMove = e => {
    TweenLite.to(cursorRef.current, 0.1, {
      css: {
        left: e.pageX
      },
      delay: 0.03
    });
  };

  const handleMouseEnter = e => {
    console.log(e.target.innerText);

    if (e.target.innerText === "Next") {
      cursorRef.current.style.backgroundImage = `url(${nextSrc})`;
    } else {
      cursorRef.current.style.backgroundImage = `url(${prevSrc})`;
    }

    console.log("mouse enter");
    TweenLite.to(cursorRef.current, 1, {
      css: {
        opacity: "1"
      }
    });
  };

  const handleMouseLeave = () => {
    console.log("mouse leave");

    TweenLite.to(cursorRef.current, 1, {
      css: {
        opacity: "0"
      }
    });
  };

  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="NextPrevious" onMouseMove={handleMouseMove}>
        <div ref={cursorRef} className="cursor"></div>
        <div className="Text">
          <Link to={prev}>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Previous
            </h2>
          </Link>
          <Link to={next}>
            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Next
            </h2>
          </Link>
        </div>
        <a href="#Navbar">
          <h5>Back to top</h5>
        </a>
      </section>
    </ScrollAnimation>
  );
}

export default NextPrevious;
