import React from 'react'

import ProjectHoverTop from '../project-hover-top/project-hover-top.component'
import ProjectHoverBottom from '../project-hover-bottom/project-hover-bottom.component'

const ArkasQuade = ({showImage, styles, arkas0, showProjectInfo, icons}) => {
    return (
        <div className="col-lg-6 projects-col" 
            onMouseOver={() => showProjectInfo('arkas-quade-info')} 
            onMouseLeave={showImage}
            style={{backgroundImage: `url("${arkas0}")`}}
        >
            <div className={styles === 'arkas-quade-info' ? 'show-info' : 'projects-hover'} >
                <ProjectHoverTop 
                    icons={icons}
                    styles={{color: 'project-red'}}
                    projectName={'Arkas Quade'}
                    projectDesc={'Prototpye of grain bin ecommerce site made for client'}
                />
                <ProjectHoverBottom 
                    liveLink={'https://arkas-quade.herokuapp.com/'}
                    styles={{color: 'project-red'}}
                />
            </div>
        </div>
    )
}

export default ArkasQuade 

