import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkToken from "./check_token";

// fungsi untuk menampung public route seperti login dan register
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return checkToken() ? <Redirect to="/" /> : <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
