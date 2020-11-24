import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactImg from "../../../static/assets/images/contact/contact.jpg"
import ImageReveal from "../../animationFeatures/imageReveal"

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
                <ImageReveal />
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
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="city" className="icon"/>
                            </div>
                            
                        <div className="text">
                            Williamsburg
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="flag-usa" className="icon"/>
                            </div>
                        <div className="text">
                            Mass
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


