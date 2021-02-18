import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import {ThemeProvider} from "styled-components";
import Add from "./containers/add";
import Dashboard from "./containers/dashboard";
import {Provider} from "react-redux";
import store from "./redux/store";

const theme = {
    btnBg: "#2EBAEE",
    btnTxt: "#ffffff",
    bg: "#46529D",
    color: "#ffffff",
    gray: "#D3D3D3"
};
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;
function App() {
  return (
      <>
        <GlobalStyle/>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Dashboard/>
                        </Route>
                        <Route exact path="/add">
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
