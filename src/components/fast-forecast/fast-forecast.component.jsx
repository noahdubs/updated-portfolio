import React from 'react'
 
import ProjectHoverTop from '../project-hover-top/project-hover-top.component'

const FastForecast = ({showProjectInfo, showImage, weather0, styles, icons, width}) => {
    let mobileHeight = width * .58
    return (
        <div className="col-lg-6 projects-col"  onMouseOver={() => showProjectInfo('fast-forecast-info')} 
                        onMouseLeave={showImage}
                        style={{background: `url("${weather0}") center/cover no-repeat`, height: `${width > 992 ? (mobileHeight / 2.5) : mobileHeight}px`}}       
        >
            <div className={styles === 'fast-forecast-info' ? 'show-info' : 'projects-hover'} >
                <ProjectHoverTop 
                    icons={icons} 
                    styles={{color: 'project-blue'}} 
                    projectName={'Fast Forecast'}
                    projectDesc={'Find out the current, hourly and daily weather anywhere in the world'}
                    liveLink={'https://noahdubs.github.io/fast-forecast'} 
                    githubLink={'https://github.com/noahdubs/fast-forecast'} 
                />
            </div>
        </div>
    )
}

export default FastForecast 