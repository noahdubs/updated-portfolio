import React from 'react'
import './app.css'
import {Switch, Route, Redirect} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import About from './pages/about/about.component'
import Projects from './pages/projects/projects.component'
import NotFound from './pages/not-found/not-found.component'

const App = () => {
	return (
    	<div className="app">
			<Switch>
				<Route exact path="/" component={Homepage} />      
        		<Route exact path="/about" component={About} />      
        		<Route exact path="/projects" component={Projects} /> 

				<Route path="/404" component={NotFound} />
                <Redirect to="/404" />
			</Switch>
        	
    	</div>
  	);
}

export default App
