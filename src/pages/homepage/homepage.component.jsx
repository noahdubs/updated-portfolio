import React from 'react'

import './homepage.styles.css'

import man from '../../assets/man-in-suit.png'

import Navbar from '../../components/navbar/navbar.component'

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar page={'homepage'}/>
            <div className="row homepage-row">
                <div className="col-md-6">
                    <h1>Noah Winkelman</h1>
                    <img className="homepage-pic" src={man}/>
                </div>
                <div className="col-md-6">
                    
                </div>
            </div>
            <div className="animation-area">
                <ul className="box-area">
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

export default Homepage