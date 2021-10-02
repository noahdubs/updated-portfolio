import React from 'react' 

import './footer.styles.css'

import SocialLinks from '../social-links/social-links.component'

const Footer = () => {
    return (
        <div className="footer">
            <div className="row footer-row">
                <div className="col-6">
                    <p className="footer-info">2021 Noah Winkelman</p>
                </div>
                <div className="col-6 footer-links-div">
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}

export default Footer 