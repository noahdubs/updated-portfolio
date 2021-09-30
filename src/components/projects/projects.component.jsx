import React, { useState } from 'react'

import './projects.styles.css'

import weather0 from '../../assets/weather0.png'

import arkas0 from '../../assets/arkas0.png'

import workout0 from '../../assets/workout0.png'

import burger0 from '../../assets/burger0.png'


const Projects = () => {
    const [styles, setStyles] = useState()
    const showProjectInfo = className => {
        setStyles(className)
    }
    const showImage = () => {
        setStyles('projects-hover')
    }
    console.log(styles)
    return (
        <div id="projects">
            <div className="row projects-row">
                <div className="col-12 projects-12">Projects</div>
                <div className="col-md-6 projects-col"  onMouseOver={() => showProjectInfo('fast-forecast-info')} 
                        onMouseLeave={showImage}
                        style={{backgroundImage: `url("${weather0}")`}}        
                >
                    <div className={styles === 'fast-forecast-info' ? 'show-info' : 'projects-hover'} >
                        Fast Forecast
                    </div>
                </div>
                <div className="col-md-6 projects-col" onMouseOver={() => showProjectInfo('arkas-quade-info')} 
                        onMouseLeave={showImage}
                        style={{backgroundImage: `url("${arkas0}")`}}
                >
                        <div className={styles === 'arkas-quade-info' ? 'show-info' : 'projects-hover'} >
                            Arkas Quade 
                        </div>
                    </div>
                <div className="col-md-6 projects-col" onMouseOver={() => showProjectInfo('total-fitness-info')} 
                        onMouseLeave={showImage}
                        style={{backgroundImage: `url("${workout0}")`}}
                >
                    <div className={styles === 'total-fitness-info' ? 'show-info' : 'projects-hover'} >
                        Total Fitness 
                    </div>
                </div>
                <div className="col-md-6 projects-col"
                    onMouseOver={() => showProjectInfo('burger-stop-info')} 
                    onMouseLeave={showImage}
                    style={{backgroundImage: `url("${burger0}")`}}
                >
                    <div className={styles === 'burger-stop-info' ? 'show-info' : 'projects-hover'} >
                        Burger Stop 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects 