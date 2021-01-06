import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { useTransition, animated } from "react-spring";
// import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserItinerary from "./pages/UserItinerary";
import Directions from "./pages/Directions";
import PasswordReset from "./pages/PasswordReset";
import { AuthProvider } from "./Auth";
// import PrivateRoute from "./PrivateRoute";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faDirections,
  faSearch,
  faCampground,
} from "@fortawesome/free-solid-svg-icons";
import { DBConfig } from "./utils/DBConfig";
import { initDB } from "react-indexed-db";

library.add(faHeart, faDirections, faSearch, faCampground); // initialize font-awesome library w/ selected icons
initDB(DBConfig);

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return transitions.map(({ item, props, key }) => (
    <>
      <div className="Content">
        <animated.div key={key} style={props}>
          <Navigation />

          <Switch location={item}>
            <Route path="/" exact component={Home} />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/itinerary" component={UserItinerary} />
            <Route path="/directions" component={Directions} />
            <Route path="/passwordReset" component={PasswordReset} />
          </Switch>
        </animated.div>
      </div>
      <Footer className="footer" />
    </>
  ));
}

export default App;
