/*
 * This file is edited by Vatsaly Patel
 * Note: If you are editing anything, please let me know - or do comment [it's compulsory]
 */

import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import appRoutes from "./appRoutes";

import DashboardLayout from "../containers/Layout/DashboardLayout";

import LoginPage from "../pages/Login";
import HomePage from "../pages/HomePage";

// we will use this components for the restricted routes which can be accessed after login only
const RestrictedRoute = (props) => (
  <Fragment>
    {props.isLoggedIn === true ? (
      <Route path={props.path} component={props.component} />
    ) : (
      <Redirect to="/login" from={props.path} />
    )}
  </Fragment>
);

// We will use this component for public routes which cannot be access after login
const PublicRoute = (props) => (
  <Fragment>
    {props.isLoggedIn === false ? (
      <Route path={props.path} component={props.component} />
    ) : (
      <Redirect to={appRoutes.dashboard} from={props.path} />
    )}
  </Fragment>
);

class AppRoutes extends PureComponent {
  render() {
    const commonReducers = this.props.commonReducers;
    console.log("Reducers: ", commonReducers);

    return (
      <div>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Redirect exact from="/dashboard" to={appRoutes.dashboard} />
            <PublicRoute
              path="/login"
              component={LoginPage}
              isLoggedIn={commonReducers.isLoggedIn}
            />
          </Switch>
          <Switch>
            <Route path="/">
              <Switch>
                <DashboardLayout>
                  <RestrictedRoute
                    path={appRoutes.dashboard}
                    component={HomePage}
                    isLoggedIn={commonReducers.isLoggedIn}
                  />
                </DashboardLayout>
              </Switch>
            </Route>{" "}
            <Redirect from="*" to="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  commonReducers: state.commonReducers,
});

export default connect(mapStateToProps, null)(AppRoutes);
