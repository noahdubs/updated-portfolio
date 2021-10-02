import React from 'react' 

import './project-hover-top.styles.css'
import ProjectHoverBottom from '../project-hover-bottom/project-hover-bottom.component'

const ProjectHoverTop = ({icons, styles, projectName, projectDesc, liveLink, githubLink}) => {
    return (
        <div className="row project-hov-top">
            <div className="col-xl-9 col-lg-8 col-md-9 col-sm-8 col-8 project-info-div">
                <p className={`project-name ${styles.color}`}>{projectName}</p>
                <p className="project-info">{projectDesc}</p>
                <ProjectHoverBottom 
                    styles={styles}
                    liveLink={liveLink}
                    githubLink={githubLink}
                />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-4 tech-used">
                <p className={`tech-used-p ${styles.color}`}>Tech Used</p>
                {icons.map(icon => (
                    <div className="icon-div">
                        <p>{icon.techName}</p>
                        {
                            icon.dataIcon ? 
                            <span className="iconify" data-icon={icon.dataIcon} style={icon.color ? {color: icon.color} : {}} data-width='40' data-height="40"></span>
                            : null 
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectHoverTop