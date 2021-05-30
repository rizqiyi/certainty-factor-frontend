import AppBar from "../components/appbar/appbar";
import React from "react";
import { Switch } from "react-router-dom";
import LoginPage from "../pages/auth/login/login";
import RegisterPage from "../pages/auth/register/register";
import HomePage from "../pages/home/home";
import PrivateRoute from "./private-route";
import PublicRoute from "./public-route";

const Navigations = () => {
  return (
    <>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/register" component={RegisterPage} />
        <AppBar>
          <PrivateRoute path="/" component={HomePage} exact />
        </AppBar>
      </Switch>
    </>
  );
};

export default Navigations;
