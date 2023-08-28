import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Header from "./Header.js";
import { Login } from "@mui/icons-material";
import { useEffect } from "react";


useEffect(() => {
  // will only run once when the app component loads...


    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if(authUser){
        //  the user just logged in / the user was logged in

        dispatchEvent({
          type: "SET_USER",
          user: authUser,
        });
      } else{
        // the user is logged out
        dispatchEvent({
          type: "SET_USER",
          user: null,
        });
      }
    });
}, []);



function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


export default App;