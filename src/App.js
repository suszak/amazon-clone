import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";
import Login from "./components/Login/Login";
import { auth } from "./reducers/firebase";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./reducers/StateProvider";
import ReactNotification from "react-notifications-component";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "react-notifications-component/dist/theme.css";
import "animate.css/animate.compat.css";
import "./App.css";

const promise = loadStripe(
  "pk_test_51HPvWUBWp0Xa9Rw0Enei4wxeJTXTZlzV3k4SuEOj0prhct11RzgBqyM3sLRCKXs7CvPYOLyoJCOfya0Ar0FnYu8P00TObQRnX2"
);

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //  user logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //  user logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <ReactNotification />
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
