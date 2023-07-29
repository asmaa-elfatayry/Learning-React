# Login App with React

This repository contains a simple login application built with React, utilizing routing, Redux for state management, and Material UI for styling. The application consists of three main pages: Home, Login, and Welcome.

## Screenshots

### Here are some screenshots of the application:

<div align="center" >
<img width="650px" height="500px"  src='./screens/homeDesktop.png' alt='homePage'/>
<img width="650px" height="500px"  src='./screens/loginDesktop.png' alt='loginPage'/>
<img width="650px"  height="500px" src='./screens/WelcomeDesktop.png' alt='welcomePage'/>
   </div>

### Mobile Screens
   
<div align="center" >
  <img width="290px" height="500px" src="./screens/homeMobile.png" alt="homePage"/>
  <img width="290px" height="500px" src="./screens/loginMobile.png" alt="loginPage"/>
  <img width="290px" height="500px" src="./screens/WelcomeMobile.png" alt="welcomePage"/>
</div>
<br/>

## Features

- The Home page displays a button labeled "Login".
- Clicking the "Login" button will navigate to the Login page.
- The Login page contains a form where the user can enter their username and password.
- Clicking the "Login" button on the Login page will navigate to the Welcome page.
- The Welcome page displays a welcome message with the user's name.

## Installation

To run the application locally, follow these steps:

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/asmaa-elfatayry/Learning-React/tree/main/redux_login
   ```

2. Navigate to the project directory:

   ```bash
   cd login-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000` to see the application running.

## Technologies Used

- React
- React Router
- Redux
- Material UI

## Directory Structure

The project structure is organized as follows:

```
├── public/
└── src/
    ├── components/
    │   ├── Home.js
    │   ├── Login.js
    │   └── Welcome.js
    ├── redux/
    │   ├── a=Action/
    │   ├── Reducer/
    │   └── Store.js
    ├── App.js
    ├── index.js
    ├── App.css
    └── index.css


```

- The `public/` directory contains the index HTML file and other static assets.
- The `src/` directory contains the main source code of the application.
- The `components/` directory contains React components for each page and any reusable components.
- The `redux/` directory contains actions, reducers, and the Redux store configuration.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your branch to your forked repository.
5. Submit a pull request describing the changes you've made.

If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

