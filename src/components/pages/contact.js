import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactImg from "../../../static/assets/images/contact/contact.jpg";
import ImageReveal from "../../animationFeatures/imageReveal";
import BlueLogo from "../../images/blueTeacupLogo.jpg";

import HomepageFeature from "../../animationFeatures/homepageFeature";

import { motion } from "framer-motion";

export default function () {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="content-page-wrapper">
      {/* <div 
            className="left-column"
            style={{
                background: "url(" + contactImg + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            >
        
            </div> */}
      <div className="contact-image-reveal">
        <ImageReveal image={BlueLogo} />
      </div>

      <div className="right-column">
        <motion.div
          className="contact-bullet-points"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="user-circle" className="icon" />
            </div>

            <div className="text">
              <motion.div
                initial={{ scale: 0, fontWeight: 300, x: 300, y: 0 }}
                animate={{ scale: 1, fontWeight: 700, x: 0, y: 0 }}
                transition={{
                  delay: 0.2,
                  repeatType: "reverse",
                  duration: 3,
                  type: "tween",
                  ease: "anticipate",
                }}
              >
                Daniel T. Stuart
              </motion.div>
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" className="icon" />
            </div>
            <div className="text">
              <motion.div
                initial={{ scale: 0, fontWeight: 300, x: 300, y: 0 }}
                animate={{ scale: 1, fontWeight: 700, x: 0, y: 0 }}
                transition={{
                  delay: 0.4,
                  repeatType: "reverse",
                  duration: 3,
                  type: "tween",
                  ease: "anticipate",
                }}
              >
                860-977-2982
              </motion.div>
            </div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" className="icon" />
            </div>
            <div className="text">
              <motion.div
                initial={{ scale: 0, fontWeight: 300, x: 300, y: 0 }}
                animate={{ scale: 1, fontWeight: 700, x: 0, y: 0 }}
                transition={{
                  delay: 0.6,
                  repeatType: "reverse",
                  duration: 3,
                  type: "tween",
                  ease: "anticipate",
                }}
              >
                dstuart85@yahoo.com
              </motion.div>
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="address-book" className="icon" />
            </div>
            <div className="text">
              <motion.div
                initial={{ scale: 0, fontWeight: 300, x: 300, y: 0 }}
                animate={{ scale: 1, fontWeight: 700, x: 0, y: 0 }}
                transition={{
                  delay: 0.8,
                  repeatType: "reverse",
                  duration: 3,
                  type: "tween",
                  ease: "anticipate",
                }}
              >
                Williamsburg, Mass
              </motion.div>
            </div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon
                icon={["fab", "github-square"]}
                className="icon"
              />
            </div>

            <a href={"https://github.com/Discode-Stu"} className="atag">
              <motion.div
                initial={{ scale: 0, fontWeight: 300, x: 300, y: 0 }}
                animate={{ scale: 1, fontWeight: 700, x: 0, y: 0 }}
                transition={{
                  delay: 1,
                  repeatType: "reverse",
                  duration: 3,
                  type: "tween",
                  ease: "anticipate",
                }}
              >
                Discode-Stu{" "}
              </motion.div>
            </a>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon" />
            </div>
            <a
              href={"https://www.linkedin.com/in/daniel-stuart-5520231a1/"}
              className="atag"
            >
              <motion.div
                initial={{ scale: 0, fontWeight: 300, x: 300, y: 0 }}
                animate={{ scale: 1, fontWeight: 700, x: 0, y: 0 }}
                transition={{
                  delay: 1.2,
                  repeatType: "reverse",
                  duration: 3,
                  type: "tween",
                  ease: "anticipate",
                }}
              >
                LinkedIn{" "}
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
