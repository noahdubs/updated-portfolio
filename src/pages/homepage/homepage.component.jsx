import React from 'react'

import './homepage.styles.css'

import Landing from '../../components/landing/landing.component'
import About from '../../components/about/about.component'
import Projects from '../../components/projects/projects.component'

import Navbar from '../../components/navbar/navbar.component'

const Homepage = () => {

    const scrollToPart = partName => {
        console.log(partName)
        // let topPos = document.getElementById(partName).offsetTop
        // window.scrollTo({top: topPos, behavior: 'smooth'})

        let part = document.getElementById(partName)
        part.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div id="homepage">
            <Navbar page={'homepage'} scrollToPart={scrollToPart} />
            <Landing />
            <About />
            <Projects />
        </div>
    )
}

export default Homepage