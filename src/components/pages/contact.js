import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactImg from "../../../static/assets/images/contact/contact.jpg"


export default function () {
    return (
        
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + contactImg + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            >
        
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
                            555-555-5555
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="envelope" className="icon"/>
                            </div>
                            
                        <div className="text">
                            fakeemail@email.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="address-book" className="icon"/>
                            </div>
                        <div className="text">
                            42 Thompson Ln
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                        <FontAwesomeIcon icon="city" className="icon"/>
                            </div>
                            
                        <div className="text">
                            East Boston
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


