import React, { useRef, useEffect } from "react";

import { TweenMax, Power3 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

import { gsap } from "gsap";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

import Logo from "../images/cupPlantLogo.jpg";
// import BlueLogo from '../images/blueTeacupLogo.jpg'
// import { Tween } from 'gsap/gsap-core';

function ImageReveal(props) {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".reveal-blue-logo:after");

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } }, 1)
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut }, 1)
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });

  return (
    <div className="reveal-container" ref={(el) => (container = el)}>
      <div className={props.className1}>
        <img
          className={props.classNameImg}
          ref={(el) => {
            image = el;
          }}
          src={props.image}
          alt="hello"
          // className='reveal-blue-logo'
        />
      </div>
    </div>
  );
}

export default ImageReveal;
