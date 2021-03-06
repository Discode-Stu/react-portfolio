import React, {useRef, useEffect} from 'react';

import {TweenMax, Power3} from 'gsap'

import Logo from '../images/cupPlantLogo.jpg';
import BlueLogo from '../images/blueTeacupLogo.jpg'
// import { Tween } from 'gsap/gsap-core';


function HomepageFeature(props) {
  let logoItem = useRef(null);
  let textItem = useRef(null)

  useEffect(() => {
    // console.log(logoItem);
    // TweenMax.to(
    //   logoItem,
    //   5,
    //   {
    //     opacity: 1, 
    //     y: 120,
    //     ease: Power3.easeOut,
    //     delay: 1
    //   }
    // )
    TweenMax.from(
      textItem,
      3,
      {
        opacity: 0, 
        y: 0,
        x: 342,
        ease: Power3.easeOut,
        delay: .5
      }
    )
    // logoItem.style.display= 'none'
  }, [])


  return (
    <div>
      {/* <img 
        ref={el => {logoItem = el}}
        src={Logo} 
        alt="hello" 
        className='plantCupLogo' /> */}
        {/* <div>
          <img 
          ref={el => {logoItem = el}}
          src={BlueLogo} 
          alt="hello" 
          className='plantCupLogo' 
          />
        </div> */}
        <div>
          <p
            ref={el => {textItem = el}}
            >

              {props.text}
          </p>
        </div>


    </div>
  )
}

export default HomepageFeature