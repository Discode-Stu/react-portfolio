import React, {useRef, useEffect, useState} from 'react';

import {TweenMax, Power3} from 'gsap'


function ThreeCirclesAnimation() {
  let threeCirclesAnimation = useRef(null)
  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleBlue = useRef(null)

  const [expandCircle, setExpandCircle] = useState(false)

  const handleExpand = () => {
    TweenMax.to(circleRed, .8, {width: 200, height: 200, ease: Power3.easeOut})
    setExpandCircle(true)
  }
  const handleShrink = () => {
    TweenMax.to(circleRed, .8, {width: 75, height: 75, ease: Power3.easeOut})
    setExpandCircle(false)
  }

  useEffect(() => {
    // console.log(circle, circleRed, circleBlue)
    // use tweenLite instead of tweenMax for production // something you need to lookup
    TweenMax.to(threeCirclesAnimation, 0, {css: {visibility: 'visible' }})
    // TweenMax.from(circle, 5, {opacity: 0, x:100, ease: Power3.easeOut})
    // TweenMax.from(circleRed, 5, {opacity: 0, x:100, ease: Power3.easeOut, delay: .4})
    // TweenMax.from(circleBlue, 5, {opacity: 0, x:100, ease: Power3.easeOut, delay: .8})
    TweenMax.staggerFrom([circle, circleRed, circleBlue], .8, {opacity: 0, x:40, ease: Power3.easeOut}, .2 )
  }, [])


  return (
    <div ref={el => threeCirclesAnimation = el} className='three-circles-animation'>
      <div className="circle-container">
        <div ref={el => circle = el} className="circle"></div>
        <div ref={el => circleRed = el} className="circle red" onClick={expandCircle !== true ? handleExpand : handleShrink}></div>
        <div ref={el => circleBlue = el} className="circle blue"></div>
      </div>

    </div>
  )
}

export default ThreeCirclesAnimation