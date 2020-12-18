import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

import {motion} from 'framer-motion';

const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
        return(
            <motion.div className="nav-link-wrapper"
                whileHover={{
                    scale: 1.3,
                    textShadow: "0px 0px 4px #aaabb8",
                    // boxShadow: "0px 0px 8px rgb(255,255,255",
                }}    
                initial={{scale: 0, fontWeight: 300, x: 0, y: -150}}
                animate={{scale: 1, fontWeight: 700, x:0, y: 0, transition: {delay: 2}}}  
            >            
                <NavLink to ={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </motion.div>
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

    const navVariants = {
        hover: {
            scale: 1.3,
        }
    }


        return (
            <div className="nav-wrapper">
                <motion.div className="left-side"
                    
                    // initial={{scale: 0, fontWeight: 300, x: 0, y: -150}}
                    // animate={{scale: 1, fontWeight: 700, x:0, y: 0}}
                    // transition={{
                    //     delay: .4, duration: 3, 
                    //     type:'tween', ease: "anticipate"}}
                >
                    <motion.div className="nav-link-wrapper"
                        whileHover={{ scale: 1.2 }}
                        variants={navVariants}
                        initial={{scale: 0, fontWeight: 300, x: 0, y: -150}}
                        animate={{scale: 1, fontWeight: 700, x:0, y: 0, transition: {delay: 0}}}
                    >
                        <NavLink exact to ="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </motion.div>
                    <motion.div className="nav-link-wrapper"
                        whileHover={{ scale: 1.2 }}
                        initial={{scale: 0, fontWeight: 300, x: 0, y: -150}}
                        animate={{scale: 1, fontWeight: 700, x:0, y: 0, transition: {delay: .4}}}
                    >
                        <NavLink exact to ="/resume" activeClassName="nav-link-active">
                            Resume
                        </NavLink>
                    </motion.div>

                    <motion.div className="nav-link-wrapper"
                        whileHover={{ scale: 1.2 }}
                        initial={{scale: 0, fontWeight: 300, x: 0, y: -150}}
                        animate={{scale: 1, fontWeight: 700, x:0, y: 0, transition: {delay: .8}}}
                    >
                        <NavLink to ="/about-me" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </motion.div>

                    <motion.div className="nav-link-wrapper"
                        whileHover={{ scale: 1.2 }}  
                        initial={{scale: 0, fontWeight: 300, x: 0, y: -150}}
                        animate={{scale: 1, fontWeight: 700, x:0, y: 0, transition: {delay: 1.2}}}               
                    >            
                        <NavLink to ="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </motion.div>

                    <motion.div className="nav-link-wrapper"
                        initial={{scale: 0, fontWeight: 300, x: 0, y: -150}}
                        animate={{scale: 1, fontWeight: 700, x:0, y: 0, transition: {delay: 1.6}}}
        
                        whileHover={{ scale: 1.2 }}
                    >            
                        <NavLink to ="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink>
                    </motion.div>

                {props.loggedInStatus === "LOGGED_IN" ? (
                dynamicLink("/portfolio-manager", "Portfolio Manager")
                ) : null}      
                </motion.div>

                <motion.div className="right-side"
                    initial={{scale: 0, fontWeight: 300, x: -500, y: 25}}
                    animate={{scale: 1.4, fontWeight: 700, x: -20, y: 2}}
                    transition={{ 
                        delay: .4, repeatType: "reverse", duration: 3, 
                        type:'tween', ease: "anticipate"}}
                    whileHover={{
                        scale: 1.5, 
                        transition: {duration: .3, yoyo: Infinity}
                    }}
                    drag
                    dragConstraints={{ left: -20, top: -20, right: 20, bottom: 20 }}
                    dragElastic={0.7}
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