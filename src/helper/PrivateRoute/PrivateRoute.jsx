import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  let activeUser = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        activeUser !== null ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
