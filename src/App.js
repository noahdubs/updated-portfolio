import React from 'react'
import './app.css'
import {Switch, Route, Redirect} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
// import NotFound from './pages/not-found/not-found.component'

const App = () => {
	return (
    	<div className="app">
			<Switch>
				<Route exact path="/" component={Homepage} />      
				{/* <Route path="/404" component={NotFound} />
                <Redirect to="/404" /> */}
			</Switch>
        	
    	</div>
  	);
}

export default App
