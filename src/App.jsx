import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Add from "containers/add/Add";
import Dashboard from "containers/dashboard/Dashboard";
import {Provider} from "react-redux";
import store from "./redux/store";
import {themes} from "assets/themes/themes";
import {GlobalStyle} from "assets/globalStyle/globalStyle";
import {routes} from "routes";

function App() {
  return (
      <>
        <GlobalStyle/>
          <Provider store={store}>
            <ThemeProvider theme={themes}>
                <Router>
                    <Switch>
                        <Route exact path={routes.homeRoute}>
                            <Dashboard/>
                        </Route>
                        <Route exact path={routes.addRoute}>
                            <Add/>
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
          </Provider>
      </>
    );
}

export default App;
