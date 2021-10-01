import React from 'react'

import './homepage.styles.css'

import Navbar from '../../components/navbar/navbar.component'
import Landing from '../../components/landing/landing.component'
import About from '../../components/about/about.component'
import ProjectsCollection from '../../components/projects-collection/projects-collection.component'
import Footer from '../../components/footer/footer.component'

const Homepage = () => {

    const scrollToPart = partName => {
        let part = document.getElementById(partName)
        part.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div id="homepage">
            <Navbar page={'homepage'} scrollToPart={scrollToPart} />
            <Landing />
            <About />
            <ProjectsCollection />
            <Footer />
        </div>
    )
}

export default Homepage