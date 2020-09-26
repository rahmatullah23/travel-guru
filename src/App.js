import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Hotel from './components/Hotel/Hotel';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import CssBaseline from '@material-ui/core/CssBaseline';
import bgImg from './images/rectangle1.png';
import { Grid } from '@material-ui/core';
import Logins from './components/Login/Logins';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
          component='div'
          style={{
            backgroundImage: `url(${bgImg})`,
            height: '100vh',
          }}
        >
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
              <Header></Header>
              <Switch>
                <Route path='/home'>
                  <Home></Home>
                </Route>
                <Route path='/booking/:id'>
                  <Booking />
                </Route>
                <PrivateRoute path='/hotel/:title'>
                  <Hotel></Hotel>
                </PrivateRoute>
                <Route path='/logins'>
                  <Logins></Logins>
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </Router>
    </UserContext.Provider>
          </Grid>
      
    </React.Fragment>
  );
}

export default App;
