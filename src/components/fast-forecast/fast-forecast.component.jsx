import React from 'react'
 
import ProjectHoverTop from '../project-hover-top/project-hover-top.component'
import ProjectHoverBottom from '../project-hover-bottom/project-hover-bottom.component.jsx'

const FastForecast = ({showProjectInfo, showImage, weather0, styles, icons}) => {
    return (
        <div className="col-lg-6 projects-col"  onMouseOver={() => showProjectInfo('fast-forecast-info')} 
                        onMouseLeave={showImage}
                        style={{backgroundImage: `url("${weather0}")`}}        
        >
            <div className={styles === 'fast-forecast-info' ? 'show-info' : 'projects-hover'} >
                <ProjectHoverTop 
                    icons={icons} 
                    styles={{color: 'project-blue'}} 
                    projectName={'Fast Forecast'}
                    projectDesc={'Find out the current, hourly and daily weather anywhere in the world'}
                />
                <ProjectHoverBottom 
                    liveLink={'https://noahdubs.github.io/fast-forecast'} 
                    githubLink={'https://github.com/noahdubs/fast-forecast'} 
                    styles={{color: 'project-blue'}}
                />
            </div>
        </div>
    )
}

export default FastForecast 