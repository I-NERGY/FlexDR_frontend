import Keycloak from "keycloak-js";

// Localhost deployment
// const my_keycloak = new Keycloak({
//     "realm": "inergy",
//     "url": "https://oblachek.eu:8443/",
//     "clientId": "uc7_local_deployment"
// })

// ICCS deployment configuration
const my_keycloak = new Keycloak({
    "realm": "inergy",
    "url": "https://oblachek.eu:8443/",
    "clientId": "uc7_iccs_deployment"
})

export default my_keycloak