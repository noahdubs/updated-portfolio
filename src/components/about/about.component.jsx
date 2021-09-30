import React from 'react'

import './about.styles.css'


const About = () => {
    return (
        <div id="about">
            <div className="row about-row">
                <div className="col-md-6 about-col">
                    <p className="about-header">About Me ⎼⎼⎼⎼⎼</p>
                    <p className="about-white">Professional web developer based in Texas</p>
                    <p className="about-gray">Originally from Minnesota, I played college baseball for two years before starting on my journey as a developer.
                                             I learned software development through several online courses as well as various other online resources, working diligently to figure out issues and solve problems. 
                                             I have over two years of coding experience.
                                             In my free time, I enjoy working out and hanging out with my friends.
                    </p>
                </div>
                <div className="col-md-6 about-col">
                    <p className="about-white">Any type of question or discussion?</p>
                    <p className="about-header">Let's Talk ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</p>
                    <p className="email-p"><a className="about-email" href="mailto:17winkelman@gmail.com">17winkelman@gmail.com</a> </p>
                    <p className="about-gray">Phone: (320) 237-0665</p>
                </div>
            </div>
        </div>
    )
}

export default About 