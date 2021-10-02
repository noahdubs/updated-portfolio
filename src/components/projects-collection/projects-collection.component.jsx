import React, { useState } from 'react'

import './projects-collection.styles.css'

import weather0 from '../../assets/weather0.png'
import arkas0 from '../../assets/arkas0.png'
import workout0 from '../../assets/workout0.png'
import burger0 from '../../assets/burger0.png'

import FastForecast from '../fast-forecast/fast-forecast.component'
import ArkasQuade from '../arkas-qaude/arkas-quade.component'
import TotalFitness from '../total-fitness/total-fitness.component'
import BurgerStop from '../burger-stop/burger-stop.component'

const ProjectsCollection = () => {
    const [styles, setStyles] = useState()
    const showProjectInfo = className => {
        setStyles(className)
    }
    const showImage = () => {
        setStyles('projects-hover')
    } 
    const icons = [
        {dataIcon: 'akar-icons:react-fill', color: '#61dbfb', techName: 'React'}, 
        {dataIcon: 'vscode-icons:file-type-node', techName: "NodeJS"},
        {dataIcon: 'vscode-icons:file-type-mongo', techName: 'MongoDB'},
        {dataIcon: 'logos:firebase', color: '#61dbfb', techName: 'Firebase'},
        {dataIcon: 'simple-icons:redux', color: '#764abc', techName: 'Redux'},
        {dataIcon: 'logos:google-maps', techName: 'Google Maps API'}
    ]
    return (
        <div id="projects">
            <div className="row projects-row">
                <div className="col-12 projects-12">Projects <p>⎼⎼⎼⎼⎼</p></div>
                <FastForecast 
                    showImage={showImage}
                    styles={styles}
                    showProjectInfo={showProjectInfo}
                    weather0={weather0}
                    icons={[icons[0], icons[3], icons[4]]}
                />
                <ArkasQuade 
                    showImage={showImage}
                    styles={styles}
                    showProjectInfo={showProjectInfo}
                    arkas0={arkas0}
                    icons={icons.slice(0, 3)}
                />
                <TotalFitness 
                    showImage={showImage}
                    styles={styles}
                    showProjectInfo={showProjectInfo}
                    workout0={workout0}
                    icons={icons.slice(0, 3)}
                />
                <BurgerStop 
                    showImage={showImage}
                    styles={styles}
                    showProjectInfo={showProjectInfo}
                    burger0={burger0}
                    icons={[icons[1], icons[2], icons[5]]}
                />
            </div>
        </div>
    )
}

export default ProjectsCollection