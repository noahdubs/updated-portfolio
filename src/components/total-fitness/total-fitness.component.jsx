import React from 'react' 

import ProjectHoverTop from '../project-hover-top/project-hover-top.component'
import ProjectHoverBottom from '../project-hover-bottom/project-hover-bottom.component'

const TotalFitness = ({showImage, showProjectInfo, styles, workout0, icons}) => {
    return (
        <div className="col-lg-6 projects-col" 
            onMouseOver={() => showProjectInfo('total-fitness-info')} 
            onMouseLeave={showImage}
            style={{backgroundImage: `url("${workout0}")`}}
        >
            <div className={styles === 'total-fitness-info' ? 'show-info' : 'projects-hover'} >
                <ProjectHoverTop 
                    projectDesc={'Fitness app to find new workouts and exercises'}
                    projectName={'Total Fitness'}
                    styles={{color: 'project-blue'}}
                    icons={icons}
                />
                <ProjectHoverBottom 
                    liveLink={'http://total-fitness.herokuapp.com'}
                    githubLink={`https://github.com/noahdubs/workout`}
                    styles={{color: 'project-blue'}}
                />
            </div>
        </div>
    )
}

export default TotalFitness 