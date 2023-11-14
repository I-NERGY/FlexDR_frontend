import React from 'react';
import {render, screen} from "@testing-library/react";
import my_keycloak from "../Keycloak";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import {BrowserRouter} from "react-router-dom";

import Homepage from "../pages/Homepage";

it('renders the homepage', () => {
    render(
        <ReactKeycloakProvider authClient={my_keycloak} initOptions={{onLoad: 'login-required'}}>
            <React.StrictMode>
                <BrowserRouter>
                    <Homepage/>
                </BrowserRouter>
            </React.StrictMode>
        </ReactKeycloakProvider>
    )
    const homepageOverall = screen.getByTestId('homepageOverall')
    expect(homepageOverall).toBeInTheDocument();
})

it('renders 2 full-width items in the homepage', () => {
    render(
        <ReactKeycloakProvider authClient={my_keycloak} initOptions={{onLoad: 'login-required'}}>
            <React.StrictMode>
                <BrowserRouter>
                    <Homepage/>
                </BrowserRouter>
            </React.StrictMode>
        </ReactKeycloakProvider>
    )
    const homepageItem = screen.getAllByTestId('homepageItem')
    expect(homepageItem.length).toBe(2);
})