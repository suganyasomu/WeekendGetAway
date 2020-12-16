import React, {useContext} from"react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserItinerary from "./pages/UserItinerary";
import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faHeart, faDirections} from '@fortawesome/free-solid-svg-icons';


library.add( faHeart, faDirections ); // initialize font-awesome library w/ selected icons

function App() {

  return (
    <AuthProvider>
        <Router>
          <div>
            <Header />
            <Navigation />
            
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/itinerary">
                  <UserItinerary />
              </Route>              
            </Switch>
            <Footer />
          </div>
        </Router>
    </AuthProvider>
    
  );
}

export default App;
