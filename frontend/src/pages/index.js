import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import IndexView from 'views/Index.js';

import "antd/dist/antd.css";

import MainLayout from "layouts/MainLayout.js";
import AdminLayout from "layouts/AdminLayout.js";

function Root() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/" render={(props) => <MainLayout {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default Root;
