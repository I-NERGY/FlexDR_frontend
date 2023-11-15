# I-NERGY UC7 Front-End

This is the front-end for **I-NERGY UC7**, created with [Create React App](https://github.com/facebook/create-react-app)..

## How to Run the Project

### Locally

Runs the app in the development mode. The page will reload when you make changes.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser, after following these steps:

1. `Clone the project's repository`
2. `cd .\consumption-flexibility-prediction-dashboard\`
3. `npm install`
4. Open the file `Keycloak.js`, which is inside the `\src` folder.
5. Uncomment the configuration which is indicated with `// Localhost deployment` comment and comment out
   the `// ICCS deployment configuration` one.
6. `npm start`


**Alternatively**, after `step 5`, you can run `docker compose up --build` and deploy the dashboard with docker-compose
on your machine.

### Deployment on a VM

You can deploy this dashboard on a VM with docker-compose, following these steps:

1. `Clone the project's repository`
2. `cd .\consumption-flexibility-prediction-dashboard\`
3. `docker compose up --build`

However, this dashboard is integrated with **I-NERGY's Security Framework**, which is based on an open-source identity
and access management solution, namely Keycloak.\
Unauthorized access is prevented when running this dashboard, and you must have a registered client in the project's
Security Framework to be able to run it on your VM.
