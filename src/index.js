import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Amplify from "aws-amplify"
import awsExports from "./aws-exports"
Amplify.configure(awsExports)

import './index.css'
import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'))

