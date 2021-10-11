import React from 'react' 
import ProjectHoverBottom from '../project-hover-bottom/project-hover-bottom.component'
import ProjectHoverTop from '../project-hover-top/project-hover-top.component'



const BurgerStop = ({showImage, showProjectInfo, styles, burger0, icons, width}) => {
    let mobileHeight = width * .58
    return (
        <div className="col-lg-6 projects-col"
            onMouseOver={() => showProjectInfo('burger-stop-info')} 
            onMouseLeave={showImage}
            style={{background: `url("${burger0}") center/cover no-repeat`, height: `${width > 992 ? (mobileHeight / 2.5) : mobileHeight}px`}}       
        >
            <div className={styles === 'burger-stop-info' ? 'show-info' : 'projects-hover'} >
                <ProjectHoverTop 
                    projectName={'Burger Stop'}
                    projectDesc={'Burger review app to find the best burger'}
                    icons={icons}
                    styles={{color: 'project-red'}}
                />
                <ProjectHoverBottom 
                    liveLink={`https://burger-stop.herokuapp.com`}
                    githubLink={`https://github.com/noahdubs/burger-stop`}
                    styles={{color: 'project-red'}}
                />
            </div>
        </div>
    )
}

export default BurgerStop