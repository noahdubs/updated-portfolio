import React from 'react' 

import './landing.styles.css'

import SocialLinks from '../social-links/social-links.component'

const Landing = () => {
    return (
        <div id="landing">
            <div className="landing-content">
                <div className="landing-text">
                    <h1 className="landing-h1">Noah Winkelman</h1>
                    <p className="landing-p">
                        Web Developer based out of San Marcos, TX. Specializing in React development, I create secure, dynamic and user friendly applications using Firebase, Bootstrap, and CSS. 
                    </p>
                    <div className="landing-contact">
                        <div>
                            <p className="landing-contact-info">
                                <a className="landing-link" href="tel:3202370665">
                                    <i className="fas fa-phone"></i> (320) 237-0665
                                </a>
                            </p>
                            <p className="landing-contact-info">
                                <a href="mailto:noahwinkelman0@gmail.com" className="landing-link">
                                    <i className="fas fa-envelope"></i> noahwinkelman0@gmail.com
                                </a>
                            </p>
                        </div>        
                        <SocialLinks />            
                    </div>
                    
                </div>
            </div>
            <div className="area-for-animation" >
                <ul className="shapes">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Landing 