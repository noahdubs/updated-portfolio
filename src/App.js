import React from 'react'
import './app.css'
import {Switch, Route} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import ResumePage from './pages/resume-page/resume-page.component'
import NotFound from './pages/not-found/not-found.component'

const App = () => {
	return (
    	<div className="app">
			<Switch>
				<Route exact path="/" component={Homepage} />      

				<Route exact path="/resume" component={ResumePage} /> 

				<Route component={NotFound} />
			</Switch>
        	
    	</div>
  	);
}

export default App
