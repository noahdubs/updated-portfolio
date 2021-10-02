import React from 'react' 

import './social-links.styles.css'

const SocialLinks =  () => (
    <div className="social-links">
        <a href='https://www.linkedin.com/in/noah-winkelman-27153a193' title="My LinkedIn" className="social-link" target='_blank' rel="noreferrer">
            <i className="fab fa-linkedin"></i>
        </a>
        <a href='https://github.com/noahdubs' className="social-link" title="My Github" target='_blank' rel="noreferrer">
            <i className="fab fa-github"></i>
        </a>
        <a href='https://stackoverflow.com/users/12335493/noahdubs' title="My Stack Overflow" className="social-link" target='_blank' rel="noreferrer">
            <i class="fab fa-stack-overflow"></i>
        </a>
    </div>
)

export default SocialLinks 