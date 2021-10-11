import React from 'react' 

import './resume-page.styles.css'
import pdf from '../../Resume.pdf';

const ResumePage = () => {
    return (
        <div className="resume-page">
            <iframe  
                className="resume-iframe"
                src={pdf}
                type="application/pdf"
                title="Resume"
            />
        </div>
    )
}

export default ResumePage 