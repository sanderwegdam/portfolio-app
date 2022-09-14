import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';



createRoot(document.getElementById('root')).render(

    <Router basename={process.env.PUBLIC_URL + ''}>

        <App tab="home" />
    </Router>

)