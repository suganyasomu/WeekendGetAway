import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AuthProvider } from "./Auth";
import "./index.css";

ReactDOM.render(
    <AuthProvider>
        <Router>
            <App />
        </Router>
    </AuthProvider>
    

, document.getElementById('root'));