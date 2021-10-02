import React from 'react' 

import './navbar.styles.css'

import pdf from '../../assets/Resume.pdf'

const Navbar = ({page, scrollToPart}) => {
    return (
        <nav className={`navbar nav-custom navbar-expand-md sticky-top ${page ? 'homepage-nav' : null}`}>
            <div className="container navbar-container sticky-top">
                <li className="navbar-brand" id={page ? 'homepage-brand' : 'nav-brand'}>NW </li>
                <button className="navbar-toggler border" id="nav-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggler" id="nav-span"><i class="fas fa-bars"></i></span>
                </button> 
                
                <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav navbar-right">
                        <li className="list-item" onClick={() => scrollToPart("homepage")}>Home</li>
                        <li className="list-item" onClick={() => scrollToPart("projects")}>Projects</li>
                        <li className="list-item" id="Resume"><a href={require(pdf)} target="_blank" className="resume-link">Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar  