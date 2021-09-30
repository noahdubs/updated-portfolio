import React from 'react'

import './projects.styles.css'

import weather0 from '../../assets/weather0.png'


const Projects = () => {
    return (
        <div id="projects">
            <div className="row projects-row">
                <div className="col-12 projects-12">Projects</div>
                <div className="col-md-6 projects-col" style={{backgroundImage: `url(${weather0})`}}>
                    {/* <img className="projects-img" src={weather0} /> */}
                </div>
                <div className="col-md-6 projects-col"></div>
                <div className="col-md-6 projects-col"></div>
                <div className="col-md-6 projects-col"></div>
            </div>
        </div>
    )
}

export default Projects 