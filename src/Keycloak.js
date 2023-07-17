import Keycloak from "keycloak-js";

const my_keycloak = new Keycloak({
    "realm": "inergy",
    "url": "https://oblachek.eu:8443/",
    "clientId": "uc13"
})

export default my_keycloak