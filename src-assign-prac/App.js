import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import Login from './Component/Login/Login';
export const UserContext = createContext();
function App(props) {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
            <Router>
                <div className="main">
                    <Switch>
                        <Route exact="exact" path="/">
                            <Header ></Header>
                            <Banner></Banner>
                        </Route>
                        
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
            </UserContext.Provider>
    );
}

export default App;
