import React from 'react';
import {render, screen} from "@testing-library/react";
import my_keycloak from "../Keycloak";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import {BrowserRouter} from "react-router-dom";

import SmartMeters from "../pages/SmartMeters";


// *** IMPORTANT *** Comment out anything related with axios in SmartMeters.js component before running the tests

it('renders the form for the creation of a new smart meter', () => {
    render(
        <ReactKeycloakProvider authClient={my_keycloak} initOptions={{onLoad: 'login-required'}}>
            <React.StrictMode>
                <BrowserRouter>
                    <SmartMeters/>
                </BrowserRouter>
            </React.StrictMode>
        </ReactKeycloakProvider>
    )
    const homepageOverall = screen.getByTestId('smartMetersNewForm')
    expect(homepageOverall).toBeInTheDocument();
})

it('renders the table with the smart meters', () => {
    render(
        <ReactKeycloakProvider authClient={my_keycloak} initOptions={{onLoad: 'login-required'}}>
            <React.StrictMode>
                <BrowserRouter>
                    <SmartMeters/>
                </BrowserRouter>
            </React.StrictMode>
        </ReactKeycloakProvider>
    )
    const homepageOverall = screen.getByTestId('smartMetersNewTable')
    expect(homepageOverall).toBeInTheDocument();
})