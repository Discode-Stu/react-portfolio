import React from "react";

import aboutImg from "../../../static/assets/images/bio/aboutImg.jpg";
import ImageReveal from "../../animationFeatures/imageReveal";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className="left-column">
        <div className="about-image-container">
          <ImageReveal className1="reveal-blue-logo" image={aboutImg} />
          {/* // style={{ */}
          {/* //     background: "url(" + aboutImg + ") no-repeat",
        //     backgroundSize: "cover",
        //     backgroundPosition: "center"
        // }} */}
        </div>
      </div>

      <div className="right-column">
        <h1>About Dan</h1>
        <p>
          The moment I realized I love coding wasn't when I made the choice to
          go to school for it. It was more of an awareness that dawned on me
          during the end of school, when I found myself being ripped out of bed
          way earlier than I would normally wake up to work on my project,
          fueled by excitement and passion and what I'd describe as love. It was
          then that I realized I found the perfect outlet for my creativity and
          inescapable desire to solve problems.{" "}
        </p>
        <p>
          Spending twelve hours on a computer at peak mental performance could
          seem daunting to some, but after spending 5+ years as a professional
          poker player, I was no stranger to that aspect of coding. The hours of
          solitude might be hard for others, but after several bartending jobs,
          I have grown to appreciate having control of my environment and
          solving problems with concrete results.
        </p>
        <p>
          Nothing would make me happier than bringing someone’s vision to life
          by creating a website from the ground up. I also welcome opportunities
          to clean up older code for things to function more smoothly and
          effectively on existing websites. I’m looking forward to the
          challenges that will inspire me to delve deeper into the world of
          coding to help people’s ideas come to life, and I welcome each new
          experience for this reason.
        </p>
        <p className="bold">Relevant Skills:</p>
        <p>
          Willingness to learn, critical thinking, attitude, adaptability, and
          empathy.
          <br></br>
          Javascript, React, Redux, Python 3, Flask, CSS, HTML5, Git, Github,
          SQL Databases, SCSS, Flexbox, CSS Grid, Redis, UML
          <br></br>
          Design Tools: Visual Studio Code, GitHub, Heroku.
        </p>
      </div>
    </div>
  );
}
