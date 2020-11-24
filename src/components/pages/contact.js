import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactImg from "../../../static/assets/images/contact/contact.jpg"
import ImageReveal from "../../animationFeatures/imageReveal"
import BlueLogo from '../../images/blueTeacupLogo.jpg'

export default function () {
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
            <div className='contact-image-reveal'>
                <ImageReveal image={BlueLogo} />
            </div>
           

            <div 
            className="right-column">

                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="user-circle" className="icon"/>
                            </div>

                        <div className="text">
                            Daniel T. Stuart
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="phone" className="icon"/>
                            </div>
                        <div className="text">
                            860-977-2982
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="envelope" className="icon"/>
                            </div>
                            
                        <div className="text">
                            dstuart85@yahoo.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="address-book" className="icon"/>
                            </div>
                        <div className="text">
                            6 Chesterfield Rd
                            <br></br>
                            Williamsburg, Mass
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon={['fab','github-square']} className="icon"/>
                            </div>
                            
                        <a href={"https://github.com/Discode-Stu"} className="atag">
                            Discode-Stu
                        </a>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon={['fab','linkedin']} className="icon"/>
                        </div>
                        <a href={"https://github.com/Discode-Stu"} className="atag">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


