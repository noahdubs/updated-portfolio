import React from 'react' 

import './navbar.styles.css'

const Navbar = ({page}) => {
    return (
        <nav className={`navbar nav-custom navbar-expand-md navbar-dark ${page ? 'homepage-nav' : null}`}>
            <div className="container navbar-container">
                <li className="navbar-brand" id={page ? 'homepage-brand' : 'nav-brand'}>NW </li>
                <button className="navbar-toggler border" id="nav-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggler" id="nav-span"></span>
                </button> 
                
                <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav navbar-right">
                        <li className="list-item" name="Home"><a href="/" className={page ? 'homepage-link' : ''}>Home</a></li>
                        <li className="list-item" name="About"> <a href="/about" className={page ? 'homepage-link' : ''}>About</a></li>
                        <li className="list-item" name="Projects"><a href="/projects" className={page ? 'homepage-link' : ''} >Projects</a></li>
                        <li className="list-item"><a href="#" className={page ? 'homepage-link' : ''}>Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar  