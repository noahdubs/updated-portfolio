import React from 'react' 
import { Link } from 'react-router-dom'

import './not-found.styles.css'

const NotFound = () => (
    <div className="not-found">
        <h1 className="four-o-four">404</h1>
        <p className="not-found-p">Oops! Something is wrong.</p>
        <Link to="/" className="not-found-button">
            <i className="icon-home"></i> Go back to home page
        </Link>
    </div>
)

export default NotFound 