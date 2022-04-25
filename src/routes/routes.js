import React, { lazy } from "react";
// 3rd-party
import { Switch, Route, Redirect } from "react-router-dom";
// pages
const AutoComplete = lazy(() => import("../pages/AutoComplete"));

export default function routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={AutoComplete} />
      </Switch>
    </>
  );
}
