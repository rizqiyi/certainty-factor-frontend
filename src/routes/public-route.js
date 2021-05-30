import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkToken from "./check_token";

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
