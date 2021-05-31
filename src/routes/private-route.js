import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkToken from "./check_token";

// fungsi untuk menampung restricted route
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return checkToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
