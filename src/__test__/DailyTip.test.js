import React from 'react';
import {render, screen} from "@testing-library/react";
import my_keycloak from "../Keycloak";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import {BrowserRouter} from "react-router-dom";

import DailyTip from "../pages/DailyTip";

// *** IMPORTANT *** Comment out anything related with axios in SmartMeters.js component before running the tests

it('renders the Smart Meter section', () => {
    render(
        <ReactKeycloakProvider authClient={my_keycloak} initOptions={{onLoad: 'login-required'}}>
            <React.StrictMode>
                <BrowserRouter>
                    <DailyTip/>
                </BrowserRouter>
            </React.StrictMode>
        </ReactKeycloakProvider>
    )
    const homepageOverall = screen.getByTestId('dailyTipMySmartMeter')
    expect(homepageOverall).toBeInTheDocument();
})

it('renders the Daily Tip section', () => {
    render(
        <ReactKeycloakProvider authClient={my_keycloak} initOptions={{onLoad: 'login-required'}}>
            <React.StrictMode>
                <BrowserRouter>
                    <DailyTip/>
                </BrowserRouter>
            </React.StrictMode>
        </ReactKeycloakProvider>
    )
    const homepageOverall = screen.getByTestId('dailyTipMyDailyTip')
    expect(homepageOverall).toBeInTheDocument();
})