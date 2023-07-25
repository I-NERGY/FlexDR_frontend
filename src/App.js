import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ThemeProvider, createTheme} from "@mui/material/styles";

import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import UserProfile from "./pages/UserProfile";
import SmartMeters from "./pages/SmartMeters";
import SmartMetersInspection from "./pages/SmartMetersInspection";
import ClustersProfiles from "./pages/ClustersProfiles";
import Unnamed from "./pages/Unnamed";

// Set primary color here
let primary = "#97A94D";

// Set secondary color here
let secondary = "#B2C561";

// Dashboard theme setup here
const theme = createTheme({
    palette: {
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
        background: {
            default: `linear-gradient(to right, ${primary}, ${secondary})`,
        },
    },
    typography: {
        fontFamily: ["Poppins", "Roboto"].join(","),
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/user/profile" element={<UserProfile/>}/>

                        {/* Clusters */}
                        <Route path="/clusters-profiles" element={<ClustersProfiles/>}/>

                        {/* Smart Meters */}
                        <Route path="/smart-meters" element={<SmartMeters/>}/>
                        <Route path="/smart-meters/:id/inspect" element={<SmartMetersInspection/>}/>

                        {/*  TDB  */}
                        <Route path="/unnamed" element={<Unnamed/>}/>

                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;