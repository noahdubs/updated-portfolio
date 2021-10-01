import React from 'react' 

import './project-hover-top.styles.css'

const ProjectHoverTop = ({icons, styles, projectName, projectDesc}) => {
    return (
        <div className="project-hov-top">
            <div className="project-info-div">
                <p className={`project-name ${styles.color}`}>{projectName}</p>
                <p className="project-info">{projectDesc}</p>
            </div>
            <div className="tech-used">
                <p className={styles.color}>Tech Used</p>
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