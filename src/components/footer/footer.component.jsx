import React from 'react' 

import './footer.styles.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="row footer-row">
                <div className="col-6">
                    <p className="footer-info">2021 By Noah Winkelman</p>
                </div>
                <div className="col-6 footer-links-div">
                    <a href='https://www.linkedin.com/in/noah-winkelman-27153a193' title="My LinkedIn" className="footer-link"><i className="fab fa-linkedin"></i></a>
                    <a href='https://github.com/noahdubs' className="footer-link" title="My Github"><i className="fab fa-github"></i></a>
                    <a href='https://stackoverflow.com/users/12335493/noahdubs' title="My Stack Overflow" className="footer-link"><i class="fab fa-stack-overflow"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer 