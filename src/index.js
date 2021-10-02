import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Amplify from "aws-amplify"
import awsExports from "./aws-exports"

import './index.css'
import App from './App'

Amplify.configure(awsExports)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'))

