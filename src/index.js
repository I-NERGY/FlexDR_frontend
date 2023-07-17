import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {ReactKeycloakProvider} from "@react-keycloak/web";
import my_keycloak from "./Keycloak";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReactKeycloakProvider authClient={my_keycloak} initOptions={{onLoad: 'login-required'}}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ReactKeycloakProvider>
);

reportWebVitals();
