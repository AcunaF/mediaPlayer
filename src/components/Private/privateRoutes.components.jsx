import React from "react";
import { Navigate, Route } from "react-router-dom";

const isAuthenticated = () => {
  // Aquí deberías implementar tu lógica de autenticación
  // Por ejemplo, verificar si hay un token de autenticación válido en localStorage
  return localStorage.getItem("authToken") ? true : false;
};

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
