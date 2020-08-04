import React from "react";

import { Switch, Redirect } from "react-router-dom";
import Route from "./Route";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route
        exact
        path="/login/:access_token"
        component={({ match }) => (
          <Redirect
            to={{
              pathname: "/",
              state: { access_token: match.params.access_token },
            }}
          />
        )}
      />
    </Switch>
  );
}
