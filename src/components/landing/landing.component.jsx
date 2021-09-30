import React from 'react' 

import './landing.styles.css'

const Landing = () => {
    return (
        <div id="landing">
            <div className="landing-content">
                <div className="landing-text">
                    <h1 className="landing-h1">Noah Winkelman</h1>
                    <h3 className="landing-h3">Web Developer</h3>
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