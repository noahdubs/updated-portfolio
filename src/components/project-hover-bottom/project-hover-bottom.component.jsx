import React from 'react' 

import './project-hover-bottom.styles.css'

const ProjectHoverBottom = ({liveLink, githubLink, styles}) => {
    return (
        <div className="project-hov-bottom">
            <div>
                <button className={`custom-button ${'button-' + styles.color}`}> 
                    <a href={liveLink} target='_blank' rel="noreferrer">
                        View Live <i class="fas fa-desktop project-icon"></i>
                    </a>
                </button>
                {
                    !githubLink ? 
                    null :  
                    <button className={`custom-button ${'button-' + styles.color}`}> 
                        <a href={githubLink} target='_blank' rel="noreferrer">
                            View Code <i className="fab fa-github project-icon"></i>
                        </a>
                    </button>
                }
            </div>
        </div>
    )
}

export default ProjectHoverBottom 