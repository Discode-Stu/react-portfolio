import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

import {motion} from 'framer-motion';

const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
        return(
            <div className="nav-link-wrapper">            
                <NavLink to ={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };

    const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", {withCredentials: true}).then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        })
        .catch(error => {
            console.log('Error signing out', error);
            
        })
    };


        return (
            <div className="nav-wrapper">
                <motion.div className="left-side"
                    initial={{scale: .1, fontWeight: 300, x: 600, y: 25}}
                    animate={{scale: 1, fontWeight: 700, x:0, y: 0}}
                    transition={{
                        delay: 1.5, duration: 3, 
                        type:'tween', ease: "anticipate"}}
                >
                
                
                
                
                    <div className="nav-link-wrapper">
                        <NavLink exact to ="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to ="/resume" activeClassName="nav-link-active">
                            Resume
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to ="/about-me" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">            
                        <NavLink to ="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">            
                        <NavLink to ="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink>
                    </div>

                {props.loggedInStatus === "LOGGED_IN" ? (
                dynamicLink("/portfolio-manager", "Portfolio Manager")
                ) : null}      
                </motion.div>

                <motion.div className="right-side"
                    initial={{scale: 0, fontWeight: 300, x: -500, y: 25}}
                    animate={{scale: 1.4, fontWeight: 700, x: -20, y: 0}}
                    transition={{ 
                        delay: 1.5, repeatType: "reverse", duration: 3, 
                        type:'tween', ease: "anticipate"}}
                >
                    DAN STUART

                    {props.loggedInStatus === "LOGGED_IN" ? (
                    <a onClick={handleSignOut}>
                        <FontAwesomeIcon icon="sign-out-alt" />
                        </a>) : null}
                </motion.div>
            </div>
        
        );
    }

export default withRouter(NavigationComponent);