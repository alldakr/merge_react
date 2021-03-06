import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppContext } from "store";

export default function AdminRequiredRoute({
  component: Component,
  ...kwargs
}) {
  const {
    store: { isAuthenticated },
  } = useAppContext();
  return (
    <Route
      {...kwargs}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}
